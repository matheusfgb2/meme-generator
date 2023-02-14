const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const insertMeme = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const memeImg = document.getElementById('meme-image');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');
const memes = document.querySelectorAll('#right-content');

textInput.addEventListener('keyup', (event) => {
  memeText.innerHTML = event.target.value;
});

insertMeme.addEventListener('change', (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});

fireBtn.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});

waterBtn.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});

earthBtn.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});

for (let index = 0; index < memes.length; index += 1) {
  memes[index].addEventListener('click', (event) => {
    memeImg.src = event.target.src;
  });
}
