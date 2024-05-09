function execute(a, b, c) {

    
    let aa = parseFloat(a);
    let bb = parseFloat(b);
    let cc = parseFloat(c);

    let valid = isTriangle(aa, bb, cc);
    //TODO
    //show results

    if (valid) {
        let typeTriangle = typeOfTriangle(aa, bb, cc);
        //TODO
        //show results

        let area2 = area(aa, bb, cc);
        //TODO
        //show results

        let per = perimeter(aa, bb, cc);
        //TODO
        //show results

        let h = heights(aa, bb, cc);
        //TODO
        //show results

        let a = angles(aa, bb, cc);
        //TODO
        //show results

        let ir = inradius(aa, bb, cc);
        //TODO
        //show results

        drawTriangle(aa, bb, cc);
    } else {
        clearCanvas();
    }
}

function isTriangle(a, b, c) {
    //TODO
    return true;
}


function typeOfTriangle(a, b, c) {
    //TODO
    return "";
}


function area(a, b, c) {
    //TODO
    return 0;
}



function perimeter(a, b, c) {
    //TODO
    return 0;
}


function show(title, text = "", end = "") {
    //TODO
    return "";
}

function heights(a, b, c) {
    //TODO
    let h = [];
    return h;

}


function angles(a, b, c) {
    //TODO
    let ang = [];
    return ang;
}


function inradius(a, b, c) {
    //TODO
    return 0;

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

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let height = ((2 * area) / sides[2]).toPrecision(5);
    let slopeOfBase = Math.sqrt(Math.pow(sides[0], 2) - Math.pow(height, 2));

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


