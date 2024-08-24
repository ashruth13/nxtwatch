import styled from 'styled-components'

export const SecondHead = styled.div`
  background-color: ${props => (props.dark ? '#404040' : '')};
  display: flex;
  width: 20vw;
  background-color: ${props => (props.dark ? '#404040' : '')};
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  padding-top: 20px;
`
export const NavP = styled.p`
  font-size: 16px;
  padding-left: 20px;
  font-weight: ${props => (props.high ? 700 : 400)};
  color: ${props => (props.dark ? '#909090' : '')};
`
export const NavItems = styled.div`
  background-color: ${props => (props.act ? props.bgColor : '')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
  width: 19.02vw;
`
export const Extra = styled.div`
  color: ${props => (props.dark ? 'white' : '')};
  margin-left: 20px;
  margin-right: 40px;
  font-family: 'Roboto';
`
export const MainHead = styled.div``

export const FirstHead = styled.div`
  background-color: ${props => (props.dark ? '#404040' : '')};
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoMain = styled.div`
  background-color: ${props => (props.dark ? '#0b0b0b' : '')};
  color: ${props => (props.dark ? 'white' : 'black')};
  padding: 15px;
  width: 80vw;
`
const con = value => {
  if (value) {
    return 'white'
  }
  return 'black'
}

export const FailureView = styled.div``

export const Videoend = styled.div`
  color: ${props => (props.like ? 'blue' : con(props.value))};
  display: flex;
  align-items: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const BtnHead = styled.button`
  border-style: solid;
  border-color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  background: transparent;
  width: 80px;
  padding: 7px;
`
