import { Scene } from "phaser";

export class Preloader extends Scene {
	constructor() {
		super("Preloader");
	}

	init() {}

	preload() {
		//  Chargez les ressources du jeu - Remplacez-les par vos propres ressources.

		this.load.setPath("assets");

		// Si le chargement des images ne fonctionne pas, nous avons un message d'erreur dans chrome. Exemple :
		// Failed to process file: image "sky"

		this.load.image("sky", "sky.png");
		this.load.image("ground", "platform.png");
		this.load.image("star", "star.png");
		this.load.image("bomb", "bomb.png");

		this.load.spritesheet("dude", "dude.png", {
			frameWidth: 32,
			frameHeight: 48,
		});
	}

	create() {
		//  Une fois que toutes les ressources sont chargées, il est souvent utile de créer ici des objets globaux
		//  que le reste du jeu pourra utiliser.
		//  Par exemple, vous pouvez définir des animations globales ici afin de les réutiliser dans d'autres scènes.

		this.scene.start("Game");
	}
}
