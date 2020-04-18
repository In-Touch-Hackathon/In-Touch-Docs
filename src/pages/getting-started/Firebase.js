import React from 'react';
import { mdx } from 'mdx.macro';

export const Firebase = mdx`
# Setting up Google Firebase

In Touch is built using [Firebase](https://firebase.google.com/) authenication and database.
Firebase allows In Touch to be easily setup and maintained. 
In Touch stores all it's data in the cloud and could be easily accessed and backed up.

## Create a Project in Firebase

Go to [Firebase Console](https://console.firebase.google.com/) and Add Project

![](../../images/googlecreateproject.png)

## Create a Firestore database

1. Go to Database inside your newly created project

![](../../images/googlefirestore.png)

2. Start in production mode

3. Select a Cloud Firestore location close to New Zealand e.g australia-southeast1

## Setup Firebase Authentication 

1. Go to Authentication inside your newly created project

2. Enable Sign-in methods that you want to implement in your frontend (In Touch's Flutter app support Email/Password and Google Signin)
*Note: third party token may be required for some of the Sign-in providers*

![](../../images/googleauth.png)

## Download Google Credentials

Google service account are required to authenicate In Touch with your Firebase project.

#### Backend

1. Create a service acount for Firebase admin SDK
2. Download service account JSON (required for setting up backend)

#### Flutter App

1. Create an Android app
2. Enter in customised package name for android e.g com.company.intouch
3. Download google-services.json (required for setting up flutter)

`