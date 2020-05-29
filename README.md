# Finbot

**A chatbot to learn about personal finance.**

[About](#about) • [Team](#team) • [Technology We Used](#built-with) • [Design](#design) • [Get Started](#getting-started)

## About

We empower our users to be more financially independent by gamifying the learning journey to financial literacy through a curated planning feature, suggestions for resources, and other initiatives.

Our frontend consists of a web application with a chatbot interface that interacts with the user. 

You can see the code for the API and bot (built using Natural Language Processing/machine learning) [here](https://github.com/basselalsayed/finbot-api)

## Team

[Emily Spencer](https://github.com/emilyjspencer)

[Shadi Khazaei](https://github.com/shadz22)

[Meghan Iankov](https://github.com/meghaniankov)

[Niki Manoledaki](https://github.com/nikimanoledaki)

[Bassel Al-Sayed](https://github.com/basselalsayed)

## Built With
- Language: Javascript
- Framework: React
- Testing framework
    - End-to-end integration tests: Cypress
    - Unit tests: Jest, Enzyme
- Networking: axios (for GET/POST requests to API)
- [Chatbot API](https://github.com/basselalsayed/finbot-api): Python/Django


## Design

The user can interact with the chatbot. When the user inputs text, an HTTP request is sent to the API to fetch a response through axios. The API then receives the user input, parses the text through the Natural Language Processing model, and generates JSON bot responses.





## Getting started

### First Deploy [Backend Server](https://github.com/basselalsayed/finbot-api)

Clone with 

```git clone git@github.com:basselalsayed/finbot.git```

Install dependencies:
```
$ yarn
```

## Running the Program

### Start the Server
```
$ yarn start
```

### View in Browswer

Direct your browser to http://localhost:3000

### Testing
``` yarn test:coverage```