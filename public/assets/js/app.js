function execute(a, b, c) {

    document.getElementById("result").innerHTML = "";
    //drawWhite();
    let aa = parseFloat(a);
    let bb = parseFloat(b);
    let cc = parseFloat(c);

    let valid = isTriangle(aa, bb, cc);
    if (valid) show("THIS IS A TRIANGLE");
    else show("THIS IS NOT A TRIANGLE");
    

    if (valid) {
        let typeTriangle = typeOfTriangle(aa, bb, cc);
        show(typeTriangle);

        let area2 = area(aa, bb, cc);
        show("Area: ", area2);

        let per = perimeter(aa, bb, cc);
        show("Perimeter: ", per);

        let semi = semiperimeter(aa, bb, cc);
        show("Semiperimeter: ", semi);

        let h = heights(aa, bb, cc);
        
        show("Height A: ", h[0]);
        show("Height B: ", h[1]);
        show("Height C: ", h[2]);

        let a = angles(aa, bb, cc);

        
        show("Angle a: ", a[0], "º");
        show("Angle b: ", a[1], "º");
        show("Angle c: ", a[2], "º");

        let ir = inradius(aa, bb, cc);
        show("Inradius: ", ir);

        let cr  = circumradius(aa, bb, cc);
        show("Circumradius: ", cr);

        let mA  = medianA(aa, bb, cc);
        show("Median A: ", mA);

        let mB  = medianB(aa, bb, cc);
        show("Median B: ", mB);


        let mC  = medianC(aa, bb, cc);
        show("Median C: ", mC);


        drawTriangle(aa, bb, cc);
    } else {
        clearCanvas();
    }
}

function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return false;
    return a + b > c && a + c > b && b + c > a;
}


function typeOfTriangle(a, b, c) {
    let tot = ""; // Type of triangle
    if (!isTriangle(a, b, c)) {
        tot = "ERROR";
    } else if (a == b && a == c) {
        tot = "EQUILATERAL";
    } else if (a == b || a == c || b == c) {
        tot = "ISOSCELES";
    } else {
        tot = "SCALENE";
    }
    return tot;
}


function area(a, b, c) {
    let result = 0;
    switch (typeOfTriangle(a, b, c)) {
        case "EQUILATERAL":
            result = Math.sqrt(3) * Math.pow(a, 2) / 4;
            break;
        case "ISOSCELES":
            if (a == b)
                result = c * Math.sqrt(Math.pow(a, 2) - Math.pow(c, 2) / 4) / 2;
            else if (a == c)
                result = b * Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2) / 4) / 2;
            else // b == c
                result = a * Math.sqrt(Math.pow(b, 2) - Math.pow(a, 2) / 4) / 2;
            break;
        case "SCALENE":
            let s = (a + b + c) / 2;
            result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            break;
        case "ERROR":
            result = -1;
            break;
        default:
            result = -1;
    }
    return result.toFixed(4);
}



function perimeter(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (a + b + c).toFixed(4);
}

function semiperimeter(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (perimeter(a, b, c) / 2).toFixed(4);
}



function show(title, text = "", end = "") {
    let tot = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = tot + "<br />" + title + text + end;
}

function heights(a, b, c) {
    let array = [];
    if (!isTriangle(a, b, c)) array.push(-1);
    else {
        array[0] = ((2 * area(a, b, c)) / a).toFixed(4);
        array[1] = ((2 * area(a, b, c)) / b).toFixed(4);
        array[2] = ((2 * area(a, b, c)) / c).toFixed(4);
    }
    return array;

}


/*
function heightA(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return ((2 * area(a, b, c)) / a).toFixed(4);

}
function heightB(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return ((2 * area(a, b, c)) / b).toFixed(4);

}
function heightC(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return ((2 * area(a, b, c)) / c).toFixed(4);

}
*/

function angles(a, b, c) {
    const array = [];
    if (!isTriangle(a, b, c)) array[0] = -1;
    else {

        let value = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2) ) / ( 2 * b * c);
        value = Math.acos(value);
        value = value * 180 / Math.PI;
        array[0] = (value).toFixed(4);

        value = (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2) ) / ( 2 * a * c);
        value = Math.acos(value);
        value = value * 180 / Math.PI;
        array[1] = (value).toFixed(4);

        value = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) ) / ( 2 * a * b);
        value = Math.acos(value);
        value = value * 180 / Math.PI;
        array[2] = (value).toFixed(4);
    }
    return array;
}

