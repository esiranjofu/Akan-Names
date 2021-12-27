var CC, YY, MM, DD, d, dayValue
var dayOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function validateFormInput() {
  if(document.myForm.name == ""){
    alert( "Kindly enter your First Name" );
    }
  else if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value <=1800 || document.myForm.year.value >2021) {
    alert( "Please provide a valid year of birth eg 2021" );       return false;}
  else if((isNaN(document.myForm.month.value) || document.myForm.month.value <= 0 || document.myForm.month.value > 12) ||document.myForm.month.value == "" || document.myForm.month.value !=2 ){
    alert( "Please Enter your month of birth eg jan =01, Feb = 02, and Dec = 12" );
    return false;}
  else if( document.myForm.date.value == "" || isNaN( document.myForm.date.value) || document.myForm.date.value !=2 || ( document.myForm.date.value <= 0 || document.myForm.date.value > 31) ){
    alert( "Please provide a valid date of birth eg 01 for first or 05 for fifth or  31" );
    return false;
       }
       else if(gender[0].checked==false && gender[1].checked==false ) {
           alert("Please choose your gender either Male or Female");
           return false;
       }   
       else{
         return true;}
       }
// function calculateDayValue(){
//   getInputValueYear
//   CC = parseInt(yearOfBirth.substring(0,2));
//   YY = parseInt(yearOfBirth.substring(2,2));
//   getInputValueMonth
//   MM = parseInt(monthOfBirth)
//   getInputValueDate
//   DD = parseInt(dateOfBirth)
//   d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
//   console.log(d);
//   return d.toFixed(0)
// }
// function getGender(){
//   var genders = document.getElementsByName("gender");
//   if(genders[0].checked == true){
//     var gender = "male";
//   }
//   else if(genders[1].checked == true){
//     var gender = "female";
//   }
//   else{
//     return false;}
var firstName = prompt ("Please enter your first name");
firstName.toUpperCase[0]
var yearOfBirth = prompt ('Please enter your year of birth eg 1999')
CC = parseInt(yearOfBirth.substring(0, 2));
console.log(CC)
YY = parseInt(yearOfBirth.substring(2, 4));
console.log(YY)
var monthOfBirth = prompt('Enter your month of birth')
MM= parseInt (monthOfBirth)
console.log(MM)
var date = prompt('Your date of birth')
var DD = parseInt(date);
console.log(DD)
var d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
var dayValue=d.toFixed(0);
console.log(dayValue);
var gender = prompt('Enter your gender, either Male or Female');
switch(gender){
  case "Male":
  if(dayValue==0){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[0] + ' and your akan name is ' +maleNames[0]);
  }else if (dayValue==1){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[1] + ' and your akan name is ' +maleNames[1]);
  }else if (dayValue==2){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[2] +' and your akan name is ' +maleNames[2]);
  }else if (dayValue==3){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[3] +' and your akan name is ' +maleNames[3]);
  }else if (dayValue==4){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[4] +' and your akan name is ' +maleNames[4]);
  }else if (dayValue==5){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[5] + ' and your akan name is ' +maleNames[5]);
  }else if (dayValue==6){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[6] + ' and your akan name is ' +maleNames[6]);
  }
     break;
     case "Female":
if(dayValue==0){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[0] + ' and your akan name is ' +femaleNames[0])
  }else if (dayValue==1){
      alert ('Hi '+firstName +' You were born on ' +dayOfWeek[1] +' and your akan name is ' +femaleNames[1]);
  }else if (dayValue==2){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[2] +' and your akan name is ' +femaleNames[2]);
  }else if (dayValue==3){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[3] + ' and your akan name is ' +femaleNames[3]);
  }else if (dayValue==4){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[4]+ ' and your akan name is ' +femaleNames[4])
  }else if (dayValue==5){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[5] + ' and your akan name is ' +femaleNames[5])
  }else if (dayValue==6){
    alert ('Hi '+firstName +' You were born on ' +dayOfWeek[6] +' and your akan name is ' +femaleNames[6]);
  }
}