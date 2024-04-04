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
    url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Red Lantern in an Alleyway",
  },
];

// make a selection of thumbnail images that load quickly
//function to create thumbnails
function createThumbnails() {
  const thumbContainer = document.getElementById("thumb-container");
  {
  }
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
//thumbnail and display larger version of the image w description
//function to display a larger image than original
function createBigImage(image) {
  const display = document.getElementById("display");
  display.innerHTML = "";
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  display.appendChild(img);
}

createThumbnails();
createBigImage();

// make a selection of thumbnail images that load quickly

//thumbnail and display larger version of the image w description

//accessible considerations like aternative text for images and the ability to click next and previous

//
