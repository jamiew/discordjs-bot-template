require("dotenv").config();

const config = {
  clientId: process.env.DISCORD_APP_ID,
  guildId: process.env.DISCORD_GUILD_ID,
  token: process.env.DISCORD_BOT_TOKEN,
};

if (!config.clientId || !config.guildId || !config.token) {
  throw new Error("missing required .env values");
}

module.exports = config;
