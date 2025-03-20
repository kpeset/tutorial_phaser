import { Scene } from "phaser";
import { Player } from "../entities/Player";
import { Platforms } from "../entities/Platforms";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	platforms: Platforms;
	player: Phaser.Physics.Arcade.Sprite;

	create() {
		// Affichage de l'image sky à l'écran.
		// L'affichage se fait dans l'ordre.

		this.add.image(400, 300, "sky");

		// crée un groupe statique d'objets qui ne bougent pas et qui peuvent être utilisés pour gérer des
		// collisions dans le jeu.

		// Affichage des platformes

		// Nous aggrandissons la première plateforme pour lui donner une impression de hauteur.
		// Sans  la méthode refreshBody(), la boîte de collision resterait à la taille originale de l'image,
		// ce qui peut causer des bugs de collision où le joueur "tombe à travers" la plateforme.

		this.player = new Player(this, 100, 450);
		this.platforms = new Platforms(this);

		this.physics.add.collider(this.player, this.platforms);

		this.platforms.createPlatform(400, 600 - 32, "ground", 2);
	}
}
