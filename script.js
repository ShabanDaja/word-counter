const textareaEl = document.querySelector('.textarea');

textareaEl.addEventListener('input', function() {

    // determine new numbers
    const numberOfCharacters = textareaEl.value.length;

    // set new numbers
    const charactersNumberEl = document.querySelector('.stat__number--characters');
    charactersNumberEl.textContent = numberOfCharacters;
});
