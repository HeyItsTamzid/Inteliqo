// SmoothScrolling Example
$("#homeBtn, #logo").click(function() {
  var jumpTo = $("#home");
  var new_position = $(jumpTo).offset();
  $("html, body")
    .stop()
    .animate({ scrollTop: new_position.top }, 500);
  event.preventDefault();
});

$("#servicesBtn, .learn-more, #heroBtnSmall").click(function() {
  var jumpTo = $("#webcoderskull-area");
  var new_position = $(jumpTo).offset();
  $("html, body")
    .stop()
    .animate({ scrollTop: new_position.top }, 500);
  event.preventDefault();
});

$("#aboutUsBtn").click(function() {
  var jumpTo = $("#whyUsSection");
  var new_position = $(jumpTo).offset();
  $("html, body")
    .stop()
    .animate({ scrollTop: new_position.top }, 500);
  event.preventDefault();
});

$("#contactUsBtn").click(function() {
  var jumpTo = $("#contactUsSection");
  var new_position = $(jumpTo).offset();
  $("html, body")
    .stop()
    .animate({ scrollTop: new_position.top }, 500);
  event.preventDefault();
});

$(".bookNow").click(function() {
  var jumpTo = $("#contactUsSection");
  var new_position = $(jumpTo).offset();
  $("html, body")
    .stop()
    .animate({ scrollTop: new_position.top }, 500);
  event.preventDefault();
});
