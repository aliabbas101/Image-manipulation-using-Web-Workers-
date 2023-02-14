const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const image = new Image();
image.crossOrigin = "Anonymous";
console.log("hello world");
image.src = 'https://raw.githubusercontent.com/aliabbas101/Image-manipulation-using-Web-Workers-/main/highres.jpg';
image.onload = () => {
  // rendering image on canvas
  context.drawImage(image, 0,0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const data = imageData.data;

  // Manipulating image by looping on each pixel
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // invert the red channel
  }

  context.putImageData(imageData, 0, 0);
};
