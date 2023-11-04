![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# A simple Tic Tac Toe

This is a simple Tic Tac Toe Game, where two persons can play Tic Tac Toe on the screen. If one wins, the Game recognize that and count the wins for the player.

There is a button to reset the counter, if you like.

![Responsive Mockup](/assets/images/ttt_amiresponsive.jpg)

Font used is "Foggles" cursive, from Google Fonts to simulate a handwritten game.

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
  - YouTube (i.e. BroCode : A game of Tic Tac Toe written in javascript) for inspire me for the global variables WinSchemes and gameStatus and the checkWin() function.