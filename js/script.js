"use strict";

function sendEmail() {
	Email.send({
		Host : "smtp.gmail.com",
		Username : "forwebcheck@gmail.com",
		Password : "password of email",
		To : 'forwebcheck@gmail.com',
		From : document.getElementById('email').value,
		Subject : "New contact Form Enquiry",
		Body : "And this is the body"
  }).then(
	 message => alert(message)
  );
}