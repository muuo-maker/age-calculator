var val = document.querySelector(".val").value;
 function age(){      
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var currentDay = new Date().getDate();
var currentMonth = 1 + new Date().getMonth();
var currentYear = new Date().getFullYear(); 
var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]; 
      if(day > currentDay){
         currentDay += monthDays[currentMonth - 1];
         currentMonth -= 1; 
     }
   if(month>currentMonth)     {
   currentMonth += 12;
   currentYear -= 1;
   }
   var y = currentYear-year;
   var m = currentMonth-month;
   var d =  currentDay-day;
if (day ==""){
    document.getElementById("day-head").style.color= "rgb(243, 15, 15)";
    document.getElementById( "day_error").innerHTML= "This field is required";
 }else{
  if (month==""){
    document.getElementById("month-head").style.color= "rgb(243, 15, 15)";
    document.getElementById( "month_error").innerHTML= "This field is required";
  
 }else{
  if (year ==""){
    document.getElementById("year-head").style.color= "rgb(243, 15, 15)";
    document.getElementById( "year_error").innerHTML= "This field is required";
    
 }else{
  if (year > currentYear){
    document.getElementById("day-head").style.color= "rgb(243, 15, 15)";
    document.getElementById( "year_error").innerHTML= "Must be in the past";
  }else{
    if (month > 12){
      document.getElementById("month-head").style.color= "rgb(243, 15, 15)";
      document.getElementById( "month_error").innerHTML= "Must be a valid month";
     }else{
      if (day > 31 ){
        document.getElementById("day-head").style.color= "rgb(243, 15, 15)";
        document.getElementById( "day_error").innerHTML= "Must be a valid day";
       } else{
        document.getElementById("age_years").innerHTML = y;
        document.getElementById("age_months").innerHTML = m;
        document.getElementById("age_days").innerHTML =d;
       }
     }

  }
 }
 }
 } 
 }
   
   
  
    
   
    
         
   





