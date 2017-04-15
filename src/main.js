function openLoader() {
  document.getElementById("loading").style.height = "100%";
}

function closeLoader() {
    document.getElementById("loading").style.height = "0%";
}

// Add edit button
function addEdit() {
  const editthis = document.createElement('span');
  editthis.innerHTML = "<i class=\"fa fa-pencil color-icon\" aria-hidden=\"true\"></i>";
  editthis.setAttribute("class", "pushRight");
  editthis.id = "edit";
  return editthis;
}

// Add Delete button
function addDelete() {
  const eraseit = document.createElement('span');
  eraseit.innerHTML = "<i class=\"fa fa-trash color-icon\" aria-hidden=\"true\"></i>";
  eraseit.setAttribute("class", "pushRight");
  eraseit.id = "goAway"
  return eraseit;
}

// toggle edit switch
function editSwitcher() {
  const textname = document.createElement('span');
  textname.setAttribute("contenteditable", "false");
  textname.id = "editName";
  return textname;
}

//Spread variables into myClickFunc
function deployVariables() {
  const deleteButton = addDelete();
  const editButton = addEdit();
  let currentValue = document.getElementById("bind").value;
  const switchEdit = editSwitcher();
  const t = buildPlayerName(currentValue);

  switchEdit.appendChild(t);
  return [deleteButton, editButton, currentValue, switchEdit, t];
};

//build the LI
function buildList(deleteButton, editButton, switchEdit) {
  const x = document.createElement("LI");
  x.appendChild(deleteButton);
  x.className = 'player'
  x.appendChild(editButton);
  x.appendChild(switchEdit);
  document.getElementById("load").appendChild(x);
  return [x];
}

//if no name entered, run this function
function throwError() {
  const error = document.getElementById('errfn');
  error.style.opacity = "1";
  error.innerHTML="this is invalid name";
  const warningBorder = document.getElementById("bind");
  warningBorder.setAttribute("class", "warningBorder");
  error.setAttribute("class", "err");
  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) return;
    error.style.opacity = "0";
    warningBorder.setAttribute("class", "theplayer pre");
  });
}


// main function
function myClickFunc(e) {
  if (document.getElementById("bind").value === "") {
    throwError()
    return false;
  } else {

    const [deleteButton, editButton, currentValue, switchEdit, t] = deployVariables();
    const x = buildList(deleteButton, editButton, switchEdit);
     document.getElementById('bind').value= "";

    switchEdit.addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
          switchEdit.setAttribute("contenteditable", "false");
          switchEdit.setAttribute("autofocus","true");
          switchEdit.setAttribute("class", "");
      }
    });

    editButton.addEventListener('click', function (e) {
      if (e.currentTarget.classList.contains("toggled")) {
          e.currentTarget.classList.remove("toggled");
          switchEdit.setAttribute("class", "");
          switchEdit.contenteditable = false;
          switchEdit.setAttribute("contenteditable", "false");

        } else {
          e.currentTarget.classList.add("toggled");
          switchEdit.setAttribute("class", "editable");
          switchEdit.setAttribute("contenteditable", "true");
          document.getElementById('editName').focus();

      }
    })

    const toggleEdit = document.querySelector('#editName')
    toggleEdit.classList.toggle('hidden-phone');

    deleteButton.addEventListener('click', function () {
      this.parentNode.remove(x);
  });
 }
}

// If 2 words return a middle nickname
function buildPlayerName(fullName) {
  const words = fullName.split(' ');
  if (words.length != 2) return document.createTextNode(fullName);
  words[1] = capFirst(words[1]);
  words.splice(1, 0, generateMiddleNickname());
  return document.createTextNode(words.join(' '));
}

// Shuffles
function map(arrayLike, fn) {
  var ret = [],
  i = -1,
  len = arrayLike.length;
  while (++i < len) ret[i] = fn(arrayLike[i]);
  return ret;
}

// Shuffles names to create a captain, cocaptain and teams
function getText(node) {
  if (node.nodeType === 3) return node.data;
  var txt = '';
  if (node = node.firstChild)
  do {
    txt += getText(node);
  } while (node = node.nextSibling);
  return txt;
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}


