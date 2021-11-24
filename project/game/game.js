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
var data = [
    {
        rotate: false,
        block: [[1, 1, 1, 1]],
        rotateBlock: [[1], [1], [1], [1]]
    },
];
function generatorBlock() {
    var random = Math.floor(Math.random() * 7);
    return data[0];
}
var DIRCTIONARY;
(function (DIRCTIONARY) {
    DIRCTIONARY["LEFT"] = "left";
    DIRCTIONARY["RIGHT"] = "right";
    DIRCTIONARY["DOWN"] = "down";
})(DIRCTIONARY || (DIRCTIONARY = {}));
// setInterval(() => game.moveToDown(), 1000);
var BlockType;
(function (BlockType) {
    BlockType[BlockType["WHITE"] = 0] = "WHITE";
    BlockType[BlockType["BLUE"] = 1] = "BLUE";
    BlockType[BlockType["RED"] = 2] = "RED";
})(BlockType || (BlockType = {}));
var RussiaGame = /** @class */ (function () {
    function RussiaGame() {
        var canvas = document.getElementById('myCanvas');
        this.cv = canvas.getContext('2d');
        this.currentBlockObj = generatorBlock();
        this.row = 0;
        this.col = 7;
        this.array = [];
        for (var i = 0; i < 20; i++) {
            var a = new Array(15);
            this.array[i] = a.fill(0);
        }
        this.rowLength = this.array.length;
        this.colLength = this.array[0].length;
        var currentBlock = this.getCurrentBlock();
        this.drawBlock(currentBlock); // 画出初始的方块
        this.draw(); // 画出整个画布
    }
    RussiaGame.prototype.getCurrentBlock = function () {
        return this.currentBlockObj.rotate
            ? this.currentBlockObj.rotateBlock
            : this.currentBlockObj.block;
    };
    RussiaGame.prototype.drawBlock = function (block) {
        var row = block.length;
        var col = block[0].length;
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                if (block[i][j] === 1) {
                    this.array[i + this.row][j + this.col] = block[i][j];
                }
            }
        }
    };
    RussiaGame.prototype.draw = function () {
        for (var i = 0; i < this.rowLength; i++) {
            for (var j = 0; j < this.colLength; j++) {
                var block = this.array[i][j];
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
                var width = 400 / 15 - 4;
                var height = 600 / 20 - 4;
                this.cv.fillRect((width + 4) * j + 2, (height + 4) * i + 2, width, height);
            }
        }
        console.table(this.array);
    };
    RussiaGame.prototype.clear = function () {
        for (var i = 0; i < this.rowLength; i++) {
            for (var j = 0; j < this.colLength; j++) {
                if (this.array[i][j] === 1) {
                    this.array[i][j] = 0;
                }
            }
        }
    };
    RussiaGame.prototype.rotate = function () {
        // 判断是否可以进行变形
        var currentRotateBlock = this.currentBlockObj.rotate
            ? this.currentBlockObj.block
            : this.currentBlockObj.rotateBlock;
        var currentBlockColLength = currentRotateBlock[0].length;
        var currentBlockRowLength = currentRotateBlock.length;
        var currentRowLength = this.row + currentBlockRowLength;
        var isCrossEdge = this.col + currentBlockColLength > this.colLength ||
            currentRowLength > this.rowLength;
        if (isCrossEdge) {
            return console.log('我不能进行反转');
        }
        this.currentBlockObj.rotate = !this.currentBlockObj.rotate;
        var currentBlock = this.getCurrentBlock();
        this.clear();
        this.drawBlock(currentBlock);
        this.draw();
    };
    RussiaGame.prototype.blockFixed = function (block) {
        var row = block.length;
        var col = block[0].length;
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                var hasValue = this.array[i + this.row][j + this.col] === 1 ||
                    this.array[i + this.row][j + this.col] === 2;
                if (hasValue) {
                    this.array[i + this.row][j + this.col] = 2;
                }
                else {
                    this.array[i + this.row][j + this.col] = 0;
                }
            }
        }
    };
    // 判断下一次是移动后的位置是否有已经固定的格子，有则不能移动，否可以移动
    RussiaGame.prototype.isCanMove = function (block, dirctionary) {
        var row = block.length;
        var col = block[0].length;
        var x = 0; // col
        var y = 0; // row
        if (dirctionary === DIRCTIONARY.LEFT) {
            x = -1;
        }
        if (dirctionary === DIRCTIONARY.RIGHT) {
            x = 1;
        }
        if (dirctionary === DIRCTIONARY.DOWN) {
            y = 1;
        }
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                var curValue = this.array[i + this.row][j + this.col];
                var nextValue = this.array[i + this.row + y][j + this.col + x];
                if (curValue === 1 && nextValue === 2) {
                    return false;
                }
            }
        }
        return true;
    };
    RussiaGame.prototype.removeRow = function () {
        var removeDownnum = 0;
        for (var i = 0; i < this.rowLength; i++) {
            var isRedRow = true;
            for (var j = 0; j < this.colLength; j++) {
                var block = this.array[i][j];
                if (block !== BlockType.RED) {
                    isRedRow = false;
                    break;
                }
            }
            if (isRedRow) {
                for (var j = 0; j < this.colLength; j++) {
                    this.array[i][j] = BlockType.WHITE;
                }
                removeDownnum++;
                // 消失的行上面红色的格子向下移动
                console.log('我变白了');
            }
        }
        if (removeDownnum !== 0) {
            for (var i = 0; i < this.rowLength; i++) {
                for (var j = 0; j < this.colLength; j++) {
                    if (this.array[i][j] === 1) {
                        this.array[i][j] = 0;
                        this.array[i + removeDownnum][j] = 2;
                    }
                }
            }
        }
    };
    RussiaGame.prototype.move = function (dirctionary) {
        // 如果越过边界,不移动
        var currentBlock = this.getCurrentBlock();
        var currentBlockColLength = currentBlock[0].length;
        var currentBlockRowLength = currentBlock.length;
        var isDownEnough = this.row + currentBlockRowLength === this.rowLength &&
            dirctionary === DIRCTIONARY.DOWN;
        var isCrossEdge = (dirctionary === DIRCTIONARY.LEFT && this.col - 1 === -1) ||
            (dirctionary === DIRCTIONARY.RIGHT &&
                this.col + currentBlockColLength === this.colLength);
        //到底了或者下面是红的
        if (isDownEnough ||
            (!this.isCanMove(currentBlock, dirctionary) &&
                dirctionary === DIRCTIONARY.DOWN)) {
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
    };
    // 计算红色高度
    RussiaGame.prototype.getHeight = function () {
        var height = 0;
        for (var i = this.rowLength - 1; i >= 0; i--) {
            // 如果整行都是红色
            var redSize = 0;
            var whiteSize = 0;
            for (var j = this.colLength - 1; j >= 0; j--) {
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
            }
            else {
                height++;
            }
        }
        return height;
    };
    return RussiaGame;
}());
var russiaGame = new RussiaGame();
