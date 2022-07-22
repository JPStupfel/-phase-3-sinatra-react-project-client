# Welcome to you Brazilian Jiu Jitsu Notebook

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This is a single page web application built using React. This application communicates with a Sinatra and Active Record database to support a React frontend.

## Introduction

The purpose of this application is to record techniques used in the the martial art of Brazilian Jiu Jitsu and to provide a list of possible sequences based on those techniques. These sequences are helpful when reviewing techniques during visualization or during deliberate practice.

## Brazilian Jiu Jitsu Breakdown

For those who are completely unfamiliar with the art of Brazlilian Jiu Jitsu, here is a basic run-down: Brazilian Jiu Jitsu is a wrestling art. One fighter wins by placing the other in a position where they either have to "submit" or risk being rendered unconscious or sustaining some injury. When one fighter submits in this way it is known as "tapping out." Brazilian Jiu Jitsu places a very large emphasis on formalized techniques and positions. For example, the most famous position is the "closed guard" where one fighter has the other wrapped in their legs like this:

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyl7jpfpE8yxsir-dnbYLPHDYUq8dCNgpxQw&usqp=CAU)

When in this position, each fighter has numerous "attacks" at their disposal. Consequently, the other fighter has numerous possible "defenses" for each attack.

## Component Hierarchy

Below is a map of the component hierarchy of all React Components used in this project.

```
App
|-Narrative
|- Home
...|----AddAttack
....|---AttackCardContainer
....|........ |----------AttackCard
....|........ |----------PositionDropDownMenu
....|---AttackInfoContainer
....|-- AttackInfoPage
....|-- DisplayContent
....|....|------ DefenseCardContainer
....|....|----- DefenseDisplay
....| ...........|------- DefenseEditor
....| ...........|------- DefenseAddForm
....| ...........|------- DefenseContentDisplay
....|--------------EditAttack

```

## Getting Started

### Frontend Setup

**Fork and clone** from

```
git@github.com:JPStupfel/-phase-3-sinatra-react-project-client.git
```

to get started with the Front End. Then, run
`npm install`.

To start the app, run `npm start`

This runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Backend Setup

The backend and the frontend for this project are in **two different repositories**.

**Fork and clone** from

```
git@github.com:JPStupfel/phase-3-sinatra-react-project-server.git

```

to get started with the backend side of the project.

Then, run `bundle install` to install the gems.

You can start your server with:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).

## Project Video Walkthrough

Click the image below to view the walkthrough video for this project at https://youtu.be/IPb1ElsbqDs
[![Alt text](./Images/youTubeLink.png)](https://youtu.be/IPb1ElsbqDs)

## Notes from Create React App

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
