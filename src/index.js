import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import he from 'he';

$("#popCards").click(() => {
  $(".answer").hide();
  let request = new XMLHttpRequest();
  const url = "https://opentdb.com/api.php?amount=16&type=boolean";
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getQuestions(response);
    }
  };
  request.open("GET", url, true);
  request.send();  
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

