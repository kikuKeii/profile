function sendEmail() {
  const token = "6838df94-0710-4610-bd36-d569f45f3080";
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = `${
    document.getElementById("subject").value
  } [kikukeii.github.io]`;
  const message = document.getElementById("message").value;
  const body_email = `
        Name : ${name} <br>
        email : ${email} <br>
        subject : ${subject} <br>
        message : 
        <br>
        <br>
        ${message}
        `;

  Email.send({
    SecureToken: token,
    To: "miftakhuddinfalaki@gmail.com",
    From: "miftamasterapp@gmail.com",
    FromName: name,
    ReplyAddress: email,
    Subject: subject,
    Body: body_email,
  }).then((message) => alert(message));
}
