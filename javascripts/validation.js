function emailValidation() {
  const form = document.forms[0]
  
  form.email_confirm.addEventListener("input", compareInputEmail);
  form.email.addEventListener("input", compareInputEmail);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value;
    if (confirm(`${name}さん本当に送信しますか？`)) {
      if (form.email.value !== form.email_confirm.value) {
        const element = document.createElement("p")
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.className = "alert"
        setTimeout(function() {
          form.removeChild(element);
        }, 3000);
      } else {
        alert("送信したよ")
      }
    } else {
      alert("キャンセルしたよ")
    }
  });
};

function compareInputEmail() {
  if (form.email.value !== form.email_confirm.value) {
    document.getElementById("email_validation").style.display = "block"
    form.email_confirm.style.background = "rgba(230,169,171,.5)"
  } else {
    document.getElementById("email_validation").style.display = "none"
    form.email_confirm.style.background = "none"
  }
};

window.onload = emailValidation;