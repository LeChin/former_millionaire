// Populate Form

function CalculateOrder(form){
  var radG1;
 
  for (var i = 0; i < document._xclick.os0.length; i++){
    if(document._xclick.os0[i].checked==true){radG1=document._xclick.os0[i].value;}
  }

  if(radG1 == "1.00")
   {
      document._xclick.amount.value = '1.00';
   }
  else if(radG1 == "Other")
   {
      document._xclick.amount.value = document.getElementById('custom_value').value;
   }

  document._xclick.reset();
};

// Enable/ Disable Contribute Button

function validate() {
  if (document.getElementById('agree_to_terms').checked) {
    $('.contribute-button').removeAttr('disabled');
  } else {
    $('.contribute-button').attr('disabled', 'disabled');
  }
};

// Custom Play Button

var iframe = document.getElementById('video');
// $f == Froogaloop
var player = $f(iframe);

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.api("play");
  $("#play-button").closest('#video-overlay').fadeOut();
});