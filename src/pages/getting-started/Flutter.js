import React from 'react';
import { mdx } from 'mdx.macro';

export const Flutter = mdx`
# In Touch Flutter App

In Touch has a ready-to-use front end app to connect volunteers to incoming calls.
Git Clone or Fork our [In Touch's Flutter App](https://github.com/scorpionknifes/In-Touch-App)

## Install Flutter

1. Install [Flutter](https://flutter.dev/docs/get-started/install)
2. Click "Check out project from Version Control on Android studio".
3. In Settings/Languages & Frameworks/Flutter, add your Flutter SDK.

## How to use Flutter App
- [Setup IDE](https://flutter.dev/docs/get-started/editor)
- [Running App](https://flutter.dev/docs/get-started/test-drive?tab=androidstudio)
- [Getting Started with your first Flutter app](https://flutter.dev/docs/get-started/codelab)

*Note: Recommended IDE, Android Studio and IntelliJ*

## Setup Variables

In Touch Flutter App stores all environment variables in the file [constants.dart](https://github.com/scorpionknifes/In-Touch-App/blob/master/lib/constants.dart)

<code>
import 'package:flutter/cupertino.dart';

class Constants {<br/>
    &emsp;&emsp;static const Color mainColor = Color(0xffec6f66);<br/>
    &emsp;&emsp;static const Color secondaryColor = Color(0xfff3a183);<br/>
    &emsp;&emsp;static const String name = "IN-TOUCH";<br/>
    &emsp;&emsp;static const String baseURL = "http://192.168.1.100:3000/";<br/>
}<br/>
</code>

| Variables             | Value         |
| --------------------- | ------------- |
| mainColor             | Primary Colour Theme  |
| secondaryColor      &emsp;&emsp;  | Secondary Colour Theme     |
| name                  | Name of app     |
| baseURL               | [REST API location](backend) |
<br/>

#### Google Firebase credentials

Copy **google-services.json** to project/src/google-services.json
This file is from [Setup Firebase](firebase)
`