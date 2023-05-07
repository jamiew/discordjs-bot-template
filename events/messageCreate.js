const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log(
      `message from ${message.author.username}#${message.author.discriminator}: ${message.content}`
    );
    if (message.content.startsWith("zing")) {
      message.channel.send("zong!");
    } else {
      // message.channel.send("idk what that means");
      if (message.author.bot) {
        console.debug("ignoring bot message");
      } else {
        message.channel.send(`idk what "${message.content}" means`);
      }
    }
  },
};
