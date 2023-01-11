function generate() {
    var ranstr = "1a3SzRJ&$b#6!g@";
    var len = ranstr.length;
    var captcha = "";
    for (i = 0; i <= 5; i++) {
      var ranindex = Math.floor(Math.random() * len);
      var Rchar = ranstr[ranindex];
      captcha = captcha + Rchar;
      var res = document.querySelector("s");
      res.innerText = captcha;
    }
  }
  function chechCaptcha() {
    var msg = document.querySelector("b");
    var res = document.querySelector("s");
    var input = document.querySelector("#captchatxt");
    if (res.innerText == input.value.trim()) {
      msg.innerText = "valid captcha";
      msg.style.color = "yellow";
      res.style.border = "3px solid yellow";
      input.style.border = "3px solid yellow";
    } else {
      msg.innerText = "invalid captcha";
      msg.style.color = "red";
      res.style.border = "3px solid red";
      input.style.border = "3px solid red";
    }
  }