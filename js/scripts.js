//Business logic
var player1="";
var player2="";

var throwdice = function () {
 return Math.floor(6*Math.random())+1;
}
function Player(turn) {
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0;
 this.turn = turn;
 this.playerName;
}

Player.prototype.rollone = function() {
 if (this.roll === 1) {
 this.tempscore = 0;
 alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
 } else {
 this.tempscore += this.roll;
 }
}
Player.prototype.hold = function () {
 this.totalscore += this.tempscore;
 this.tempscore = 0;
 alert(this.playerName + ", your turn is over, pass the mouse!");
}
Player.prototype.hold = function () {
 this.totalscore += this.tempscore;
 this.tempscore = 0;
 // this.changeturn();
 alert(this.playerName + ", your turn is over, pass the mouse!");
}
Player.prototype.winnerCheck = function () {
 if (this.totalscore >= 100) {
   alert(this.playerName + " You are the winner!");
 }
}

Player.prototype.newGame = function () {
 //debugger;
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0;
 this.playerName ="";
}
Player.prototype.winnerCheck = function () {
 if (this.totalscore >= 100) {
   alert(this.playerName + " You are the winner!");
 }
}

Player.prototype.newGame = function () {
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0;
 this.playerName ="";
}
var clearValues = function(){
 $(".player1Name").val("");
 $(".player2Name").val("");
}
//user Interface
$(document).ready(function(){
   $("#start").click(function(event){
 event.preventDefault();
 var player1 = $("#Player1Name"). val();
 var player2 = $("#Player2Name"). val();
 $("form#Player").submit(function(event){
   event.preventDefault();
   var player1 = $("input#Player1Name").val();
  var player2 = $("input#Player2Name").val();

  $("h1#Player1Name").text(player1);
  $("h1#Player2Name").text(player2);
  console.log(player1 + " " + player2);

 $("#Player1Name").text(player1)
 $("#Player2Name").text(player2)
 })

})
$(document).ready(function() {
 $("button#start").click(function(event){
   player1 = new Player(true);
   player2 =  new Player(false);
   $(".player-console").show();
   $(".start-menu").hide();

   var player1Name = $(".player1Name").val();
   $("#player1Name").text(player1Name);

   var player2Name = $(".player2Name").val();
   $("#player2Name").text(player2Name);

   player1.playerName=player1Name;
   player2.playerName=player2Name;

 });
 $("button#new-game").click(function(event){
   $(".player-console").hide();
   clearValues();
   player1.newGame();
   player2.newGame();
   $("#round-total-1").empty();
   $("#total-score-1").empty();
   $("#die-roll-1").empty();
   $("#round-total-2").empty();
   $("#total-score-2").empty();
   $("#die-roll-2").empty();

   $(".start-menu").show();
 });

 $("button#player1-roll").click(function(event){
   player1.roll = throwdice();
   $("#die-roll-1").text(player1.roll);
   player1.rollone();
   $("#round-total-1").text(player1.tempscore);
 });

 $("button#player2-roll").click(function(event){
   player2.roll = throwdice();
   $("#die-roll-2").text(player2.roll);
   player2.rollone();
   $("#round-total-2").text(player2.tempscore);
 });

 $("button#player1-hold").click(function(event){
   player1.hold();
   $("#total-score-1").text(player1.totalscore);
   $("#round-total-1").empty();
   $("#die-roll-1").empty();
   player1.winnerCheck();
 });

 $("button#player2-hold").click(function(event){
   player2.hold();
   $("#total-score-2").text(player2.totalscore);
   $("#round-total-2").empty();
   $("#die-roll-2").empty();
   player2.winnerCheck();
 }
