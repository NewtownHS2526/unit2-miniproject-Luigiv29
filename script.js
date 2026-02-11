// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

// Part 1 - Radio Buttons - qS, ifelse, innerHTML
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
  const color = e.target.value;
  console.log("color", color);
  let emoji = "";

  if(color === "blue") {
    emoji = " 💙";
  } else if(color === "green") {
    emoji = " 💚";
  } else if(color === "pink") {
    emoji = " 💕";
  } else if(color === "black") {
    emoji = " 🖤";
  }

  radioOutput.innerHTML = "You picked " + color + emoji;
}

radioInput.addEventListener('change', displayColor);


// Part 2 - Guess the Number - qS, nested If, innerHTML, valueAsNumber
const randomNumber = getRandomInt();
const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
  const value = e.target.valueAsNumber;
  console.log("number", value, "answer", randomNumber);
  e.target.select();

  if( value != randomNumber) {
    if( value > randomNumber){
      numOutput.innerHTML = "Not " + value + ", Guess Lower";
    } else {
      numOutput.innerHTML = "Not " + value + ", Guess Higher";
    }
  } else {
    numOutput.innerHTML = "Hurray! You got it! It's " + randomNumber;
  }
}

numInput.addEventListener('change', checkNumber);


// Part 3 - 7 continents - qS, toLower, elseif, .remove()
const textInput = document.querySelector("#text-input");
let count = 0;

const checkContinent = (e) => {
  const guess = e.target.value.toLowerCase();
  const srAlert = document.querySelector("#sr-continent-alert");
  e.target.select();

  // Instead of the following, this is another more advanced way

  // let img = document.querySelector( "#" + guess.replace(' ', '-'));
  // if(img){
  //   if(img.classList.contains("hidden")){
  //     count += 1;
  //     img.classList.remove("hidden");
  //     srAlert.innerHTML = `Yes! ${guess} is a continent. ${count} out of 7`;
  //   } else {
  //     srAlert.innerHTML = guess + " has already been selected.";
  //   }
  // } else {
  //   srAlert.innerHTML = guess + " is not a continent."
  // }


  let img;

  if(guess === "north america") {
    img = document.querySelector("#north-america");
  } else if(guess === "south america") {
    img = document.querySelector("#south-america");
  } else if(guess === "antarctica") {
    img = document.querySelector("#antarctica");
  } else if(guess === "europe") {
    img = document.querySelector("#europe");
  } else if(guess === "africa") {
    img = document.querySelector("#africa");
  } else if(guess === "australia") {
    img = document.querySelector("#australia");
  } else if(guess === "asia") {
    img = document.querySelector("#asia");
  } else {
    srAlert.innerHTML = guess + " is not a continent."
    return 0;
  }

  if(img.classList.contains("hidden")){
    count += 1;
    img.classList.remove("hidden");
    srAlert.innerHTML = `Yes! ${guess} is a continent. ${count} out of 7`;
  } else {
    srAlert.innerHTML = guess + " has already been selected.";
  }
 
}

textInput.addEventListener('change', checkContinent);


// [Extension] Part 4 - Change the background color
// use is_dark(#07f3a1), for example to check if a color is "dark"
const colorInput = document.querySelector("#color");
const checkbox = document.querySelector("#human");
const submitButton = document.querySelector("#submit");
const body = document.querySelector("body");

const changeBackground = (e) => {
  e.preventDefault();
  const srAlert = document.querySelector("#sr-background-alert");
  console.log("color", colorInput.value);
  console.log("is_checked", checkbox.checked);

  if(checkbox.checked) {
    body.style.background = colorInput.value;
    if(is_dark(colorInput.value)) {
      body.style.color = 'white';
    } else {
      body.style.color = 'black';
    }
    checkbox.checked = false;
    srAlert.innerHTML = "Background color changed to " + colorInput.value;
  } else {
    srAlert.innerHTML = "Background color not changed. Please, select 'I'm not a robot'."
  }
}

submitButton.addEventListener('click', changeBackground);
Assignment: "Unit2-MiniProject"

const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let jersey = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against boroughs.
  if (currentAnswer === "Manhattan") {
    outputBox.innerHTML += `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`;
    score += 1;
  } else if (currentAnswer === "Brooklyn") {
    outputBox.innerHTML += `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`;
    score += 1;
  } else if (currentAnswer === "Bronx" || currentAnswer === "The Bronx") {
    outputBox.innerHTML += `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`;
    score += 1;
  } else if (currentAnswer === "Queens") {
    outputBox.innerHTML += `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`;
    score += 1;
  } else if (currentAnswer === "Staten Island") {
    outputBox.innerHTML += `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`;
    score += 1;
  } else if (currentAnswer === "Jersey City") {
    outputBox.innerHTML += `<h3>Jersey City</h3><p>You found the sixth Borough!</p>`;
    jersey = true;
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a NYC Borough.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

const checkScore = () => {
  if (score === 5) {
    statusBox.innerHTML = "Congratulations, you found all five boroughs!";
  }
  if (score === 5 && jersey) {
    statusBox.innerHTML =
      "A true New Yorker! All five Boroughs and our neighbors in Jersey City.";
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer);