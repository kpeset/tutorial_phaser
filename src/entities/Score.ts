import type { Scene } from "phaser";

export class Score extends Phaser.GameObjects.Text {
	score = 0;

	constructor(
		scene: Scene,
		x: number,
		y: number,
		text: string,
		style: Phaser.Types.GameObjects.Text.TextStyle = { fontSize: "32px" },
	) {
		super(scene, x, y, text, style);

		scene.add.existing(this);
	}

	updateScore() {
		this.score += 1;
		this.setText(`Score : ${this.score}`);
	}
}
