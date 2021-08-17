import { Command } from "../cmd.mjs";

export class AoS2Character extends Command {
    static name = "";
    static fname = "";
    static desc = "";
    static thumb = "";
    static color = 0x000000;

    static mizuumi = "";

    static normalSpeed = 0;
    static dashSpeed = 0;
    static idashSpeed = 0;

    static speedIncrease = 0;

    static moves = [];

    static createEmbed() {
        return {
            "embeds": [{
                "title": this.fname,
                "description": this.desc,
                "color": this.color,
                "url": this.mizuumi,
                "fields": [
                    {
                        "name": "Normal Speed",
                        "value": `${this.normalSpeed}`,
                        "inline": true
                    },
                    {
                        "name": "Dash Speed",
                        "value": `${this.dashSpeed}`,
                        "inline": true
                    },
                    {
                        "name": "Initial-Dash Speed",
                        "value": `${this.idashSpeed}`,
                        "inline": true
                    },
                    {
                        "name": "Speed Increase from Dash to I-Dash",
                        "value": `${this.speedIncrease}%`,
                        "inline": true
                    }
                ],
                "thumbnail": {
                    "url": this.thumb
                }
            }]
        }
    }

    static convert() {
        let choices = [];
        this.moves.forEach((e) => {
            choices.push({
                "name": `${e.notation} - ${e.name}`,
                "value": e.notation
            });
        });

        return {
            "name": this.name,
            "type": 1,
            "description": `View character/move info about ${this.fname}!`,
            "options": [
                {
                    "name": "move",
                    "description": "View info and frame-data about a specific move.",
                    "type": 3,
                    "required": false,
                    "choices": choices
                }
            ]
        }
    }

    static onRun(inter) {
        const moveName = inter.options.getString("move", false);

        if (moveName) {
            // Grab the move by it's notation
            const move = this.moves.find((e) => {return e.notation === moveName});
            if (move) {
                inter.reply(move.createEmbed(this.thumb, this.color));
            } else {
                inter.reply("Invalid move!");
            }
        } else {
            inter.reply(this.createEmbed());
        }
    }
}

export class AoS2Move {
    static name = "";
    static notation = "";
    static desc = "";

    static mizuumi = "";
    static image = "";

    static type = "";
    static energy = "";
    static shots = "";
    static damage = "";
    static meterGain = "";
    static grazeGain = "";
    static startup = "";
    static cancelRec = "";
    static fullRec = "";

    static createEmbed(thumb, color) {
        return {
            "embeds": [{
                "title": `${this.notation} - ${this.name}`,
                "description": this.desc,
                "color": color,
                "url": this.mizuumi,
                "fields": [
                    {
                        "name": "Type",
                        "value": this.type,
                        "inline": true
                    },
                    {
                        "name": "Energy",
                        "value": this.energy,
                        "inline": true
                    },
                    {
                        "name": "Shots",
                        "value": this.shots,
                        "inline": true
                    },
                    {
                        "name": "Damage",
                        "value": this.damage,
                        "inline": true
                    },
                    {
                        "name": "Meter Gain",
                        "value": this.meterGain,
                        "inline": true
                    },
                    {
                        "name": "Grazed Meter Gain",
                        "value": this.grazeGain,
                        "inline": true
                    },
                    {
                        "name": "Startup",
                        "value": this.startup,
                        "inline": true
                    },
                    {
                        "name": "Canceled Recovery",
                        "value": this.cancelRec,
                        "inline": true
                    },
                    {
                        "name": "Full Recovery",
                        "value": this.fullRec,
                        "inline": true
                    }
                ],
                "thumbnail": {
                    "url": thumb
                },
                "image": {
                    "url": this.image
                }
            }]
        }
    }
}
