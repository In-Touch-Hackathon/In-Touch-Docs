import React from 'react';
import { mdx } from 'mdx.macro';

export const BackendIntro = mdx`
# In Touch Backend

In Touch Backend is written in Typescript Node JS ES6. This project is designed to be easily
build on. The following docs will teach you how to use and build on this template.

Main frameworks:
- [Express](https://expressjs.com/)
- [Twilio](https://www.twilio.com/docs/voice/quickstart/node)
- [Firebase Authenication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Nodemon](https://nodemon.io/)


[Github Repo](https://github.com/scorpionknifes/In-Touch-Backend)

#### Setup Guide
[Read more](/getting-started/backend)

#### Table of Content
- [Project Struture](/backend/project) - Describes project structure and how to utilise
- [Handlers](/backend/handlers) - REST API handlers and specification
- [Covid19 Update](/backend/covid19) - Covid 19 Status Scraper
- [Twilio IVR](/backend/twilio) - IVR (Interactive Voice Response) - Handles incoming calls
- [Firestore](/backend/firestore) - Database guide and structure

`