import { Scene } from "phaser";
import { Player } from "../entities/Player";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	platforms: Phaser.Physics.Arcade.StaticGroup;
	player: Phaser.Physics.Arcade.Sprite;

	create() {
		// Affichage de l'image sky à l'écran.
		// L'affichage se fait dans l'ordre.

		this.add.image(400, 300, "sky");

		// crée un groupe statique d'objets qui ne bougent pas et qui peuvent être utilisés pour gérer des
		// collisions dans le jeu.

		this.platforms = this.physics.add.staticGroup();

		// Affichage des platformes

		// Nous aggrandissons la première plateforme pour lui donner une impression de hauteur.
		// Sans  la méthode refreshBody(), la boîte de collision resterait à la taille originale de l'image,
		// ce qui peut causer des bugs de collision où le joueur "tombe à travers" la plateforme.

		this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

		// Ajout des autres plateformes.

		this.platforms.create(600, 400, "ground");
		this.platforms.create(50, 250, "ground");
		this.platforms.create(750, 220, "ground");

		this.player = new Player(this, 100, 450);
	}
}
