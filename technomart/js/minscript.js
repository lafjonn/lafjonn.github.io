var link=document.querySelector(".write-btn"),popup=document.querySelector(".message"),close=popup.querySelector(".exit-cross"),form=popup.querySelector("form"),username=popup.querySelector("[name=your-name]"),usermail=popup.querySelector("[name=your-mail]"),storage=localStorage.getItem("username");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("message-show"),storage?(username.value=storage,usermail.focus()):username.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("message-show"),popup.classList.remove("message-error")}),form.addEventListener("submit",function(a){username.value&&usermail.value?localStorage.setItem("username",username.value):(a.preventDefault(),popup.classList.remove("message-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("message-error"),console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f \u0438 e-mail"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("message-show")&&(popup.classList.remove("message-show"),popup.classList.remove("message-error"))});var mapOpen=document.querySelector(".open-map"),mapPopup=document.querySelector(".map-large"),mapClose=mapPopup.querySelector(".close-map");mapOpen.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("show-map")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("show-map")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("show-map")&&mapPopup.classList.remove("show-map")});