var tooltipTriggerList = [].slice.call(document.querySelectorAll(".tips"));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
