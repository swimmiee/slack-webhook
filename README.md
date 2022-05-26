# @swimmie/slack-webhook
 Slack Webhook Library with alias for sending Slack notifications to multiple channels

# Installation
 ```bash
 npm i @swimmie/slack-webhook
 ```

# Quick Usage
Simply & Easily text to Slack Channel!

 ```typescript
 import SlackBot from "@swimmie/slack-webhook";
 const slackBot = new SlackBot({
    'developers': 'https://hooks.slack.com/services/<YOUR_WEBHOOK_URL_1>',
    'designers': 'https://hooks.slack.com/services/<YOUR_WEBHOOK_URL_3>'
    'marketers': 'https://hooks.slack.com/services/<YOUR_WEBHOOK_URL_2>',
 })

 // Set receive channels dynamically (Send text only)
 await slackBot.sendText('developers', "Hello, Developers!");
 await slackBot.send('marketers', {
     text:"Hello, Developers!"
 });


 // Using a Single Channel
 const designerBot = slackBot.createBot('designers')
 await designerBot.sendText("Hello, Designers!")
 ```

# Advanced usage
```typescript
const slackBot = new SlackBot({
    'developers': 'https://hooks.slack.com/services/<YOUR_WEBHOOK_URL_1>',
    ...
 })

await slackBot.sendText('developers', {
    text: "Hello, Developers!",
    blocks: [
    	{
    		type: "section",
    		text: {
    			type: "mrkdwn",
    			text: "Danny Torrence left the following review for your property:"
    		}
    	},
    	{
    		type: "section",
    		block_id: "section567",
    		text: {
    			type: "mrkdwn",
    			text: "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
    		},
    		accessory: {
    			type: "image",
    			image_url: "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
    			alt_text: "Haunted hotel image"
    		}
    	},
    	{
    		type: "section",
    		block_id: "section789",
    		fields: [
    			{
    				type: "mrkdwn",
    				text: "*Average Rating*\n1.0"
    			}
    		]
    	}
    ]
 });
```