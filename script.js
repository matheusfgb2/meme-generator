const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const insertMeme = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

textInput.addEventListener('keyup', (event) => {
  memeText.innerHTML = event.target.value;
});

insertMeme.addEventListener('change', (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);

});
