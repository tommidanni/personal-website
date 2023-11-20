document.getElementById("contact-form").addEventListener('submit', function(event){

    event.preventDefault();

    var email=document.getElementById("mail-input").value;
    var message=document.getElementById("message-input").value;

    var jsonData={email:email, message:message};

    fetch('/receive_message', {
        method: 'POST',
        body: JSON.stringify(jsonData),  
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data["message"]=="success")
        {
            var formSection=document.getElementById("form-section");

            var message = document.createElement("p");
            var newCol = document.createElement("div");

            newCol.classList.add("col", "d-flex", "text-left");
            message.innerHTML="Your message has been sent successfully."
            message.style.color = "#1689b6";
            message.style.backgroundColor = "#f8f7f794";
            message.style.borderRadius = "4px";

        }
        else{
            var message = document.createElement("p");
            var newCol = document.createElement("div");

            newCol.classList.add("col-12", "col-md-10");
            message.innerHTML="Error:your message was lost."
            message.style.color = "red"
            message.style.backgroundColor = "#f8f7f794";
            message.style.borderRadius = "4px";


        }

        newCol.appendChild(message);
        formSection.appendChild(newCol);

        document.getElementById("mail-input").value = "";
        document.getElementById("message-input").value = "";
    })
    .catch(error => {
        var formSection=document.getElementById("form-section");

            var message = document.createElement("p");
            var newCol = document.createElement("div");

            newCol.classList.add("col-12", "col-md-10");
            message.innerHTML="Error:your message was lost."
            message.style.color = "red"
    });

});