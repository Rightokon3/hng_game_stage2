let targetColor
let score = 0

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function setupNewGame(keepScore = false) {
  targetColor = generateRandomColor()
  document.getElementById("colorBox").style.backgroundColor = targetColor
  document.getElementById("gameStatus").textContent = ""

  if (!keepScore) {
    score = 0
    document.getElementById("score").textContent = score
  }

  updateColorOptions()
}

function updateColorOptions() {
  const colorOptions = document.getElementById("colorOptions")
  colorOptions.innerHTML = ""

  const colors = [targetColor]
  while (colors.length < 6) {
    const newColor = generateRandomColor()
    if (!colors.includes(newColor)) {
      colors.push(newColor)
    }
  }

  colors.sort(() => Math.random() - 0.5)

  colors.forEach((color) => {
    const button = document.createElement("button")
    button.style.backgroundColor = color
    button.setAttribute("data-testid", "colorOption")
    button.addEventListener("click", () => checkGuess(color))
    colorOptions.appendChild(button)
  })
}

function checkGuess(guessedColor) {
  const gameStatus = document.getElementById("gameStatus")
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Correct! Here's a new color to guess!"
    score++
    document.getElementById("score").textContent = score
    setupNewGame(true) // Start a new round but keep the score
  } else {
    gameStatus.textContent = "Wrong guess. Try again!"
  }
}

document.getElementById("newGameButton").addEventListener("click", () => setupNewGame(false))

// Initial game setup
setupNewGame(false)

