import { type Scene, Physics } from "phaser";

type PlatformData = {
	t: string;
	x: number;
	y: number;
	s: number;
};

export class Platforms extends Physics.Arcade.StaticGroup {
	constructor(scene: Scene) {
		super(scene.physics.world, scene);
	}

	// Création d'une fonction pour créer une platform
	createPlatform(x: number, y: number, texture: string, scale: number): void {
		const platform = this.create(x, y, texture);
		platform.setScale(scale).refreshBody();
	}

	// Création d'une fonction afin de générer des platforms à partir d'une liste
	generatePlatform(list: PlatformData[]) {
		for (const platform of list) {
			this.createPlatform(platform.x, platform.y, platform.t, platform.s);
		}
	}
}
