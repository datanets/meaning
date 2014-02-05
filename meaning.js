// Meaning
// a quest for meaning
//
// phrases:
//  x is y
//  is x y?
// 

var learned = {}

function learn(word) {
}

function parse(phrase) {
    var result = "";
    phrase = phrase.replace("?","");    // take out question marks
    var items = phrase.split(" ");
    
    for (i = 0; i < items.length; i++) {
        if (items[i] == "is") {
            if (i != 0) {
                learned[items[i-1]] = items[i+1];
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

function output(output) {
    document.getElementById("output").value = output;
}

function main() {
    input = document.getElementById("input").value;
    result = parse(input);
    output(result);
    console.log(learned);   // display what we've learned
}