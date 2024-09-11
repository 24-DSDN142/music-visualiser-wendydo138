
let imgArray = [];
let firstRun = true;
// let transitionToNextScreen = 1000;
// let font;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // preload();
  loadImages();

  // This part was moved to the 3rd scene
  // // 1st scene
  // if (counter < (transitionToNextScreen - 30)) {
  //   background(0);
  //   scale(0.7);
  //   drawEyes(counter);

  //   if (300 < counter) {
  //     background(255, 204, 255);
  //     drawCircles(bass, other);
  //     drawEyes(counter);
  //   }
  // }

  if (counter < 2186) { // 1st scene
    background(255, 204, 255);
    drawHeartBackground(drum);
    scale(0.15);
    drawGirls(counter);
    scale(1 / 1.5);
    drawLogo(vocal, counter);
  } else { // 2nd & 3rd scene
    scale(2 / 3);
    if (
      (counter >= 2186 && counter <= 2254) ||
      (counter >= 2397 && counter <= 2469) ||
      (counter >= 2631 && counter <= 2683) ||
      (counter >= 2846 && counter <= 2898) ||
      (counter >= 5155 && counter <= 5217) ||
      (counter >= 5383 && counter <= 5419)
    ) { // New hair
      background(255);
      image(imgArray[11], 150, 0);
      drawLyrics(words);
    } else if (
      (counter >= 2255 && counter <= 2307) ||
      (counter >= 2470 && counter <= 2522) ||
      (counter >= 2684 && counter <= 2741) ||
      (counter >= 2899 && counter <= 2952) ||
      (counter >= 5218 && counter <= 5257) ||
      (counter >= 5420 && counter <= 5441)
    ) { // New tee
      background(255);
      image(imgArray[12], 150, 0);
      drawLyrics(words);
    } else if (
      (counter >= 2308 && counter <= 2396) ||
      (counter >= 2523 && counter <= 2630) ||
      (counter >= 2742 && counter <= 2845) ||
      (counter >= 2953 && counter <= 3037) ||
      (counter >= 5258 && counter <= 5382)
    ) { // New jeans
      background(0);
      image(imgArray[13], 150, 0);
      drawLyrics(words);
    } else {
      scale(3 / 2);
      let counterMap = counter - 3037
      background(0);
      scale(0.7);
      drawEyes(counterMap);
      if (300 < counterMap) {
        background(255, 204, 255);
        drawCircles(bass, other);
        // drawEyes(counter);
      }
    }
  }
}

// function add_to_history(history, d) {
//   history.push(d);
//   if(history.length >= (width-1)/4) {
//     history.shift();
//   }
// }

// This part was removed since i couldn't find a way to import new font
// function preload() {
//   font = loadFont('/assets/Roboto-Regular.otf');
// }

function loadImages() { // load initial images
  if (firstRun) {
    rectMode(CENTER);
    imgArray.push(loadImage('1.png')); // left-most girl
    imgArray.push(loadImage('2.png')); // left girl
    imgArray.push(loadImage('3.png')); // center girl
    imgArray.push(loadImage('4.png')); // right girl
    imgArray.push(loadImage('5.png')); // right-most girl
    imgArray.push(loadImage('6.png')); // logo
    imgArray.push(loadImage('7.png')); // left-most eyes
    imgArray.push(loadImage('8.png')); // left eyes
    imgArray.push(loadImage('9.png')); // center eyes
    imgArray.push(loadImage('10.png')); // right eyes
    imgArray.push(loadImage('11.png')); // right-most eyes
    imgArray.push(loadImage('12.png')); // new hair
    imgArray.push(loadImage('13.png')); // new tee
    imgArray.push(loadImage('14.png')); // new jeans
    firstRun = false
  }
}

function drawEyes(counter) { // draw eyes
  if (0 < counter) {
    image(imgArray[6], -150, 0);
  }
  if (60 <= counter) {
    image(imgArray[7], 100, -200);
  }
  if (120 <= counter) {
    image(imgArray[8], 400, -100);
  }
  if (180 <= counter) {
    image(imgArray[9], 50, 200);
  }
  if (240 <= counter) {
    image(imgArray[10], 350, 100);
  }
}

function drawCircles(bass, other) { // draw background circles that based on 'bass' and 'other'
  let numCircles = 20;
  let centerX = 400 / 0.7;
  let centerY = 300 / 0.7;
  let maxRadius = map(bass, 0, 100, 50 / 0.7, 550 / 0.7);
  let colorIntensity = map(other, 0, 100, 100, 255);
  let spacingFactor = map(other, 0, 100, 0.5, 2);
  let sizeFactor = map(other, 0, 100, 0.5, 2);

  noFill();
  strokeWeight(2);
  for (let i = 0; i < numCircles; i++) {
    stroke(255, colorIntensity - i * 20, colorIntensity);
    let radius = map(i, 0, numCircles, 50 * sizeFactor, maxRadius);
    let offset = i * spacingFactor * 30 / 0.7;
    ellipse(centerX, centerY, radius * 2 + offset);
  }
}

