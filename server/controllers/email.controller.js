const nodemailer = require("nodemailer");
const config = require("config");

// Create a SMTP transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rezerwacja.stolika@gmail.com",
    pass: config.get("gmailPass"),
  },
});

 // Message object
 let emailMessage = {
    from: "rezerwacja.stolika@gmail.com",
    to: "",
    subject: "",
    text: "",
  };

exports.sendDone = function(req, res) {
  const { email, table, time, date, message } = req.body;
  emailMessage.to = email;
  emailMessage.subject = 'Potwierdzenie Rezerwacji';
  emailMessage.text = `Dziekujemy za
  rezerwacje stolika nr ${table} na godzinę ${time} dnia ${date}
  wykonaną na nazwisko ${message}`;

  send(emailMessage)

  res.send("Reservations done");
};


const send =mes => transporter.sendMail(mes, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }
    console.log("Message sent: %s", info.messageId);
  });