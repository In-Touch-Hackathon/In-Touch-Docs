import React from 'react';
import { mdx } from 'mdx.macro';

export const TwilioIVR = mdx`
# Twilio IVR

Twilio Interactive Voice Response allows us to par volunteers with elderly calls using automation.
Twilio IVR also allows In Touch to create custom and engaging calls. 
[Twilio has their own guide on IVR](https://www.twilio.com/docs/voice/tutorials/ivr-phone-tree-node-express)

## How does Twilio Twiml Work?

Twilio Twiml is [Twilio's Markup Language](https://www.twilio.com/docs/voice/twiml) for instructions for incoming calls

In Touch's IVR has three major parts

1. Welcome Caller
2. Keypad Menu for Caller to choose from
3. Conference Rooms  

#### Welcome **POST /ivr/welcome**
Greets caller with: <br/>
*Thanks for calling the In Touch Hotline. 
Please press 1 for current status of covid 19.
Press 2 to talk to a volunteer.*<br/>
Wait and Gather input from user.

XML Response:
<code>
&lt;Response&gt;<br/>
&emsp;&emsp;&lt;Gather action="/ivr/menu" numDigits="1" method="POST"&gt;<br/>
&emsp;&emsp;&emsp;&emsp;&lt;Say&gt;Thanks for calling the In Touch Hotline. <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Please press 1 for current status of covid 19. <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Press 2 to talk to a volunteer.&lt;/Say&gt;<br/>
&emsp;&emsp;&lt;/Gather&gt;<br/>
&lt;/Response&gt;<br/>
</code><br/>

Using Twiml we can gather an one digit input from the user and **POST /ivr/menu**
<code>
&lt;Gather action="/ivr/menu" numDigits="1" method="POST"&gt;<br/>
</code>

#### Menu **POST /ivr/menu**
Processes gathered input from user.

XML Response:
<code>
</code>
If the user inputs 1, reply with current Covid 19 status<br/>
<code>
&lt;Response&gt;<br/>
&emsp;&emsp;&lt;Say voice="alice"&gt;In New Zealand, as of 9.00 am, 18 April 2020, there has been 1422 cases, 867 have recovered, and 11 have died.&lt;/Say&gt;<br/>
&lt;/Response&gt;<br/> 
</code>
If the user input 2, put user into calling queue with volunteer<br/>
<code>
&lt;Response&gt;<br/>
&emsp;&emsp;&lt;Say voice="alice"&gt;Putting you through to our network of volunteers.&lt;/Say&gt;<br/>
&emsp;&emsp;&lt;Dial&gt;<br/>
&emsp;&emsp;&emsp;&emsp;&lt;Conference&gt;Random Room&lt;/Conference&gt;<br/>
&emsp;&emsp;&lt;/Dial&gt;<br/>
&lt;/Response&gt;<br/>
</code>
If there is no input from the user, return the user to welcome page<br/>
<code>
&lt;Response&gt;<br/>
&emsp;&emsp;&lt;Say voice="alice"&gt;Returning to the main menu&lt;/Say&gt;<br/>
&emsp;&emsp;&lt;Redirect&gt;/ivr/welcome&lt;Redirect&gt;<br/>
&lt;/Response&gt;<br/>

</code><br/>

If a user is in the queue for volunteers, FCM will message volunteers to pick up the call.

#### Conference Rooms **POST /connect/:conferenceId**

When a volunteer chooses to pick up a call. Frontend (volunteer interface) can call **POST /connect/:conferenceId** while 
logged in to Firebase and Twilio will place the volunteer and caller into a conference room by using the volunteer's phone number.

The parameter :conferenceId is the conference room the current caller is waiting in.
`