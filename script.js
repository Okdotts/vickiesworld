//fun joke button//
function tellJoke() {
  let jokes = [
    "what is a programmers favourite snack?.... Micro chips!",
    "why was the math book sad?......Because it had too many problems!",
    "why did the computer go to school?......Because it wanted to increase it's byte size",
  ];

  let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke").textContent = randomJoke;

  console.log(jokes[0]);
  /*
  alert(jokes);
  */
}
tellJoke();

/*
let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);
*/

//music player toggle
function changeSong() {
  let select = document.getElementById("mucicSelect");
  let player = document.getElementById("audioPlayer");
  let source = document.getElementById("audioSource");

  //change song based on user selection
  source.src = select.value;
  //reload and play the new song
  player.load();
  player.play();
}

//change theme color
function changeTheme() {
  let color = document.getElementById("colorPicker").value;
  document.getElementById("pages").style.backgroundColor = color;
}

//contact form submission
function sendMessage(event) {
  let personName = document.getElementById("myName").value;
  let personMessage = document.getElementById("message").value;
  let contactMessage =
    "Thanks, " +
    personName +
    " !your message has been received " +
    personMessage;
  document.getElementById("contactResult").textContent = contactMessage;
  event.preventDefault();
}

//rating
function rating(emoji) {
  document.getElementById("ratingResults").textContent = " you rated " + emoji;
}
