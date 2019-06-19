
$('document').ready(function(){
 var typed = new Typed('.type' , {
     strings: [
         "<i>Sanon Steeve</>",
         "Developpeur Web",
         "Developpeur Java",
         "Developpeur PHP"
       ],
     typeSpeed:40,
     backSpeed:40,
     backDelay:500,
     startDelay:1,
     loop:true
 });

 $(function(){
$('.circlechart').circlechart();
});

$('#jq').LineProgressbar({
percentage: 90,
fillBackgroundColor: 'gray',
backgroundColor: '#EEEEEE',
radius: '20px',
height: '6px',
width: '100%'
});

$('#jq1').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: 'coral',
  backgroundColor: '#EEEEEE',
  radius: '20px',
  height: '6px',
  width: '100%'
  });

  $('#jq2').LineProgressbar({
    percentage: 45,
    fillBackgroundColor: 'thistle',
    backgroundColor: '#EEEEEE',
    radius: '20px',
    height: '6px',
    width: '100%'
    });

    $('#jq3').LineProgressbar({
      percentage: 65,
      fillBackgroundColor: 'lightgrey',
      backgroundColor: '#EEEEEE',
      radius: '20px',
      height: '6px',
      width: '100%'
      });

      $('#jq4').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '20px',
        height: '6px',
        width: '100%'
        });

        $('#share-bar').share();

        $('modal').on('shown.bs.modal' , $('#myinput').trigger('focus'))
});


window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';


});

if(document.getElementById('modal').style.visibility=="visible"){
  document.getElementById('share-bar').style.visibility="hidden";
}


/*
document.getElementById('name').addEventListener('mouseover',function(){
  alert('ok');
});*/
/*
window.onscroll=function(){
  

}*/


