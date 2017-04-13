      var link = document.querySelector(".write-btn");     
      var popup = document.querySelector(".message");
      var close = popup.querySelector(".exit-cross");      
      var form = popup.querySelector("form");
      var username = popup.querySelector("[name=your-name]");
      var usermail = popup.querySelector("[name=your-mail]");     
      var storage = localStorage.getItem("username");
      
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("message-show");
        
        if (storage) {
          username.value = storage;
          usermail.focus();
        } else {
          username.focus();
        }
      });
      
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("message-show");
        popup.classList.remove("message-error");
      });
      
      form.addEventListener("submit", function(event) {
        if (!username.value || !usermail.value) {
        event.preventDefault();
        popup.classList.remove("message-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("message-error");
        console.log("Введите ваше имя и e-mail");
        } else {
          localStorage.setItem("username", username.value);
        }
      });
      
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("message-show")) {
            popup.classList.remove("message-show");
            popup.classList.remove("message-error");
          }
        }
      });
      
      var mapOpen = document.querySelector(".open-map");
      var mapPopup = document.querySelector(".map-large");
      var mapClose = mapPopup.querySelector(".close-map");
      
      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("show-map");
      });
      
      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("show-map");
      });
      
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("show-map")) {
            mapPopup.classList.remove("show-map");
          }
        }
      });  