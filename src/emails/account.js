const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'crishanks12@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the app, ${name}!`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'crishanks12@gmail.com',
    subject: "We're sorry to see you go!",
    text: `Goodbye, ${name}. We hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}