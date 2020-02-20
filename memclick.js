var t = 1000;

var Bits = 0;
var Bytes = 0;
var Biters = 0;
var Byters = 0;
var r2Byters = 0;
var Overclockers = 0;

function BitClick(number) {
    Bits = Bits + number;
    document.getElementById("Bits").innerHTML = Bits;
};

function ByteGet(number) {
    Bytes = Bytes + number;
    document.getElementById("Bytes").innerHTML = Bytes;
};

function convertBitToByte() {
    if (Bits >= 100) {
        ByteGet(1);
        BitClick(-100);
    };
};



function buyBiter() {
    var BiterCost = Math.floor(10 * Math.pow(1.1, Biters));     //works out the cost of this Biter
    if (Bits >= BiterCost) {                                    //checks that the player can afford the Biter
        Biters = Biters + 1;                                   //increases number of Biters
        Bits = Bits - BiterCost;                          //removes the Bits spent
        document.getElementById('Biters').innerHTML = Biters;  //updates the number of Biters for the user
        document.getElementById('Bits').innerHTML = Bits;  //updates the number of Bits for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, Biters));       //works out the cost of the next Biter
    document.getElementById('BiterCost').innerHTML = nextCost;  //updates the Biter cost for the user
};


function buyByter() {
    var ByterCost = Math.floor(20 * Math.pow(1.1, Byters));     //works out the cost of this Byter
    if (Bits >= ByterCost) {                                    //checks that the player can afford the Byter
        Byters = Byters + 1;                                   //increases number of Byters
        Bits = Bits - ByterCost;                          //removes the Bits spent
        document.getElementById('Byters').innerHTML = Byters;  //updates the number of Byters for the user
        document.getElementById('Bits').innerHTML = Bits;  //updates the number of Bits for the user
    };
    var nextCost = Math.floor(20 * Math.pow(1.1, Byters));       //works out the cost of the next Byter
    document.getElementById('ByterCost').innerHTML = nextCost;  //updates the Byter cost for the user
};



function buyr2Byter() {
    var r2ByterCost = Math.floor(50 * Math.pow(1.1, r2Byters));     //works out the cost of this r2Byter
    if (Bits >= r2ByterCost) {                                    //checks that the player can afford the r2Byter
        r2Byters = r2Byters + 1;                                   //increases number of r2Byters
        Bits = Bits - r2ByterCost;                          //removes the Bytes spent
        document.getElementById('r2Byters').innerHTML = r2Byters;  //updates the number of r2Byters for the user
        document.getElementById('Bytes').innerHTML = Bits;  //updates the number of Bytes for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.1, r2Byters));       //works out the cost of the next r2Byter
    document.getElementById('r2ByterCost').innerHTML = nextCost;  //updates the r2Byter cost for the user
};



function buyOverclocker() {
    var OverclockerCost = Math.floor(100 * Math.pow(1.12, Overclockers));     //works out the cost of this r2Byter
    if (Bytes >= OverclockerCost) {                                    //checks that the player can afford the r2Byter
        Overclockers = Overclockers + 1;                                   //increases number of r2Byters
        Bytes = Bytes - OverclockerCost;                          //removes the Bytes spent
        document.getElementById('Overclockers').innerHTML = Overclockers;  //updates the number of r2Byters for the user
        document.getElementById('Bytes').innerHTML = Bytes;  //updates the number of Bytes for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.12, Overclockers));       //works out the cost of the next r2Byter
    document.getElementById('OverclockerCost').innerHTML = nextCost;  //updates the r2Byter cost for the user
};

function ByterFuse() {
    var neededForFuse = 5;     //works out the cost of this r2Byter
    if (Byters >= neededForFuse) {                                    //checks that the player can afford the r2Byter
        r2Byters = r2Byters + 1;                                 //increases number of r2Byters
        Byters = Byters - neededForFuse;                          //removes the Bytes spent
        document.getElementById('r2Byters').innerHTML = r2Byters;  //updates the number of r2Byters for the user
        document.getElementById('Byters').innerHTML = Byters;  //updates the number of Bytes for the user
    };
};


//particle object
function Particle(x, y) {

    this.type = "circle";
    this.x = x;
    this.y = y;
    this.size = 0.5;
    this.opacity = rand(0.5, 10);
    this.moveSpeed = this.opacity / 10 * 2;
    this.modifier = 0;
};

Particle.prototype.draw = function () {
    this.x -= (this.moveSpeed + this.modifier);
    if (this.x < 0) this.x = screenWidth;
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = this.opacity / 10;
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.restore();

};


window.setInterval(function () {

    BitClick(Biters);
    BitClick((Byters * 2));
    ByteGet(r2Byters);


}, (t - (Overclockers * 100)));