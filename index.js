
import { 
   saveWord ,
   listWords
} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

   listWords();
   
});


const wordForm = document.getElementById("word-form");
// console.log(wordForm)

// Event seve word
wordForm.addEventListener('submit', (e) => {
   e.preventDefault();

   const wordEnglish = wordForm['word-english'].value;
   const wordSpanish = wordForm['word-spanish'].value;
   const wordType = wordForm['word-type'].value;
   // console.log(wordEnglish, wordSpanish, wordType);

   try {
      saveWord(wordEnglish, wordSpanish, wordType);
      // wordForm['word-english'].value = "";
      // wordForm['word-spanish'].value = "";
      wordForm.reset();
      
   } catch (error) {
      console.log(error);
   }
})

