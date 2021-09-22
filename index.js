const btnTranslate = document.querySelector('#btn-translate');
const txtInput = document.querySelector('#txt-input');
const outputDiv = document.querySelector('#output');
const loader = document.getElementById('loader');

const apiUrl = 'https://api.funtranslations.com/translate/dothraki.json';

function loading() {
  loader.hidden = false;
  outputDiv.hidden = true; // show our loader and hide our quote container
}

function complete() {
  if (!loader.hidden) {
    // false
    outputDiv.hidden = false;
    loader.hidden = true;
  }
}

function getTranslationUrl(text) {
  return apiUrl + '?' + 'text=' + text;
}

async function clickHandler() {
  loading();
  let inputText = txtInput.value;

  try {
    const response = await fetch(getTranslationUrl(inputText)); // combine these two
    const data = await response.json();
    const translatedText = data.contents.translated;
    outputDiv.innerText = translatedText;
    complete();
  } catch (e) {
    console.log('error', e);
  }
}

btnTranslate.addEventListener('click', clickHandler);

loader.hidden = true;
