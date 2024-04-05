console.log("hello world");

const images = [
  {
    url: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tokyo during the day",
  },
  {
    url: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tokyo at Night",
  },
  {
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kyoto sunset",
  },
];

//function to create thumbnails
function createThumbnails() {
  const thumbContainer = document.getElementById("thumb-container");

  //loop through each image in the images array
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.classList.add("thumbnail");
    img.addEventListener("click", function () {
      createBigImage(image);
    });
    thumbContainer.appendChild(img);
  });
}

//function to display a larger image than original
function createBigImage(image) {
  const display = document.getElementById("announcer");
  display.innerHTML = "";
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  display.appendChild(bigImg);
}

//playing around with random image
//Load a random image on entry
function displayRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  createBigImage(randomImage);
  console.log("Creating big image:", image);
}

createThumbnails();
displayRandomImage();
