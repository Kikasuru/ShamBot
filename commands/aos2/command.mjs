import { Command } from "../cmd.mjs";

import { ShamCharacter } from "./characters/sham.mjs";

export class AoS2Command extends Command {
    static name = "aos2";
    static desc = "Various info on the characters of AoS2!";

    static options = [
        ShamCharacter
    ];
}
