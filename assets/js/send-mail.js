// Send Mail with SMTPJS

function sendEmail() {

  //var userValue = document.getElementById("mailName").value
  //var userValue = document.getElementById("mailTitle").value

  Email.send({
    Host: "smtp.gmail.com",
    Username: "orbisnetworksmtp@gmail.com",
    Password: "Caracas01.",
    To: 'contact@orbisnetwork.com.ve',
    From: "orbisnetworksmtp@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  })
    .then(function (message) {
      alert("Mail send succesfully!")
    });
}

if (text == "success") {
  formSuccess();
} else {
  formError();
  submitMSG(false, text);
}