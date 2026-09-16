# Smart Onboarding

Smart Onboarding is a student admission form with a browser-based frontend and a FastAPI backend. The frontend validates the form, stores the student and academic data through the API, and sends an admission notification with EmailJS.

## Project Structure

```text
smart_onboarding/
├── backend/
│   ├── database.py       # SQLAlchemy engine and database session
│   ├── main.py           # FastAPI application and /student/ endpoint
│   ├── models.py         # Users and academics database models
│   ├── requirements.txt  # Python dependencies
│   └── schema.py         # Request validation schemas
├── frantend/
│   ├── index.html        # Admission form and EmailJS public-key setup
│   ├── script.js         # Validation, API submission, and EmailJS notification
│   └── package.json      # Frontend package metadata
└── README.md             # Complete project documentation
```

> The directory is currently named `frantend`. Keep this spelling in commands unless you rename the folder and update any related tooling.

## Requirements

- Python 3.10 or newer
- MySQL Server
- A modern web browser
- An EmailJS account for notification emails
- Optional: VS Code Live Server or another static file server

## Backend Setup

1. Create the MySQL database:

   ```sql
   CREATE DATABASE hmarkit;
   ```

2. Review the connection string in `backend/database.py` and replace the username, password, host, port, and database name with your local values. Do not commit real database credentials.

3. Create and activate a virtual environment from the `backend` directory:

   **Windows PowerShell**

   ```powershell
   cd backend
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   ```

   **Windows Command Prompt**

   ```bat
   cd backend
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. Start the API from the `backend` directory:

   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at `http://127.0.0.1:8000`. The interactive API documentation is at `http://127.0.0.1:8000/docs`.

## Frontend Setup

The frontend is a static HTML application. No build step is required.

1. Configure EmailJS using the instructions below.
2. Start the backend first.
3. Serve the `frantend` directory with VS Code Live Server, or open `frantend/index.html` directly in a browser.
4. Complete the form and submit it. The form sends student data to `http://127.0.0.1:8000/student`.

For reliable browser behavior, use a local static server such as Live Server instead of opening the HTML file with a `file://` URL.

## EmailJS Configuration

EmailJS must be configured before email notifications will work. The application uses the EmailJS browser SDK loaded from the CDN in `frantend/index.html`.

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create and connect an email service. Copy its **Service ID**.
3. Create an email template. Copy its **Template ID**.
4. In `frantend/index.html`, replace the placeholder `publicKey` with your EmailJS public key:

   ```javascript
   emailjs.init({
     publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
   });
   ```

5. In `frantend/script.js`, replace both placeholder IDs in the `emailjs.send()` call:

   ```javascript
   emailjs.send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_ID", {
   ```

6. Configure the EmailJS template variables to match the object sent by the script:

   `firstName`, `middleName`, `lastName`, `dob`, `gender`, `email`, `phone`, `guardianPhone`, `class`, `division`, `batch`, `subjects`, `address`, `country`, `state`, and `zip`.

The EmailJS public key is intended for browser use, but service and template IDs should still be treated as project configuration. Never put private EmailJS credentials or database passwords in frontend code.

## API Contract

### `GET /`

Returns a basic health message:

```json
{"message":"Welcome to the Smart Onboarding API!"}
```

### `POST /student/`

Accepts JSON containing the student and academic fields:

```json
{
  "firstName": "Asha",
  "middleName": "N/A",
  "lastName": "Kumar",
  "email": "asha@example.com",
  "address": "Example address",
  "phone": "9876543210",
  "guardianPhone": "9123456780",
  "gender": "Female",
  "dob": "2012-05-10",
  "country": "India",
  "state": "Maharashtra",
  "zip": "400001",
  "class_name": "8",
  "division": "A",
  "subjects": "Mathematics, Science",
  "batch": "Morning"
}
```

A successful response includes the new `user_id` and `academic_id`. The backend creates the required tables automatically when it starts.

## Form Validation

- First and last names are required and must contain at least two letters.
- Middle name is optional but must contain letters if provided.
- Date of birth must be valid and the student must be between 3 and 18 years old.
- Student phone number is required and must be a valid 10-digit Indian mobile number.
- Guardian phone and PIN code are optional, but are validated when provided.
- Country, state, class, division, batch, gender, and at least one subject are required.
- The state list is populated dynamically after a country is selected.

## Troubleshooting

### The form cannot connect to the backend

- Confirm that MySQL is running and the connection string is correct.
- Confirm that `uvicorn main:app --reload` is running from `backend`.
- Check the browser developer console for network or CORS errors.

### The backend returns a database error

- Confirm that the `hmarkit` database exists.
- Check that required MySQL credentials are valid.
- Make sure submitted values match the database column constraints.

### Email is not sent

- Confirm the EmailJS public key, service ID, and template ID are updated.
- Confirm the EmailJS service is connected and enabled.
- Verify that every template variable matches the names listed above.
- Check the browser console and EmailJS dashboard logs.

## Development Notes

- The backend currently allows requests from all origins for local development. Restrict `allow_origins` before production deployment.
- Move database credentials to environment variables before deploying.
- The frontend currently uses `http://127.0.0.1:8000`; update this URL when the API is deployed elsewhere.
- Do not commit `.venv`, `.soenv`, `__pycache__`, database credentials, or EmailJS secrets.

## License

No license has been declared for this project yet.
