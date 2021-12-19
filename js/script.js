var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var CC, DD, MM, d, dayBorn;

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
       var year = prompt('Year of birth again just as for the form');
       var CC = parseInt(year.substring(0,2));
       var YY = parseInt(year.substring(2,4));
       var month = prompt ('Your birth month again please in the same format as for the form');
       var MM = parseInt(month);
       var date = prompt('And Your birthdate again please')
       var DD = parseInt(date);
       var d = (((CC/4-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD))%7
       var finalAns=d.toFixed(0);
// function getGender(){
//     var mgender = document.myForm.mgender;
//     var fgender = document.myForm.fgender;
//     if(mgender.checked == true){
//       var gender = "male";
//     }
//     else if(fgender.checked == true){
//       var gender = "female";
//     }
//     else{
//       return false;
//     }
//     switch(gender){
//       case "male":
//         if (dayBorn == 1){
//           alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
//         }
//         else if(dayBorn == 2){
//           alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
//         }
//         else if(dayBorn == 3){
//           alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
//         }
//         else if(dayBorn == 4){
//           alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
//         }
//         else if(dayBorn == 5){
//           alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
//         }
//         else if(dayBorn == 6){
//           alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
//         }
//         else if(dayValue == -0){
//           alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
//         } 
//     }
// }