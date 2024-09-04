
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let imgArray = []
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  let firstRun = true;
  if (firstRun) {
    rectMode(CENTER);
    imgArray.push(loadImage('1.png'));
    imgArray.push(loadImage('2.png'));
    imgArray.push(loadImage('3.png'));
    imgArray.push(loadImage('4.png'));
    imgArray.push(loadImage('5.png'));
    imgArray.push(loadImage('6.png'));
    firstRun = false
  }
  
  background(255);
  scale(0.15);
  // counter
  if (counter <= 60) {
    image(imgArray[0], 0, map(counter, 0, 100, 600 / 0.15, 0));
  } else {
    image(imgArray[0], 0, map(60, 0, 100, 600 / 0.15, 0));
  }

  if (60 < counter && counter <= 120) {
    image(imgArray[1], 120 / 0.15, map(counter, 61, 150, 600 / 0.15, 0));
  } else if (60 < counter) {
    image(imgArray[1], 120 / 0.15, map(120, 61, 150, 600 / 0.15, 0));
  }

  if (120 < counter && counter <= 167) {
    image(imgArray[2], 240 / 0.15, map(counter, 121, 180, 600 / 0.15, 0));
  } else if (120 < counter) {
    image(imgArray[2], 240 / 0.15, map(167, 121, 180, 600 / 0.15, 0));
  }

  if (167 < counter && counter <= 215) {
    image(imgArray[3], 345 / 0.15, map(counter, 168, 240, 600 / 0.15, 0));
  } else if (171 < counter) {
    image(imgArray[3], 345 / 0.15, map(215, 168, 240, 600 / 0.15, 0));
  }

  if (215 < counter && counter <= 266) {
    image(imgArray[4], 470 / 0.15, map(counter, 216, 300, 600 / 0.15, 0));
  } else if (217 < counter) {
    image(imgArray[4], 470 / 0.15, map(266, 216, 300, 600 / 0.15, 0));
  }
  scale(1.5);

  // bass
  if (267 < counter) {
    let bassMap = map(bass, 0, 100, 0.8, 2.5);
    scale(bassMap);
    image(imgArray[5], (2000 - 450 * bassMap) / 1.5 / bassMap, 2200 / 1.5 / bassMap, 900 / 1.5, 900 / 1.5, 0, 0);
  }
  
}