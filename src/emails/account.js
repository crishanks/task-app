const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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