//Business logic
function Player(name, roundtotal, totalscore) { // player Constructor declared
  this.name = name; //Properties Declared
  this.roundtotal = roundtotal;
  this.totalscore = totalscore;
}
var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
  alert("hello")
}

function Player() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName;
}
var throwdice = function() {
    return Math.floor(6 * Math.random()) + 1;
    alert("hello")
    Player.prototype.rollone = function() {
      return throwdice()
    }
    //user interface Logic
    $(document).ready(function() {
      $("form#Player").submit(function(event) {
        event.preventDefault();
        var player1 = $("input#Player1Name").val();
        var player2 = $("input#Player2Name").val();

        $("h1#Player1Name").text(player1);
        $("h1#Player2Name").text(player2);
        console.log(player1 + " " + player2);

      });

      $("button#player1-roll").click(function(event) {
        player1.roll = throwdice();
        $("#die-roll-1").text(player1.roll);
        player1.rollone();
        $("#round-total-1").text(player1.tempscore);
      })
    })
