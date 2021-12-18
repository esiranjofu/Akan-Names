function validate() {
    var yearOfBirth = document.myForm.year;
    var monthOfBirth = document.myForm.month;
    var dateOfBirth = document.myForm.born;
    var mgender = document.myForm.mgender;
    var fgender = document.myForm.fgender;
    if(document.myForm.name.value == ""){
        alert( "Kindly enter your First Name" );
    }
    else if( yearOfBirth.value == "" || yearOfBirth.value.length !=4 || yearOfBirth.value >2100 || yearOfBirth.value <=1800) {
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
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var CC, YY, MM, DD, dayBorn;