import { Scene } from "phaser";
import { Player } from "../entities/Player";
import { Platforms } from "../entities/Platforms";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	platforms: Platforms;
	player: Player;

	create() {
		this.add.image(400, 300, "sky");

		this.player = new Player(this, 100, 450);
		this.platforms = new Platforms(this);

		this.physics.add.collider(this.player, this.platforms);

		this.platforms.createPlatform(400, 600 - 32, "ground", 2);
		this.platforms.createPlatform(400, 500 - 32, "ground");
		this.platforms.createPlatform(100, 420 - 32, "ground");
		this.platforms.createPlatform(550, 350 - 32, "ground");
		this.platforms.createPlatform(350, 270 - 32, "ground");
		this.platforms.createPlatform(100, 200 - 32, "ground");
		this.platforms.createPlatform(640, 170 - 32, "ground");
	}

	update(): void {
		this.player.move();
	}
}
