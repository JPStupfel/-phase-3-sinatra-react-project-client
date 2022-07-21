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

## Getting Started

### Frontend Setup

**Fork and clone** from

```
git@github.com:JPStupfel/-phase-3-sinatra-react-project-client.git
```

to get started with the Front End. Then, run
`npm install`.

### Backend Setup

The backend and the frontend for this project are in **two different repositories**.

**Fork and clone** from

```
git@github.com:JPStupfel/-phase-3-sinatra-react-project-client.git

```

to get started with the backend side of the project.

Then, run `bundle install` to install the gems.

You can start your server with:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).
