// Meaning
// a quest for meaning

var learned = {}

function init() {
  var commands = new Array();
  commands.push("x is y");
  commands.push("what is x?");
  commands.push("is x y?");
  for (i = 0; i < commands.length; i++) {
      document.getElementById('command-list').innerHTML += "<li>" + commands[i] + "</li>";
  }
}

function ask(question) {
  output(question);
  return question;
}

function output(output) {
  document.getElementById("output").value = output;
}

function parse(phrase) {
  var result = "";
  var items = phrase.split(" ");
  
  for (i = 0; i < items.length; i++) {
    if (items[i] == "what" && items[i+1] == "is" && items[items.length-1].slice(-1) == "?") {
      subject = items[i+2].slice(0,-1);
      if (learned[subject]) {
        result = learned[subject];
      } else {
        // meaning not yet learned
        result = ask("hmm... what is " + subject + "?");
      }
      break;
    } else if (items[i] == "is") {
      if (i != 0) {
        if (learned[items[i-1]] = items[i+1]) {
          result = true;
        } else {
          result = false;
        }
      } else if (i == 0) {
        items[i+2] = items[i+2].replace("?", "");  // take out ? marks
        if (learned[items[i+1]]) {
          if (learned[items[i+2]]) {
            if (learned[items[i+1]] == learned[items[i+2]]) {
              result = true;
            } else {
              result = false;
            }
          } else {
            result = ask("hmm... what is " + items[i+2] + "?");
          }
        } else {
          result = ask("hmm... what is " + items[i+1] + "?");
        }
      } else {
      }
    }
  }
  return result;
}

function main() {
  input = document.getElementById("input").value;
  result = parse(input);
  output(result);
  document.getElementById("input").value = "";    // clear input textbox
  console.log(learned);   // display what we've learned
}