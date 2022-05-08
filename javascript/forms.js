function validForm(){

 var name = document.contactForm.name;
 var email = document.contactForm.email;
 var phone = document.contactForm.phone;
 var company = document.contactForm.company;


 if(name.value ==""){
   name.nextElementSibling.style.display="block";
   name.style.border = "1px solid #f00";
   return false 
 }else{
  name.nextElementSibling.style.display="none";
  name.style.border = "1px solid transparent";
 }

 if(email.value ==""){
  email.nextElementSibling.style.display="block";
  email.style.border = "1px solid #f00";
  return false 
}else{
  email.nextElementSibling.style.display="none";
  email.style.border = "1px solid transparent";
}
if(phone.value ==""){
  phone.nextElementSibling.style.display="block";
  phone.style.border = "1px solid #f00";
  return false 
}else{
 phone.nextElementSibling.style.display="none";
 phone.style.border = "1px solid transparent";
}
if(name.value ==""){
  company.nextElementSibling.style.display="block";
  company.style.border = "1px solid #f00";
  return false 
}else{
 company.nextElementSibling.style.display="none";
 company.style.border = "1px solid transparent";
}


}