function drawHeartBackground(drum) { // Draw hearts background like Powerpuff Girls for New jeans
  let centerX = width / 2;
  let centerY = height / 2 - 250;

  for (let i = 0; i < 20; i++) {
    let scale = 15 + i * 39;
    let alpha = map(drum, 0, 100, 50, 255);
    fill(255, 0, 150, alpha - i * 15);
    heart(centerX, centerY, scale + i * 20);
  }
}

function heart(x, y, size) { // Draw hearts
  stroke(255, 204, 255);
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 3, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 3, x, y);
  endShape(CLOSE);
  stroke(0);
}

function drawGirls(counter) { // Draw girls
  drawLeftMostGirl(counter);
  drawLeftGirl(counter);
  drawCenterGirl(counter);
  drawRightGirl(counter);
  drawRightMostGirl(counter);
}

function drawLeftMostGirl(counter) {
  if (0 <= counter && counter <= 60) {
    for (let i = 0; i < counter; i++) {
      noStroke();
      fill(map(i, counter, 0, 93, 244), map(i, counter, 0, 207, 255), map(i, counter, 0, 76, 244));
      rect(150 / 0.15, map(i, 0, 100, 600 / 0.15, 0) + 100 / 0.15, 70 / 0.15, 50 / 0.15);
    }
    image(imgArray[0], 80 / 0.15, map(counter, 0, 100, 600 / 0.15, 0));
    fill(255);
  } else if (0 < counter) {
    image(imgArray[0], 80 / 0.15, map(60, 0, 100, 600 / 0.15, 0));
  }
}

function drawLeftGirl(counter) {
  if (60 < counter && counter <= 120) {
    for (let i = 0; i < counter - 50; i++) {
      noStroke();
      fill(map(i, counter - 50, 0, 255, 255), map(i, counter - 50, 0, 242, 255), map(i, counter - 50, 0, 0, 255));
      rect(270 / 0.15, map(i, 0, 100, 600 / 0.15, 0) + 100 / 0.15, 70 / 0.15, 50 / 0.15);
    }
    image(imgArray[1], 200 / 0.15, map(counter, 61, 150, 600 / 0.15, 0));
  } else if (60 < counter) {
    image(imgArray[1], 200 / 0.15, map(120, 61, 150, 600 / 0.15, 0));
  }
}

function drawCenterGirl(counter) {
  if (120 < counter && counter <= 180) {
    for (let i = 0; i < counter - 115; i++) {
      noStroke();
      fill(map(i, counter - 115, 0, 202, 255), map(i, counter - 115, 0, 131, 255), 255);
      rect(410 / 0.15, map(i, 0, 100, 600 / 0.15, 0) + 60 / 0.15, 70 / 0.15, 50 / 0.15);
    }
    image(imgArray[2], 350 / 0.15, map(counter, 121, 200, 600 / 0.15, 0));
  } else if (120 < counter) {
    image(imgArray[2], 350 / 0.15, map(167, 121, 180, 600 / 0.15, 0));
  }
}

function drawRightGirl(counter) {
  if (180 < counter && counter <= 240) {
    for (let i = 0; i < counter - 150; i++) {
      noStroke();
      fill(map(i, counter - 150, 0, 60, 255), map(i, counter - 150, 0, 114, 255), map(i, counter - 150, 0, 181, 255));
      rect(520 / 0.15, map(i, 0, 100, 600 / 0.15, 0) + 250 / 0.15, 70 / 0.15, 50 / 0.15);
    }
    image(imgArray[3], 460 / 0.15, map(counter, 181, 270, 600 / 0.15, 0));
  } else if (180 < counter) {
    image(imgArray[3], 460 / 0.15, map(240, 181, 270, 600 / 0.15, 0));
  }
}

function drawRightMostGirl(counter) {
  if (240 < counter && counter <= 300) {
    for (let i = 0; i < counter - 200; i++) {
      noStroke();
      fill(map(i, counter - 200, 0, 255, 255), map(i, counter - 200, 0, 165, 255), map(i, counter - 200, 0, 234, 255));
      rect(660 / 0.15, map(i, 0, 100, 600 / 0.15, 0) + 300 / 0.15, 70 / 0.15, 50 / 0.15);
    }
    image(imgArray[4], 585 / 0.15, map(counter, 240, 340, 600 / 0.15, 0));
  } else if (240 < counter) {
    image(imgArray[4], 585 / 0.15, map(300, 240, 340, 600 / 0.15, 0));
  }
}

function drawLogo(vocal, counter) { // Draw logo based on 'vocal'
  let vocalMap = map(vocal, 0, 100, 0.8, 2.5);
  if (300 < counter) {
    scale(vocalMap);
    image(imgArray[5], (4000 - 675 * vocalMap) / vocalMap, (3000 - 75 * vocalMap) / vocalMap, 1350, 1350, 0, 0);
    scale(1/vocalMap);
  }
}

function drawLyrics(words) { // Draw lyrics based on 'words' file
  textAlign(CENTER);
  textSize(100);
  textFont('Arial');
  fill('skyblue');
  stroke('skyblue');
  strokeWeight(4);
  text(words, 600, 800);
}