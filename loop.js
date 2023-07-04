   var a = +prompt( "1-sonni kiriting")              
   var b = +prompt( "2-sonni kiriting")              
   var c = +prompt( "3-sonni kiriting")  
   
   if(a < b && b < c || c < b && b < a  ) {
    alert("O'rta qiymat " + b)
}else if (b < a && a < c || c < a && a < b) {
       alert("O'rta qiymat " + a)
   }
   else if (b < c && c < a || a < c && c < b) {
       alert("O'rta qiymat " + c)
   }else{
    alert( " Sondan boshqa narsa kiritdingiz:")
   }