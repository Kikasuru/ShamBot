import { Client, Intents } from 'discord.js';
import * as dotenv from 'dotenv'; dotenv.config();
import { cmdIndex } from './commands/index.mjs';

if (!process.version.startsWith("v16")) {
    console.error("ShamBot requires Node v16 to run!");
    process.exit(1);
}

// -- Client --
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.on('ready', () => {
    console.log(`Ready to go! Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', (inter) => {
    // Find the command by it's name
    const cmd = cmdIndex.find((e) => {return e.name === inter.commandName});

    // If a command was found
    if (cmd) {
        // Check if a subcommand was given
        const subCmd = inter.options.getSubcommand(false);
        if (subCmd) {
            // Find the subcommand by it's name
            const subCmdCls = cmd.options.find((e) => {return e.name === subCmd});
            if (subCmdCls) subCmdCls.onRun(inter);
        } else {
            cmd.onRun(inter);
        }
    }
});

// -- Slash Commands --
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

export function refreshSlash() {
    return new Promise((res, rej) => {
        // Create an array for commands
        let commands = [];
        cmdIndex.forEach((e) => {
            commands.push(e.convert());
        });

        // Send the request
        try {
            rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.TEST_SERVER),
                { body: commands },
            ).then(() => {res();});
        } catch (err) {
            rej(err);
        }
    });
}

// -- Initialization --
refreshSlash().then(() => {
    client.login(process.env.TOKEN);
}).catch((err) => {
    console.error(err);
});
