// Meaning
// a quest for meaning

var learned = {}

function init() {
  var commands = new Array();
  commands.push("x is y");
  commands.push("what is x?");
  commands.push("is x y?");
  commands.push("x is y and z");
  for (i = 0; i < commands.length; i++) {
    document.getElementById('command-list').innerHTML +=
      "<li>" + commands[i] + "</li>";
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
  items = tokenize(phrase);

  for (i = 0; i < items.length; i++) {
 
    // put each item into learned storage
    // (not actually learned yet)
    // but count number of times item is used
    // and put in "weight" field...
    // this lets program know what words are "important"
    if (learned[items[i]]) {
      if (learned[items[i]]["weight"]) {
        learned[items[i]]["weight"] += 1;
      } else {
        var key = "weight";
        var obj = {};
        obj[key] = 1;
        learned[items[i]] = obj;
      }
    } else {
      var key = "weight";
      var obj = {};
      obj[key] = 1;
      learned[items[i]] = obj;
    }
    
    // command: query
    if (items[i] == "what" && items[i+1] == "is"
      && items[items.length-1].slice(-1) == "?") {
      subject = items[i+2].slice(0,-1);
      if (learned[subject]) {
        result = learned[subject]["meaning"].join(" and ");
      } else {
        // meaning not yet learned
        result = ask("hmm... what is " + subject + "?");
      }
      break;
    } else if (items[i] == "is") {
      // command: define
      if (i != 0) {
        // AND
        if (items[i+2] == "and") {
          if (learned[items[i-1]] = {"meaning": [items[i+1], items[i+3]]}) {
            result = true;
          } else {
            result = false;
          }
        } else {
          if (learned[items[i-1]] = {"meaning": [items[i+1]]}) {
            result = true;
          } else {
            result = false;
          }
        }
        if (learned[items[i-1]]["weight"]) {
          learned[items[i-1]]["weight"] += 1;
        } else {
          learned[items[i-1]]["weight"] = 1;
        }
      // command: query
      } else if (i == 0) {
        items[i+2] = items[i+2].replace("?", "");  // take out ? marks
        if (learned[items[i+1]]) {
          if (learned[items[i+2]]) {
            if (learned[items[i+1]]["meaning"].join(",") == learned[items[i+2]]["meaning"].join(",")) {
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

function tokenize(input) {
  var items = input.split(" ");
  return items;
}

function main() {
  input = document.getElementById("input").value;
  result = parse(input);
  output(result);
  // add to running log
  document.getElementById("log").innerHTML +=
    "> " + input + " -- " + result + "<br>";
  document.getElementById("input").value = "";    // clear input textbox
  console.log(learned);   // display what we've learned
}