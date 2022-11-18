import styled from 'styled-components'

const Wrapper = styled.div``

const Notification = ({ message }: { message: string }) => {
  return <Wrapper>{message}</Wrapper>
}

export default Notification
