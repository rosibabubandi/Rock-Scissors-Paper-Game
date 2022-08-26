import {ChoiceImageButton, ChoiceImage} from './styledComponents'

const GameChoiceImages = props => {
  const {choiceDetails, setGameResultDetails} = props

  const {id, imageUrl} = choiceDetails

  const selectButtonTestId = `${id.toLowerCase()}Button`

  const setChoiceDetails = () => {
    setGameResultDetails(choiceDetails)
  }

  return (
    <ChoiceImageButton
      data-testid={selectButtonTestId}
      type="button"
      onClick={setChoiceDetails}
    >
      <ChoiceImage src={imageUrl} alt={id} />
    </ChoiceImageButton>
  )
}

export default GameChoiceImages
