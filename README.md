# 2800-202310-DTC08

# Project Title
* NewJourney

## 1. Project Description
Our Project, NewJourney, is developing an app to provide multilingual assistance to help newcomers navigate everyday tasks in Vancouver by providing step-by-step, easy-to-digest road maps.

## 2. Complete setup & installion
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps to assemble a development environment (assuming you're a part of our development team):
1. Ask us to add you as a collaborator on the github repo. Our contact information is at the bottom of this file.
2. You will get an email from github - accept the invitation to collaborate.
3. Clone the repo to your machine to be able to work on it locally. 
4. You will need a .env file with the following fields:
```
OPENAI_API_KEY 
ATLAS_DB_USERNAME
ATLAS_DB_PASSWORD
ATLAS_DB_HOS
NODE_SESSION_SECRET
MONGO_SESSION_SECRET
PORT=3000
GMAIL_KEY0=2800-202310-DTC08
GMAIL_KEY
GMAIL_EMAIL
BCRYPT_SALT
CLIENT_URL
```
If you are a developer working on this project with us (or an instructor marking our project), which we assume you are if you are reading these instructions, we will provide the values of these keys to you separately to make sure anything posted to github is okay to be shared publicly.
5. Make sure to type "npm install" in your terminal to make sure your project has all the necessary modules to run.
6. If you don't have nodemon, install it. Instructions can be found here: https://www.npmjs.com/package/nodemon 
7. Now, you can run the project on localhost. Type "nodemon server.js" in your terminal.
8. Type "localhost:3000" in your internet browser. There's our index.ejs page!

## 3. Core Features
* Create account/login
1. On the index page (it says NewJourney at the top and has a bunch of language names in the background), select your language from the dropdown and click the green checkmark.
2. If you don't have an account yet, click the yellow signup button.
3. Enter all your information in the input fields and click "register". You will be signed in!
4. If you already have an account, after clicking the green checkmark on the index page, click the grey login button.
5. Enter your username and email, and click login. You will be signed in!

* Ask questions to the app which will recieve replies generated by ChatGPT in the form of step-by-step roadmaps. 
1. Once you are logged in, you will see the main.ejs page. You can verify this by looking at your browser address bar, which should read '/main' at the end.
2. Type your query in the input field that says "How to ...".
3. Click the envelope icon.
4. You will have to wait a few seconds. A loading animation will appear. This is normal. Sometimes, when chatGPT is overloaded, you will encounter an error page at this step. That's okay! Take a breath, grab some water, come back later, and try again.
5. A roadmap will appear before your eyes with step-by-step instructions on how to complete what you asked for instructions for. 

* Users can save roadmaps
1. After receiving a roadmap reply from the chatGPT API, There is a bookmark icon. Click it! 
2. You will get a message saying your roadmap has been saved.
3. Verify that your roadmap has been saved by navigating to "My Maps" (the middle icon on the bottom nav bar).

* Users can check off steps they have completed of roadmaps
1. On "My Maps" (the page with your saved roadmaps), click on the title of a roadmap.
2. You will be directed to the /trackProgress route, where you can see your current progress along your journey of steps for a particular roadmap.
3. To check off a step, click the checkbox next to it. The page will reload with the checkbox checked off and the text crossed out.
4. If you wish to uncheck a step, you can click a checked checkbox and the page will reload with that checkbox unchecked and the text no longer crossed out.

* Users can change their language preferences
Users can do this by using the dropdown menu on the index page (the first point of contact), but also using the dropdown menu on the settings page which can be accessed by clicking the "settings" icon on the right side of the bottom nav bar. Notice that the user's browser language setting can also be viewed on the settings page, while their dropdown selection remains selected and viewable in the dropdown itself.

* Users can share roadmaps to others using the app
1. From the "My Maps" page (which can be accessed by clicking the middle icon on the bottom nav bar), hit the share icon on the map you wish to share.
2. In the modal that appears, click "copy" to copy the link. This link can be shared with anyone. To be able to view the map, the person receiving the link must be logged in to their NewJourney account.
3. If you want to email the link, click the envelope icon in the modal that appears after clicking the share icon on the map you wish to share.
4. Type in the email address you wish to send the map to.
5. The link will be sent to the email you typed in!

* Users can access roadmaps that have been shared with them.
1. Once you receive a link to a roadmap, either click it (if you receive in an email), or paste it in the address bar of your web browser.
2. You will get an authentication error if you are not logged in. Click the yellow button that says "go home".
3. Select your language from the dropdown and click the green checkmark. Then, click login.
4. Enter your username and password and click the yellow "login" button.
5. Try clicking the link again, or paste it into the address bar of your web browser again.
6. Click the "save a copy" button, below the map at the bottom of the page.
7. Go to your saved maps by clicking the icon in the middle of the bottom nav bar.
8. Now you can track your own progress on that map using the steps above (under "users can check off steps they have completed of roadmaps")!

## 4. Technologies, Resources, and Credits
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* We used Node.js v18.13.0 and express v4.18.2 for our backend.
* We used MongoDBAtlas for our database.
* We used the chatGPT API to get responses that populate our roadmaps.
* We used chatGPT for code suggestions, which we documented in our prompt log on Notion.
* We used ejs templates to organize and format our html pages.
* We used Javascript, JQuery, and CSS. 
* We used Figma for our ideation (using a figjam board) and for clickable wireframes.
* We used VS Code version 1.74.2 to work locally on the project.
* Here are the npm packages we used and their versions: 
├── axios@1.4.0
├── bcrypt@5.1.0
├── connect-mongo@5.0.0
├── cookie-parser@1.4.6
├── deepl-node@1.9.0
├── dotenv@16.0.3
├── ejs@3.1.9
├── express-session@1.17.3
├── express@4.18.2
├── joi@17.9.2
├── mime@3.0.0
├── mongodb@5.5.0
├── mongoose@7.1.1
├── nodemailer@6.9.2
├── nodemon@2.0.22
└── openai@3.2.1

**Image and icon sources:**
back_lrg.png:
background_family_1.png:
delete_lrg.png:
happyface.png:
home_lrg:
login.png:
LogoHeaderBar.png:
map_lrg.png:
ok-green.png:
sadface.png:
settings_lrg.png:
share_lrg.png:
Welcomes.png:

## 5. Known Bugs and Limitations
Here are some known limitations:
* The speed of ChatGPT replies are approximately 30 seconds. We have added a 'loading' animation so it's obvious that something is happening
* The relevance of GPT replies - last trained on information from September 2021 some info will be out of date. This has been previously discussed
* ...

## 6. Features for Future
What we'd like to build in the future:
* We would like any maps generated by clicking on a step of a roadmap (rather than writing into the query input element) to be saved as a sub-map to the original map.
* We would like to have a few pre-generated maps based on popular searches in a user's location so they can have a better idea of what the app should be used for, but also so the app can help them even before they know what questions they want to ask.
	
## 7. Contents of Folder
Content of the project folder:
  
├── models
    ├── token.js
    └── users.js
├── node_modules 
├── public 
    ├── styles
       ├── index.css
       ├── main.css
       ├── roadmap.css
       ├── settings.css
       ├── signup.css
       └── style.css
    ├── back_lrg.png
    ├── background_family_1.png
    ├── delete_lrg.png
    ├── happyface.png
    ├── home_lrg
    ├── login.png
    ├── LogoHeaderBar.png
    ├── map_lrg.png
    ├── ok-green.png
    ├── sadface.png
    ├── settings_lrg.png
    ├── share_lrg.png
    └── Welcomes.png
├── scripts
    ├── index.js
    ├── login.js
    ├── main.js
    ├── passwordReset.js
    ├── savedRoadmaps.js
    ├── script.js
    ├── signup.js
    ├── trackProgress.js
    └── translate.js
├── views
    ├── components               # components included in larger pages
        ├── bookmark.ejs
        ├── deleteModal.ejs
        ├── footer.ejs
        ├── headHTML.ejs
        ├── navbar_footer.ejs
        ├── header_before_signin.ejs
        ├── navbar_header_logout.ejs
        ├── navbar_header.ejs
        ├── roadmap.ejs
        └── savedRoadmaps_card.ejs
    ├── 200emailsuccess.ejs
    ├── error403.ejs
    ├── error404.ejs
    ├── error500progressnotsaved.ejs
    ├── error501emailnotsent.ejs
    ├── index.ejs
    ├── login.ejs
    ├── main.ejs
    ├── newpassword.ejs
    ├── passwordReset.ejs    # The page for actually resetting password
    ├── resetPassword.ejs    # The page for asking to reset password
    ├── savedRoadmaps.ejs
    ├── settings.ejs
    ├── shareModal.ejs
    ├── signup.ejs
    └── trackProgress.ejs
├── .env
├── .gitignore                # Git ignore file
├── app.js 
├── package-lock.json
├── package.json
├── README.md                 # README for this project
└── server.js   

## 9. Names of Contributors and Contact
List team members and/or short bio's here... 
* Charlie: cz4100@gmail.com
* Kate: sullivan.kate.e@gmail.com
* Oceaan: oceaanpendharkar@gmail.com
* Victor: vsctl95@gmail.com