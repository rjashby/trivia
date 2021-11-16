export default class QuestionService {
  static provideQuestions() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = "https://opentdb.com/api.php?amount=16&type=boolean";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();  
    });
  }
}