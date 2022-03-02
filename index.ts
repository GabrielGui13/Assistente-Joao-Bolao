import { Client, Intents } from "discord.js";
import { netoCall } from "./src/services/joaoCall";

import dotenv from "dotenv";
dotenv.config();

const token = process.env.TOKEN;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS
]});

//Online
client.on("ready", () => {
    console.log(`${client.user.tag} online e roteando!`);
    client.user.setActivity("Guilherme sendo ruim", {
        type: "WATCHING"
    });
    //client.channels.cache.get('740204628200652830').send('Abram as pernas mulheres e saiam da frente homens, o imperador do mundo chegou!')
});

client.on("messageClient", async message => {
    const prefix = "joao";
    if (message.content.split(' ')[0] === prefix) {
        netoCall(prefix, message, client);
    }
})

if (!token || typeof token !== "string") throw new Error("Token not found, missing .env file maybe?");
    
client.login(token);
