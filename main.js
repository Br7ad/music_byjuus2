let capture;

function setup() {
  // Criar a tela e centralizá-la
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture = createCapture(VIDEO);
capture.size(640, 480);
capture.hide(); // Ocultar o elemento HTML extra criado
capture.parent('webcamContainer');
capture = createCapture(VIDEO);poseNet = ml5.poseNet(capture, modelLoaded);
poseNet.on('pose', gotPoses);


}

function draw() {
  // Desenhar a visualização da webcam na tela
  image(capture, 0, 0, 640, 480);
  background(200);
  image(capture, 0, 0, 640, 480);

  drawPoses();
}
function gotPoses(results) {
    poses = results; 
}
function drawPoses() {
    // Desenhar as poses detectadas
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i].pose;
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        if (keypoint.score > 0.2) {
          fill(255, 0, 0);
          noStroke();
          ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        }
      }
    }
  }

