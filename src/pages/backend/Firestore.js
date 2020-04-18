import React from 'react';
import { mdx } from 'mdx.macro';

export const Firestore= mdx`
# Firestore Database

In Touch backend is powered by Firestore (NoSQL). We store all of our data in cloud making installation and configuring schema easy.

## How to use Firestore

Check out Google's guide on [Cloud Firestore](https://firebase.google.com/docs/firestore)

In Touch is setup to be ready-to-use once connected to Firestore. You do not need to setup any schema or tables

## Database Structure

In Touch has 3 main collections
- users
- fcmTokens
- codes

#### Users
This collection is used to store user information. Email and password is stored in Firebase Auth and is not stored here.

Each Document's Name is the user's UID from Firebase Auth

![](../../images/firebaseauth.png)

Document Fields:
- <code>displayName: string // user's display name</code> 
- <code>phoneNumber: string // phone number in the format of "+64000000000"</code>
- <code>verified: bool // check if user's phone number is verified</code>

#### FCM Tokens
This collection is used to store FCM tokens from flutter app. 
When a caller request a volunteer, the backend would access this 
collection and send notification to all users by using FCM tokens.

Each Document's Name is the FCM token of each user

Document Fields
- <code>uid: string // user's Firebase Auth UID</code> 

#### Codes
This collection is used to temporarily store phone number verification tokens.
We considered to use Redis for caching but we realised that Firestore would In Touch's setup more easy.

Each Document's Name is the user's UID from Firebase Auth
Document Fields
- <code>code: string // 6 digit code randomly generated</code> 

`