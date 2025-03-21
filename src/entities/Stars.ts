import type { Scene, Physics } from "phaser";

export class Stars {
	group: Physics.Arcade.Group;

	constructor(scene: Scene) {
		// Création d'un groupe de 12 étoiles espacées
		this.group = scene.physics.add.group({
			key: "star",
			// Répète 11 fois après avoir créé la première étoile
			repeat: 11,
			// Position x de départ écarté de 70 px les une les autres
			setXY: {
				x: 12,
				y: 0,
				stepX: 60,
			},
		});

		// Donne un rebond aléatoire à chaque étoile
		this.group.children.iterate((child) => {
			const sprite = child as Physics.Arcade.Sprite;
			sprite.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
			return null;
		});
	}
}
