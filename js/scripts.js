//Business logic
function Player(name,score) { // player Constructor declared
  this.name = name; //Properties Declared
  this.score = score;
};
function Turn(player) {
  this.total = 0;
  this.roundtotal = 0;
  this.player = player;
};
Turn.prototype.diceRoller=function(player1,player2){
  var roundtotal = Math.floor(Math.random()*6) +1;
  this.total += roundtotal;

  if(roundtotal==1){
    this.total=0;
    this.endturn(player1,player2)
    return roundtotal;
  }else{
    this.roundtotal += roundtotal;
    return roundtotal;
  };
};
Turn.prototype.endTurn=function(player1,player2){
  //var roundtotal = Math.floor(Math.random()*6) +1;
  this.player.score += this.total;
  this.total =0;
  this.roundtotal;
  if(this.player ==player1){
    this.player =player2
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
  };
};

    //user interface Logic
    $(document).ready(function() {
      $("form#Player").submit(function(event) {
        event.preventDefault();
        var player1 = $("input#Player1Name").val();
        var player2 = $("input#Player2Name").val();

        $("h1#Player1Name").text(player1);
        $("h1#Player2Name").text(player2);
        console.log(player1 + " " + player2);

    var currentTurn = new Turn(player1);
    var total = currentTurn.total;

    $("#player1").hide().show("slow");
    $("#player2").hide().show("slow");
    $("h1").hide().show("slow");
    $("p").hide().show("slow");

    ("#roll-total").text(total);
    $('#player1-score').text(player1.score);
    $('#player2-score').text(player2.score);
      $('#current_player').text(currentTurn.player.userName);

        $("form#roll").submit(function(event) {
          event.preventDefault();

          var result = currentTurn.diceRoller(player1, player2);
          $('#roll').text(result);
          $('#roll-total').text(currentTurn.total);

          if ((currentTurn.total + currentTurn.player.score) >= 100) {
            if (currentTurn.player == player1) {
                $('#player1-score').text(currentTurn.total + currentTurn.player.score);
                alert("You are the winner!");
            } else if (currentTurn.player == player2) {
                $('#player2-score').text(currentTurn.total + currentTurn.player.score)
                alert("You are the winner!");
            };
          };
          $("form#end-turn").submit(function(event) {
            event.preventDefault();

            currentTurn.endTurn(player1, player2);
            $('#current_player').text(currentTurn.player.userName);

            $('#player1-score').text(player1.score);
            $('#player2-score').text(player2.score);
            $('#roll').text(currentTurn.roundtotal);
            $('#roll-total').text(currentTurn.total);
          });
