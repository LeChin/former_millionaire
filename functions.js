function CalculateOrder(form){
  var radG1;
 
  for (var i = 0; i < document.myform.os0.length; i++){
    if(document.myform.os0[i].checked==true){radG1=document.myform.os0[i].value;}
  }

  if(radG1 == "1.00")
   {
     document.myform.amount.value = '1.00';
   }
  else if(radG1 == "Other")
   {
     document.myform.amount.value = document.getElementById('custom_value').value;
   }     
};
function validate() {
  if (document.getElementById('agree_to_terms').checked) {
    $('.contribute-button').removeAttr('disabled');
  } else {
    $('.contribute-button').attr('disabled', 'disabled');
  }
};
