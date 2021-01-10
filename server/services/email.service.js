const config = require("../config/config.json");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.sendGrid.sendGridApiKey);

class emailService {
  static async sendContactEmail(fromEmail, name, text) {
    let content = "";

    content += "From: " + fromEmail;
    content += "\n\Name: " + name;
    content += "\n\nMessage: " + text + "\n\n";

    let message = {
      to: config.sendGrid.toEmail,
      from: config.sendGrid.fromEmail,
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
