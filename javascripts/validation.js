function emailValidation() {
  const form = document.forms[0]
  form.addEventListener('submit', function(e) {
    const name = form.name.value;
    if (confirm(`${name}さん本当に送信しますか？`)) {
      if (form.email.value !== form.email_confirm.value) {
        e.preventDefault();
        const element = document.createElement("p")
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.className = "alert"
        setTimeout(function() {
          form.removeChild(element);
        }, 3000);
      }
    } else {
      alert("キャンセルしたよ")
    }
  });
};

window.onload = emailValidation;