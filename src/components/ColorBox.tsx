import styled from 'styled-components'

const Box = styled.div<{ correctAnswerColor: string }>`
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.correctAnswerColor};
  margin: 2rem auto;
  border: 1px solid #0a0a0a;
`

const ColorBox: React.FC<{ correctAnswerColor: string }> = ({ correctAnswerColor }) => {
  return <Box correctAnswerColor={correctAnswerColor} />
}

export default ColorBox
