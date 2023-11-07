function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibonacciArray = [];
    if(n==1){
      fibonacciArray[0]=0;
    }else if(n==2){
      fibonacciArray[0]=0;
      fibonacciArray[1]=1;
    }else{
      fibonacciArray[0]=0;
      fibonacciArray[1]=1;
      for(var i=2;i<n;i++){
         fibonacciArray[i]=fibonacciArray[i-1]+fibonacciArray[i-2];
      }
    }

    return fibonacciArray;
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

