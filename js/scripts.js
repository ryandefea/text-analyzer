// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function howManyTimesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let commonCount = 0;
    
    const wordArray = text.split(" ");
    // let sentence = ["Hi there hey yo hi hi yay yo whoa there whoa yay"];
    let commonWords = "";
    wordArray.forEach(function(element, index) {
           if (element.includes(word)) {
             commonCount++;
      }
    
  });
  return commonCount
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + word + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    console.log(i);
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}


$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
// function numberOfOccurrencesInText(word, text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   const wordArray = text.split(" ");
//   let wordCount = 0;
//   let offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let censoredWord = "censored Word";
//   wordArray.forEach(function(element, index) {
//     if (element.includes(word)) {
//       console.log(wordArray);
//       wordArray[index] = censoredWord;
//     }
//   })
//   return wordArray;
// };
