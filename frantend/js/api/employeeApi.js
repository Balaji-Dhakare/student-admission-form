(function () {
  const API_BASE_URL = "http://127.0.0.1:8000";

  async function submitEmployeeAdmission(payload) {
    const response = await fetch(`${API_BASE_URL}/employees/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let errorMessage = `Employee API request failed with status ${response.status}`;

      try {
        const errorData = await response.json();
        if (errorData && errorData.detail) {
          errorMessage = Array.isArray(errorData.detail)
            ? errorData.detail.map(item => item.msg).join(" | ")
            : errorData.detail;
        }
      } catch (error) {
        // ignore parsing error and keep fallback message
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }

  window.employeeApi = {
    submitEmployeeAdmission
  };
})();
