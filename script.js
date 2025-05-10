const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const storySound = document.getElementById('story-sound');
const nextButton = document.getElementById('next-button');

let currentPage = 0;

const storyData = [
  {
    text: "Welcome to the start of our story!",
    image: "", 
    sound: ""  
  }
];

function loadPage(pageIndex) {
  if (pageIndex < storyData.length) {
    const pageData = storyData[pageIndex];
    storyText.textContent = pageData.text;
    storyImage.src = pageData.image;
    storySound.src = pageData.sound;
    if (pageData.sound) {
      storySound.play();
    }
  } else {
    storyText.textContent = "The End.";
    storyImage.src = "";
    storySound.src = "";
    nextButton.style.display = 'none';
  }
}

nextButton.addEventListener('click', () => {
  currentPage++;
  loadPage(currentPage);
});

loadPage(currentPage);