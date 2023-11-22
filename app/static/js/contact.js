document.getElementById("submit-btn").addEventListener('click', function(event){
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
            sessionStorage.setItem('successful_sending', 'true');
            window.location.href=data["redirect_url"];

        }
        else{
            sessionStorage.setItem('successful_sending', 'false');
            window.location.href=data["redirect_url"];

        }

    })
    .catch(error => {

            var formSection=document.getElementById("form-section");

            var message = document.createElement("p");
            var newCol = document.createElement("div");

            newCol.classList.add("col-12", "col-md-10");
            message.innerHTML="Error:your message was lost."
            message.style.color = "red"

            newCol.appendChild(message);
            formSection.appendChild(newCol);

    });

});

document.addEventListener('DOMContentLoaded', function() {
   
if (sessionStorage.getItem('successful_sending')=='true'){
    var formSection=document.getElementById("form-section");
    var message = document.createElement("p");
    var newCol = document.createElement("div");
    newCol.classList.add("col-12", "d-flex", "justify-content-center");
    message.innerHTML="Your message was send successfully."
    message.style.color = "#4e4e4e"
    message.style.backgroundColor = "#f8f7f794";
    message.style.borderRadius = "4px";
    message.style.paddingLeft="4px";
    message.style.paddingRight="4px";
    
    newCol.appendChild(message);
    formSection.appendChild(newCol);
    document.getElementById("mail-input").value = "";
    document.getElementById("message-input").value = "";
    sessionStorage.removeItem('successful_sending');

    var sectionElement = document.getElementById("contact-green")
    const yOffset = window.innerHeight/10;
    window.scrollTo({
        top: sectionElement.offsetTop + yOffset,
        behavior: 'auto'
      });
      document.title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    
}
if (sessionStorage.getItem('successful_sending')=='false'){
    var formSection=document.getElementById("form-section");
    var message = document.createElement("p");
    var newCol = document.createElement("div");
    newCol.classList.add("col-12", "col-md-10", "d-flex", "justify-content-center");
    message.innerHTML="Error. Your message was lost."
    message.style.color = "red"
    message.style.backgroundColor = "#f8f7f794";
    message.style.borderRadius = "4px";
    newCol.appendChild(message);
    formSection.appendChild(newCol);
    sessionStorage.removeItem('successful_sending');

    var sectionElement = document.getElementById("contact-green")
    const yOffset = window.innerHeight/10;
    window.scrollTo({
        top: sectionElement.offsetTop + yOffset,
        behavior: 'auto'
      });
      document.title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

});