function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const selectLanguage = document.getElementById('selectLanguage').value;

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${selectLanguage}&dt=t&q=${encodeURI(sourceText)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            document.getElementById('translatedText').value = translatedText;
        })
        .catch(error => console.error('Error:', error));
}
