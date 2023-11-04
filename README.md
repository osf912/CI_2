![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# A simple Tic Tac Toe

This is a simple Tic Tac Toe game, where two persons can play Tic Tac Toe on the screen. If one wins, the game recognize that and count the wins for the player.

You are playing on a 3x3 board and X starts to mark a field, O is next. It is the aim of the game to mark three fields in a row, column or diagonal.

There is a button to reset the counter, if you like.

The Game is full responsive:

![Responsive Mockup](/assets/images/ttt_amiresponsive.jpg)

Font used is "Foggles" cursive, from Google Fonts to simulate a handwritten game.

The colors used are antiquewhite like an old piece of paper.
Black Text and X'n'O's on a grey outlined board.
The resetbutton is in signal red, to warn to not hit it, if you don't really want it. 

![Tic Tac Toe Game](/assets/images/ttt_game.jpg)

## Features

* Handwritten Headline:
    The headline is ahandwritten-like Font to create a look and feel like a handwritten Tic-Tac-Toe game on a paper.

* Hashtag favicon:
    The empty board of the game looks like a hashtag, so I used one as a favicon.

* Next player indicator:
    Under the headline, is an indicator "Next move for player: " (X or O) for the player, who is next.

* The gameboard:
    In the center is the gameboard in a responsive size to match the device. Click on the fields to sign them X or O

* The won games counter:
    The won games are counted separately for X and O

* The reset-button:
    clear the board and reset the won-counter.

## Features to come

* play against the computer
* highlight the winning fields


## Testing

  - I've tested the site in different browsers: Chrome, Firefox, Edge,
  - and confirmed that the site is responsive and I added an "Am I Responsive" screenshot to the README,
  - and tested the functionality game,
  - and tested the counters by playing,
  - and tested the Reset Button,
  - and checked the validation with the following Validator:

### HTML Validator Testing

![HTML Validator](/assets/images/ttt_HTML_Validator.jpg)

  - confirmed.

### CSS Validator Testing

![CSS Validator](/assets/images/ttt_CSS_Validator.jpg)

  - confirmed.

### Lighthouse Testing

![Lighthouse Validator](/assets/images/ttt_lighthouse.jpg)

  - confirmed. 

### JSHint Testing

![JSHint Validator](/assets/images/JSHint.jpg)

  - get one warning. I've externalized the anonimous function to markField(), but JSHint doesn't stop warning.
  - A solution would be to delete the for-loop and ad the nine Eventlisteners of the Fields separately, but the for-loop represents the DRY-rule in a better way.

### Bugs

  - There are no bugs left.
  - I started with one global const winSchemes and a global variable gameStatus. In the process I moved them to the corresponding functions, but then need to exchange gameStatus.
  - I've tried to get rid of the JSHint warning, but...

## Deployment

  - Deployed to GitHub-Pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the 'Settings' tab
    - On the righthand side choose 'Pages'.
    - From the source section drop-down menu, select 'Deploy from a branch' and choose the 'main' branch.
    - Once the master'main' branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
  - The live link can be found here: https://osf912.github.io/CI_2/

## Thanks to:

  - Google Font.
  - Code Institute for making me build this, and letting me use a few ideas and elements of the course.
  - de.freepik.com for the hashtag.png and favicon.io for the conversion.
  - YouTube (i.e. BroCode : A game of Tic Tac Toe written in javascript) for inspire me for the variables WinSchemes and gameStatus and the checkWin() function.