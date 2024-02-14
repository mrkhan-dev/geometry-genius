function triangleArea() {
  // get triangle base
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  //   console.log(base);
  // get triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const tHeightText = triangleHeightInput.value;
  const height = parseFloat(tHeightText);
  //   console.log(height);

  const tArea = 0.5 * base * height;

  //display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = tArea;
}

//Calculate rectangle area
function rectangleArea() {
  // get rectangle width
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectWidthText);

  //   get rectangle length
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectLengthText);

  const rectArea = width * length;
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectArea;
}
