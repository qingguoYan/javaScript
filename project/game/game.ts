console.log('hello,俄罗斯方块...');
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.keyCode === 37) {
    //向左移动
    russiaGame.move(DIRCTIONARY.LEFT);
  }
  if (e.keyCode === 39) {
    //向右移动
    russiaGame.move(DIRCTIONARY.RIGHT);
  }
  if (e.keyCode === 38) {
    //旋转变形
    russiaGame.rotate();
  }
  if (e.keyCode === 40) {
    //加速向下
    russiaGame.move(DIRCTIONARY.DOWN);
  }
});

const data = [
  {
    rotate: false,
    block: [[1, 1, 1, 1]],
    rotateBlock: [[1], [1], [1], [1]],
  },
  // {
  //   rotate: false,
  //   block: [
  //     [1, 1],
  //     [1, 1],
  //   ],
  //   rotateBlock: [
  //     [1, 1],
  //     [1, 1],
  //   ],
  // },
  // {
  //   rotate: false,
  //   block: [
  //     [1, 1, 0],
  //     [0, 1, 1],
  //   ],
  //   rotateBlock: [
  //     [0, 1],
  //     [1, 1],
  //     [1, 0],
  //   ],
  // },
  // {
  //   rotate: false,
  //   block: [
  //     [0, 1, 1],
  //     [1, 1, 0],
  //   ],
  //   rotateBlock: [
  //     [1, 0],
  //     [1, 1],
  //     [0, 1],
  //   ],
  // },
  // {
  //   rotate: false,
  //   block: [
  //     [0, 1, 0],
  //     [1, 1, 1],
  //   ],
  //   rotateBlock: [
  //     [1, 0],
  //     [1, 1],
  //     [1, 0],
  //   ],
  // },
  // {
  //   rotate: false,
  //   block: [
  //     [1, 0, 0],
  //     [1, 1, 1],
  //   ],
  //   rotateBlock: [
  //     [1, 1],
  //     [1, 0],
  //     [1, 0],
  //   ],
  // },
  // {
  //   rotate: false,
  //   block: [
  //     [0, 0, 1],
  //     [1, 1, 1],
  //   ],
  //   rotateBlock: [
  //     [1, 0],
  //     [1, 0],
  //     [1, 1],
  //   ],
  // },
];
function generatorBlock() {
  const random = Math.floor(Math.random() * 7);
  return data[0];
}

enum DIRCTIONARY {
  LEFT = 'left',
  RIGHT = 'right',
  DOWN = 'down',
}
// setInterval(() => game.moveToDown(), 1000);
enum BlockType {
  WHITE = 0,
  BLUE = 1,
  RED = 2,
}
class RussiaGame {
  cv: any;
  array: any[];
  currentBlockObj: any;
  row: number;
  col: number;
  colLength: number;
  rowLength: number;

  constructor() {
    const canvas = document.getElementById('myCanvas') as any;
    this.cv = canvas.getContext('2d');
    this.currentBlockObj = generatorBlock();
    this.row = 0;
    this.col = 7;
    this.array = [];
    for (let i = 0; i < 20; i++) {
      const a = new Array(15) as any;
      this.array[i] = a.fill(0);
    }
    this.rowLength = this.array.length;
    this.colLength = this.array[0].length;
    const currentBlock = this.getCurrentBlock();
    this.drawBlock(currentBlock); // 画出初始的方块
    this.draw(); // 画出整个画布
  }

  getCurrentBlock() {
    return this.currentBlockObj.rotate
      ? this.currentBlockObj.rotateBlock
      : this.currentBlockObj.block;
  }

