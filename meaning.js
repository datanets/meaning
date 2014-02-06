// Meaning
// a quest for meaning

var learned = {}

function init() {
    var commands = new Array();
    commands.push("x is y");
    commands.push("is x y?");
    commands.push("what is x?");
    for (i = 0; i < commands.length; i++) {
        document.getElementById('command-list').innerHTML += "<li>" + commands[i] + "</li>";
    }
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
                result = "sorry, I don't know what " + subject + " is...";
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
                if (learned[items[i+1]]) {
                    if (learned[items[i+2]]) {
                        if (learned[items[i+1]] == learned[items[i+2]]) {
                            result = "yes, they are equal";
                        } else {
                            result = "no, they are not equal";
                        }
                    } else {
                        result = "sorry, I don't know what " + items[i+2] + " is...";
                    }
                } else {
                    result = "sorry, I don't know what " + items[i+1] + " is...";
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