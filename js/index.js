/**
 * @param {String} brand
 * @param {String} device
 * @param {String} postal_code
 * @param {String} customer_email
 * @param {String} message
 */
function sendEmail( brand,
                    device,
                    postal_code,
                    customer_email,
                    message)
{
      Email.send({
        Host: "smtp.gmail.com",
        Username: "jpdesrochers@gmail.com",
        Password: "bob12Har",
        To: 'jpdesrochers@gmail.com',
        From: "support@sgohier.com",
        Subject: "APPEL DE SERVICE",
        Body: "Mon frigo est scrap",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}
