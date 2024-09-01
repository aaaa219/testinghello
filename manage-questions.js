document.addEventListener("DOMContentLoaded", function () {
    const newQuestionInput = document.getElementById("new-question");
    const addQuestionForm = document.getElementById("add-question-form");
    const backButton = document.getElementById("back");
    

    // Add a new question
    addQuestionForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const newQuestion = newQuestionInput.value.trim();
      if (newQuestion) {
        fetch('questions.json')
          .then(response => response.json())
          .then(questions => {
            questions.push(newQuestion);
            return fetch('questions.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(questions)
            });
          })
          .then(() => {
            newQuestionInput.value = '';
            alert("Question added successfully!");
          });
      }
    });
  
    // Go back to the main page
    backButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  });
  