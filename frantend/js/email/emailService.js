(function () {
  async function sendAdmissionEmail(data) {
    if (!window.emailjs || typeof window.emailjs.send !== "function") {
      throw new Error("EmailJS is not available.");
    }

    return window.emailjs.send(
      "service_chbqc3x",
      "template_9gr4rry",
      data
    );
  }

  window.emailService = {
    sendAdmissionEmail
  };
})();
