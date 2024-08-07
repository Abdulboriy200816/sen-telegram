// sendtelegram
function sendtelegram(message) {
    let telegram_bot_id = "7080816848:AAFg-Y9GzAAQ5IKQBUltwP6vTQLrxnY4Tbo";
    let chat_id = 1512434848;
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({ chat_id: chat_id, text: message }),
    };
    $.ajax(settings).done(function (response) {});
  }
  
  function send() {
    let username = document.getElementById("username");
    let userphone = document.getElementById("userphone");
    let usermessage = document.getElementById("usermessage");
  
    if (
      username.value == "" ||
      userphone.value == "" ||
      usermessage.value == ""
    ) {
      alert("Formani to'liq to'ldiring");
    } else {
      let message = `Ismi: ${username.value}, Telefon raqami: ${userphone.value}, Xabar: ${usermessage.value}`;
      sendtelegram(message);
      alert("Ma'lumotlar yuborildi!");
      username.value = "";
      userphone.value = "";
      usermessage.value = "";
    }
  }
  