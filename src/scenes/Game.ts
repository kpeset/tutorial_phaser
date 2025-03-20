import { Scene } from "phaser";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	create() {
		// Affichage de l'image sky à l'écran
		// L'affichage se fait dans l'ordre

		this.add.image(400, 300, "sky");
		this.add.image(400, 300, "star");
	}
}