  drawBlock(block) {
    const row = block.length;
    const col = block[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (block[i][j] === 1) {
          this.array[i + this.row][j + this.col] = block[i][j];
        }
      }
    }
  }
  draw() {
    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.colLength; j++) {
        const block = this.array[i][j];
        switch (block) {
          case BlockType.WHITE:
            this.cv.fillStyle = 'white';
            break;
          case BlockType.BLUE:
            this.cv.fillStyle = 'blue';
            break;
          case BlockType.RED:
            this.cv.fillStyle = 'red';
            break;
          default:
            break;
        }
        const width = 400 / 15 - 4;
        const height = 600 / 20 - 4;
        this.cv.fillRect(
          (width + 4) * j + 2,
          (height + 4) * i + 2,
          width,
          height
        );
      }
    }
    console.table(this.array);
  }

  clear() {
    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.colLength; j++) {
        if (this.array[i][j] === 1) {
          this.array[i][j] = 0;
        }
      }
    }
  }

  rotate() {
    // 判断是否可以进行变形
    const currentRotateBlock = this.currentBlockObj.rotate
      ? this.currentBlockObj.block
      : this.currentBlockObj.rotateBlock;
    const currentBlockColLength = currentRotateBlock[0].length;
    const currentBlockRowLength = currentRotateBlock.length;
    const currentRowLength = this.row + currentBlockRowLength;
    const isCrossEdge =
      this.col + currentBlockColLength > this.colLength ||
      currentRowLength > this.rowLength;

    if (isCrossEdge) {
      return console.log('我不能进行反转');
    }

    this.currentBlockObj.rotate = !this.currentBlockObj.rotate;
    const currentBlock = this.getCurrentBlock();

    this.clear();
    this.drawBlock(currentBlock);
    this.draw();
  }

  blockFixed(block) {
    const row = block.length;
    const col = block[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const hasValue =
          this.array[i + this.row][j + this.col] === 1 ||
          this.array[i + this.row][j + this.col] === 2;
        if (hasValue) {
          this.array[i + this.row][j + this.col] = 2;
        } else {
          this.array[i + this.row][j + this.col] = 0;
        }
      }
    }
  }

  // 判断下一次是移动后的位置是否有已经固定的格子，有则不能移动，否可以移动
  isCanMove(block, dirctionary) {
    const row = block.length;
    const col = block[0].length;
    let x = 0; // col
    let y = 0; // row

    if (dirctionary === DIRCTIONARY.LEFT) {
      x = -1;
    }
    if (dirctionary === DIRCTIONARY.RIGHT) {
      x = 1;
    }
    if (dirctionary === DIRCTIONARY.DOWN) {
      y = 1;
    }
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const curValue = this.array[i + this.row][j + this.col];
        const nextValue = this.array[i + this.row + y][j + this.col + x];
        if (curValue === 1 && nextValue === 2) {
          return false;
        }
      }
    }
    return true;
  }

  removeRow() {
    // let removeDownnum = 0;
    for (let i = 0; i < this.rowLength; i++) {
      let isRedRow = true;
      for (let j = 0; j < this.colLength; j++) {
        const block = this.array[i][j];
        if (block !== BlockType.RED) {
          isRedRow = false;
          break;
        }
      }
      if (isRedRow) {
        for (let j = 0; j < this.colLength; j++) {
          this.array[i][j] = BlockType.WHITE;
          // this.array[i - 1][j] = BlockType.RED;
        }
        // removeDownnum++;
        // 消失的行上面红色的格子向下移动
        //TODO: 计分
        console.log('我变白了');
      }
    }
    // if (removeDownnum !== 0) {
    //   for (let i = 0; i < this.rowLength; i++) {
    //     for (let j = 0; j < this.colLength; j++) {
    //       if (this.array[i][j] === 2) {
    //         this.array[i][j] = 0;
    //         this.array[i + removeDownnum][j] = 2;
    //       }
    //     }
    //   }
    // }
  }

  move(dirctionary: DIRCTIONARY) {
    // 如果越过边界,不移动
    const currentBlock = this.getCurrentBlock();
    const currentBlockColLength = currentBlock[0].length;
    const currentBlockRowLength = currentBlock.length;
    const isDownEnough =
      this.row + currentBlockRowLength === this.rowLength &&
      dirctionary === DIRCTIONARY.DOWN;
    const isCrossEdge =
      (dirctionary === DIRCTIONARY.LEFT && this.col - 1 === -1) ||
      (dirctionary === DIRCTIONARY.RIGHT &&
        this.col + currentBlockColLength === this.colLength);

    //到底了或者下面是红的
    if (
      isDownEnough ||
      (!this.isCanMove(currentBlock, dirctionary) &&
        dirctionary === DIRCTIONARY.DOWN)
    ) {
      this.blockFixed(currentBlock); // 将当前方块值1设置为2，红色
      // 生成新的block
      this.row = 0;
      this.col = 7;
      this.currentBlockObj = generatorBlock();
      this.drawBlock(this.getCurrentBlock());
      //TODO: 满足整行则消失
      this.removeRow();
      this.draw();
      return console.log('下一个方块应该产生了');
    }

    if (isCrossEdge) {
      return console.log('到边界了不能移动了');
    }

    //判断是否能移动
    if (!this.isCanMove(currentBlock, dirctionary)) {
      return console.log('我旁边是红色的，不能移动哈');
    }

    if (dirctionary === DIRCTIONARY.LEFT) {
      this.col--;
    }
    if (dirctionary === DIRCTIONARY.RIGHT) {
      this.col++;
    }
    if (dirctionary === DIRCTIONARY.DOWN) {
      this.row++;
    }
    this.clear();
    this.drawBlock(currentBlock);
    this.draw();
  }

  // 计算红色高度
  getHeight() {
    let height = 0;
    for (let i = this.rowLength - 1; i >= 0; i--) {
      // 如果整行都是红色
      let redSize = 0;
      let whiteSize = 0;
      for (let j = this.colLength - 1; j >= 0; j--) {
        if (this.array[i][j] === 2) {
          redSize++;
          break;
        }
        if (this.array[i][j] === 0) {
          whiteSize++;
        }
      }
      if (whiteSize === this.colLength - 1) {
        return height;
      } else {
        height++;
      }
    }
    return height;
  }
}

const russiaGame = new RussiaGame();
