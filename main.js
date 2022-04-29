function preload() {

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
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}