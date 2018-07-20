//Business logic
function Player(name,roundtotal,totalscore) {  // player Constructor declared
  this.name=name; //Properties Declared
  this.roundtotal=roundtotal;
  this.totalscore=totalscore;
}
//user interface Logic
$(document).ready(function(){
  $("#result").click(function(event){
  event.preventDefault();
  var player1 = $("#Player1Name"). val();
  var player2 = $("#Player2Name"). val();

  $("#Player1Name").text(player1)
  $("#Player2Name").text(player2)
  })
})
