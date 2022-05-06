//declaring a variable


//array
let cards = []

//sum
let sum = 0
//boolean
let hasblackjack = false
let isAlive = false
//empty message
let message = ""

let messageEl = document.querySelector("#message-El")

console.log(messageEl)

let sumEl = document.getElementById("sum-el")

console.log(sumEl)

let cardel = document.getElementById("card-el")
console.log(cardel)
 let player={
    name :"h4ck3r",
    chips : 145

}
 
 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": " + "$" +player.chips

console.log(cards)
//random  fuction
function getRandomcard(){
    let randomnumber = Math.floor(Math.random()*12)+1
    if(randomnumber > 10){
        return 10
    }else if(randomnumber === 1){
        return 11
    }else{
        return randomnumber
    }
}
//function
function startgame (){
    isAlive = true
    //generate two random variable
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    //sum variable 
    cards = [firstcard, secondcard]
    let sum = firstcard + secondcard
    rendergame()
}
function rendergame(){

    cardel.textContent = "cards: " 
    for(let i = 0;i<=cards.length;i++){
        cardel.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum: " + sum

 if(sum < 21){
    message = "do you want to draw anothe a card"
 }
 else if(sum === 21){
     message = "congrats you have got black a jack"
     hasblackjack = true
 }
 else{
     message = "you are out of the game"
     isAlive = false
 }
 messageEl.textContent = message
}
function newcard(){
    console.log("Drawing new card fro the deck")
    if(isAlive === true && hasblackjack === false){
    let card = getRandomcard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }
    
}