// /**
//  * 发起对象
//  */
// class Edit {
//   content;
//   //将当前对象的状态保存到记录状态的对象
//   createEditState() {
//     return new EditState(this.content);
//   }
//   //执行撤销操作，返回上一个状态
//   restore(editState) {
//     this.content = editState.content;
//   }
// }

// /**
//  * 记录对象，同步发起者的当前状态
//  */

// class EditState {
//   constructor(content) {
//     this.content = content;
//   }
// }

// /**
//  * 状态历史对象，保存记录对象
//  */
// class EditHistory {
//   editList = [];
//   push(editState) {
//     this.editList.push(editState);
//   }
//   pop() {
//     return this.editList.pop();
//   }
// }

// const edit = new Edit();
// const editHistory = new EditHistory();
// edit.content = 1;
// editHistory.push(edit.createEditState());
// edit.content = 2;
// editHistory.push(edit.createEditState());
// edit.content = 3;
// editHistory.push(edit.createEditState());
// edit.content = 4;
// //执行撤销操作
// edit.restore(editHistory.pop());

// /**
//  * 状态模式，可以根据不同的状态执行不同的操作，原理，对象的多态特征
//  */

// class Canvans {
//   tool;
//   draw() {
//     this.tool.draw();
//   }
// }

// class Tool {
//   draw() {
//     console.log("父工具类");
//   }
// }

// class SeleteTool extends Tool {
//   draw() {
//     console.log("select工具画画");
//   }
// }

// class BrushTool extends Tool {
//   draw() {
//     console.log("brush 工具画画");
//   }
// }

// const canvans = new Canvans();
// canvans.tool = new SeleteTool();
