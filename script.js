function calculateAngle(a, b, c) {
  let radians = Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
  let angle = Math.abs(radians * 180 / Math.PI);
  if (angle > 180) {
    angle = 360 - angle;
  }
  return angle;
}
  
  document.addEventListener("DOMContentLoaded", function(event) { 
  
    let poseLandmarker;
    let enableWebcamButton;
    let webcamRunning = false;
    const videoWidth = "480px";
    const videoHeight = "480px";
    
    const createPoseLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );
      poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`,
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        numPoses: 2
      });
    };
    createPoseLandmarker();
    
      
    const video = document.getElementById("webcam");
    const canvasElement = document.getElementById(
      "output_canvas"
    );

    const canvasCtx = canvasElement.getContext("2d");
    const drawingUtils = new DrawingUtils(canvasCtx);
    
    const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;
    
    if (hasGetUserMedia()) {
      enableWebcamButton = document.getElementById("webcamButton");
      enableWebcamButton.addEventListener("click", enableCam);
    } else {
      console.warn("getUserMedia() is not supported by your browser");
    }
    
    function enableCam(event) {
      if (!poseLandmarker) {
        console.log("Wait! poseLandmaker not loaded yet.");
        return;
      }
    
      if (webcamRunning === true) {
        webcamRunning = false;
        enableWebcamButton.innerText = "ENABLE PREDICTIONS";
      } else {
        webcamRunning = true;
        enableWebcamButton.innerText = "DISABLE PREDICTIONS";
      }
    
      const constraints = {
        video: true
      };
    
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", predictWebcam);
      });
    }
    let stage = null;
    let counter = 0;

    let lastVideoTime = -1;
    function predictWebcam() {
      canvasElement.style.height = videoHeight;
      video.style.height = videoHeight;
      canvasElement.style.width = videoWidth;
      video.style.width = videoWidth;
      let startTimeMs = performance.now();
      if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;
        poseLandmarker.detectForVideo(video, startTimeMs, (result) => {
          

          canvasCtx.save();
          canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
          for (const landmark of result.landmarks) {
            drawingUtils.drawLandmarks(landmark, {
              radius: (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1)
            });
            drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
          }
          canvasCtx.restore();
          
          if (result.landmarks[0] && result.landmarks[0].length >= 16) {
              const shoulder = [result.landmarks[0][11].x, result.landmarks[0][11].y];
            const elbow = [result.landmarks[0][13].x, result.landmarks[0][13].y];
            const wrist = [result.landmarks[0][15].x, result.landmarks[0][15].y];
            
            let angle = calculateAngle(shoulder, elbow, wrist);

            if (angle > 160) {
              stage = "down";
            } 
            if (angle < 30 && stage == "down") {
              stage = "up";
              counter += 1;
              console.log(counter);
            }
            
          }
          
          
        });
        

      }
    
      if (webcamRunning === true) {
        window.requestAnimationFrame(predictWebcam);
      }
    }
  });
