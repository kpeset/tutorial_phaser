import { Scene } from "phaser";
import { Player } from "../entities/Player";
import { Platforms } from "../entities/Platforms";
import { Stars } from "../entities/Stars";
import { Score } from "../entities/Score";

export class Game extends Scene {
	constructor() {
		super("Game");
	}

	platforms: Platforms;
	player: Player;
	stars: Stars;
	score: Score;

	create() {
		// Création de la liste des platforms pour ce niveau
		const platforms = [
			{
				t: "ground",
				x: 400,
				y: 600,
				s: 2,
			},
			{
				t: "ground",
				x: 800,
				y: 200,
				s: 1,
			},
			{
				t: "ground",
				x: 100,
				y: 200,
				s: 1,
			},
			{
				t: "ground",
				x: 600,
				y: 100,
				s: 1,
			},
			{
				t: "ground",
				x: 600,
				y: 500,
				s: 1,
			},
		];

		// Ajouter l'image de fond
		this.add.image(400, 300, "sky");

		// Initialiser des classes
		this.player = new Player(this, 100, 450);
		this.platforms = new Platforms(this);
		this.stars = new Stars(this);
		this.score = new Score(this, 16, 16, "Score : 0");

		// Génération des plafeforms dans la scène
		this.platforms.generatePlatform(platforms);

		// Créer le collider entre le joueur et les platforms
		this.player.collideWith(this.platforms);

		// Créer le collider entre les étoiles et les platforms
		this.physics.add.collider(this.stars.group, this.platforms);

		// Créer les overlaps entre player et les étoiles
		this.player.overlapWithObject(this.stars.group, () => {
			this.score.updateScore();
		});
	}

	update(): void {
		this.player.move();
	}
}
