// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

//-----Practice- WIP---------//
//=====================================================================//
function mostUsedWords(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  let sameWordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (element === word) {
      sameWordCount ++;
    }
  });
  return 
}

function topTalliedWords(text) {
  let sentence = text.split(" ");
  let sortedSentence = sentence.sort();
  let sameWordCount = 0;
  word = sentence[0]
  output = []
}

sortedSentence.forEach(function(element) {
  if (element === word) {
    sameWordCount ++;
  } else {
    output.push(word + ": " + sameWordCount)
    word = element
    sameWordCount = 1
  }
}

//============================================================================//

function wordCounter(text) {
  if (text.trim().length === 0) {
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

// UI Logic
function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
    htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
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