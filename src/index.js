import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  let selectedNumber = 0;
  for (let i = 1; i < 10; i++) {
    $("#" + i).on("click", function() {
      selectedNumber = i;
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
    });
  }

  
});