class Canvans {
  tool: Tool;
  mouseUp() {
    this.tool.mouseUp();
  }
}

interface Tool {
  mouseUp();
}

class SelectTool implements Tool {
  mouseUp() {
    console.log("selectTool mouseUp");
  }
}

class Brush implements Tool {
  mouseUp() {
    console.log("brushTool mouseUp");
  }
}
