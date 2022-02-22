function createNotification(arg) {
  let style = "text";
  if (!arg) {
    console.log("ERROR | provide the data argument")
    return
  }

  if(arg.style) {
    style = arg.style
  }

  if (!arg.msg) {
    console.log("ERROR | you need to provide a message")
    return
  }

  let title = style;
  let data = {
    duration: 5000,
    position: "tr",
    closeBtn: false,
    progress: true,
    animate: "fade", // slide or fade
    msg: arg.msg
  }

  if (arg.duration) {
    data.duration = arg.duration
  }

  if (arg.position) {
    data.position = arg.position
  }

  if (arg.progress) {
    data.progress = arg.progress
  }
  if (arg.animate && (arg.animate == "slide")) {
    data.animate = arg.animate
  }
  if (arg.title) {
    title = arg.title;
  }

  switch(style) {
    case "text":
      tata.text(title, data.msg, data)
      break;
    case "log":
      tata.log(title, data.msg, data)
      break;
    case "info":
      tata.info(title, data.msg, data)
      break;
    case "success":
      tata.success(title, data.msg, data)
      break;
    case "error":
      tata.error(title, data.msg, data)
      break;
  }
}

$(function() {
  window.addEventListener('message', function(event) {
    if (event.data.type == "sendMessage") {
      createNotification(event.data.data)
    }
  });
});
  // import tata from 'tata'

/** 
  Js Libraries used are 
  taast-prompt-tata -> https://www.cssscript.com/toast-prompt-tata/
*/