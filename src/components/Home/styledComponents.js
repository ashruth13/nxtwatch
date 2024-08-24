import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
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

export const Content = styled.div`
  color: ${props => (props.dark ? 'white' : 'black')};
  display: flex;
  flex-wrap: wrap;
`
export const Card = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 20px;
  height: 40vh;
  width: 20vw;
  color: ${props => (props.dark ? 'white' : 'black')};
`
export const MainHome = styled.div`
  padding: 20px;
  background-color: ${props => (props.dark ? '#0b0b0b' : '#ebebeb')};
  height: ${props => (props.premium ? '55vh' : '90vh')};
  overflow-y: scroll;
  width: 79vw;
  max-height: max-content;
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
export const MainHead = styled.div`
  opacity: ${props => (props.logout ? '0.3' : '')};
`

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
