import { Boot } from "./scenes/Boot";
import { Game as MainGame } from "./scenes/Game";
import { Preloader } from "./scenes/Preloader";

import { Game, type Types } from "phaser";

const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x: 0, y: 300 },
			debug: false,
		},
	},
	parent: "game-container",
	backgroundColor: "#028af8",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [Boot, Preloader, MainGame],
};

export default new Game(config);
