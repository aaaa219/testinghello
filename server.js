// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const questionsFilePath = path.join(__dirname, 'questions.json');

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Helper function to read questions data from the file
function readQuestionsData(callback) {
  fs.readFile(questionsFilePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
}

// Helper function to write questions data to the file
function writeQuestionsData(data, callback) {
  fs.writeFile(questionsFilePath, JSON.stringify(data, null, 2), 'utf8', callback);
}

// Endpoint to get the current question of the day
app.get('/question-of-the-day', (req, res) => {
  readQuestionsData((err, data) => {
    if (err) {
      return res.status(500).send('Error reading questions file.');
    }

    const questions = data.questions;
    const lastUpdated = data.lastUpdated;
    const currentQuestionIndex = data.currentQuestionIndex;

    // Get today's date
    const today = new Date().toLocaleDateString();

    // Check if we need to update the question of the day
    if (lastUpdated !== today) {
      // Update to the next question
      const newQuestionIndex = (currentQuestionIndex + 1) % questions.length;

      data.currentQuestionIndex = newQuestionIndex;
      data.lastUpdated = today;

      // Save the updated data back to the file
      writeQuestionsData(data, (err) => {
        if (err) {
          return res.status(500).send('Error updating questions file.');
        }
        res.send({ question: questions[newQuestionIndex] });
      });
    } else {
      // Send the current question if the date has not changed
      res.send({ question: questions[currentQuestionIndex] });
    }
  });
});

// Endpoint to add or update questions
app.post('/questions', (req, res) => {
  const newQuestions = req.body.questions;

  readQuestionsData((err, data) => {
    if (err) {
      return res.status(500).send('Error reading questions file.');
    }

    data.questions = newQuestions;

    writeQuestionsData(data, (err) => {
      if (err) {
        return res.status(500).send('Error saving questions file.');
      }
      res.send('Questions updated successfully.');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
