function initMap(){var a={lat:34.865969,lng:-111.763604},b={center:new google.maps.LatLng(a),zoom:10,disableDefaultUI:!0},c=new google.maps.Map(document.querySelector(".map"),b);new google.maps.Marker({position:a,map:c,title:"Sedona"})}var searchBtn=document.querySelector(".searchblock__btn"),modalForm=document.querySelector(".modal"),counterLess=modalForm.querySelectorAll(".modal__counter-less"),counterMore=modalForm.querySelectorAll(".modal__counter-more"),inputs=modalForm.querySelectorAll(".modal__counter-wrapper input");modalForm.classList.add("modal__hide"),searchBtn.addEventListener("click",function(a){a.preventDefault(),modalForm.classList.toggle("modal__hide")}),modalForm.addEventListener("submit",function(a){inputs[0].value<1&&(a.preventDefault(),modalForm.classList.remove("modal__error"),modalForm.offsetWidth=modalForm.offsetWidth,modalForm.classList.add("modal__error"),console.log("Выберите как минимум одного взрослого"))});for(var i=0;i<inputs.length;i++)!function(a){counterLess[a].addEventListener("click",function(b){b.preventDefault(),inputs[a].value>0&&(inputs[a].value=--inputs[a].value)}),counterMore[a].addEventListener("click",function(b){b.preventDefault(),inputs[a].value=++inputs[a].value})}(i);google.maps.event.addDomListener(window,"load",initMap);