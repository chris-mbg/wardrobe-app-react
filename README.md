# My Wardrobe App
An application created with create-react-app. :shirt: :jeans: :athletic_shoe:

## Technologies used
* React with Context and Hooks
* React Router
* CSS using CSS Modules
* Local Storage

## General info
As I am new to React I wanted to create an app for learning purposes, and since I recently made an todo-list-app learning Vue, I wanted to do something slightly different.
The inspiration for the app comes from my husband, who thinks picking out an outfit is not considered good fun. And the result is this wardrobe app, where the user can save his/her clothes in the "wardrobe" under the pre-defined cathegories and also get a randomized outfit based on what kind of items the uses wants to wear that day.
### More in detail
The wardobe app isn't that different from a todo-list it turned out :wink: I made functionality to delete and edit the different items in the wardrobe and also the possibility to add new items. Context is used to store the array of clothing items and the useReducer-hook to manipulate the array. Using the useEffect-hook, the array of items is saved to Local Storage upon every change. If the user chooses what kind of items to wear and lets the app choose a random outfit, the outfit is also stored to Local Storage, but is disregarded if 12 hours has passed since the latest saved random outfit. The user also has the possibility to tell the app to choose a new outfit at any time. To practice using React Router, the wardrobe and the functionality to add a new item to the wardrobe are on different pages. The app is responsive and developed mobile-first and thought of to be used primarily on a smaller screen/smart phone. Although the design wasn't the main focus for this project, I spent quite some time on customizing checkboxes and getting the wardrobe-"tabs" right with CSS and React conditional rendering.

## What did I learn? :woman_technologist:
Quite a lot is the answer to that question. From being a novice to React, I now have a much better understanding for how React works and the use of different hooks. As the project developed, I changed the data structure from first having multiple context into just having one with the useReducer-hook and adding an uniqe id (uuid) as an identifier to every clothing-item. And I also discoverd that just the problem-solving surrounding the datastructure was the one I enjoyed the most.

## View it live!
[...here](http://christinakodar.se/react-wardrobe-app)
