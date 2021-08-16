import { Command } from "./cmd.mjs";

export class PingCmd extends Command {
    static name = "ping";
    static desc = "Replies with \"Pong!\"  Perfect for testing if I work!"

    static onRun(inter) {
        const shamburger = inter.client.emojis.cache.get("876792351404752936");
        inter.reply(`Pong! ${shamburger}`);
    }
}

export class InviteCmd extends Command {
    static name = "invite";
    static desc = "Replies with my invite!  Take me somewhere new!"

    static onRun(inter) {
        inter.reply(`Thank you for showing intrest!  Here's my invite!\nhttps://discord.com/api/oauth2/authorize?client_id=${inter.client.user.id}&permissions=2147485760&scope=bot%20applications.commands`)
    }
}
