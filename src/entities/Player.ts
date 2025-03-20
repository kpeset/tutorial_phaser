import { type Scene, Physics } from "phaser";

export class Player extends Physics.Arcade.Sprite {
	// do something
	constructor(scene: Scene, x: number, y: number) {
		// Charger le sprite du joueur
		super(scene, x, y, "dude");

		// Ajoute le joueur et active la physique
		scene.add.existing(this);
		scene.physics.add.existing(this);

		const bounce = 0.2;
		const gravity = 300;

		// Configuration du joueur
		this.setBounce(bounce);
		this.setCollideWorldBounds(true);
		this.setGravityY(gravity);
	}
}
