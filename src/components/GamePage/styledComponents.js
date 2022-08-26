import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  background-size: cover;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreContainer = styled.div`
  height: 20vh;
  width: 90%;
  background-color: inherit;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const RockPaperScissorScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start
    align-items: flex-start;
    padding: 5px;
    max-width: 50px;
`
export const ScoreEachItemText = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 25px;
`

export const ScoreTextScoreContainer = styled.div`
  height: 90%;
  width: 17%;
  background-color: #ffffff;
  border-radius: 7px;
  border: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 90%;
    width: 25%;
    background-color: #ffffff;
    border-radius: 7px;
    border: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: normal;
  margin: 5px;
  font-size: 30px;
`

export const Score = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  margin: 5px;
  font-size: 30px;
`

export const GameViewContainer = styled.div`
  height: 70vh;
  width: 70%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
`

export const ResultViewContainer = styled.div`
  height: 70vh;
  width: 90%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`

export const RulesButton = styled.button`
  height: 35px;
  width: 70px;
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 8px;
  font-family: 'Bree Serif';
  color: #223a5f;
`

export const ModalContainer = styled.div`
  height: 80vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`

export const CancelButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-self: flex-end;
`

export const RulesImage = styled.img`
  height: 95%;
  width: 90%;
`
