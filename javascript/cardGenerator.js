$(document).ready(function(){
  $("#newCard").on("click", function() {
    var numbers = [];
    var letters = [["B",15],["I",30],["N",45],["G",60],["O",75]];
    var j = 0;
      
    while (j < letters.length){
      switch (letters[j][0]) {
        case "B":
        case "I":
        case "G":
        case "O":
          amount = 5;
          break;
        case "N":
          amount = 4;              
         }
        
     for (var i = 0; i < amount; i++) {
        var l = -1;
        var numRandom = Math.floor(Math.random()*(letters[j][1] - (letters[j][1]-14)+1) + (letters[j][1]-14) );
         while (l < numbers.length) {
           while (numRandom === numbers[l + 1]) {
            numRandom = Math.floor(Math.random()*(letters[j][1] - (letters[j][1]-14)+1) + (letters[j][1]-14) );
            } 
          l++;
          }
         numbers.push(numRandom);
         numbers.sort(function (a, b) {return a-b;});
       }
         j++;
    }
    $(".numbersB").html(numbers[0] + " " + numbers[1] + " " + numbers[2] + " " + numbers[3] + " " +numbers[4]);
    $(".numbersI").html(numbers[5] + " " + numbers[6] + " " + numbers[7] + " " + numbers[8] + " " +numbers[9]);
    $(".numbersN").html(numbers[10] + " " + numbers[11] + " " + numbers[12] + " " + numbers[13]);
    $(".numbersG").html(numbers[14] + " " + numbers[15] + " " + numbers[16] + " " + numbers[17] + " " +numbers[18]);
    $(".numbersO").html(numbers[19] + " " + numbers[20] + " " + numbers[21] + " " + numbers[22] + " " +numbers[23]);
    
  });            
 });