import { type Scene, Physics } from "phaser";

export class Platforms extends Physics.Arcade.StaticGroup {
	constructor(scene: Scene) {
		super(scene.physics.world, scene);
	}

	createPlatform(x: number, y: number, texture: string, scale = 1): void {
		const platform = this.create(x, y, texture);
		platform.setScale(scale).refreshBody();
	}
}