/*
function angleA(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    let value = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2) ) / ( 2 * b * c);
    value = Math.acos(value);
    value = value * 180 / Math.PI;
    return (value).toFixed(4);

}

function angleB(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    let value = (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2) ) / ( 2 * a * c);
    value = Math.acos(value);
    value = value * 180 / Math.PI;
    return (value).toFixed(4);

}

function angleC(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    let value = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) ) / ( 2 * a * b);
    value = Math.acos(value);
    value = value * 180 / Math.PI;
    return (value).toFixed(4);

}
*/

function inradius(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (area(a, b, c) * 2 / perimeter(a, b, c)).toFixed(4);

}

function circumradius(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (a * b * c / ( 2 * inradius(a, b, c) * perimeter(a, b, c))).toFixed(4);

}


function medianA(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (Math.sqrt(2 * b * b + 2 * c * c - a * a) / 2).toFixed(4);;
}

function medianB(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (Math.sqrt(2 * a * a + 2 * c * c - b * b) / 2).toFixed(4);;
}

function medianC(a, b, c) {
    if (!isTriangle(a, b, c)) return -1;
    return (Math.sqrt(2 * a * a + 2 * b * b - c * c) / 2).toFixed(4);;
}

/*
function clearCanvas() {
    var canvas = document.querySelector("#canvas");
    //let canvas = document.getElementById('canvas');
    // if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
*/
function drawWhite() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.stroke();

}
function drawTriangle(a, b, c) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.strokeStyle = "black";
    // Clean canva before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    let canvasSize = [parseInt(canvas.width), parseInt(canvas.height)];

    //Order ascending, smaller first.
    let sides = [a, b, c];
    sides.sort(function (a, b) { return a - b });

    let factor = 200 / sides[0];

    //half perimeter
    let s = perimeter(a, b, c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let height = ((2 * area) / sides[2]).toPrecision(5);
    let slopeOfBase = Math.sqrt(Math.pow(sides[0], 2) - Math.pow(height, 2));
    let aaA = ((2 * area) / a).toFixed(4);
    let bbB = ((2 * area) / b).toFixed(4);
    let ccC = ((2 * area) / c).toFixed(4);



    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo((canvasSize[0] / 2 - 0.5 * sides[2] * factor), (canvasSize[1] / 2 + 0.5 * height * factor));
    ctx.lineTo((canvasSize[0] / 2 + 0.5 * sides[2] * factor), (canvasSize[1] / 2 + 0.5 * height * factor));
    ctx.fillText("c = " + sides[2], (canvasSize[0] / 2 - 0.5 * sides[2] * factor + canvasSize[0] / 2 + 0.5 * sides[2] * factor) / 2, (canvasSize[1] / 2 + 0.5 * height * factor + canvasSize[1] / 2 + 0.5 * height * factor) / 2 + 15);
    ctx.lineTo((canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor), (canvasSize[1] / 2 - 0.5 * height * factor));
    ctx.fillText("b = " + sides[0], (canvasSize[0] / 2 + 0.5 * sides[2] * factor + canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor) / 2 + 50, (canvasSize[1] / 2 + 0.5 * height * factor + canvasSize[1] / 2 - 0.5 * height * factor) / 2);
    ctx.lineTo((canvasSize[0] / 2 - 0.5 * sides[2] * factor), (canvasSize[1] / 2 + 0.5 * height * factor));
    ctx.fillText("a = " + sides[1], (canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor + canvasSize[0] / 2 - 0.5 * sides[2] * factor) / 2 - 50, (canvasSize[1] / 2 - 0.5 * height * factor + canvasSize[1] / 2 + 0.5 * height * factor) / 2);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.moveTo((canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor), (canvasSize[1] / 2 - 0.5 * height * factor));
    ctx.lineTo((canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor), (canvasSize[1] / 2 + 0.5 * height * factor));
    ctx.fillText("h = " + height, (canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor + canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor) / 2, (canvasSize[1] / 2 - 0.5 * height * factor + canvasSize[1] / 2 + 0.5 * height * factor) / 2 + 20);
    ctx.stroke();


}
//drawTriangle(250, 250, 250);


