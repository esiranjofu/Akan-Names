let firstName = document.getElementById("name").value;
let yearOfBirth = yearOfBirth = document.getElementById("year").value;
let monthOfBirth = document.getElementById("month").value 
let dateOfBirth = document.getElementById("date").value
var CC, YY, MM, DD, d, dayValue
var dayOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function getInputValueName(firstName){
  let firstName=document.getElementById("name").value;
  console.log(firstName);
}
function getInputValueYear(){
  let yearOfBirth = document.getElementById("year").value;
  console.log(yearOfBirth);
}
function getInputValuemonth(){
  let monthOfBirth= document.getElementById("month").value
  console.log(monthOfBirth);
}
function getInputValueDate(){
  let dateOfBirth= document.getElementById("date").value
  console.log(dateOfBirth);
}
function validate() {
  if(firstName == ""){
      alert( "Kindly enter your First Name" );
    }
  else if( yearOfBirth.value == "" || yearOfBirth.value.length !=4 || yearOfBirth.value <=1800 || yearOfBirth.value >2021) {
      alert( "Please provide a valid year of birth eg 2021" );       return false;}
    else if((isNaN(monthOfBirth.value) || monthOfBirth.value <= 0 || monthOfBirth.value > 12) ||monthOfBirth.value == "" || monthOfBirth.value.length !=2 ){
       alert( "Please Enter your month of birth eg jan =01, Feb = 02, and Dec = 12" );
       document.myForm.month.focus() ;
       return false;}
       else if( dateOfBirth.value == "" || isNaN( dateOfBirth.value ) || dateOfBirth.value.length !=2 || ( dateOfBirth.value <= 0 || dateOfBirth.value > 31) ){
          alert( "Please provide a valid date of birth eg 01 for first or 05 for fifth or  31" );
          document.myForm.born.focus() ;
          return false;
       }
       else if(genders[0].checked==false && genders[1].checked==false ) {
           alert("Please choose your gender either Male or Female");
           return false;
       }   
       else{
         return true;}
       }

var firstName = prompt ("Please enter your first name");
var year = prompt ("Please enter your year of birth")
var CC = parseInt(year.substring(0,2));
var YY = parseInt(year.substring(2,4));
var month = prompt ('Please enter your birth month in numbers');
var MM = parseInt(month);
var date = prompt('Your date of birth')
var DD = parseInt(date);
 var d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
var dayValue=d.toFixed(0);
console.log(dayValue);
var gender = prompt('Enter your gender, either Male or Female');
switch(gender){
  case "Male":
  if(dayValue==0){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[0] + 'and your akan name is ' +maleNames[0]);
  }else if (dayValue==1){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[1] + 'and your akan name is ' +maleNames[1]);
  }else if (dayValue==2){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[2] + 'and your akan name is ' +maleNames[2]);
  }else if (dayValue==3){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[3] + 'and your akan name is ' +maleNames[3]);
  }else if (dayValue==4){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[4] +'and your akan name is ' +maleNames[4]);
  }else if (dayValue==5){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[5] + 'and your akan name is ' +maleNames[5]);
  }else if (dayValue==6){
     alert ('Hi '+firstName +' You were born on ' +dayOfWeek[6] + 'and your akan name is ' +maleNames[6]);
  }
     break;
     case "Female":
if(dayValue==0){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[0] + 'and your akan name is ' +femaleNames[0])
  }else if (dayValue==1){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[1] +'and your akan name is ' +femaleNames[1]);
  }else if (dayValue==2){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[2] +'and your akan name is ' +femaleNames[2]);
  }else if (dayValue==3){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[3] + 'and your akan name is ' +femaleNames[3]);
  }else if (dayValue==4){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[4]+ 'and your akan name is ' +femaleNames[4])
  }else if (dayValue==5){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[5] + 'and your akan name is ' +femaleNames[5])
  }else if (dayValue==6){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[6] +'and your akan name is ' +femaleNames[6]);
  }
}

