'use strict';
//конвертор валют со злотого на доллар

  let inputZl = document.getElementById("zl"),
      inputUsd = document.getElementById("usd"),
      inputEuro = document.getElementById("euro"),
      currentInp1 = document.getElementById("cur_in1"),
      currentInp2 = document.getElementById("cur_in2"),
      request,
      data;
//-----------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    request = new XMLHttpRequest();
    request.open("GET", "current.json");
    request.setRequestHeader("Content-type", "application/json, charset = utf-8" );
    request.send();
  
    request.addEventListener("readystatechange", function(){
        data = JSON.parse(request.response);
        currentInp1.value = data.usd;
        currentInp2.value = data.euro;
    });
  });

//-------------------------------------------
  inputZl.addEventListener("input", () => {
    request = new XMLHttpRequest();
    request.open("GET", "current.json");
    request.setRequestHeader("Content-type", "application/json, charset = utf-8" );
    request.send();

    request.addEventListener("readystatechange", function(){
      if (request.readyState === 4 && request.status == 200 && !isNaN(parseInt(inputZl.value)) && inputZl.value != ''){
        data = JSON.parse(request.response);
        inputUsd.value = (inputZl.value / data.usd).toFixed(2);
        inputEuro.value = (inputZl.value / data.euro).toFixed(2);

      } else if (inputZl.value == '') {
        inputUsd.value = "0";
        inputEuro.value = "0";
      } else {
        inputUsd.value = "problems...";
        inputEuro.value = "problems...";
      }
    });
  }); 

    
  
