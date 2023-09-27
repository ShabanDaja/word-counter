const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

textareaEl.addEventListener('input', function() {

    // determine new numbers
    const numberOfCharacters = textareaEl.value.length;
    const twitterCharLeft = 280 - numberOfCharacters;
    const facebookCharLeft = 2200 - numberOfCharacters;

    // add visula indicator if limit exceeded

    if (twitterCharLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (facebookCharLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }
    // set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharLeft;
    facebookNumberEl.textContent = facebookCharLeft;
});
