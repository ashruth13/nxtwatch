import styled from 'styled-components'

export const Mainmain = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainLogin = styled.div`
  box-shadow: ${props => (props.dark ? '' : '0px 4px 16px 0px #bfbfbf')};
  background-color: ${props => (props.dark ? '#0f0f0f' : '')};
  padding: 40px;
  height: 50vh;
  width: 25vw;
  font-family: 'Roboto';
  border-radius: 5px;
`
export const LoginLabel = styled.label`
  color: ${props => (props.dark ? 'white' : '#404040')};
  font-size: 13px;
`
export const LoginInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: #909090;
  background-color: ${props => (props.dark ? '#0f0f0f' : '')};
  padding: 5px;
  width: 19vw;
  margin-top: 2px;
`
