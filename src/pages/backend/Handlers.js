import React from 'react';
import { mdx } from 'mdx.macro';

export const Handlers = mdx`
# Handlers

This is an API Documentation for the REST API part of the backend

## Routes
- POST **/ivr/welcome** - *Twilio IVR welcome*
- POST **/ivr/menu** - *Twilio IVR menu*
- POST **/connect/:id** - *Twilio conference*
- POST **/register** - *Register phone number and display name after registing with Firebase auth*
- POST **/verify** - *Send verification code through phone number*
- GET **/covid19** - *Get current Covid 19 status*
- GET **/healthcheck** - *Healthcheck of API*

#### POST **/ivr/welcome**
Twilio IVR welcome. Twilio Web Hook would call this

###### Parameters
None

###### Response
text/xml
<code>
&lt;Response&gt;<br/>
&emsp;&emsp;&lt;Gather action="/ivr/menu" numDigits="1" method="POST"&gt;<br/>
&emsp;&emsp;&emsp;&emsp;&lt;Say&gt;Thanks for calling the In Touch Hotline. <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Please press 1 for current status of covid 19. <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Press 2 to talk to a volunteer.&lt;/Say&gt;<br/>
&emsp;&emsp;&lt;/Gather&gt;<br/>
&lt;/Response&gt;<br/>


</code><br/>

#### POST **/ivr/menu**
Twilio IVR menu

###### Parameters
None

###### Response
text/xml


#### POST **/connect/:id**
Twilio conference

#### POST **/register**
Register phone number and display name after registing with Firebase auth

#### POST **/verify**
Send verification code through phone number

#### GET **/covid19** 
Get current Covid 19 status

#### GET **/healthcheck**
Healthcheck of API

`