## Table of contents
* [Emotionomics](#emotionomics)
* [How to use](#how-to-use)
* [Credits](#credits)
* [License](#license)
* [Screenshots](#screenshots)

## Emotionomics

In the last 24 hours, has either of these things happen to you?
* Did your obscure cryptocurrency finally, after 12 years, gain value and skyrocket from $0.10/coin to $50,000/coin?
* Did your cryptocurrency fall from $60,000/coin to $10,000/coin, a loss of 500%?

Welcome to Emotionomics!
Our goal is to allow the user to track the %change of a selected coin, and accordingly deliver a GIF to help guide how they should feel.
By tracking the live value of the selected coin, we calculate the %loss or %gain over the last 24 hours and randomly select the appropriate GIF.

## How to use 

Simply access the website through this link: ___ 
Once on the front page, just drop the "select coin" menu to find the list of coins and select the coin the user would like to track. 
Once a coin is selected, the user should see the %change of the coin and whether they should be happy or sad!


## Technologies Used
* HTML
* CSS
* JavaScript
* JQuery
* Day.js
* Server side API 

# 3rd party resources:
* Bulma (https://bulma.io/)
* Giphy API (https://developers.giphy.com/)
* Coinranking API by Coinranking on RapidAPI (https://rapidapi.com/Coinranking/api/coinranking1)

# Build Status
 This project have been developed from Scratch.

# code Style

## HTML
* Created index.html file
* Linked css file & javascript file in the head & bottom of body section respectively.
* Header section includes Navbar & Logo.
* Main section include Hero image, div to display user data and get user input and div to hold and display dynamically created buttons.
* Buttons are wrapped into the div, which interact with the user to get & insert data. 
* Hidden modal elements for about us, contact us, our team and sign up, which render in the page according to the JS function.
* Footer section includes copy right text.

## CSS
* Used Bulma CSS framework for modal,navbar, and dropdown.
* Responsive in smaller screen both content and navbar( changed into dropdown)
* Added reset.css file.
* Added border radius to the boxes and buttons for better UI/UX
* Mostly use flexbox properties & Overall user friendly. 

## JavaScript / JQuery
* app.js file constructed with pure javascript where modal.js and navbar.js constructed with both JS &  jQuery.
* Decleared variables as needed
* Created a function to load user input data stored in the local storage 
* Created a function to save the user input in the local storage.( coin change value & email id)
* Used 2 api key one for coin data and another for giphy, where the value of coin change is high (+) = happy giphy, and low (-) = sad giphy. 
* App.js file includes a function to  fetch data from api call, display coin name and value, save and display those coin value in local storage or clear     from it, happybutton and sad button function to create giphy according to the coin change value, and clear giphy function to clear the window.
* App.js file focused on display dynamically created html element from user input or out respectively.
* Modal.js file contains the modal to display the content for about us/ contact us/ our team/ sign up which also includes the function to save user email   into local storage.
* navbar.js file contains the function to make the hamburger button for small screen, which also includes the function to display the animated heading.
* click event listener function has been added bottom of the file for each user input or interaction for all three files.


## Credits

Our team:
* Dandar Ganbold
* Sonam J Sherpa
* Walter Craigie
* Yung in Shin
* Kaleo Dutta-allen


## License

MIT License

Copyright (c) [2023] [Emotionomics]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Screenshots

* Desktop view with coin select dropdown.
![Screenshot 2023-03-27 at 1 10 57 PM](https://user-images.githubusercontent.com/89502092/228056361-8c967666-870b-413b-81fc-cea734576f2b.png)

![Screenshot 2023-03-27 at 1 11 29 PM](https://user-images.githubusercontent.com/89502092/228056236-39dfa382-37bf-4f3c-8da0-cc8c6dab5c90.png)


* Desktop view of happy GIF being displayed.
![Screenshot 2023-03-27 at 1 13 08 PM](https://user-images.githubusercontent.com/89502092/228056332-e0de761d-cc8a-477a-b986-e1d2f18cff4a.png)

![Screenshot 2023-03-27 at 1 12 10 PM](https://user-images.githubusercontent.com/89502092/228056295-bb06e1ee-e750-40a7-9a9b-205193e17e35.png)


* Mobile view of sad GIF being dispayed.

![Screenshot 2023-03-27 at 1 14 32 PM](https://user-images.githubusercontent.com/89502092/228056795-eb29f83c-86db-47e5-a55f-22a4855e8774.png)


* Mobile view of front page.

![Screenshot 2023-03-27 at 1 13 52 PM](https://user-images.githubusercontent.com/89502092/228056456-b0cd7b0a-0d40-4f0c-b7d6-7a251108f3f6.png)

* Mobile view with NAV dropdown burger menu open.

![Screenshot 2023-03-27 at 1 14 10 PM](https://user-images.githubusercontent.com/89502092/228056534-7ccc383f-2978-445d-b583-7894bd5dd878.png)


# Github URL: 
  https://github.com/Daganbold/project-01

# Deployed Live URL: 
  http://daganbold.github.io/project-01/

