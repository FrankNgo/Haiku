import './styles.css';
import { Poem } from './haiku';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#haiku-form").submit(function(event) {
    event.preventDefault();
    var poem = $("#inputPoem").val();
    var output = new Poem(poem);
    console.log(output);
  });
});
