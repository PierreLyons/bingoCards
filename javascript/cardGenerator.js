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
        var l = 0;
        var numRandom = Math.floor(Math.random()*(letters[j][1] - (letters[j][1]-14)+1) + (letters[j][1]-14) );
         while (l < (numbers.length+1)) {
           while (numRandom == numbers[l]) {
            numRandom = Math.floor(Math.random()*(letters[j][1] - (letters[j][1]-14)+1) + (letters[j][1]-14) );
            l = 0;
            } 
          l++;
          }
         numbers.push(numRandom);
         numbers.sort(function (a, b) {return a-b;});
       }
      j++;
    }
      
    $("#b1").html(numbers[0]);
    $("#b2").html(numbers[1]);
    $("#b3").html(numbers[2]);
    $("#b4").html(numbers[3]);
    $("#b5").html(numbers[4]);
   
    $("#i1").html(numbers[5]);
    $("#i2").html(numbers[6]);
    $("#i3").html(numbers[7]);
    $("#i4").html(numbers[8]);
    $("#i5").html(numbers[9]);
    
    $("#n1").html(numbers[10]);
    $("#n2").html(numbers[11]);
    //$("#nFree").html(numbers[]);
    $("#n4").html(numbers[12]);
    $("#n5").html(numbers[13]);
    
    $("#g1").html(numbers[14]);
    $("#g2").html(numbers[15]);
    $("#g3").html(numbers[16]);
    $("#g4").html(numbers[17]);
    $("#g5").html(numbers[18]);
    
    $("#o1").html(numbers[19]);
    $("#o2").html(numbers[20]);
    $("#o3").html(numbers[21]);
    $("#o4").html(numbers[22]);
    $("#o5").html(numbers[23]);
   
  });            
 });