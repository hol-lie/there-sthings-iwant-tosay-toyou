let me = io.connect();


let myWords = [
  "When was the last time you said goodbye?",
  "When was the last time you said hello?",
  "What is a feeling that you miss?",
  "What are three things you need to hear?",
  "Is there anything you wish you would have said?",
  "Tell me about your happiest day.",
  "Tell me about an experience that taught you something.",
  "Where is a place you wish you never went?",
  "What is your definition of love?",
  "Tell me a secret.",
  "What is something that you want to leave in the past?",
  "How do you move on?",
  "When was the last time you gave yourself a hug?",
];

let clickforprompt = document.querySelector(".clickforprompt");
console.log(clickforprompt);

clickforprompt.addEventListener("click", function () {
  // anything that happens when you click on the prompt goes here
  let words = Math.floor(Math.random() * myWords.length);
  console.log(myWords[words]);
  //when you click on the button, change the contents of the html class "clickforprompt" to the random word generator myWords[words]
 clickforprompt.innerHTML = myWords[words];
});



document.getElementById("myBtn").addEventListener("click", function () {
  let msg = document.querySelector("#msg");
  console.log(msg.value);
  document.getElementById("myBtn").classList.add("btnanim");
  // var clean = DOMPurify.sanitize(msg.value);
  me.emit("newMessage", msg.value, "to all clients" );
  msg.value = "";
})

// require(['dompurify'], function(DOMPurify) {
//     var clean = DOMPurify.sanitize("#msg");
// });



document.getElementById("myBtn").addEventListener("animationend", function() {
       document.getElementById("myBtn").classList.remove("btnanim");
                                             
                                                  })





