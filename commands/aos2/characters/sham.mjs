import { AoS2Character, AoS2Move } from "../character.mjs";

class ShamwA extends AoS2Move {
    static name = "Sprite Call";
    static notation = "wA";
    static desc = "Sham summons a Sprite at a random location within a ring surrounding her; holding down the button will summon more sprites if wA ammo is available (5 max), 6 frames apart each. Sprites have 200HP. Each sprite fires 3 sequential shots shortly after being summoned, before following Sham while travelling in randomised loop patterns around her, pausing to fire the same set of shots again every 3.3 seconds. After firing their 3rd set, they will continue following Sham in the same manner for another 3.3 seconds and then disappear. Significant meter disadvantage if grazed. Sham's dwA is replaced with an alternate move while she has at least one Sprite up.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_A";
    static image = "https://wiki.gbl.gg/images/0/05/Aos2_sham_wa.png";

    static type = "Beam";
    static energy = "Primary: 20-100%";
    static shots = "3 - 15";
    static damage = "120x";
    static meterGain = "~11 full uses per bar";
    static grazeGain = "?";
    static startup = "13 (Sprite Summon), 24 (Shots)";
    static cancelRec = "8-32";
    static fullRec = "19-43";
}

class ShamDwA extends AoS2Move {
    static name = "Beam Ribbon";
    static notation = "DwA";
    static desc = "Can only be used when you control no Sprites. Sham fires out 4 wisps (2 frames between each) which place themselves in random locations around her. About 1.6 seconds after being summoned, each wisp detonates into a 'flower' pattern made of 6 beams that curve inwards (the pattern is tilted based on the wisp's relative location to the opponent). They stick around until they hit the edge of the map, making them a decent delayed cover option. Harder for the opponent to graze than Sprite Call.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_A";
    static image = "https://wiki.gbl.gg/images/8/89/Aos2_sham_dwa2.png";

    static type = "Beam";
    static energy = "Primary: 15-60%";
    static shots = "24";
    static damage = "120x";
    static meterGain = "~17 uses per bar";
    static grazeGain = "?";
    static startup = "16 (Wisps), 114 (Shots)";
    static cancelRec = "10";
    static fullRec = "21";
}

class ShamDwA2 extends AoS2Move {
    static name = "Sprite Release";
    static notation = "DwA*";
    static desc = "Can only be used when you control at least one Sprite. Post-startup, Sham's Sprites amplify their current loop movement before homing in on the opponent, exploding if the opponent comes into contact with their hurtbox or if they are destroyed. They will chase the opponent in this state for a little over 4 seconds, although they will only genuinely try to run into the opponent during the last few frames of their existence; until then, they will repeatedly travel away in small loop patterns if they ever detect themselves getting too close. In other words, they are designed to only hit if the opponent dashes into them. Sometimes they will even deliberately curve outwards on startup if they detect that they are heading directly towards the opponent.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_A";
    static image = "https://wiki.gbl.gg/images/d/d7/Aos2_sham_sprdwa1.png";

    static type = "Direct";
    static energy = "Primary: 0%";
    static shots = "-";
    static damage = "250x";
    static meterGain = "0";
    static grazeGain = "0";
    static startup = "11";
    static cancelRec = "10";
    static fullRec = "21";
}

class ShamSPwA extends AoS2Move {
    static name = "Resistant Sphere";
    static notation = "SPwA";
    static desc = "Sham expends all of her remaining wA ammo (minimum 50%) to summon a large sphere; it expands in size until frame 21, where it then has a single frame where opponents in contact with it will be damaged and knocked back. The sphere surrounds Sham as she moves and can push the opponent if she runs into them with it. Duration of the sphere is dependent on ammo expended; lowest is 61 frames (about 1 second), highest is 160 frames (about 2.6 seconds). The sphere does not interact with anything other than opponents and Star Breaker's tap wB (which will automatically stick to Sham if it hits the sphere). +11 frame advantage.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_A";
    static image = "https://wiki.gbl.gg/images/a/aa/Aos2_sham_spwa.png";

