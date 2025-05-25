
# 🕹 Simple Web Game Examples Using JS Libraries

## 🎨 1. Pixi.js - Basic Sprite Movement

### Description

A simple example showing how to move a character sprite around the canvas using Pixi.js.

### Code

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Pixi Movement</title>
  <script src="https://pixijs.download/release/pixi.min.js"></script>
</head>
<body>
<script>
  const app = new PIXI.Application({ width: 400, height: 400, backgroundColor: 0xeeeeee });
  document.body.appendChild(app.view);

  const sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png');
  sprite.anchor.set(0.5);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  app.stage.addChild(sprite);

  let keys = {};
  window.addEventListener("keydown", e => keys[e.key] = true);
  window.addEventListener("keyup", e => keys[e.key] = false);

  app.ticker.add(() => {
    if (keys["ArrowLeft"]) sprite.x -= 5;
    if (keys["ArrowRight"]) sprite.x += 5;
    if (keys["ArrowUp"]) sprite.y -= 5;
    if (keys["ArrowDown"]) sprite.y += 5;
  });
</script>
</body>
</html>
```

---

## 🕹 2. Phaser 3 - Collecting Coins

### Description

A platformer-style game with a player that collects coins.

### Code

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Phaser Coin Collector</title>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js"></script>
</head>
<body>
<script>
  const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    physics: {
      default: 'arcade',
      arcade: { gravity: { y: 300 }, debug: false }
    },
    scene: {
      preload, create, update
    }
  };

  const game = new Phaser.Game(config);
  let player, cursors, stars, score = 0, scoreText;

  function preload() {
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/sky4.png');
    this.load.image('star', 'https://labs.phaser.io/assets/demoscene/star2.png');
    this.load.image('ground', 'https://labs.phaser.io/assets/sprites/platform.png');
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
  }

  function create() {
    this.add.image(200, 150, 'sky');

    const platforms = this.physics.add.staticGroup();
    platforms.create(200, 290, 'ground').setScale(2).refreshBody();

    player = this.physics.add.sprite(100, 200, 'player').setScale(0.5);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);

    stars = this.physics.add.group({ key: 'star', repeat: 5, setXY: { x: 20, y: 0, stepX: 70 }});
    stars.children.iterate(child => child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)));

    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    cursors = this.input.keyboard.createCursorKeys();

    scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '16px', fill: '#000' });
  }

  function update() {
    if (cursors.left.isDown) player.setVelocityX(-160);
    else if (cursors.right.isDown) player.setVelocityX(160);
    else player.setVelocityX(0);

    if (cursors.up.isDown && player.body.touching.down) player.setVelocityY(-330);
  }

  function collectStar(player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);
  }
</script>
</body>
</html>
```

---

## 🔗 Notes

- **Pixi.js** is focused on rendering and animation—ideal for custom drawing and sprite manipulation.
- **Phaser.js** is a full-featured game engine with physics, input handling, and scene management.
