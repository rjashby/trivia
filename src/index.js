import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import he from 'he';
import QuestionService from "./questions-service.js";


$("#popCards").click(() => {
  $(".answer").hide();
  let promise = QuestionService.provideQuestions();
  promise.then(function(response) {
    const output = JSON.parse(response);
    getQuestions(output);
  }, function() {
    $(".card").text("WRONGGGGG!");
  });
});

function getQuestions(response) {
  for (let i = 0; i < response.results.length; i++) {    
    $("#card" + (i + 1)).text(he.decode(response.results[i].question));
    $("#answer" + (i + 1)).text(response.results[i].correct_answer);
  }
}

$(".card").click(function() {
  $(this).find("h2").show();
});

