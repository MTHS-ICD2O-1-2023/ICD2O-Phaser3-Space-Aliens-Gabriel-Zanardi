/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This class is Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "splashScene" })
  }


/**
 * Can be defined on your own Scenes.
 * This method is called by the Scene Manatger when the scene starts,
 * before preload() and create().
 * @param {object} data - Any dara passed via ScenePlugin.add() or ScenePlugin.start()
 */
init(data) {
  this.cameras.main.setBackgroundColor("ffffff")
}

/**
 * Can be defined on your own Secenes.
 * Use it to load assets.
 */
preload() {
  console.log("Splash Scene")
}

/**
 * Can be defined on your own Scenes.
 * Use it to create your game objects.
 * @param {object} data - Any dara passed via ScenePlugin.add() or ScenePlugin.start() 
 */
create(data) {
  //pass
}

/**
 * Should be overriden by your own Scenes.
 * This method is called once per game step while the scene is running.
 * @param {number} time - The current time.
 * @param {number} delta - The delta time in ms since the last frame.
 */
update(time, delta) {
  //pass
  }

/**
 * Shou;d be overriden by your own Scenes.
 * This method is called once per game step while the scene is running.
 * @param {number} time - The current time
 * @param {number} delta -  The delta time in ms since the last frame
 */
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScene
