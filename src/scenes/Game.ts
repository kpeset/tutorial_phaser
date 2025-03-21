import { Scene } from "phaser";
import { Player } from "../entities/Player";
import { Platforms } from "../entities/Platforms";
import { Stars } from "../entities/Stars";
import { Score } from "../entities/Score";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	platforms: Platforms;
	player: Player;
	stars: Stars;
	score: number;
	scoreText: Score;

	create() {
		this.score = 0;
		this.add.image(400, 300, "sky");

		this.scoreText = new Score(this, 16, 16, "Score : 0");

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

		this.stars = new Stars(this);

		this.physics.add.collider(this.stars.group, this.platforms);
		this.physics.add.overlap(this.player, this.stars.group, (player, star) => {
			const p = player as Player;
			const s = star as Phaser.Physics.Arcade.Sprite;

			this.player.collectStar(p, s);
			this.score += 1;
			this.scoreText.updateScore(this.score);
		});
	}

	update(): void {
		this.player.move();
	}
}
