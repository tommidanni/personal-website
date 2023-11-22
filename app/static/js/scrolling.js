document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href').substring(1);
      const sectionElement = document.getElementById(sectionId);
      const yOffset = window.innerHeight/10; // Set your desired offset value
      if (sectionId == "index"){
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }  
      else
      {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: 'smooth'
      });
      }
      document.title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    });
  });

