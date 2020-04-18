import React from 'react';
import { mdx } from 'mdx.macro';

export const ProjectFlutter = mdx`

# Project Struture

In Touch Flutter app project is designed to be easy to add new pages and change existing ones

Folder Structure:
<code>
./android  <br/>
./lib  <br/>
&emsp;&emsp;&emsp;&emsp;/ui<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;/shared<br/>
</code><br/>

| Folder             | Usage        |
| --------------------- | ------------- |
| Android   &emsp;&emsp;| Android package files  |
| Lib                   | All source code is located here |
| UI                    | Pages and UI     |
| Shared                | Shared components |
<br/>


#### Android

- Change Build settings here
- Change Project Logo and package

#### Lib

Source code folder

#### UI

Pages and flutter UI

#### Shared

Shared Components

`

