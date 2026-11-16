var myButton = document.getElementById('btnHighlight');
var targetElements = document.querySelectorAll('.target');

myButton.addEventListener('click', function() {
  targetElements.forEach(function(element) {
    element.classList.toggle('highlight');
  });
});