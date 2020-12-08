'use strict';
var config = require('../config');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.sendgridKey)

exports.send = async(to, subject, body) => {
  sgMail
    .send({to: to,
      from: 'balena@ultrasistemas.com.br',
      subject: subject,
      html: body})
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}