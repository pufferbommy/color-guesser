import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Button = styled.button`
  background-color: #353535;
  color: #fff;
  width: 8rem;
  padding: 1.25rem 0;
  cursor: pointer;
  border: none;
  margin: 0 1rem;
  position: relative;
  transition: transform 300ms;

  :active {
    transform: translate(0.35rem, 0.35rem);
  }

  :active::after {
    transform: translate(0, 0);
  }

  ::after {
    content: '';
    position: absolute;
    border: 1px solid #353535;
    z-index: -1;
    inset: 0;
    transition: transform 300ms;
    transform: translate(0.35rem, 0.35rem);
  }
`

interface Props {
  answerColors: Array<string>
  correctAnswerColor: string
  setAnswerCorrectColor: React.Dispatch<React.SetStateAction<boolean>>
  setGuessed: React.Dispatch<React.SetStateAction<boolean>>
  randomHexColors: () => void
}

const AnswersBox = ({ answerColors, randomHexColors, correctAnswerColor, setAnswerCorrectColor, setGuessed }: Props) => {
  const handleClick = (answerColor: string) => {
    setGuessed(true)
    if (answerColor === correctAnswerColor) {
      setAnswerCorrectColor(true)
    } else {
      setAnswerCorrectColor(false)
    }
    randomHexColors()
    setTimeout(() => setGuessed(false), 2000)
  }
  return (
    <Wrapper>
      {answerColors.map((answerColor) => (
        <Button key={answerColor} onClick={() => handleClick(answerColor)}>
          {answerColor}
        </Button>
      ))}
    </Wrapper>
  )
}

export default AnswersBox
