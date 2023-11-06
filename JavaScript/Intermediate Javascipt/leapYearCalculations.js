function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    

    var leapYearOrNot;

   if((year%4) == 0){
       if((year%100)==0){
           if((year%400)==0){
               leapYearOrNot = "Leap year."
           }else{
               leapYearOrNot = "Not leap year."
           }
       }else{
           leapYearOrNot = "Leap year."
       }
   }else{
       leapYearOrNot = "Not leap year."
   }
    
    return leapYearOrNot;
/**************Don't change the code below****************/    

}
