import React from 'react';
import { mdx } from 'mdx.macro';

export const Introduction = mdx`
# Introduction

In Touch is a Skillsme hackathon project with the main goal of helping the elderly to connect to 
mutual aid groups using preexisting phone lines. 

This project is a ready-to-use opensource template for mutual aid groups to set up IVR and the 
required interface to operate it. The project is designed to be easy to customise and get started 
on.

In Touch project includes
- Twilio Voice and IVR
- Firebase Authenication
- Firestore DB
- Ready-to-use Flutter frontend

![](../../images/login.png)

## Twilio

[Twilio](https://www.twilio.com/) is a cloud-based communication API for SMS, Voice and Messaging Apps. In Touch uses [Twilio’s 
Voice API](https://www.twilio.com/docs/voice) to create a seamless integration with a real phone number.

A Twilio account and phone number is required to get In Touch working. Check [Twilio Setup](/getting-started/twilio) for more information

![](../../images/twilio.png)
`