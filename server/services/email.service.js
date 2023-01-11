const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class emailService {
  static async sendContactEmail(fromEmail, name, text) {
    let content = "";

    content += "From: " + fromEmail;
    content += "\n\Name: " + name;
    content += "\n\nMessage: " + text + "\n\n";

    let message = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_Email,
      subject: "[CONTACT] - " + name,
      text: content
    }

    sgMail.send(message).then(() => {
      return true;
    }).catch((error) => {
      throw error;
    });
  }
}

module.exports = emailService;
