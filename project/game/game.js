console.log("hello,俄罗斯方块...");
document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.keyCode === 37) {
    //向左移动
    game.moveToLeft();
  }
  if (e.keyCode === 39) {
    //向右移动
    game.moveToRight();
  }
  if (e.keyCode === 38) {
    //旋转变形
    game.rotate();
  }
  if (e.keyCode === 40) {
    //加速向下
    game.moveToDown();
  }
});

// setInterval(() => game.moveToDown(), 1000);

let game = {
  init() {
    const canvas = document.getElementById("myCanvas");
    this.cv = canvas.getContext("2d");

    //this.x,水平偏移量 this.y垂直偏移量
    this.x = 0;
    this.y = 9;

    //获取一个二位数组，数组元素初始化为0
    this.data = [];
    for (let i = 0; i < 20; i++) {
      this.data[i] = new Array(20).fill(0);
    }
    this.block = this.generatorBlock();
    this.render();
  },

  //画出格子
  render() {
    const block = this.block.rotate ? this.block.rotateBlock : this.block.block;
    for (let i = 0; i < block.length; i++) {
      for (let j = 0; j < block[0].length; j++) {
        if (this.data[i + this.x][j + this.y] !== 2) {
          //如果格子2填充，则不覆盖
          this.data[i + this.x][j + this.y] = block[i][j];
        }
      }
    }
    let width = (height = 500 / 20 - 4);
    const row = this.data.length;
    const col = this.data[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        this.cv.fillStyle =
          this.data[i][j] === 0
            ? "white"
            : this.data[i][j] === 2
            ? "blue"
            : "red";
        this.cv.fillRect(
          (width + 4) * j + 2,
          (height + 4) * i + 2,
          width,
          height
        );
      }
    }
  },

  //生成随机生成格子
  generatorBlock() {
    let data = [
      {
        rotate: false,
        block: [[1, 1, 1, 1]],
        rotateBlock: [[1], [1], [1], [1]],
      },
      {
        rotate: false,
        block: [
          [1, 1],
          [1, 1],
        ],
        rotateBlock: [
          [1, 1],
          [1, 1],
        ],
      },
      {
        rotate: false,
        block: [
          [1, 1, 0],
          [0, 1, 1],
        ],
        rotateBlock: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
      },
      {
        rotate: false,
        block: [
          [0, 1, 1],
          [1, 1, 0],
        ],
        rotateBlock: [
          [1, 0],
          [1, 1],
          [0, 1],
        ],
      },
      {
        rotate: false,
        block: [
          [0, 1, 0],
          [1, 1, 1],
        ],
        rotateBlock: [
          [1, 0],
          [1, 1],
          [1, 0],
        ],
      },
      {
        rotate: false,
        block: [
          [1, 0, 0],
          [1, 1, 1],
        ],
        rotateBlock: [
          [1, 1],
          [1, 0],
          [1, 0],
        ],
      },
      {
        rotate: false,
        block: [
          [0, 0, 1],
          [1, 1, 1],
        ],
        rotateBlock: [
          [1, 0],
          [1, 0],
          [1, 1],
        ],
      },
    ];
    const random = Math.floor(Math.random() * 7);
    return data[random];
  },

  //非固定格子全部置为0
  clear() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[0].length; j++) {
        if (this.data[i][j] === 1) {
          this.data[i][j] = 0;
        }
      }
    }
  },

  //向左移动
  moveToLeft() {
    if (this.y > 0 && !this.isTouch("left")) {
      this.y--;
      this.clear();
      this.render();
    }
  },
  //向右移动
  moveToRight() {
    const block = this.block.rotate ? this.block.rotateBlock : this.block.block;
    let len = this.data.length - block[0].length;
    if (this.y < len && !this.isTouch("right")) {
      this.y++;
      this.clear();
      this.render();
    }
  },
  //旋转变形
  rotate() {
    //TODO:需要去做是否能旋转的判断
    this.block.rotate = !this.block.rotate;
    this.clear();
    this.render();
  },
  //向下运动
  moveToDown() {
    const block = this.block.rotate ? this.block.rotateBlock : this.block.block;
    let len = this.data.length - block.length;
    if (this.x < len) {
      if (this.isTouch("down")) {
        for (let i = 0; i < block.length; i++) {
          for (let j = 0; j < block[0].length; j++) {
            if (block[i][j] === 1) {
              let x = this.x;
              let y = this.y;
              this.data[i + x][j + y] = 2;
            }
          }
        }
        this.x = 0;
        this.y = 9;
        this.block = this.generatorBlock();
        console.table(this.data);
      } else {
        this.x++;
      }
    } else {
      //触碰到底部，格子填充2
      for (let i = 0; i < block.length; i++) {
        for (let j = 0; j < block[0].length; j++) {
          if (this.x === len && block[i][j] === 1) {
            //判断是否到达底部，到达底部后格子设置为2
            let x = this.x;
            let y = this.y;
            this.data[i + x][j + y] = 2;
          }
        }
      }
      this.x = 0;
      this.y = 9;
      this.block = this.generatorBlock();
    }
    this.clear();
    this.render();
  },
  /**
   * 检测是否与格子2接触
   */
  isTouch(dic) {
    const block = this.block.rotate ? this.block.rotateBlock : this.block.block;
    let distanceRow = 0;
    let distanceCol = 0;
    if (dic === "down") {
      distanceRow = 1;
    } else if (dic === "left") {
      distanceCol = -1;
    } else {
      distanceCol = +1;
    }
    for (let i = 0; i < block.length; i++) {
      for (let j = 0; j < block[0].length; j++) {
        if (
          this.data[i + this.x + distanceRow][j + this.y + distanceCol] === 2 &&
          block[i][j] === 1
        ) {
          return true;
        }
      }
    }
    return false;
  },
};

game.init();
