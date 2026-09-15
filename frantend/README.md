# Student Admission Form

A comprehensive student enrollment form built with **HTML**, **Bootstrap**, and **JavaScript** for collecting and validating student registration details. The form includes client-side validation, email notifications via EmailJS, and a responsive design.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Form Fields](#form-fields)
- [Validation Rules](#validation-rules)
- [Error Handling](#error-handling)

---

## ✨ Features

- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Real-time Validation**: Client-side form validation with visual feedback
- **Dynamic Dropdowns**: Country and state selection with cascading menus
- **Email Notifications**: Automatic email submission via EmailJS
- **Error Handling**: Comprehensive error messages and user feedback
- **Accessible UI**: Proper form structure and accessibility standards
- **Subject Selection**: Checkbox-based subject selection with validation
- **International Support**: 15+ countries with state/province data

---

## 📁 Project Structure

```
student enquiry form/
├── index.html          # HTML form structure
├── script.js           # Form validation and email logic
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

---

## 📦 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for EmailJS service)
- EmailJS account (for email sending functionality)

---

## 🚀 Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd student\ enquiry\ form
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or npm install required

3. **Optional: View with Live Server**
   ```bash
   # If you have VS Code Live Server extension installed
   # Right-click on index.html and select "Open with Live Server"
   ```

---

## ⚙️ Configuration

### EmailJS Setup

The form uses **EmailJS** to send email notifications. To configure:

1. **Create an EmailJS Account**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Update Script Credentials**
   - Open `script.js` and find the `emailjs.send()` call (around line 838)
   - Replace the credentials:
     ```javascript
     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
       // form fields
     })
     ```

3. **Get Your Credentials**
   - **Service ID**: From EmailJS Dashboard → Email Services
   - **Template ID**: From EmailJS Dashboard → Email Templates

4. **Create Email Template**
   - Define template variables matching form field names:
     - `firstName`, `lastName`, `gender`
     - `email`, `phone`
     - `class`, `division`, `batch`
     - `country`, `state`

---

## 📝 Usage

1. **Open the form**
   - Navigate to `index.html` in your browser

2. **Fill in student details**
   - Personal information (name, DOB, gender)
   - Contact information (email, phone)
   - Academic preferences (class, division, batch)
   - Location (country, state, ZIP)
   - Subject selection

3. **Submit the form**
   - Click "Submit" button
   - Form validates all fields
   - If valid, email is sent and confirmation appears
   - Form resets automatically on success

4. **Error handling**
   - Invalid fields highlighted in red
   - Error messages display below each field
   - First error field scrolls into view

---

## 📋 Form Fields

### Personal Information
| Field | Type | Validation |
|-------|------|-----------|
| First Name | Text | Required, letters only, min 2 chars |
| Middle Name | Text | Optional, letters only |
| Last Name | Text | Required, letters only, min 2 chars |
| Date of Birth | Date | Required, not in future, max today |
| Gender | Select | Required |

### Contact Information
| Field | Type | Validation |
|-------|------|-----------|
| Email | Email | Required, valid email format |
| Phone | Text | Required, valid 10-digit number |
| Guardian Phone | Text | Optional, valid 10-digit number |

### Academic Details
| Field | Type | Validation |
|-------|------|-----------|
| Class | Select | Required |
| Division | Select | Required |
| Preferred Batch | Select | Required |
| Subjects | Checkbox | Required, at least one selected |

### Location
| Field | Type | Validation |
|-------|------|-----------|
| Country | Select | Required, 15+ countries available |
| State | Select | Required, dynamic based on country |
| PIN Code | Text | Optional, 6-digit number |

---

## ✅ Validation Rules

### Name Fields
- Required
- Minimum 2 characters
- Letters and spaces only
- Cannot start with space

### Email
- Required
- Must follow standard email format (xxx@xxx.xxx)

### Phone Numbers
- Required (for student phone)
- Optional (for guardian phone)
- Must be 10 digits
- Must start with 6-9

### Date of Birth
- Required
- Cannot be today or in future
- Maximum date set to today

### PIN Code
- Optional field
- Must be exactly 6 digits if provided

### Subjects
- Required
- At least one subject must be selected

---

## 🛡️ Error Handling

The form includes robust error handling:

- **Client-side validation**: Immediate feedback on form fields
- **Visual indicators**: Red border for invalid fields, green for valid
- **Error messages**: Specific messages for each validation rule
- **Email errors**: Catches and alerts if email sending fails
- **User feedback**: 
  - Success alert on form submission
  - Error alert if email fails
  - Auto-scroll to first error field

### Example Error Responses
```javascript
// Field validation
"First name is required."
"First name must contain at least 2 characters."
"First name should contain letters only."

// Email validation
"Email is required."
"Please enter a valid email address."

// Email sending error
"Failed to submit form. Please try again."
```

---

## 🌍 Supported Countries & States

The form includes data for:
- **India** (28 states)
- **China** (22 provinces)
- **Japan** (47 prefectures)
- **Pakistan** (6 regions)
- **Bangladesh** (8 regions)
- **Nepal** (7 provinces)
- **Sri Lanka** (9 districts)
- **Bhutan** (20 districts)
- **Myanmar** (14 regions)
- **Thailand** (8 major cities)
- **Vietnam** (8 major cities)
- **Indonesia** (34 provinces)
- **Philippines** (25 provinces)
- **Malaysia** (13 states)
- **South Korea** (16 regions)

---

## 🔧 Customization

### Change Form Fields
Edit `index.html` to add/remove form fields, then update `script.js` validation logic.

### Modify Validation Rules
Update validation functions in `script.js`:
- `validateName()` - Name field rules
- `validateEmail()` - Email format rules
- `validatePhone()` - Phone number rules
- `validateDOB()` - Date validation rules
- `validateZip()` - PIN code validation

### Add/Remove Countries
Modify the `countries` object at the top of `script.js` (lines 1-200)

---

## 📞 Support & Troubleshooting

### Form not submitting?
- Check browser console (F12) for JavaScript errors
- Verify EmailJS credentials are correct
- Ensure internet connection is active

### Email not sending?
- Verify EmailJS service is active
- Check email template is correctly configured
- Review EmailJS dashboard for error logs
- Ensure template variables match form fields

### Validation not working?
- Clear browser cache (Ctrl+Shift+Del)
- Open form in incognito/private window
- Check browser console for errors

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created as a student admission form for educational institutions.

---

## 📌 Version

- **Current Version**: 1.0.0
- **Last Updated**: 2026-09-01
