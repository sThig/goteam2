let namesOfPlayers = [];
let input = document.getElementById("bind");
let enter = input.nextElementSibling;
enter.addEventListener("click", function() {
  namesOfPlayers.push(input.value);
  console.log(namesOfPlayers);
});
}
