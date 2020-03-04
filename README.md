# Finbot

**A chatbot to learn about personal finance.**

[About](#about) • [Use](#how-to-use) • [Team](#team) • [Tech Stack](#tech-stack) • [Design](#design) • [Get started](#get-started) • [Test](#how-to-test)

## About

We empower our users to be more financially independent by gamifying the learning journey to financial literacy through a curated planning feature, suggestions for resources, and other initiatives.

Our frontend consists of a web application with a chatbot interface that interacts with the user. 

Deployed at: [?]

## How to use
[?]

## Team

Emily Spencer

Shadi Khazaei

Meghan Iankov

Niki Manoledaki

Bassel Al-Sayed

## Tech Stack


### Web App
- Framework: React
- Language: Javascript
- Testing framework
    - End-to-end integration tests: Cypress
    - Unit tests: Jest
- Networking: axios (for GET/POST requests to API)

### API
- Framework: Django
- Language: Python
- Testing framework
    - Unit tests: pytest
- Natural Language Processing (NLP): NLTK

### Deployment
- CI: [?]
- Servers: Heroku

## Design
The user can interact with the chatbot. When the user inputs text, an HTTP request is sent to the API to fetch a response through axiom. The API then receives the user input, parses the text through the Natural Language Processing model, and generates JSON bot responses.


## Get started
```
$ git clone https://github.com/basselalsayed/finbot.git
```

## How to test
```
$ somehow run tests
```
