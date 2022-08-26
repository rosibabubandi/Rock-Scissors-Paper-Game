import styled from 'styled-components'

export const CombinedSelectedImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const IndividualSelectedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const UserText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`
export const GameResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
`
export const ImageSelected = styled.img`
  height: 130px;
  width: 130px;
  @media screen and (min-width: 768px) {
    height: 160px;
    width: 200px;
  }
`
export const PlayAgainButton = styled.button`
  height: 60px;
  width: 140px;
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 7px;
  font-family: 'Bree Serif';
  color: #223a5f;
`
