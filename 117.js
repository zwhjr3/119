array_1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

random_no = Math.floor((Math.random()*array_1.length)+1);


Element_of_array = array_1[random_no];

console.log(random_no);

sketch = random_no;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function classifyCanvas() {
    classifier.canvas(canvas, gotResult);
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {
    background("white");
}

function draw() {
    strokeWeight(15);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'your sketch:' +results[0].label;
    document.getElementById('confidence').innerHTML = 'confidence is' +Math.round(results[0].confidence * 100) + '%';
}