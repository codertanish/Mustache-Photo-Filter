noseX = 0;
noseY = 0;
img = "";

function preload() {
img = loadImage("https://i.postimg.cc/sfGmHF6X/Mustache-Image.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(img, noseX - 180, noseY - 40, 40, 30);

}

function take_snapshot() {
    save("FilteredPhoto.png");
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}