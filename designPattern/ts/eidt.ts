class Edit {
  content: string;
  constructor(content: string) {
    this.content = content;
  }

  //记录当前的状态
  recodeState() {
    return new RecordEdit(this.content);
  }
  //撤回操作
  restore(recordEdit: RecordEdit) {
    this.content = recordEdit.content;
  }
}

//记录Edit对象的状态
class RecordEdit {
  content: string;
  constructor(content: string) {
    this.content = content;
  }
}

//保存Edit的历史记录
class HistoryEdit {
  historyList = [];
  push(recordEdit: RecordEdit) {
    this.historyList.push(recordEdit);
  }
  //返回上一个状态
  pop() {
    return this.historyList.pop();
  }
}

const edit = new Edit("yqg");
const historEdit = new HistoryEdit();
historEdit.push(edit.recodeState()); //生成记录对象并存入历史对象
edit.content = "sunyan";
historEdit.push(edit.recodeState());
