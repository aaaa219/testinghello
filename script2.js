document.addEventListener("DOMContentLoaded", function () {
  const questions = ['What are you most excited for today? big or small?', 
    "What was you first impression of me online vs IRL?",
    '(WILDCARD) share your screen time. both players.', 
    "What's the most fun you've had during this time?", 
    "What's the most valuable lesson this time has taught you so far?", 
    "What's been the hardest part of all this for you?", 
    "What movie do you wish you'd never seen so oyou can watch it for the first time during quarantine?", 
    '(WILDCARD) share your most played song at the moment.', 
    "What's been the kindest things someone has done for you during this time? what's the kindest thing you've done for yourself?", 
    'If you made a playlist for me (the other player), what 3 songs would be on it?', 
    'What do I need to watch as soon as i have time?', 
    'How can I best be there for you during this chapter?',
    "What reality show do you think I'm most likely to binge watch? Explain",
    "What's the first thing you noticed about me?",
    "If Myspace was still a thing what would my profile song be?",
    "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?",
    "On a scale of 1-10, how messy do you think my car is (if we had)? 1 being the cleanest 10 complete disaster, explain.",
    "Do you think plants thrive or die in my care? Explain.",
    "Do I (the other person) look kind? Explain",
    "Do I seem like more of a creative or analytical type? Explain.",
    "Do I seem like someone who would get a name tattooed on myself? Why or why not?",
    "Finish the sentence: Just by looking at you I'd think _____________",
    "What do my shoes tell you about me?",
    "What was your first impression of me?",
    "How would you describe what you think my type is in three words?",
    "What did you think about my first message?",
    'Between the two of us, who seems like the better texter? Explain.',
    "What does my Instagram tell you about me?",
    "Make an assumption about me",
    "What about me intrigues you?",
    "What do you think I'm most likely to splurge on?",
    "As a child, what do you think I wanted to be?",
    "Do you think I fall in love easily why or why not",
    "What compliment do you think I hear the most?",
    "Do I seem like a coffee or tea person - sweetened or unsweetened?",
    "(WILDCARD) Create your own question -> Type it and the person will see it the next or same day and answer",
    "Do I intimidate you? Why or why not?",
    "What's your favorite song lyric that comes to your mind from the top of your head?",
    "(WILDCARD) Write down your number one goal for the next month. Compare",
    "What's been your happiest memory this past year?",
    "Have you changed your mind about anything recently?",
    "What has been your earliest recollection of happiness? (i know u have good memory)",
    "What lesson took you the longest to un-learn?",
    "Are you lying to yourself about anything?",
    "What questions are you trying to answer most in your life right now?",
    "When was the last time you surprised yourself?",
    "What title would you give this chapter in your life?",
    "Finish the sentence: Strangers would describe the other person as ______ only I know that you are _______",
    "What would your younger self not believe about your life today?",
    "How would you describe the feeling of being in love with one word?",
    "What part of your life works, what part of your life hurts?",
    "How can you become a better person?",
    "Do you think the image you have of yourself matches the image other people see you as?",
    "What fast food restaurant do you think I'm most likely to drive through? What's my order?",
    "Do you think I intimidate others? Why or why not?",
    "When you are asked how are you, how often do you answer truthfully?",
    "How are you, really?",
    "What's the most unexplainable thing that happened to you?",
    "If you could have it your way: who would you be with? Where would you be? What would you be doing?",
    "Describe your perfect day!",
    "What dating advice would you give your younger self?",
    "How old do you feel emotionally?",
    "Finish the sentence: Dating is ____________",
    "What's your least favorite question to be asked on a date? What do you wish you would be asked more?",
    "What are you passionate about?",
    "What are you not currently giving enough time to?",
    "(WILDCARD) Write down the three most important things to you in a relationship (30 sec)",
    "(WILDCARD) Write down a dating pet peeve (30 sec). Compare",
    "What about me surprised you?",
    "Based on what you know about me, do you have a Netflix recommendation?",
    "What do you think my superpower is?",
    "What do you think our most important similarities are?",
    "What do you think is one thing I could do that would drastically improve my life?",
    "What would be the perfect gift for me?",
    "How would you describe me to a stranger?",
    "What do I need to hear right now?",
    "Based on what you've learned about me, does my social media portray me accurately?",
    "What can I help you with?",
    "What do you think do I fear the most?",
    "Where am I most qualified to give advice about?",
    "What about me is the hardest for you to understand?",
    "If we were a band what would be our name?",
    "Admit something.",
    "What parts of yourself do you see in me?",
    "How does one earn your vulnerability?",
    "Dare your partner to do something out of their comfort zone next week.",
    "What do you recommend I should let go of?",
    "What do you think my defining characteristic is?",
    "What do you think my weakness is?",
    "What do you think I should know about myself that perhaps I'm unaware of?",
    "What do you admire most about me?",
    "In one word, describe how you feel right now.",
    "What can we create together?",
    "What's the most attractive quality about me that isn't physical?",
    "Am I like you expected me to be?",
    "(WILDCARD) Draw your favorite memory with me. Compare. (whatsapp)",
    "What type of social situation makes you feel the most awkward?",
    "What do you think has been my go-to snack during this time?",
    "What time do you think I have been waking up these days?",
    "What's the first thing you noticed about me?",
    "What have you let go of this year that's made a positive change in your life?",
    "What takes someone from a friend to a best friend for you?",
    "What has been the kindest thing you have done for yourself in the last month?",
    "If money was not an issue, what is one big dream or idea you would execute this year?",
    "What are you better at than most people you know? Permission to brag",
    "What do you wish you could spend more time doing?",
    "What is one part of you personality you do not use often?",
    "How can I best be here for you during this season of life?",
    "What did I help you learn about yourself?",
    "(WILDCARD) What is one positive and negative thing about me?",
    "(WILDCARD) What is your biggest turn-off?",
    "What makes you the happiest?",
    "(WILDCARD) What's one thing you're insecure about?",
    "What's something you love about youself?",
    "(WILDCARD) When was the last time you cried and why?",
    "(WILDCARD) Share a favorite memory of yours",
    "(WILDCARD) Show the first photo in your camera roll. Explain (whatsapp)",
    "Do you have a favorite picture of me?",
    "When was the las time I hurt your feelings and you didn't speak up? why?",
    "How/When did you know that you were in love with me?",
    "Does any moment stand out from our last year together?",
    "Do you have a little thing I do that you like?",
    "What do you think of when you miss me?",
    "Has there ever been a time I concerned/worried you?",
    "Was there a time that I disappointed you and you didn't tell me?",
    "What is a date night thing you want to do but we have not yet?",
    "What's the most unexpected thing you've learned about me?",
    "What is the most comforting thing I've done for you?",
    "What is one thing about our relationship you never want to change?",
    "What is your favorite way to spend quality time together?",
    "Is there anything I've stopped doing that you miss/used to like?"];

  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submit-answer");
  const historyContainer = document.getElementById("history-container");

  // Get today's date in a standardized format
  const today = new Date().toLocaleDateString();

  // Retrieve the stored date from localStorage
  let storedDate = localStorage.getItem("storedDate");
  
  // Function to get the question of the day
  function getQuestionOfTheDay() {
    let questionIndex = new Date().getDate() % questions.length; // Rotate questions daily
    return questions[questionIndex];
  }

  // Function to display the question of the day
  function displayQuestionOfTheDay() {
    const questionOfTheDay = getQuestionOfTheDay();
    questionElement.textContent = questionOfTheDay;
  }

  // Function to load answers from local storage
  function loadAnswers() {
    let answers = JSON.parse(localStorage.getItem("answers")) || {};
    Object.keys(answers).forEach(date => {
      const question = getQuestionOfTheDay(); // Get the question of the day for the given date
      addQuestionHeaderToHistory(date, question);
      answers[date].forEach(answer => {
        addAnswerToHistory(date, answer.username, answer.text);
      });
    });
  }

  // Function to add question header to the history container
  function addQuestionHeaderToHistory(date, question) {
    const existingHeader = document.querySelector(`.question-header[data-date="${date}"]`);
    if (!existingHeader) {
      const header = document.createElement("div");
      header.classList.add("question-header");
      header.dataset.date = date;
      header.textContent = `${question} (${date}):`;
      historyContainer.appendChild(header);
    }
  }

  // Function to add answer to the history container
  function addAnswerToHistory(date, username, answerText) {
    if (!username || !answerText) return; // Avoid adding undefined values

    const answerItem = document.createElement("div");
    answerItem.classList.add("answer-item");
    answerItem.innerHTML = `<span class="username">${username}:</span> ${answerText}`;

    // Create delete icon for user's messages
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bx", "bx-trash", "delete-icon");
    deleteIcon.style.display = "none"; // Initially hidden

    // Show delete icon on hover if the answer belongs to the logged-in user
    if (username === localStorage.getItem("username")) {
      answerItem.onmouseover = () => (deleteIcon.style.display = "inline");
      answerItem.onmouseout = () => (deleteIcon.style.display = "none");
    }

    // Delete answer functionality
    deleteIcon.addEventListener("click", () => deleteAnswer(date, username, answerItem));
    answerItem.appendChild(deleteIcon);

    historyContainer.appendChild(answerItem);
  }

  // Function to delete answer if username matches
  function deleteAnswer(date, username, answerItem) {
    if (username === localStorage.getItem("username")) {
      answerItem.remove();
      let answers = JSON.parse(localStorage.getItem("answers")) || {};
      if (answers[date]) {
        answers[date] = answers[date].filter(answer => answer.username !== username || answer.text !== answerItem.textContent.trim().split(":")[1].trim());
        localStorage.setItem("answers", JSON.stringify(answers));
      }
    } else {
      alert("You can only delete your own messages.");
    }
  }

  // Function to save answer to local storage and add to history
  submitButton.addEventListener("click", function () {
    const answerText = answerInput.value.trim();
    const username = localStorage.getItem("username");

    if (username && answerText) {
      let answers = JSON.parse(localStorage.getItem("answers")) || {};
      if (!answers[today]) {
        answers[today] = [];
        addQuestionHeaderToHistory(today, getQuestionOfTheDay());
      }
      // Store both username and text
      answers[today].push({ username: username, text: answerText });
      localStorage.setItem("answers", JSON.stringify(answers));
      addAnswerToHistory(today, username, answerText);
      answerInput.value = ""; // Clear input field
    } else {
      alert("Please enter an answer.");
    }
  });

  // Function to update question if the day has changed
  function updateQuestionIfNeeded() {
    const currentDate = new Date().toLocaleDateString();
    if (storedDate !== currentDate) {
      // Update stored date
      localStorage.setItem("storedDate", currentDate);
      storedDate = currentDate;

      // Display new question
      displayQuestionOfTheDay();

      // Clear input and update history for the new day
      answerInput.value = "";
      loadAnswers(); // Load new answers (if any)
    }
  }

  // Initial load
  if (!storedDate || storedDate !== today) {
    localStorage.setItem("storedDate", today);
    storedDate = today;
    displayQuestionOfTheDay();
  }
  loadAnswers();

  // Check for midnight every minute to update the question if the day changes
  setInterval(updateQuestionIfNeeded, 60 * 1000); // Check every minute
});
