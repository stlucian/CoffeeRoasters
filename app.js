

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

    this.classList.toggle("active");
    var panel = document.getElementsByClassName("panel");
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }


  });

}

$(function () {
  $("#tab1").accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
  $("#tab2").accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
  $("#tab3").accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
  $("#tab4").accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
  $("#tab5").accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
  $('.toggle-tab').on('click', function () {
    var $accordion = $('#tab' + $(this).data('tab'));
    var state = $accordion.accordion('option', 'active');
    $accordion.accordion('option', { active: state === 0 ? false : 0 });


  });

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.radio-group-1 .radio-1').click(function () {
  $(this).parent().find('.radio-1').removeClass('selected');
  $(this).addClass('selected');
  var val = $(this).attr('data-value-1');
  //alert(val);
  // $(this).parentsUntil().find('#radio-value-1').val(val);

  // $document.getElementById('#radio-value-1').val(val);

  $(this).parentsUntil().find('#radio-value-1').val(val);
  $(this).parentsUntil().find('#radio-value-11').val(val);
  // document.getElementById('#radio-value').val(val);
});


$('.radio-group-2 .radio-2').click(function () {
  $(this).parent().find('.radio-2').removeClass('selected');
  $(this).addClass('selected');
  var val = $(this).attr('data-value-2');
  //alert(val);
  // $(this).parentsUntil().find('#radio-value-1').val(val);

  // $document.getElementById('#radio-value-1').val(val);

  $(this).parentsUntil().find('#radio-value-2').val(val);
  $(this).parentsUntil().find('#radio-value-22').val(val);

  // document.getElementById('#radio-value').val(val);
});

$('.radio-group-3 .radio-3').click(function () {
  $(this).parent().find('.radio-3').removeClass('selected');
  $(this).addClass('selected');
  var val = $(this).attr('data-value-3');
  //alert(val);
  // $(this).parentsUntil().find('#radio-value-1').val(val);

  // $document.getElementById('#radio-value-1').val(val);

  $(this).parentsUntil().find('#radio-value-3').val(val);
  $(this).parentsUntil().find('#radio-value-33').val(val);

  // document.getElementById('#radio-value').val(val);
});

$('.radio-group-4 .radio-4').click(function () {
  $(this).parent().find('.radio-4').removeClass('selected');
  $(this).addClass('selected');
  var val = $(this).attr('data-value-4');
  //alert(val);
  // $(this).parentsUntil().find('#radio-value-1').val(val);

  // $document.getElementById('#radio-value-1').val(val);

  $(this).parentsUntil().find('#radio-value-4').val(val);
  $(this).parentsUntil().find('#radio-value-44').val(val);

  // document.getElementById('#radio-value').val(val);
});

$('.radio-group-5 .radio-5').click(function () {
  $(this).parent().find('.radio-5').removeClass('selected');
  $(this).addClass('selected');
  var val = $(this).attr('data-value-5');
  //alert(val);
  // $(this).parentsUntil().find('#radio-value-1').val(val);

  // $document.getElementById('#radio-value-1').val(val);

  $(this).parentsUntil().find('#radio-value-5').val(val);
  $(this).parentsUntil().find('#radio-value-55').val(val);

  // document.getElementById('#radio-value').val(val);
});





