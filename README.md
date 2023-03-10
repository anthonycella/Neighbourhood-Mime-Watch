# Neighbourhood Mime Watch

## Inspiration
About 17% of car accidents are caused by distracted driving every year, accounting for more than 1,000,000 accidents per year. The problem? Mimes. With NMW, you'll be able to keep suspicious mimes at bay in your neighborhood or any community you end up being a part of.

## What it does
NMW allows users to create their own neighborhood watch groups and add members to them. Members added to groups do not even have to sign up, once their phone number is given they are protected by alerts of suspicious activity in their area. Members can see which groups they belong to and what reports have been made of them. This quaint app is the perfect neighborhood crime watch!

## How we built it
We built the app using React Native on the front end, Node.js on the backend, and for the database we used MySQL. We build the most of the main functionalities with those technologies supplemented by the use of Twilio, which is used to expertly deliver alerts to members regarding sketchy mimes.

## Challenges we ran into
One of the biggest challenges was connecting the frontend and the backend. Finding a good way to bridge the two was hard, but a clever suggestion from a teammate meant that instead of spending hours trying to deploy the database and server onto separate EC2 instances, we spent minutes using CORS middleware to be able to connect them locally.

## Accomplishments that we're proud of
One thing we are definitely proud of is being able to send texts to members of a particular group. Another thing is being able to use a tech stack most of us weren't familiar with.

## What we learned
It always takes longer than you think it will. A lot of the team learned more about git workflow and agile methodologies. We also learned that sometimes a really seemingly complex problem can often have a simple solution.

## What's next for Neighbourhood Mime Watch
Having a comment section for each report Being able to upload images to reports

## Built With
- axios
- express.js
- mysql
- node.js
- react-native
- twilio

## Start-Up Guide
1. Clone down the repository
- open a terminal window and run the following command
```git clone https://github.com/anthonycella/Neighbourhood-Mime-Watch```
2. Start up the server
- navigate to the repository and run this command
```npm run server-dev```
3. Start up the client
- open a second terminal window and navigate to the repository
- run the following commands
```cd frontend```
```npm start```
4. Open up your browser and navigate to localhost port 3000
```http://localhost:3000/```
5. Enjoy!

## Screenshots
### Invite new member to group
<img src="https://i.imgur.com/XdKGnO9.png" width="400">

### Alerts
<img src="https://i.imgur.com/CXJMrPe.png" width="400">

### Invite new member - success
<img src="https://i.imgur.com/ByAprUr.png" width="400">

### Specific alert
<img src="https://i.imgur.com/iCoHze9.png" width="400">

### Creating an alert
<img src="https://i.imgur.com/iJISUh0.png" width="400">

### Creating an alert 0 success
<img src="https://i.imgur.com/ae5j1tn.png" width="400">
