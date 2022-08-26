import {
  CombinedSelectedImagesContainer,
  IndividualSelectedImageContainer,
  UserText,
  ImageSelected,
  GameResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {resultStatusObject, setNewGame} = props
  const {
    userSelectedObject,
    opponentSelectedObject,
    resultText,
  } = resultStatusObject

  const onClickNewGame = () => {
    setNewGame()
  }

  return (
    <>
      <CombinedSelectedImagesContainer>
        <IndividualSelectedImageContainer>
          <UserText>YOU</UserText>
          <ImageSelected src={userSelectedObject.imageUrl} alt="your choice" />
        </IndividualSelectedImageContainer>
        <IndividualSelectedImageContainer>
          <UserText>OPPONENT</UserText>
          <ImageSelected
            src={opponentSelectedObject.imageUrl}
            alt="opponent choice"
          />
        </IndividualSelectedImageContainer>
      </CombinedSelectedImagesContainer>
      <GameResultText>{resultText}</GameResultText>
      <PlayAgainButton type="button" onClick={onClickNewGame}>
        PLAY AGAIN
      </PlayAgainButton>
    </>
  )
}

export default GameResult
