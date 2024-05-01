import mazeArray from "@/constants/mazeArray";

interface CharacterLogicProps {
  roadWidth: number;
  context: CanvasRenderingContext2D;
  direction: string;
  canvasHeight: number;
  canvasWidth: number;
}

let character = {
  x: 0,
  y: 0,
};

function characterLogic({
  context,
  roadWidth,
  direction,
  canvasHeight,
  canvasWidth,
}: CharacterLogicProps) {
  if(isWinning(roadWidth, character.y, character.x, context, canvasWidth, canvasHeight)) return;
  const squaresRestrict = getRestrictedPositions(roadWidth);

  let newX = character.x;
  let newY = character.y;

  if (direction === "right") {
    newX += roadWidth;
  } else if (direction === "left") {
    newX -= roadWidth;
  } else if (direction === "up") {
    newY = Math.max(0, newY - roadWidth);
  } else if (direction === "down") {
    newY += roadWidth;
  } else if (direction === "idle") {
    newX = 0;
    newY = 0;
  }
  console.log(
    isPermittedToMove({
      x: newX,
      y: newY,
      squares: squaresRestrict,
      roadWidth,
      canvasHeight,
      canvasWidth,
    })
  );
  if (
    isPermittedToMove({
      x: newX,
      y: newY,
      squares: squaresRestrict,
      roadWidth,
      canvasHeight,
      canvasWidth,
    })
  ) {
    character.x = newX;
    character.y = newY;
  }
  console.log(newX, newY, character.x, character.y);
  context.fillStyle = "lightgreen";
  context.fillRect(character.x, character.y, roadWidth, roadWidth);
}

interface SquaresProps {
  x: number;
  y: number;
}

function getRestrictedPositions(roadWidth: number) {
  let squares: SquaresProps[] = [];

  for (let i = 0; i < mazeArray.length; i++) {
    for (let j = 0; j < mazeArray[0].length; j++) {
      if (mazeArray[i][j] === 1) {
        squares.push({ x: j * roadWidth, y: i * roadWidth });
      }
    }
  }
  return squares;
}

interface IsPermittedToMoveProps {
  x: number;
  y: number;
  squares: SquaresProps[];
  roadWidth: number;
  canvasWidth: number;
  canvasHeight: number;
}

function isPermittedToMove({
  x,
  y,
  squares,
  roadWidth,
  canvasWidth,
  canvasHeight,
}: IsPermittedToMoveProps): boolean {
  const tolerance = 10;
  if (
    x < 0 - tolerance ||
    x + roadWidth > canvasWidth + tolerance ||
    y < 0 - tolerance ||
    y + roadWidth > canvasHeight + tolerance
  ) {
    return false;
  }

  for (let box of squares) {
    const { x: boxX, y: boxY } = box;
    if (
      x >= boxX - tolerance &&
      x + roadWidth <= boxX + roadWidth + tolerance &&
      y >= boxY - tolerance &&
      y + roadWidth <= boxY + roadWidth + tolerance
    ) {
      return false; // The rectangles intersect
    }
  }
  return true; // No intersection found
}

const isWinning = (
  roadWidth: number,
  y: number,
  x: number,
  context: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
) => {
  let position = { x: 0, y: 0 };
  for (let i = 0; i < mazeArray.length; i++) {
    for (let j = 0; j < mazeArray[0].length; j++) {
      if (mazeArray[i][j] === 2) {
        position = { x: j * roadWidth, y: i * roadWidth };
      }
    }
  }
  console.log(position)

  if (y  == position.y && x == position.x) {
    context.font = "50px serif";
    context.fillText("You won", canvasWidth / 2, canvasHeight / 2, 200);
    return true;
  }
};

export default characterLogic;
