function validate() {
    var genders = document.getElementsByName("gender");
    if(document.myForm.name.value == ""){
        alert( "Kindly enter your First Name" );
    }
    else if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1800) {
       alert( "Please provide a valid year of birth eg 2019" );
       document.myForm.year.focus() ;
       return false;}
    else if(document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
       alert( "Please Enter your month of birth choosing a value between 1 and 12" );
       document.myForm.month.focus() ;
       return false;}
       else if( document.myForm.born.value == "" || isNaN( document.myForm.born.value ) || 
       ( document.myForm.born.value < 31 || document.myForm.born.value >= 0) ){
          alert( "Please provide a valid date of birth choosing between 1 - 31" );
          document.myForm.born.focus() ;
          return false;
       }
       else if(genders[0].checked==false && genders[1].checked==false ) {
           alert("Please choose your gender");
           return false;
       }   
       else{
         return true;}
       }