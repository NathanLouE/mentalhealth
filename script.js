$( document ).ready(function() {
    // randomPage();

$( function() {
    $( document ).tooltip();
});

$(".brain").click(function(){
  randomPage();
});

function randomPage () {
  let pageVar = Math.random();
  if (pageVar < 0.33) {
    document.getElementById("brainLink").href = "/Anxiety.html";
  } else if (pageVar < 0.67) {
    document.getElementById("brainLink").href = "/Schizophrenia.html";
  } else {
    document.getElementById("brainLink").href = "/Depression.html";
  }
  console.log (pageVar);
}
});
$("li").hover(function(){
  $(this).css("opacity",100)
// console.log(this)
});