//Capitalize the first letter of a word
  function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//Randominize Team Name
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }

//Create Nick Name
function generateMiddleNickname() {
  const adjective = ["Angry", "Spunky", "Meaty", "Meat", "Crabby", "Small", "Poop", "Pony", "Baby", "Chocolate", "Ape", "Fun", "Wobble", "Angry", "Greedy", "Naked", "Zippy", "Home", "Flabby", "Drunken", "Snuggle", "Crushing", "Thigh", "Twisted", "Loose", "Fuzzy", "Double", "Leggy", "Fried", "Triple", "Hump", "Tenacious"];
  const noun = ["Donkey", "Patties", "Monkey", "Crab", "Dawg", "Cat", "Whoppers", "Cow", "Pony", "Poop", "Whale", "Muscles", "Ankles", "Bubbles", "Hammer", "Chick", "Leg", "Wheels", "Pants", "Lube", "Timbers", "Fuzz", "Chin", "Belly"];
  var nickname = '\"' + capFirst(adjective[getRandomInt(0, adjective.length)]) + ' ' + capFirst(noun[getRandomInt(0, noun.length)] + '\"');
  return nickname;
}

// Create Team Name
  function generateName(){
    var name1 = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

    var name2 = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

    var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    return name;
  }

  const formreset = document.getElementById('result')
  const el = document.getElementById('bind');
  const gobutton = document.getElementById('thego');
  let nameOfPlayer = el.value;
  let listItems = document.getElementById('teammateys').getElementsByTagName('li');

  gobutton[window.addEventListener ? 'addEventListener' : 'attachEvent']( window.addEventListener ? 'click' : 'onclick', revealSubmitButton, false);
  const myArray = map(listItems, getText);

//slowly reveal the submit button
  function revealSubmitButton() {
    myClickFunc();
    setTimeout(() => {
      document.getElementById("go").className = "submit";
    }, 800);
  }
  document.getElementById('bind').onkeydown = function(e) {
    if (e.keyCode == 13) {
      revealSubmitButton();
    }
  };


//check to make sure at least 3 names are entered
  document.getElementById("go").addEventListener("click", function() {
    if (document.getElementById('load').getElementsByTagName('li').length <= 2)
     {
         alert("Please enter at least three names");
     }
    else
     {
      openLoader();

      setTimeout(() => {
      closeLoader()
      const inputs = document.querySelectorAll(".player")
      let listItems = Array.from(inputs).map(input => input.innerHTML)
      shuffle(listItems);
      const [captain, id, ...teammates] = listItems;
      const elem = document.getElementById("pre");
      const d = document.getElementById("result");
      d.className += "see";
      let namedteam = generateName();
      elem.className = 'hide';

      document.getElementById('captain').innerHTML += (`<h2 class="test">Team ${namedteam}!</h2>`);
      document.getElementById('captain').innerHTML += (`<p class="congrats">Congrats! You're <b style="color: black;">${namedteam}</b> Now go win the touchdown and the free throws! SPORTS!</p>`);
      document.getElementById('captain').innerHTML += (`<p class="captain-subtext">Your captain is</p><h2 class="thecaptain">\u2B51 \u2B51 ${captain} \u2B51 \u2B51 </h2>`);
      document.getElementById('captain').innerHTML += (`<p class="captain-subtext">Your co-captain is</p><h2 class="thecaptain">\u2B51 ${id} \u2B51 </h2>`);
      teammates.forEach(function(teammates) {
        document.getElementById('teammateys').innerHTML += (`<li class="forcefont">${teammates}</li>`);
      });
      document.getElementById("result").innerHTML += (`<div id="maketeam" class="maketeam"><button class="submit" id="resetform" onClick="window.location.reload()">Reset</button></div>`);

      const span = document.querySelectorAll('#goAway, #edit');
      [].forEach.call(span, function(span) {
        span.setAttribute('class', 'hide');

    });
        }, 2000);
}
  });
