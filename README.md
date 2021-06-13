## WEBSITE BY [SNOWFLAKEE STUDIO](https://github.com/DevSnowflake)

<div align="center">
  <p>
    <img alt="npm" src="https://img.shields.io/npm/dt/memer-api">
  <a href="https://maintained.cc"><img src="https://maintained.cc/SDBagel/Maintained/1?" alt="Status Badge"></a>
  <a href="https://maintained.cc"><img src="https://maintained.cc/SDBagel/Maintained/2?" alt="Get Started Now"></a>
      <a href=""><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source"></a>
  </p>
</div>



# Memer Api - Welcome

Memer API is a powerful module that allows you to manipulate images very easily.

## **Installation** 
```
npm install memer-api
```
```js
const Meme = require("meme-api");
const memer = new Meme();
memer.<Method>(<Options>); //returns -> Promise -> <Buffer>
```

**Join our [Discord Server](https://discord.gg/pe3V7uT) for Support**


## **Features**

* **Super simple**
* **Easy to use** 
* **More than 40 methods.**
* **Beginner-friendly** 
* **Great Support**
* **Flexible**


## Examples

```js
const Meme = require("meme-api"), Discord = require("discord.js"), memer = new Meme();

const avatar = "https://imgur.com/I5DmdNR.png"; //only static images supported / works! no gifs / videos

memer.jail(avatar).then(jail=> {
    //now you have a "BUFFER", for Discord create an attachment
      //var attachment = new Discord.MessageAttachment(image, "bed.png");
      //<Channel>.send(attachment)
})
```

## Credits
Documentation website by [**Snowflake Studio**](https://github.com/DevSnowflake) projects.

## PREVIEWS

![IMAGE](https://cdn.discordapp.com/attachments/806750853947719760/843579019823546368/memer-api_preview.png)






