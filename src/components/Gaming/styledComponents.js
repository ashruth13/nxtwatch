import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainGame = styled.div`
  background-color: ${props => (props.dark ? '#0b0b0b' : '')};
  overflow-y: scroll;
  color: ${props => (props.dark ? 'white' : 'black')};
  height: ${props => (props.Premium ? '55vh' : '90vh')};
  padding: 10px;
  width: 79vw;

  display: flex;
  flex-wrap: wrap;
`
export const SubGame = styled.div`
  color: ${props => (props.dark ? 'white' : 'black')};
  margin: 15px;
`

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

export const BtnHead = styled.button`
  border-style: solid;
  border-color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  background: transparent;
  width: 80px;
  padding: 7px;
`
