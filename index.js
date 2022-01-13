
import { 
   saveWord ,
   getWords,
   onGetWords
} from './firebase.js'

const wordForm = document.getElementById("word-form");
const wordContainer = document.getElementById("word-container");

window.addEventListener('DOMContentLoaded', async() => {

   // const querySnapshot = await getWords();
   // console.log(querySnapshot);

   onGetWords((querySnapshot) => {
      let html = '';

      querySnapshot.forEach(doc => {
         // console.log(doc.data());
         const word = doc.data();
         html += `
            <div>
               <h3>${word.wordEnglish}</h3>
               <p>${word.wordSpanish}</p>
            </div>
         `
      });
   
      wordContainer.innerHTML = html;
   })

});


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

