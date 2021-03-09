# Cahrity Local - A Charity Info Site
For this project, I wanted to create an application that would target a niche audience, but also deploy and create something that I am passionate about, and that's why I have created Charity Local. It's an application that allows users to search for charities in their area by category. This app portrays my love for giving back to the community, and to also support people/communities that have difficulties with supporting themselves. I hope that people with similar passions will enjoy using this application.

### Visit Live Site Here
[Chairity Live Site](https://shielded-wildwood-93350.herokuapp.com/)

## Project Members
This project was designed and implemented by [Luke Mason](https://github.com/LukeMason33).

## Usage
Charity Local is a website that allows users to search for charities by category in any city that they desire, hence the name 'Charity Local'. All of the charity information for this site is fetched from [Charity Navigator's](https://www.charitynavigator.org/) API.
Upon opening up the app, a user will be brough to the landing page with a form to fill out. Notice how the button 'Find Charities' is disabled at first, this is because all fields are required to be filled out in the form prior to trying to search for charities. This was done so that user error's can be prevented.
![gif of opening app and trying to click button](https://media.giphy.com/media/2dSzKFMq39b6jV334E/giphy.gif)

From the landing page, a user can travel to the About page to view more information on the inspiration behind this app, a link to my github account, as well as the resources I used to create this.
![gif of going to About page from landing page](https://media.giphy.com/media/0HsAHWhY9FQsOxXHjT/giphy.gif)

To search for charities, a user will:
  - First select one of the eleven categories that are supplied in the select box '--Select a Category--'.
  - Next select the state that they desire to find charities in. This select box includes all 50 states.
  - Next they will type in the city's name to refine the search even more. This is a text box, so the user must type the name of their city correctly.
  - After these steps, notice how the previosuly disabled 'Find Charities' button is now clickable. Click on this to be taken to the dashboard.
![gif of filling out form](https://media.giphy.com/media/KbSShWClTdJ6XTSIsC/giphy.gif)

If there are no charities that match the user's search, then they will be brought back to the landing page with an error message displaying what went wrong, and suggesting to try a different category, or a different location.
![gif of error message](https://media.giphy.com/media/P2Q5ctG6NLwQVzFvuo/giphy.gif)

Once on the dashboard, a user can view all charities that match their search. Each of the charities will display: the charity's name(which serves as a link to their website), the charity's cause, the charity's address, and the charity's mission statement.
![screenshot of charity card](https://media.giphy.com/media/xjzW3BQt3MRMkBbAwJ/giphy.gif)

The user can also travel to the About page from the dashboard, and they'll notice that if they have made a search in their session of opening up the app, they can view their previously searched charities by clicking that button.
![gif of viewing previous charities from About page](https://media.giphy.com/media/Zo2Qjx3UKwx4es3kum/giphy.gif)

## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start` to launch local server

## Technologies Used
1. React
2. React Router
3. Asyncronous JavaScript
3. WebPack
4. Cypress
5. CSS
6. React Hooks

## Planning
We utilized github projects for project management, that board can be found [here](https://github.com/LukeMason33/CharityLocal/projects/1) <br>
The detailed spec for this project can be found [here](https://frontend.turing.io/projects/module-3/niche-audience.html) <br>

### Testing development
The testing that I did for this application was all done through Cypress. I tested navigation through the app as a user would do (end-to-end testing), as well as stubbed all my fetch requests to get desired results such as errors. 

## Wins and Challenges

### Challenges

#### CORS Issue with Original API
This project was my first experience with running into a CORS policy issue with an API that I was trying to use at first. Being new to the problem, I was quick to google this issue but it was difficult to understand as I have never seen the terminology before. After hours of research I found out that it was not an issue on my end, but rather an issue occuring on the API's end. Knowing now that I could not use that API, I had to quickly readjust my project and work with the API that was used for this site. The data was a lot different coming from the new API, so I had to refector my code accordingly. 

#### Timeline of Project
The timeline for this project proved to be incredibly difficult. We had a total of 5 days to build this thing out, so it was a lot of planning and thinking of what kind of feature I wanted to implement into this project, and the battle of IF I'll have time to implement this things. I am proud of the work I have done on this app, but I would definitely like to continue further on the development so that I can add some feature that I felll are necessary (see future iterations).

### Wins

#### Creating Something I'm Passionate About
Getting this project was daunting at first because of the freedom that we had with it. There was no specific prompt, no specific API to work with, the only restriction was to create something for a niche audience. But after some hard thinking (staring at a blank miro board) and planning, I was able to mold the idea of giving back to local communities, and building an app for people that share this same passion as me.

#### Building This in FIVE DAYS
I know I addressed this as being one of my challenges, but it also turned out to be a huge win of mine as well. The comfortability I have developed with React over the past few weeks is incredible, and I feel that I am really now understanding why this is one of the more popular frameworks for javaScript. 

## Future Iterations
* I would like to add another section to the form on the landing page where people could search for local Black charities. Given how the world is today, I feel that it would be an amazing addition to support those who are treated unfairly and unequal in society.
* I would like to add a donation link to all the charities's information cards as that would provide quick access for a user to donate to a charity of thei liking.
