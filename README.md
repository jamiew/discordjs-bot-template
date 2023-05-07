# generic discord.js bot

Built by following along w/ the [Discord.js bot guide](https://discordjs.guide/)

I assumed they had a repo with a complete example but couldn't find it. The closest official-ish things I found, which are both fully setup & Typescript'up up:

- discord.js's [discord-utils-bot](https://github.com/discordjs/discord-utils-bot)
- discord.js's [discord-toolkit-bot](https://github.com/discordjs/discord-toolkit-bot)

This one is just vanilla javascript. Simplest thing that works.

## Setup

Register a bot in the [Discord developer portal](https://discord.com/developers/applications) (or re-use grapher2):

Go the "Bot" tab in your new Discord application and turn it on. Press "Reset Token" and copy that down.

Copy `.env.sample` to `.env` and set the appropriate credentials

It's a good idea to set the DISCORD_GUILD_ID to a test server, where you can go crazy. Global commands are more restricted. To get the ID of a given server, right-click it in the Discord server list and select "Copy ID"

Install the bot using a correctly-setup Oauth2 permission link (see above). Generally requires client ID (aka app ID) and a permission scope (generally just `applications.commands`)

Example install URL - substitute your `client_id`:

<https://discord.com/api/oauth2/authorize?client_id=xxxxxxxxxxxxxxxxxxx&permissions=0&scope=bot%20applications.commands>

TODO

- how to setup generic message handling, not just slash commands. is it as easy as turning on "message content" intent in global bot dev settings? I always forget
- add screenshots because, like above, I completely forget how to do this every time I need to do it

## Running

Run in devmode, reloading on every code change:

```sh
pnpm dev
```

Or run without reloading, and use `/update commandName` to refresh code for a specific command:

```sh
pnpm start
```
