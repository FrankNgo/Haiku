import './styles.css';
import { Poem } from './haiku';
import { CheckSyllable } from './haiku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#haiku-form").submit(function(event) {
    event.preventDefault();
    var output = new Poem(poem);
    var poem = $("#inputPoem").val();
    var test = output.CheckSyllable(poem);
    alert(test);
  });
});
