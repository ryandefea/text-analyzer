// Business Logic

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
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

function numberOfOccurrencesInText(word, text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (word === element) {
      wordCount++
    }
  });
  return wordCount;
}

// function numberOfOccurrencesInText(word, text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   const wordArray = text.split(" ");
//   let wordCount = 0;
//   let offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let censoredWord = ["Offensive Word"];
//   wordArray.forEach(function(element) {
//     if (word === element.includes(offensiveWord)) {
//       offensiveWord.replace(censoredWord);
//     }
//     return offensiveWord;
//   })
// });

// UI Logic
    
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});
