interface MazeRendererParams {
  context: CanvasRenderingContext2D;
  mazeArray: number[][];
  borderWidth: number;
}

function renderMaze({ context, mazeArray, borderWidth }: MazeRendererParams) {

  let roadWidth = borderWidth / mazeArray[0].length;
  let roadHeight = borderWidth / mazeArray.length;

  for (let i = 0; i < mazeArray.length; i++) {
    for (let j = 0; j < mazeArray[i].length; j++) {
      context.beginPath();

      context.rect(j * roadWidth, i * roadHeight, roadWidth, roadHeight);

      context.fillStyle = mazeArray[i][j] === 0 ? "white" : mazeArray[i][j] === 1 ? "blue" : "Lightgreen";
      context.fill();

      context.closePath();
    }
  }
}

export default renderMaze;
