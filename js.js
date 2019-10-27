'use strict';
//конвертор валют со злотого на доллар
let inputZl = document.getElementById("zl"),
    inputUsd = document.getElementById("usd"),
    inputEuro = document.getElementById("euro");;

inputZl.addEventListener("input", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json, charset = utf-8" );
  request.send();
  

    request.addEventListener("readystatechange", function(){
      if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);
        
        inputUsd.value = inputZl.value / data.usd;
        inputEuro.value = inputZl.value / data.euro;
      } else {
        inputUsd.value = "problems...";
        inputEuro.value = "problems...";
      }
    });

});