    static type = "Direct (Explosion)";
    static energy = "Primary: 50-100%";
    static shots = "-";
    static damage = "100 (Knockback)";
    static meterGain = "~10 uses per bar";
    static grazeGain = "0";
    static startup = "11 (Sphere), 21 (Knockback)";
    static cancelRec = "15";
    static fullRec = "26";
}

class ShamwB extends AoS2Move {
    static name = "Mysterious Cube";
    static notation = "wB";
    static desc = "Sham summons an arc of 7 cubes at her front. The cubes become active on frame 33 (unless they overlap with the arena's edge, in which case they disappear). Once they are active, they travel outwards at a slowly accelerating pace, pushing opponents in contact away from their center as they do. Cubes do not interact with other attacks; they only block opponents and Star Breaker's tap wB. Once a cube reaches the edge of the map, it will explode in a small radius.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_B";
    static image = "https://wiki.gbl.gg/images/8/8e/Aos2_sham_wb1.png";

    static type = "Direct (Explosion)";
    static energy = "Sub: 30%";
    static shots = "7";
    static damage = "250x";
    static meterGain = "~20 uses per bar";
    static grazeGain = "0";
    static startup = "13";
    static cancelRec = "8";
    static fullRec = "19";
}

class ShamHwB extends AoS2Move {
    static name = "Mysterious Cube (Held)";
    static notation = "HwB";
    static desc = "Sham summons a circle of 12 cubes. They become active on frame 36, and behave in the exact same way as cubes from the non-held version. Due to their tight clustering, it takes about half a second after becoming active for the opponent to be able to slip between them.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_B";
    static image = "https://wiki.gbl.gg/images/a/a1/Aos2_sham_hwb.png";

    static type = "Direct (Explosion)";
    static energy = "Sub: 50%";
    static shots = "12";
    static damage = "250x";
    static meterGain = "~10 uses per bar";
    static grazeGain = "0";
    static startup = "16";
    static cancelRec = "10";
    static fullRec = "26";
}

class ShamSPwB extends AoS2Move {
    static name = "Dwarf Call";
    static notation = "SPwB";
    static desc = "Sham summons a pair of Dwarves 5 frames apart. Each dwarf has 800HP. After being summoned, Dwarves remain stationary for about 3 seconds (175 frames) before firing a volley of shots ('Disc Volley'), each at a random direction within a cone aimed at the opponent. The shots are made of two seperate hitboxes; a ballistic-type disc and a beam-type ring that surrounds it, each smaller in size than their visuals suggest. The ring will continue to exist even if its disc is destroyed. After 37 frames of recovery (following the first shot), Dwarves will spend about 1.6 seconds (101 frames) positioning themselves at each side of Sham and slowly following her around, before pausing again for about 2.6 seconds (164 frames) until they fire the next volley. This cycle repeats infinitely until the dwarves are destroyed. You cannot resummon Dwarves until both are destroyed.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_B";
    static image = "https://wiki.gbl.gg/images/2/2d/Aos2_sham_spwb1.png";

    static type = "Ballistic (Discs), Beam (Rings)";
    static energy = "Sub: 0%";
    static shots = "7 per dwarf (Discs and Rings)";
    static damage = "150 (Discs), 120 (Rings)";
    static meterGain = "0 (Summon)";
    static grazeGain = "? (Discs), ? (Rings)";
    static startup = "16 (Summon), 190 (first dwarf shot)";
    static cancelRec = "10";
    static fullRec = "21";
}

