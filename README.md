# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
create a new branch called grid. 
take the state array and state value to make a grid utalizing the .map function 
- As a user, I can click on a square to mark it.
we need to create a function, this function will update out tic tac toe board to mark each space.  
- As a user, my partner can click on a square after me and see their mark.
create a new function that will display, "O" we need to create an alternating patter where we can input O as well.
We have to create a condtitional statement within first person to show case the O.
- As a user, I can't click on a square that has already been marked.
branch- no-click
new function modify onclick function
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
