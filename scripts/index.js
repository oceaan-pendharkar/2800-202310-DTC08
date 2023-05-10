setTimeout(function() {
  document.cookie = "googtrans=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}, 1000);



// const app = new Vue({
//   el: '#app',
//   data: {
//     translatedContent: ''
//   },
//   mounted() {
//     // set the default language to the user's preferred language
//     const userLanguage = navigator.language.slice(0, 2);
//     this.translateContent(userLanguage);
//   },
//   methods: {
//     translateContent(targetLanguage) {
//       // call your translation API here and update the translatedContent data property
//       // using the content data property and targetLanguage parameter
//       // for example, using the Deepl Translate API:
//       const apiKey = 'DEEPL_AUTH_KEY';
//       const sourceLanguage = 'en'; // assume the source language is English
//       const contentToTranslate = this.content[sourceLanguage];
//       axios.post(`https://api.deepl.com/v2/translate?auth_key=${apikey}`, {
//         q: contentToTranslate,
//         target: targetLanguage
//       }).then(response => {
//         this.translatedContent = response.data.data.translations[0].translatedText;
//       }).catch(error => {
//         console.error(error);
//       });
//     }
//   }
// });

// Force hiding of "original text" popup for menus, etc. (very annoying)
jQuery(selector).bind(
  "mouseenter mouseleave",
  function (event) {
    if (event.type === 'mouseenter') { google_trans_tt.css('z-index', -1000); }
    else { google_trans_tt.css('z-index', 1000); }
  }
);




function saveLanguageAndShowSignup() {
  console.log("saveLanguageAndShowSignup called");
  // Show login and signup buttons
  const loginButton = document.getElementById("login-button");
  const signupButton = document.getElementById("signup-button");
  loginButton.style.display = "inline-block";
  signupButton.style.display = "inline-block";
}

// Get a reference to the HTML dropdown element where we will display the values
const dropdown = document.getElementById("language-dropdown");

// Get the collection reference for the desired collection
const collectionRef = db.collection("Languages");


function populateLanguageDropdown() {
  // Fetch the documents from the collection
  collectionRef.get().then((querySnapshot) => {
    // Loop through each document and get its string fields
    const values = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      for (const key in data) {
        if (typeof data[key] === "string") {
          values.push(data[key]);
        }
      }
    });

    values.sort();


    // Populate the dropdown with the values
    values.forEach((value) => {
      const option = document.createElement("option");
      option.text = value;
      dropdown.add(option);
    });
    option = document.createElement("option");
    option.text = "";
    option.selected = true;
    dropdown.add(option);
  });
}

// Call the populateDropdown function to start populating the dropdown
populateLanguageDropdown();


