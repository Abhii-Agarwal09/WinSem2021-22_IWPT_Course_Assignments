// Question 2

// Question 3

// Selecting the image and buttons
const carouselImage = document.getElementById('carousel-image');
const nextBtn = document.getElementById('next-btn');
const addBtn = document.getElementById('add-btn');

// Defining the images array and initializing index variable to 0
const imagesArray = ['cat.jpg', 'dog.jpg', 'deer.jpg', 'fox.jpg'];
let currentImageIndex = 0;

// Function to go to next image
const next = (event) => {
    // Getting length of images array
    const imagesArrayLength = imagesArray.length;
    // Increasing image index by 1
    currentImageIndex += 1;
    // Calculating the new image index
    const newImageIndex = (currentImageIndex + 1) % imagesArrayLength;
    // Setting the new source of image using new index
    carouselImage.src = `../assets/${imagesArray[newImageIndex]}`;
};

// Function to add a new image to array
const add = (event) => {
    // Getting the new image name using prompt
    const newImageName = String(prompt('Enter image name'));
    // Generating image by adding source
    const newImage = `${newImageName}.jpg`;
    // Pushing the new image in the array
    imagesArray.push(newImage);
};

// Event listeners to listen to click events on buttons
nextBtn.addEventListener('click', next);
addBtn.addEventListener('click', add);
