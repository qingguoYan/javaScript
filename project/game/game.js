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
    {
        rotate: false,
        block: [
            [1, 1],
            [1, 1],
        ],
        rotateBlock: [
            [1, 1],
            [1, 1],
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
];
function generatorBlock() {
    var random = Math.floor(Math.random() * 7);
    return data[random];
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
            this.array[i] = new Array(15).fill(0);
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
    return RussiaGame;
}());
var game = {
    //向下运动
    moveToDown: function () {
        var block = this.block.rotate ? this.block.rotateBlock : this.block.block;
        var len = this.data.length - block.length;
        if (this.x < len) {
            if (this.isTouch('down')) {
                for (var i = 0; i < block.length; i++) {
                    for (var j = 0; j < block[0].length; j++) {
                        if (block[i][j] === 1) {
                            var x = this.x;
                            var y = this.y;
                            this.data[i + x][j + y] = 2;
                        }
                    }
                }
                this.x = 0;
                this.y = 9;
                this.block = this.generatorBlock();
                console.table(this.data);
            }
            else {
                this.x++;
            }
        }
        else {
            //触碰到底部，格子填充2
            for (var i = 0; i < block.length; i++) {
                for (var j = 0; j < block[0].length; j++) {
                    if (this.x === len && block[i][j] === 1) {
                        //判断是否到达底部，到达底部后格子设置为2
                        var x = this.x;
                        var y = this.y;
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
    isTouch: function (dic) {
        var block = this.block.rotate ? this.block.rotateBlock : this.block.block;
        var distanceRow = 0;
        var distanceCol = 0;
        if (dic === 'down') {
            distanceRow = 1;
        }
        else if (dic === 'left') {
            distanceCol = -1;
        }
        else {
            distanceCol = +1;
        }
        for (var i = 0; i < block.length; i++) {
            for (var j = 0; j < block[0].length; j++) {
                if (this.data[i + this.x + distanceRow][j + this.y + distanceCol] === 2 &&
                    block[i][j] === 1) {
                    return true;
                }
            }
        }
        return false;
    }
};
var russiaGame = new RussiaGame();
