const API_BASE_URL = "http://127.0.0.1:8000";

(function () {
  async function submitStudentAdmission(payload) {
    const response = await fetch(`${API_BASE_URL}/students/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMessage = `Student API request failed with status ${response.status}`;

      try {
        const errorData = await response.json();
        if (errorData && errorData.detail) {
          errorMessage = Array.isArray(errorData.detail)
            ? errorData.detail.map((item) => item.msg).join(" | ")
            : errorData.detail;
        }
      } catch (error) {
        // ignore parsing error and keep fallback message
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }

  async function getStudents() {
    const response = await fetch(`${API_BASE_URL}/students/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch students: ${response.status}`);
    }

    return response.json();
  }

  window.studentApi = {
    submitStudentAdmission,
    getStudents,
  };
})();
