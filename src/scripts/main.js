
function binaryConvert() {
    var num = x;
    
    if (num != Math.floor(num)) {
      console.log("Please enter a number");
      
    } else if (num < 0) {
      console.log("Please enter a positive number");
    
    } else {
      var binary = parseInt(num, 10);
      console.log(binary.toString(2));
      
    }
  }
  x=125;
    binaryConvert(x);