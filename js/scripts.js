//Business logic
function Player(name,roundtotal,totalscore) {  // player Constructor declared
 this.name=name; //Properties Declared
  this.roundtotal=roundtotal;
  this.totalscore=totalscore;
}
var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}
//user interface Logic
$(document).ready(function(){
  $("form#Player").submit(function(event){
    event.preventDefault();
    var player1 = $("input#Player1Name").val();
    var player2 = $("input#Player2Name").val();

    $("h1#Player1Name").text(player1);
    $("h1#Player2Name").text(player2);
    console.log(player1 + " " + player2);

  });
  $()
});
