import styled, { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import ColorBox from './components/ColorBox'
import AnswersBox from './components/AnswersBox'
import Notification from './components/Notification'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f3f3f3;
    font-family: 'Poppins', sans-serif;
  }
`

const Wrapper = styled.main`
  text-align: center;
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    color: #0a0a0a;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #0a0a0a;
  }
`

const App = () => {
  const [answerCorrectColor, setAnswerCorrectColor] = useState(false)
  const [guessed, setGuessed] = useState(false)
  const [answerColors, setAnswerColors] = useState<string[]>([])
  const [correctAnswerColor, setCorrectAnswerColor] = useState('')

  function getRandomHexColors() {
    const hexColors = []
    for (let i = 0; i <= 2; i++) {
      hexColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }
    return hexColors
  }

  function randomHexColors() {
    const randomHexColors = getRandomHexColors()
    setAnswerColors(randomHexColors)
    setCorrectAnswerColor(randomHexColors[Math.floor(Math.random() * randomHexColors.length)])
  }

  useEffect(randomHexColors, [])

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>What is this game ?</h1>
        <p>The game will random a color for you and you need to answer what is the color.</p>
        <ColorBox correctAnswerColor={correctAnswerColor} />
        <AnswersBox randomHexColors={randomHexColors} setGuessed={setGuessed} setAnswerCorrectColor={setAnswerCorrectColor} correctAnswerColor={correctAnswerColor} answerColors={answerColors} />
        <Notification message={guessed ? `${answerCorrectColor ? 'Correct' : 'Wrong'} answer!` : ''} />
      </Wrapper>
    </>
  )
}

export default App
