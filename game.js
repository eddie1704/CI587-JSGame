// ----------------------------------------------
// EZW - 2024
// CI587 - CW1 - Computer Wizard
// ----------------------------------------------

let world = {
    ROWS: 40,
    COLUMNS: 40,
    TILEWIDTH: 33,
    //map define inital layout of _world
    l1World_ary: [
		[10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9],
        [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
        [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
        [10,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,9],
        [10,0,0,3,2,2,2,2,5,0,0,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,5,0,0,4,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,7,2,0,0,7,2,2,5,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,2,7,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,0,0,1,0,2,2,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,2,2,2,0,0,2,7,2,0,0,1,0,0,6,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,2,2,4,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,1,0,0,3,2,2,2,4,0,0,1,0,0,0,0,0,2,7,2,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,1,0,0,3,2,2,2,4,0,0,1,0,0,0,0,0,2,7,2,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,3,2,2,2,0,0,0,0,0,0,0,7,2,2,4,0,0,9],
        [10,0,0,1,0,0,2,7,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,2,7,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,7,2,0,0,1,0,0,5,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,2,7,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,5,0,0,9],
        [10,0,0,1,0,0,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,7,2,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,9],
        [10,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,2,7,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,0,0,7,2,2,7,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,9],
        [10,0,0,3,2,2,2,7,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2,2,2,7,2,2,2,4,0,0,0,0,0,9],
        [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
        [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
        [10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,9]],
    // identify location and type of items
    l1Item_ary: [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,3,3,3,3,3,0,0,2,0,2,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,2,4,0,2,2,3,3,3,3,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,0,0,0,2,4,4,0,0,0,0,0,0,0,0,0,0,4,2,2,2,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,2,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,2,0,0,3,3,0,2,2,0,0,3,2,0,3,3,0,0,0,3,3,3,0,0,2,0,0,0,4,0,3,0,0,0,0,0,0,0,2,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,4,0,2,0,4,0,4,4,0,0,2,0],
        [0,2,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0],
        [0,2,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,2,0,0,4,0,2,0,4,0,3,4,4,4,4,4,4,4,4,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,4,0,3,0,0,0,0,4,4,0,0,0],
        [0,3,0,0,2,0,0,2,2,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,4,0,0,4,0,2,0,4,0,0,4,2,0,0,0],
        [0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,2,0,0,0,0,0,3,0],
        [0,3,0,0,4,0,3,0,4,4,0,2,0,3,3,0,0,4,0,0,2,2,0,0,2,0,0,4,4,0,2,0,0,0,0,0,0,0,3,0],
        [0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,3,0],
        [0,0,0,0,0,0,2,0,2,0,0,2,0,0,0,3,0,0,3,3,0,0,0,4,0,2,0,0,0,0,0,3,0,0,8,0,0,0,3,0],
        [0,0,0,0,2,0,0,0,0,0,0,0,0,0,3,0,4,4,4,0,3,0,0,4,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0],
        [0,4,0,0,2,0,0,0,0,2,2,4,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,4,4,0,0,0,0],
        [0,4,0,0,2,0,0,0,0,0,3,0,0,0,2,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,2,0,2,4,0,0,1,0],
        [0,1,0,0,0,0,3,3,3,0,0,0,0,0,3,0,4,6,4,0,3,0,0,0,0,0,0,4,4,1,2,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,0,3,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,3,3,0,0,2,0],
        [0,3,0,0,4,0,2,0,4,3,0,0,0,2,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,3,0,0,0,0,3,0,4,4,3,4,0,2,2,0,4,4,4,0,3,3,0,0,0,0,0,0,2,0,2,0,0,0,4,4,0,0,0,0],
        [0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,3,2,0,0,3,0],
        [0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,4,0,2,0,4,0,3,0,0,0,3,0],
        [0,3,0,0,0,0,2,2,0,2,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,4,0,3,0,2,0,0,0,0,0,3,0],
        [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0],
        [0,0,0,0,4,0,2,0,4,0,0,0,0,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0],
        [0,0,0,0,0,0,2,0,4,0,0,4,0,0,0,4,4,0,4,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,2,0,0,4,0,3,0,4,0,10,0,0,0,2,0],
        [0,2,0,0,0,0,0,3,3,0,0,3,0,0,2,0,0,3,0,0,0,2,0,0,0,3,3,0,4,0,3,0,2,0,3,3,0,0,2,0],
        [0,2,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0],
        [0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,4,4,0,0,2,0],
        [0,2,0,0,0,0,3,0,5,2,2,4,4,4,4,4,4,0,0,2,2,2,0,0,0,4,4,4,0,0,2,2,0,0,4,0,0,0,2,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
        [0,1,0,0,4,4,4,4,4,4,0,0,0,1,0,0,0,0,2,4,4,4,2,0,0,2,2,1,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    player_spr: null
}; // end of world

let keyW;
let keyA;
let keyS;
let keyD;

let keyR;

let highScores;
highScores = [];

// create variables / booleans for item pickups, speed skills, score and game end
let powerItem_bool = false;
let cpuItem_bool = false;
let ramItem_bool = false;
let hddItem_bool = false;
let fanItem_bool = false;
let gpuItem_bool = false;
let fastSpeed_bool = false;
let slowSpeed_bool = false;
let itemScore = 0;
let gameEnd = false;
let stopWatch = 0;
let rawStopWatch = 0;

let soundFX = {
    music: null,
    ding: null,
    cheer: null,
};

let config = {
    type: Phaser.AUTO,
    width: world.COLUMNS * world.TILEWIDTH,
    height: world.ROWS * world.TILEWIDTH,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload() {
    //  load tile assets
    this.load.atlasXML('player', 'assets/player.png', 'assets/player.xml');
    this.load.atlasXML('tiles', 'assets/tiles.png', 'assets/tiles.xml');
    this.load.atlasXML('items', 'assets/items.png', 'assets/items.xml');
    //  load audio assets
    this.load.audio('ding', 'assets/audio/bell-ding.wav');
    this.load.audio('music', 'assets/audio/music.mp3');
    this.load.audio('cheer', 'assets/audio/kids-cheering.mp3');
}

function create() {
    buildWorld(this, world);
    
    //  Set WASD as character movement controls
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

    //  Add sounds
    soundFX.ding = this.sound.add('ding');
    soundFX.cheer = this.sound.add('cheer');
    soundFX.music = this.sound.add('music');
    soundFX.music.play({
        loop: true
    });

    // Add score text to the top of the screen
    score_txt = this.add.text(75 / 2, 45, ' ', {
        font: '30px Arial',
        fill: '#fff'
    });
    score_txt.text = "Parts Collected:   /6";
    // add score out of to the screen and set to 0
    scoreNum_txt = this.add.text(510 / 2, 45, '', {
        font: '30px Arial',
        fill: '#fff'
    });
    scoreNum_txt.text = itemScore;
    //  add skills text to top of screen
    skill_txt = this.add.text(2200 / 2, 45, ' ', {
        font: '30px Arial',
        fill: '#fff'
    });
    skill_txt.text = "Skills: none";
    // create game finished text
    gameEnd_txt = this.add.text(800 / 2, 550, ' ', {
        font: '30px Arial',
        fill: '#fff'
    });
    gameEnd_txt.text = " ";
    // create highscores display text
    highScoresDisp_txt = this.add.text(800 / 2, 350, ' ', {
        font: '26px Arial',
        fill: '#fff'
    });
    highScoresDisp_txt.text = " ";
    // create highscores text
    highScores_txt = this.add.text(1100 / 2, 350, ' ', {
        font: '26px Arial',
        fill: '#fff'
    });
    highScores_txt.text = " ";    
    // create Stopwatch display
    stopWatch_txt = this.add.text(1200 / 2, 45, ' ', {
        font: '30px Arial',
        fill: '#fff'
    });
    stopWatch_txt.text = " ";

}


function buildWorld(scene, world) {
    for (let rowIdx = 0; rowIdx < world.ROWS; rowIdx++) {
        for (let colIdx = 0; colIdx < world.COLUMNS; colIdx++) {
            let tileFrm_str = "tile000" + world.l1World_ary[rowIdx][colIdx];
            scene.add.sprite(colIdx * world.TILEWIDTH, rowIdx * world.TILEWIDTH, 'tiles', tileFrm_str);
            // Sets item tiles on the map
            itemNum = world.l1Item_ary[rowIdx][colIdx];
            if (itemNum !== 0) {
                let itemFrm_str = "item000" + itemNum;
                scene.add.sprite(colIdx * world.TILEWIDTH, rowIdx * world.TILEWIDTH, 'items', itemFrm_str);
            }
        }
    }
    world.player_spr = scene.add.sprite(colToXpx(world, 10), rowToYPx(world, 3), 'player');
}


function update() {
    //  create boolean for stuck position 
    let stuck_bool = false;
    // create variables that hold the players nearest columns and rows
    let playerNextLeftCol;
    let playerNextRightCol;
    let playerNextTopRow;
    let playerNextBottomRow;

    let newXpos = world.player_spr.x;
    let newYpos = world.player_spr.y;

    //  Check for WASD keybaord input and change character sprite accordingly
    //  set new speed depending on speed skill bools
    if (keyA.isDown) {
        world.player_spr.setFrame("player0002");
        if (fastSpeed_bool == true) {
            newXpos = world.player_spr.x - 3;
        }
        else if (slowSpeed_bool == true) {
            newXpos = world.player_spr.x - 1.5;
        }
        else {
            newXpos = world.player_spr.x - 2;  
        }
        
    } else if (keyD.isDown) {
        world.player_spr.setFrame("player0003");
        if (fastSpeed_bool == true) {
            newXpos = world.player_spr.x + 3;
        }
        else if (slowSpeed_bool == true) {
            newXpos = world.player_spr.x + 1.5;
        }
        else {
            newXpos = world.player_spr.x + 2;  
        }

    } else if (keyS.isDown) {
        world.player_spr.setFrame("player0000");
        if (fastSpeed_bool == true) {
            newYpos = world.player_spr.y + 3;
        }
        else if (slowSpeed_bool == true) {
            newYpos = world.player_spr.y + 1.5;
        }
        else {
            newYpos = world.player_spr.y + 2;  
        }
        
    } else if (keyW.isDown) {
        world.player_spr.setFrame("player0001");
        if (fastSpeed_bool == true) {
            newYpos = world.player_spr.y - 3;
        }
        else if (slowSpeed_bool == true) {
            newYpos = world.player_spr.y - 1.5;
        }
        else {
            newYpos = world.player_spr.y - 2;  
        }
        
    } else {
        world.player_spr.setFrame("player0000");;
    }

    //  Restarts the game if gameEnd is true
    if (keyR.isDown) {
        if (gameEnd == true) {
           this.scene.restart();
            console.log("Game restarted");
            console.log(highScores, powerItem_bool);
            powerItem_bool = false;
            cpuItem_bool = false;
            ramItem_bool = false;
            hddItem_bool = false;
            fanItem_bool = false;
            gpuItem_bool = false;
            slowSpeed_bool = false;
            fastSpeed_bool = false;
            itemScore = 0; 
            stopWatch = 0;
            rawStopWatch = 0;
            soundFX.music.stop();
            gameEnd = false;
        }
        

    }
    //  Increment stopwatch every 50 ticks
    stopWatch_txt.text = stopWatch;
    rawStopWatch ++;
    if (rawStopWatch == 75) {
        stopWatch ++;
        rawStopWatch = 0;
    }

    //Look for collisions, first work out where it wants to go
    playerNextLeftCol = xPxToCol(world, newXpos + 5);
    playerNextRightCol = xPxToCol(world, newXpos + world.player_spr.width - 5);
    playerNextTopRow = yPxToRow(world, newYpos + 5);
    playerNextBottomRow = yPxToRow(world, newYpos + world.player_spr.height - 5);
    
    // Collision with World tiles
    if (world.l1World_ary[playerNextTopRow][playerNextLeftCol] !== 0) {
        stuck_bool = true;
    }
    // top right
    if (world.l1World_ary[playerNextTopRow][playerNextRightCol] !== 0) {
        stuck_bool = true;
    }
    // bottom left
    if (world.l1World_ary[playerNextBottomRow][playerNextLeftCol] !== 0) {
        stuck_bool = true;
    }
    // bottom right
    if (world.l1World_ary[playerNextBottomRow][playerNextRightCol] !== 0) {
        stuck_bool = true;
    }
    // Collision with items    
    // top left
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] !== 0) {
        stuck_bool = true;
    }
    // top right
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] !== 0) {
        stuck_bool = true;
    }
    // bottom left
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] !== 0) {
        stuck_bool = true;
    }
    // bottom right
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] !== 0) {
        stuck_bool = true;
    }
    // stuck_bool makes player movement stop on current position
    if (!stuck_bool) {
        world.player_spr.x = newXpos;
        world.player_spr.y = newYpos;
    }

    // check if power item pickup
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 5) {
        if (powerItem_bool == false) {
            console.log("power plug pickup");
            stuck_bool = true;
            slowSpeed_bool = false;
            fastSpeed_bool = true;
            skill_txt.text = "Skills: Fast";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            powerItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 5) {
        if (powerItem_bool == false) {
            console.log("power plug pickup");
            stuck_bool = true;
            slowSpeed_bool = false;
            fastSpeed_bool = true;
            skill_txt.text = "Skills: Fast";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            powerItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 5) {
        if (powerItem_bool == false) {
            console.log("power plug pickup");
            stuck_bool = true;
            slowSpeed_bool = false;
            fastSpeed_bool = true;
            skill_txt.text = "Skills: Fast";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            powerItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 5) {
        if (powerItem_bool == false) {
            console.log("power plug pickup");
            stuck_bool = true;
            slowSpeed_bool = false;
            fastSpeed_bool = true;
            skill_txt.text = "Skills: Fast";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            powerItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }

    // check if fan item pickup 
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 9) {
        if (fanItem_bool == false) {
            console.log("fan pickup");
            stuck_bool = true;
            fastSpeed_bool = false;
            slowSpeed_bool = true;
            skill_txt.text = "Skills: Slow";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            fanItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
        
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 9) {
        if (fanItem_bool == false) {
            console.log("fan pickup");
            stuck_bool = true;
            fastSpeed_bool = false;
            slowSpeed_bool = true;
            skill_txt.text = "Skills: Slow";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            fanItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 9) {
        if (fanItem_bool == false) {
            console.log("fan pickup");
            stuck_bool = true;
            fastSpeed_bool = false;
            slowSpeed_bool = true;
            skill_txt.text = "Skills: Slow";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            fanItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 9) {
        if (fanItem_bool == false) {
            console.log("fan pickup");
            stuck_bool = true;
            fastSpeed_bool = false;
            slowSpeed_bool = true;
            skill_txt.text = "Skills: Slow";
            itemScore ++;
            scoreNum_txt.text = itemScore;
            fanItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }

    //  check is ram pickup
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 7) {
        if (ramItem_bool == false) {
            console.log("ram pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            ramItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
        
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 7) {
        if (ramItem_bool == false) {
            console.log("ram pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            ramItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 7) {
        if (ramItem_bool == false) {
            console.log("ram pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            ramItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 7) {
        if (ramItem_bool == false) {
            console.log("ram pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            ramItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }

    //  check is hdd pickup
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 8) {
        if (hddItem_bool == false) {
            console.log("hdd pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            hddItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
        
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 8) {
        if (hddItem_bool == false) {
            console.log("hdd pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            hddItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 8) {
        if (hddItem_bool == false) {
            console.log("hdd pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            hddItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 8) {
        if (hddItem_bool == false) {
            console.log("hdd pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            hddItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }

    //  check if gpu item pickup
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 10) {
        if (gpuItem_bool == false) {
            console.log("gpu pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            gpuItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
        
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 10) {
        if (gpuItem_bool == false) {
            console.log("gpu pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            gpuItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 10) {
        if (gpuItem_bool == false) {
            console.log("gpu pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            gpuItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 10) {
        if (gpuItem_bool == false) {
            console.log("gpu pickup");
            stuck_bool = true;
            itemScore ++;
            scoreNum_txt.text = itemScore;
            gpuItem_bool = true;
            soundFX.ding.play();
        }
        else {
            stuck_bool = true;
        }
    }


    //  check if cpu item pickup 
    if (world.l1Item_ary[playerNextBottomRow][playerNextLeftCol] == 6) {
        if (itemScore == 5){
            if (cpuItem_bool == false) {
                console.log("cpu pickup");
                stuck_bool = true;
                itemScore ++;
                scoreNum_txt.text = itemScore;
                cpuItem_bool = true;
                gameEnd = true;
                gameEnd_txt.text = "Well done! You collected all the parts! \n\n Press the R key to replay.";
                highScores.push(stopWatch)
                highScoresDisp_txt.text = "Highscores: ";
                highScores_txt.text = highScores;
                soundFX.cheer.play();
            }
            else {
                stuck_bool = true;
            }
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextLeftCol] == 6) {
        if (itemScore == 5){
            if (cpuItem_bool == false) {
                console.log("cpu pickup");
                stuck_bool = true;
                itemScore ++;
                scoreNum_txt.text = itemScore;
                cpuItem_bool = true;
                gameEnd = true;
                gameEnd_txt.text = "Well done! You collected all the parts! \n\n Press the R key to replay.";
                highScores.push(stopWatch)
                highScoresDisp_txt.text = "Highscores: ";
                highScores_txt.text = highScores;
                soundFX.cheer.play();
            }
            else {
                stuck_bool = true;
            }
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextBottomRow][playerNextRightCol] == 6) {
        if (itemScore == 5){
            if (cpuItem_bool == false) {
                console.log("cpu pickup");
                stuck_bool = true;
                itemScore ++;
                scoreNum_txt.text = itemScore;
                cpuItem_bool = true;
                gameEnd = true;
                gameEnd_txt.text = "Well done! You collected all the parts! \n\n Press the R key to replay.";
                highScores.push(stopWatch)
                highScoresDisp_txt.text = "Highscores: ";
                highScores_txt.text = highScores;
                soundFX.cheer.play();
            }
            else {
                stuck_bool = true;
            }
        }
        else {
            stuck_bool = true;
        }
    }
    if (world.l1Item_ary[playerNextTopRow][playerNextRightCol] == 6) {
        if (itemScore == 5){
            if (cpuItem_bool == false) {
                console.log("cpu pickup");
                stuck_bool = true;
                itemScore ++;
                scoreNum_txt.text = itemScore;
                cpuItem_bool = true;
                gameEnd = true;
                gameEnd_txt.text = "Well done! You collected all the parts! \n\n Press the R key to replay.";
                highScores.push(stopWatch)
                highScoresDisp_txt.text = "Highscores: ";
                highScores_txt.text = highScores;
                soundFX.cheer.play();
            }
            else {
                stuck_bool = true;
            }
        }
        else {
            stuck_bool = true;
        }
    }
} // update()

let game = new Phaser.Game(config);
