/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html

//scene imports statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"


// create the new scenes
const splashScene = new splashScene()
const titleScene = new titleScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in ther middle of ther page.
    autocenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
// console.log(game)

// load
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)

// the start scene
game.scene.start("splashScene")