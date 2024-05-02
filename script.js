let grid = document.querySelector("#grid")
let result = document.querySelector("#result")
let cards = []
let cardschosen = []
let ids = []
let wins = 0
let cardarray = [
  'Apple.png',
  'Apple.png',
  'Banana.png',
  'Banana.png',
  'Grapes.png',
  'Grapes.png',
  'Orange.png',
  'Orange.png',
  'Pear.png',
  'Pear.png',
  'Pineapple.png',
  'Pineapple.png',
]

function checkMatch(){
  if (cardschosen[0] == cardschosen[1]){
    alert("You found a match!")
    cards[ids[0]].setAttribute("src", "white.png")
    cards[ids[1]].setAttribute("src", "white.png")
    wins += 1

  }

  else {
    alert("Sorry! try again!")
    cards[ids[0]].setAttribute("src", "blank.png")
    cards[ids[1]].setAttribute("src", "blank.png")
  }

  cardschosen = []
  ids = []
  result.textContent = wins
  if (wins == 6){
    alert("You won!")
  }
}

function flipcard(){
  if (cardschosen.length < 2){
    let cardid = this.getAttribute('id')
    cardschosen.push(cardarray[cardid])
    ids.push(cardid)
    this.setAttribute("src", cardarray[cardid])

    if(cardschosen.length == 2){
      setTimeout(checkMatch, 1500)
    }

  }
}

function createboard(){
  for(let i=0; i < cardarray.length; i++){
    let card = document.createElement("img")
    card.setAttribute("src", "blank.png")
    card.setAttribute("id", i)
    card.addEventListener("click", flipcard)
    grid.appendChild(card)
  }

  cards = document.querySelectorAll("img")
}

createboard()