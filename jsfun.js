var clicks = 0;

function buttonCounter() {
    clicks++
    document.getElementById('buttonclicks').innerHTML = `You have clicked the button ${clicks} times!`
    
    switch (clicks) {
        case 10:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 1: 10 clicks";
            document.body.appendChild(chievo);
            break;
        case 25:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 2: 25 clicks";
            document.body.appendChild(chievo);
            break;
        case 50:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 3: 50 clicks";
            document.body.appendChild(chievo);
            break;
        case 100:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 4: 100 clicks!";
            document.body.appendChild(chievo);
            break;
        case 500:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 5: 500 clicks!!";
            document.body.appendChild(chievo);
            break;
        case 1000:
            chievo = document.createElement("p");
            chievo.innerHTML = "Milestone 6: 1000 clicks!?";
            document.body.appendChild(chievo);
            tux = document.createElement("img")
            tux.src = "its tux.png"
            document.body.appendChild(tux);
            break;
    }
}