class ShamSPwB2 extends AoS2Move {
    static name = "Dwarf Tackle";
    static notation = "SPwB*";
    static desc = "Sham commands the Dwarves to stop their current action on Frame 11, after which they will lunge straight towards the opponent. The lunge consists of 9 hitboxes spaced 4 frames apart, each knocking the opponent back a small distance. 101 frames after lunge startup, Dwarves will enter a 'cooldown period' during which they follow Sham in the same manner that they normally do between disc volleys. This recovery period lasts for 101 frames (about 1.6 seconds); after it ends, Dwarves will prepare another disc volley in the typical manner, at which point Sham can command them to lunge again. Due to the 20-frame gap between each Dwarf's lunge, the first Dwarf will exit its recovery period sooner than the other one does; issuing the command to tackle again during this gap will only cause one Dwarf to lunge, since the other is still on cooldown. This allows you to stagger the length between each Dwarf's volleys and/or lunges.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Weapon_B";
    static image = "https://wiki.gbl.gg/images/0/01/Aos2_sham_sprspwb.png";

    static type = "Direct";
    static energy = "Sub: 0%";
    static shots = "-";
    static damage = "60x9 (per dwarf)";
    static meterGain = "0";
    static grazeGain = "-";
    static startup = "21 (First Dwarf, or Second Dwarf if first is dead), 41 (Second Dwarf)";
    static cancelRec = "5";
    static fullRec = "16";
}

class ShamHyperA extends AoS2Move {
    static name = "Poly Sprite";
    static notation = "HyperA";
    static desc = "Sham sequentially summons 11 sprites in random locations around her, 4 frames between each. Each sprite is launched 10 frames after summon, curving inward or outward before homing in on the opponent. These sprites are slower than the ones fired out by dwA, but they do not loop away from the opponent if they get too close. They explode either on contact or 110 frames after being summoned (a little under 2 seconds).";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Hypers";
    static image = "https://wiki.gbl.gg/images/9/94/Aos2_sham_nhyper1.png";

    static type = "Direct";
    static energy = "-";
    static shots = "11";
    static damage = "250x";
    static meterGain = "-";
    static grazeGain = "-";
    static startup = "5";
    static cancelRec = "41";
    static fullRec = "77";
}

class ShamHyperB extends AoS2Move {
    static name = "Bounding Cube";
    static notation = "HyperB";
    static desc = "Sham summons a circle of 20 cubes. They become active on frame 31. The cubes behave in the exact same way as the non-hyper counterparts; in addition, Blue cubes also block all of the opponent's beams and ballistics on contact. It takes a little over a second after they are active for the opponent to be able to dash between them.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Hypers";
    static image = "https://wiki.gbl.gg/images/6/66/Aos2_sham_bhyper.png";

    static type = "Direct (Explosion)";
    static energy = "-";
    static shots = "20";
    static damage = "250x";
    static meterGain = "-";
    static grazeGain = "-";
    static startup = "11";
    static cancelRec = "20";
    static fullRec = "51";
}

class ShamHyperD extends AoS2Move {
    static name = "Delta Sprite";
    static notation = "HyperD";
    static desc = "'Delta Field'. Sham summons 3 trios of sprites. One trio travels out behind her, while the other two travel out slightly in front of her sides. Each trio of sprites carries a paralysing field between them that will remove the opponent's ability to dash if they come into contact with it (even if they have a shield up). About 2 seconds after their initial summon, they will slowly travel in a straight line towards the opponent's current location; then, once they hit the arena's edge, they will disappear after about 1.6 seconds. Each sprite has 100HP; if it is destroyed, then the paralysing field it carried will disappear, and the other sprites that carried the field will fire out at the opponent in the exact same way as dwA.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Hypers";
    static image = "https://wiki.gbl.gg/images/e/ee/Aos2_sham_dhyper.png";

    static type = "Direct (Released Sprites)";
    static energy = "-";
    static shots = "3x3";
    static damage = "250x (Released Sprites)";
    static meterGain = "-";
    static grazeGain = "-";
    static startup = "11";
    static cancelRec = "25";
    static fullRec = "41";
}

class ShamHyperS extends AoS2Move {
    static name = "Dwarf Rush";
    static notation = "HyperS";
    static desc = "Sham sequentially summons 10 dwarves in random locations around her, 3 frames between each. Each dwarf lunges forward 20 frames after being summoned, travelling in a straight line until it reaches the end of the map; during this period, it has a hitbox surrounding it every 5 frames that knocks the opponent back slightly. Like the SPwB ones, these dwarves have 800HP.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Hypers";
    static image = "https://wiki.gbl.gg/images/e/e0/Aos2_sham_sphyper.png";

