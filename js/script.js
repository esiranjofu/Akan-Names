function validate() {
    var yearOfBirth = document.myForm.year;
    var monthOfBirth = document.myForm.month;
    var dateOfBirth = document.myForm.born;
    var mgender = document.myForm.mgender;
    var fgender = document.myForm.fgender;
    if(document.myForm.name.value == ""){
        alert( "Kindly enter your First Name" );
    }
    else if( yearOfBirth.value == "" || yearOfBirth.value.length !=4 || yearOfBirth.value <=1800 || yearOfBirth.value >2021) {
       alert( "Please provide a valid year of birth eg 2021" );
       document.myForm.year.focus() ;
       return false;}
    else if((isNaN(monthOfBirth.value) || monthOfBirth.value <= 0 || monthOfBirth.value > 12) ||monthOfBirth.value == "" || monthOfBirth.value.length !=2 ){
       alert( "Please Enter your month of birth eg jan =01, Feb = 02, and Dec = 12" );
       document.myForm.month.focus() ;
       return false;}
       else if( dateOfBirth.value == "" || isNaN( dateOfBirth.value ) || dateOfBirth.value.length !=2 || ( dateOfBirth.value <= 0 || dateOfBirth.value > 31) ){
          alert( "Please provide a valid date of birth eg 01 for first or 05 for fifth or  31" );
          document.myForm.born.focus() ;
          return false;
       }
       else if(mgender.checked==false && fgender.checked==false ) {
           alert("Please choose your gender either Male or Female");
           return false;
       }   
       else{
         return true;}
       }
// var dayOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
// var months =['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
// var firstName = document.getElementsByName("name");
// function getDayValue(){
// var year = document.getElementsByName("year").value;
// var month = document.getElementsByName("month").value;
// var date = document.getElementsByName("born").value;
// parseInt(year);
// var CC = (year)=>{
//     return year.substring(0, 2);
// };
// var YY = (year)=>{
//     return year.substring(2, 4);
// };
// console.log(YY)
// var MM = parseInt(month);
// var DD = parseInt(date);
// var d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
// return finalAns=d.toFixed(0);
// }
// function getOneGenderSelected(){
//     var gender = document.getElementsByName("mgender");
//     if(gender[0].checked == true) {
//         var mgender= "male"
//     }
//     else if(gender[1].checked == true){
//       var fgender = "female";
//     }else{
//       return false;
//     }
    
// switch(gender){
// case "male":
//   if(finalAns ==0){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[0], + 'And Your Akan Name is', + maleNames[0] );
//   }else if (finalAns==1){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[1], +'And Your Akan Name is', + maleNames[1] );
//   }else if (finalAns==2){
//     alert ('Hi ', firstName, + 'you were born on ',+ dayOfWeek[2], + 'And Your Akan Name is', + maleNames[2] );
//   }else if (finalAns==3){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[3], + 'And Your Akan Name is', + maleNames[3] );
//   }else if (finalAns==4){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[4], 'And Your Akan Name is', + maleNames[4]);
//   }else if (finalAns==5){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[1], + 'And Your Akan Name is', + maleNames[5] );
//   }else if (finalAns==6){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[6], + 'And Your Akan Name is', + maleNames[6] );
//   }
//     break;
//   case "female":
//   if(finalAns==0){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[0], + 'And Your Akan Name is', + femaleNames[0] );
//   }else if (finalAns==1){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[1], + 'And Your Akan Name is', + femaleNames[1] );
//   }else if (finalAns==2){
//     alert ('Hi '+ firstName, 'you were born on ' + dayOfWeek[2], + 'And Your Akan Name is', + femaleNames[2] );
//   }else if (finalAns==3){
//     alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[3], + 'And Your Akan Name is', + femaleNames[3] );
//   }else if (finalAns==4){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[4], + 'And Your Akan Name is', + femaleNames[4]);
//   }else if (finalAns==5){
//     alert ('Hi '+ firstName, + 'you were born on ' + dayOfWeek[1], +'And Your Akan Name is', + femaleNames[5] );
//   }else if (finalAns==6){
//     alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[6], 'And Your Akan Name is', + femaleNames[6] );
//   }
//   break
//   default:
// }
// }

// function findName(){
//     dayValue = getDayValue();
//     getOneGenderSelected();
//   }
var dayOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var months =['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var firstName = prompt('Please provide your first name');
var year = prompt('Please enter your year of birth!');
var CC = parseInt(year.substring(0,2));
var YY = parseInt(year.substring(2,4));
var month = prompt ('Please enter your birth month in numbers');
var MM = parseInt(month);
var date = prompt('And your date of birth')
var DD = parseInt(date);
if(month.value <=0 || month.value>0){
 alert( "Please Enter your month of birth eg jan =01, Feb = 02, and Dec = 12" );
 }else if(date.value <=0 || date.value >31)
 alert( "Please provide a valid date of birth eg 01 for first or 05 for fifth or  31" );
 var d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
var finalAns=d.toFixed(0);
var gender = prompt('Enter your gender, either Male or Female');
switch (gender){
  case "Male":
  if(finalAns==0){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[0], + 'And Your Akan Name is', + maleNames[0] );
  }else if (finalAns==1){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[1], + 'And Your Akan Name is', + maleNames[1] );
  }else if (finalAns==2){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[2], + 'And Your Akan Name is', + maleNames[2] );
  }else if (finalAns==3){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[3], + 'And Your Akan Name is', + maleNames[3] );
  }else if (finalAns==4){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[4], + 'And Your Akan Name is', + maleNames[4]);
  }else if (finalAns==5){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[5], + 'And Your Akan Name is', + maleNames[5] );
  }else if (finalAns==6){
    alert ('Hi '+ firstName, +'you were born on ' + dayOfWeek[6], + 'And Your Akan Name is', + maleNames[6] );
  }
    break;
  case "Female":
  if(finalAns==0){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[0], 'And Your Akan Name is', femaleNames[0] );
  }else if (finalAns==1){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[1], 'And Your Akan Name is', femaleNames[1] );
  }else if (finalAns==2){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[2], 'And Your Akan Name is', femaleNames[2] );
  }else if (finalAns==3){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[3], 'And Your Akan Name is', femaleNames[3] );
  }else if (finalAns==4){
    alert ('Hi' + name, + 'you were born on  '+ dayOfWeek[4], + 'And Your Akan Name is', femaleNames[4]);
  }else if (finalAns==5){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[1], 'And Your Akan Name is', femaleNames[5] );
  }else if (finalAns==6){
    alert ('Hi '+ name, 'you were born on ' + dayOfWeek[6], 'And Your Akan Name is', femaleNames[6] );
  }
}