require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("VERIFY ERROR:", error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", async (req, res) => {
  console.log("REQUEST:", req.body);

  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: process.env.EMAIL_USER,
    to: "srashtiverma08@gmail.com",
    subject: "Contact Form Submission - Portfolio",

    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await contactEmail.sendMail(mail);

    console.log("EMAIL SENT:", info.messageId);

    res.json({
      code: 200,
      message: "Message Sent",
    });

  } catch (error) {

    console.log("SEND MAIL ERROR:", error);

    res.status(500).json({
      code: 500,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on port ${PORT}`);
});

module.exports = app;