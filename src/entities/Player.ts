import { type Scene, Physics, type Types } from "phaser";

export class Player extends Physics.Arcade.Sprite {
	cursors: Types.Input.Keyboard.CursorKeys;

	constructor(scene: Scene, x: number, y: number) {
		super(scene, x, y, "dude");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		const bounce = 0.2;
		const gravity = 300;

		this.setBounce(bounce);
		this.setCollideWorldBounds(true);
		this.setGravityY(gravity);

		if (scene.input.keyboard) {
			this.cursors = scene.input.keyboard.createCursorKeys();
		}
	}

	move() {
		if (this.cursors.left.isDown) {
			this.setVelocityX(-160);
		} else if (this.cursors.right.isDown) {
			this.setVelocityX(160);
		} else {
			this.setVelocityX(0);
		}

		if (this.cursors.up.isDown && this.body?.touching.down) {
			this.setVelocityY(-330);
		}
	}
}
