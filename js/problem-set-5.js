/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  let hash = '#';
  let space = '&nbsp;'
  let lines = '';
  while(true) {
    height = Number(prompt("Enter An Integer Between 1 And 23"));
    if(height >= 1 && height <= 23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {

        for(let j=0; j<=(height-2-i);j++) {
          lines = lines + space;
        }

        for(let k=0; k<=(1+i);k++) {
          lines = lines + hash;
        }

        lines = lines + "<br>";
      }
      document.getElementById("mario-easy-output").innerHTML="<code>"+lines+"</code>";
      break;
    }
    
  }

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  let hash = '#';
  let space = '&nbsp;'
  let lines = '';
  while(true) {
    height = Number(prompt("Enter An Integer Between 1 And 23"));
    if(height >= 1 && height <= 23 && Number.isInteger(height)) {
      for(let i=0; i<height; i++) {

        for(let j=0; j<=(height-2-i);j++) {
          lines = lines + space;
        }

        for(let k=0; k<=(1+i);k++) {
          lines = lines + hash;
        }

        lines = lines + space + space;

        for(let a=0; a<=(1+i);a++) {
          lines = lines + hash;
        }

        lines = lines + "<br>";
      }
      document.getElementById("mario-hard-output").innerHTML="<code>"+lines+"</code>";
      break;
    }
    
  }

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  let evennums = 0;
  let oddnums = 0;
  let cardnum = 0;

  while (true) {
    card = prompt("Enter Credit Card");
    cardnum = Number(card);
    if (Number.isInteger(Number(card))){
      //if (card.length == 16 || card.length == 15 || card.length == 13) {
        //console.log("1length")
        break;
      //}
    }
  }

  for(let i=card.length - 2; i>=0; i-=2) {
    let temp = Number(card[i])*2;
    let tempstr = temp.toString();
    let tempint = 0;
    let temparr = [];
    for(k=0; k < tempstr.length; k++) {
      tempint = tempint + Number(tempstr[k])
    }
    evennums = evennums + tempint;
    //evennums = evennums + Number(card[i])*2;
    //console.log("2evan " + evennums + " " + temp + " " + tempint);
  }
  for(let j=card.length - 1; j>=0; j-=2) {
    oddnums = oddnums + Number(card[j]);
    //console.log("2odd " + oddnums + " " + Number(card[j]));
  }

  if(((evennums + oddnums)%10 == 0) && 
    (card.length == 13 || card.length == 16) && (card[0] == 4)) {
    document.getElementById("credit-output").innerHTML="<img src='./images/visa.png'>";
    //console.log("visa");
  }
  else if(((evennums + oddnums)%10 == 0) && (card.length == 15) && 
    (card[0] == 3 && (card[1] == 4 || card[1] == 7))) {
    document.getElementById("credit-output").innerHTML="<img src='./images/amex.png'>";
    //console.log("amex");
  }
  else if(((evennums + oddnums)%10 == 0) && (card.length == 16) && 
    (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 3 || card[1] == 4 || card[1] == 5))) {
    document.getElementById("credit-output").innerHTML="<img src='./images/mastercard.png'>";
    //console.log("master");
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src='./images/invalid.png'>";
    //console.log("inv");
  }

  card = cardnum;
  console.log(typeof(card));
  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let attempts = 0;
  let randnum = Math.floor(Math.random()*999) + 1;
  let found = false;
  let usrnum;
  while(found == false) {
    usrnum = Number(prompt("Input Your Guess For An Integer Between 1 And 1000"));
    if (usrnum <= 1000 && usrnum >= 1 && Number.isInteger(usrnum)) {
      if(usrnum > randnum) {
        alert("This guess was too high")
        attempts+=1;
      }
      else if(usrnum < randnum) {
        alert("This guess was too low")
        attempts+=1;
      }
      else if(usrnum == randnum) {
        alert("That was the correct guess")
        attempts+=1;
        found = true;
        document.getElementById("guess-output").innerHTML = "Number: " + randnum + "<br/>Attempts: " + attempts;
      }
    }
    else {
      continue;
    }

  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  while(true) {
    windspeed = Number(prompt("What is the windspeed?"));
    if (windspeed >= 0 && Number.isInteger(windspeed)) {
      if(windspeed >= 157) {
        document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
      }
      else if(windspeed >= 130) {
        document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
      }
      else if(windspeed >= 111) {
        document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
      }
      else if(windspeed >= 96) {
        document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
      }
      else if(windspeed >= 74) {
        document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
      }
      else if(windspeed >= 39) {
        document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
      }
      else if(windspeed <= 38) {
        document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
      }
      break;
    }
    else {
      continue;
    }

  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   let valid = false;
   let fourscore = [];
   let average = 0;

  //user input loop
  while (valid == false) {
    valid = true
    let usrscores = prompt("Enter the Scores Between 0.0 and 10.0 separated by spaces");
    scores = usrscores.split(" ");
    for (i=0; i<scores.length; i++) {
      if(0.0 < Number(scores[i]) < 10.0) {
        scores[i] = Number(scores[i]);
        //console.log(typeof(scores[i]));
        
      }
      else {
        valid = false;
      }
    }
  }
  //sorting function
  //scores.sort(function(a, b) {return a-b});

  //Insertion Sort For Loop
  for(let h = 0; h <= scores.length-1; h++) {
    let k;
    let el = scores[h];
    for (k = h-1; k>=0 && (scores[k] > el); k--) {
      scores[k+1] = scores[k];
    }
    scores[k+1] = el;

  }
  console.log(scores);

  let min = scores[0];
  let max = scores[scores.length - 1];
  //console.log(typeof(min));
  //console.log(typeof(max));

  let origscores = Array.from(scores);
  //console.log("Origscores 1:")
  //console.log(origscores);

  scores.splice(0, 1);
  scores.splice(scores.length - 1, 1);

  //console.log(scores)

  for (j=0;j<=scores.length - 1;j++) {
    average += scores[j];
    //console.log(typeof(scores[j]));

  }
  average = average/scores.length; 
  average = average.toFixed(2);
  document.getElementById("gymnastics-output").innerHTML = "Discarded: " + min + ", " + max + "<br/>Score: " + average;

  scores = origscores;
  //console.log(origscores);
  //console.log(scores);


  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  let input = true;
  let inputT = true;
  let inputQ = true;
  let inputH = true;

  let tweight = 60;
  let qweight = 30;
  let hweight = 10;

  while (input) {
    while(inputT) {
      let usrinput = prompt("Enter Test Grade")
      usrinput = Number(usrinput);
      if (0.0 <= usrinput && usrinput <= 100.0) {
        tests+=1;
        testTotal+=usrinput;
      }
      else if (usrinput == -1) {
        inputT = false;
      }
      else {}
        console.log(usrinput);
    }
    while(inputQ) {
      let usrinput = prompt("Enter Quiz Grade")
      usrinput = Number(usrinput);
      if (0.0 <= usrinput && usrinput <= 100.0) {
        quizzes+=1;
        quizTotal+=Number(usrinput);
      }
      else if (usrinput == -1) {
        inputQ = false;
      }
      else {}
      }
    while(inputH) {
      let usrinput = prompt("Enter Homework Grade")
      usrinput = Number(usrinput);
      if (0.0 <= usrinput && usrinput <= 100.0) {
        homeworks+=1;
        homeworkTotal+=Number(usrinput);
      }
      else if (usrinput == -1) {
        inputH = false;
        input = false;
      }
      else {}
    }
  }

  testAvg = ((testTotal)/tests).toFixed(2);
  quizAvg = ((quizTotal)/quizzes).toFixed(2);
  homeworkAvg = ((homeworkTotal)/homeworks).toFixed(2);
  finGrade = (((testAvg*tweight) + (quizAvg*qweight) + (homeworkAvg*hweight))/(tweight+qweight+hweight)).toFixed(2);

  document.getElementById("report-card-output").innerHTML = "Tests: " + testAvg+ "</br>Quizzes: " + quizAvg+ "</br>Homework: " + homeworkAvg + "</br>Grade: " + finGrade;

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
