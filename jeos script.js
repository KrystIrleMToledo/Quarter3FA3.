function generate() {
    return Math.ceil(Math.random() * 20); 
}

function getletter(n) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return n >= 1 && n <= 26 ? alphabet[n - 1] : "Invalid";
}

function wow() {
    let e = generate();
    let hs = generate();
    let c = generate();

    document.getElementById("e").innerHTML = e + " Awards";
    document.getElementById("hs").innerHTML = hs + " Awards";
    document.getElementById("c").innerHTML = c + " Awards";

    let m = Math.max(e, hs, c);
    let pn = getletter(e);
	
	var TMins = hs * c;
    var h = Math.floor(TMins / 60);
    var min = TMins % 60;
    var final = "His latest competetion lasted " + TMins + " minutes or " + h + " hours and " + min + " minutes.";

    document.getElementById("max").innerHTML = "The most awards he received was " + m;
    document.getElementById("name").innerHTML = "His partner's name during the competition starts with the letter " + pn;
	document.getElementById("comp").innerHTML = final;
	
}

window.onload = wow;
