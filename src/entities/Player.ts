import { type Scene, Physics } from "phaser";

export class Player extends Physics.Arcade.Sprite {
	// do something
	constructor(scene: Scene, x: number, y: number) {
		// Charger le sprite du joueur
		super(scene, x, y, "dude");

		// Ajoute le joueur et active la physique
		scene.add.existing(this);
		scene.physics.add.existing(this);

		// Configuration du joueur
		this.setBounce(0.2);
		this.setCollideWorldBounds(true);
	}
}
