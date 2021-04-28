let state = 1;


button.addEventListener("click", function(){

  let massages = document.getElementById("massages");
  let textbox = document.getElementById("textbox");
  let button = document.getElementById("button");


  let new_message = document.createElement("li");
  new_message.innerHTML = textbox.value;

  if(state === 1){
  new_message.classList.add("right");
  state = 0;
} else {
  new_message.classList.add("left");
  state = 1;
  }

  messages.appendChild(new_message);
  textbox.value = "";

});