    static type = "Direct";
    static energy = "-";
    static shots = "10";
    static damage = "40x";
    static meterGain = "-";
    static grazeGain = "-";
    static startup = "31";
    static cancelRec = "20";
    static fullRec = "51";
}

class ShamAccel extends AoS2Move {
    static name = "Arachne Call";
    static notation = "Accel";
    static desc = "Sham summons Arachne behind her, an enormous robot that travels in a straight line towards the opponent's current location. As it moves, it pushes back opponents in contact with it, much like cubes do. It also creates random mini-explosions within a large area at its front; each mini-explosion has a hitbox 10 frames after it is spawned. Once Arachne reaches the edge of the map, it explodes in a large area, 5 frames between each hitbox. Much to the move's misfortune, opponents can dash between Arachne's body and wings (assuming they don't just dash around it outright); it is even possible for an opponent to clip straight through the body due to how it calculates their position when pushing them back. Worse yet, the opponent is able to use shields before Arachne explodes.";

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham#Hypers";
    static image = "https://wiki.gbl.gg/images/7/7f/Aos2_sham_accel1.png";

    static type = "Direct";
    static energy = "-";
    static shots = "-";
    static damage = "130 (Mini Explosions), 260x4 (Final Explosion)";
    static meterGain = "-";
    static grazeGain = "-";
    static startup = "14 (Arachne Summon), 37 (First Mini-Explosion)";
    static cancelRec = "30";
    static fullRec = "91";
}

export class ShamCharacter extends AoS2Character {
    static name = "sham";
    static fname = "Sham";
    static desc = `Sham is a summoner type character that doesn't really do much fighting herself, and relies more on working with her drones to do that for her while backing them up with supportive fire. She is extremely defensive as a result of her non-existent offense; her attacks are all slow, inconsistent, and reliant on sluggish, destructible minions. While they do a decent job at protecting her in neutral, their aggro game is terrible. As a result, Sham struggles monumentally against characters who don't need to actually close in on her to hit her, and she tends to lose the second she reaches a significant HP disadvantage unless her opponent makes a careless mistake. Worse yet, her defense is ultimately let down by her incapability at building meter, causing most hypers to ruin her.

There's no mincing words; Sham is the worst character in the game. She has the second lowest tap-dash speed (equal to Mira's and only better than Kyoko's), the lowest meter gain, high meter feed, and no fast confirms. Unless you love the character or are curious as to why she is so powerless, you'd be better off not playing her. Do not expect any competitive success with her.

**Difficulty: Hard**

Sham's difficulty, to be blunt, just stems from her being the worst character in the game, having very little matchups in which she doesn't have a huge disadvantage. Her kit itself is relatively straightforward, or so it seems. But to actually utilize it without feeding your opponent unnecessary amounts of meter will take a lot of practice. This mixed with having to avoid getting hit more than anyone else (due to a utter lack of decent confirms) makes Sham very difficult to actually pull off.`;
    static thumb = "https://cdn.discordapp.com/attachments/876759143984275508/877032755576336414/sham_thumb.png";
    static color = 0xA2C3A2;

    static mizuumi = "https://wiki.gbl.gg/w/Acceleration_of_Suguri_2/Sham";

    static normalSpeed = 4.65;
    static dashSpeed = 9.26;
    static idashSpeed = 11.63;

    static speedIncrease = 25.58;

    static moves = [
        // Weapon A
        ShamwA,
        ShamDwA,
        ShamDwA2,
        ShamSPwA,

        // Weapon B
        ShamwB,
        ShamHwB,
        ShamSPwB,
        ShamSPwB2,

        // Hypers
        ShamHyperA,
        ShamHyperB,
        ShamHyperD,
        ShamHyperS,

        // Accel
        ShamAccel
    ];
}
