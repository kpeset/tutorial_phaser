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

		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1,
		});

		this.anims.create({
			key: "turn",
			frames: [{ key: "dude", frame: 4 }],
			frameRate: 20,
		});

		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1,
		});

		if (scene.input.keyboard) {
			this.cursors = scene.input.keyboard.createCursorKeys();
		}
	}

	move() {
		if (this.cursors.left.isDown) {
			this.setVelocityX(-160);
			this.anims.play("left", true);
		} else if (this.cursors.right.isDown) {
			this.setVelocityX(160);
			this.anims.play("right", true);
		} else {
			this.setVelocityX(0);
			this.anims.play("turn", true);
		}

		if (this.cursors.up.isDown && this.body?.touching.down) {
			this.setVelocityY(-330);
		}
	}
}
