var inputDest = "";
var code = [];

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function remove(element) {
    element.parentNode.removeChild(element);
}

function clear() {
    while (document.getElementsByClassName("code") !== undefined) {
        this.elems = document.getElementsByClassName("code");
        for (var i in this.elems) {
            remove(this.elems[0]);
        }
    }
}

function print(text) {
    this.p = document.createElement("p");
    this.p.innerText = text;
    this.p.className = "code";
    this.br = document.createElement("br");
    this.br.className = "code";
    document.body.appendChild(this.p);
}



function newCommand(name, func) {
    if (this.args[0] == name) {
        eval(func);
    }
}

function printMulti(list) {
    for (var i in list) {
        print(list[i].toString());
    }
}


function runLine(code) {
    this.args = code.split(" ");
    if(this.args[this.args.length-1] != ","){

        newCommand("help",
            `
            print("showing help:")
            print("arguments: <needed> (optional)")
            print("clear - clears the terminal")
            print("unix - shows how many seconds it has been since the first of janurary 1970")
            print("milliunix - shows how many milliseconds it has been since the first of janurary 1970")
            print("date - shows the current date")
            print("rand <min> <max> - prints a random number between <min> and <max>.")
            print("exit - leave the terminal and go back to the last page.")
            print("yt (id) - opens youtube or goes to the video with the id (id)")
            print("ytsearch <query> - search for <query> on youtube")
            print("google (query) - opens google or searches for (query)")
            print("sgoogle (query) - opens google or safesearches for (query)")
            print("eval <js> - execute any javascript. NOTE: THIS COMMAND HAS THE POWER TO BREAK THE TERMINAL. USE WITH CARE.")

        `)
        newCommand("sudo", `print("You're already root!")`)
        newCommand("stanloona", `print("yes please")`)
        newCommand("eval", "eval(this.args.slice(1).join(' '))")
        newCommand("clear", "clear()")
        newCommand("milliunix", "print(Date.now())")
        newCommand("unix", "print(Math.round(Date.now() / 1000))")
        newCommand("date", "print(moment().format('MMMM Do YYYY'))")
        newCommand("time", "print(moment().format('h:mma'))")
        newCommand("rand", "print(getRandomInt(this.args[1], this.args[2]))")
        newCommand("exit", "history.go(-1)")
        newCommand("sitewarp", "window.location.href = this.args[1] + '.html'")
        newCommand("ytsearch", `window.open("https://www.youtube.com/results?search_query=" + this.args.slice(1).join(" "))`)
        newCommand("yt", `window.open("https://www.youtube.com/watch?v=" + this.args[1])`)
        newCommand("google", `window.open("https://google.com/search?q=" + this.args.slice(1).join(" "))`)
        newCommand("sgoogle", `window.open("https://google.com/search?safe=strict&q=" + this.args.slice(1).join(" "))`)
        newCommand("rollcreds",
        `
            print("Harrinux v4.0-beta")
            print("created by: harry")
            print("modules used:")
            print("moment.js by the moment.js team")
            
        `)
        newCommand("pastnames", `
        
            print("current: v4.0-beta 'Galaxy'")
            print("v3.0-beta 'Charllie'")
            print("v2.0-beta 'Monique'")
            print("v1.0-beta 'Harriet'")
        
        `)
        

    }else{
        [code.length] = this.args.slice(0, this.args.length - 1).join(" ");

        
    }
}

function runCode(code) {
    for (var i in this.lines){
      runLine(this.lines[i]);
    }
}

function createinput(prompt) {
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.id = "input";
    this.input.className = "code";
    this.input.autofocus = true;
    this.input.size = 115;
    this.input.maxLength = 115;
    this.input.placeholder = prompt;
    this.input.onblur = function() {
        document.getElementById("input").focus();
    };
    this.input.onchange = function() {
        inputDest = document.getElementById("input").value;
        remove(document.getElementById("input"));
        print(inputDest);
        this.data = runLine(inputDest);
        if(this.data !== undefined){
          print(this.data);
        }
    };
    document.body.appendChild(this.input);
}

printMulti(["Loaded version 4.1-beta 'Galaxy'"]);

window.setInterval(function() {
    if (document.getElementById("input") === null) {
        createinput("");
    }
    document.getElementById("input").focus();
}, 100);