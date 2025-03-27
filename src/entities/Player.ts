import { type Scene, Physics, type Types } from "phaser";

export class Player extends Physics.Arcade.Sprite {
	cursors: Types.Input.Keyboard.CursorKeys;

	constructor(scene: Scene, x: number, y: number) {
		super(scene, x, y, "dude");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setBounce(0.2);
		this.setCollideWorldBounds(true);
		this.setGravityY(300);

		// Création des animations propres à player
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

	// Fonction du déplacement du player
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

	// Collision dynamique avec un groupe
	collideWith(object: Phaser.Physics.Arcade.StaticGroup) {
		this.scene.physics.add.collider(this, object);
	}

	// Overlap entre le player et un objet
	overlapWithObject(
		objects: Phaser.Physics.Arcade.Group,
		onCollect: () => void,
	) {
		this.scene.physics.add.overlap(this, objects, (_, object) => {
			const s = object as Phaser.Physics.Arcade.Sprite;
			s.disableBody(true, true);
			onCollect();
		});
	}
}
