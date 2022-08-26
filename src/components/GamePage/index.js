import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import GameChoiceImages from '../GameChoiceImages'
import GameResult from '../GameResult'

import {
  MainContainer,
  ScoreContainer,
  RockPaperScissorScoreContainer,
  ScoreEachItemText,
  ScoreTextScoreContainer,
  ScoreText,
  Score,
  GameViewContainer,
  ResultViewContainer,
  RulesContainer,
  RulesButton,
  ModalContainer,
  CancelButtonContainer,
  RulesImage,
} from './styledComponents'

class GamePage extends Component {
  state = {
    isGameInProgress: true,
    userSelectedObject: {},
    opponentSelectedObject: {},
    resultText: '',
    gameScore: 0,
  }

  setGameResultDetails = userChoice => {
    const {gameScore} = this.state
    const {id} = userChoice
    const {choicesList} = this.props

    const randomNumber = Math.floor(Math.random() * 3)

    const opponentChoice = choicesList[randomNumber]

    let choiceScore = gameScore
    let gameResultText = ''

    if (id === 'ROCK') {
      if (opponentChoice.id === 'SCISSORS') {
        choiceScore += 1
        gameResultText = 'YOU WON'
      } else if (opponentChoice.id === 'PAPER') {
        choiceScore -= 1
        gameResultText = 'YOU LOSE'
      } else {
        gameResultText = 'IT IS DRAW'
      }
    } else if (id === 'SCISSORS') {
      if (opponentChoice.id === 'PAPER') {
        choiceScore += 1
        gameResultText = 'YOU WON'
      } else if (opponentChoice.id === 'ROCK') {
        choiceScore -= 1
        gameResultText = 'YOU LOSE'
      } else {
        gameResultText = 'IT IS DRAW'
      }
    } else if (id === 'PAPER') {
      if (opponentChoice.id === 'ROCK') {
        choiceScore += 1
        gameResultText = 'YOU WON'
      } else if (opponentChoice.id === 'SCISSORS') {
        choiceScore -= 1
        gameResultText = 'YOU LOSE'
      } else {
        gameResultText = 'IT IS DRAW'
      }
    }

    this.setState(prevState => ({
      isGameInProgress: !prevState.isGameInProgress,
      userSelectedObject: userChoice,
      opponentSelectedObject: opponentChoice,
      resultText: gameResultText,
      gameScore: choiceScore,
    }))
  }

  getScoreContainer = () => {
    const {gameScore} = this.state

    return (
      <ScoreContainer>
        <RockPaperScissorScoreContainer>
          <ScoreEachItemText>ROCK PAPER SCISSORS</ScoreEachItemText>
        </RockPaperScissorScoreContainer>
        <ScoreTextScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{gameScore}</Score>
        </ScoreTextScoreContainer>
      </ScoreContainer>
    )
  }

  getGameView = () => {
    const {choicesList} = this.props

    return (
      <GameViewContainer>
        {choicesList.map(choice => (
          <GameChoiceImages
            key={choice.id}
            choiceDetails={choice}
            setGameResultDetails={this.setGameResultDetails}
          />
        ))}
      </GameViewContainer>
    )
  }

  setNewGame = () => {
    this.setState(prevState => ({
      isGameInProgress: !prevState.isGameInProgress,
      userSelectedObject: {},
      opponentSelectedObject: {},
      resultText: '',
    }))
  }

  getResultView = () => {
    const {userSelectedObject, opponentSelectedObject, resultText} = this.state

    const resultStatusObject = {
      userSelectedObject,
      opponentSelectedObject,
      resultText,
    }

    return (
      <ResultViewContainer>
        <GameResult
          resultStatusObject={resultStatusObject}
          setNewGame={this.setNewGame}
        />
      </ResultViewContainer>
    )
  }

  getRules = () => (
    <RulesContainer>
      <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
        {close => (
          <ModalContainer>
            <CancelButtonContainer>
              <RiCloseLine onClick={() => close()} />
            </CancelButtonContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ModalContainer>
        )}
      </Popup>
    </RulesContainer>
  )

  render() {
    const {isGameInProgress} = this.state

    return (
      <MainContainer>
        {this.getScoreContainer()}
        {isGameInProgress ? this.getGameView() : this.getResultView()}
        {this.getRules()}
      </MainContainer>
    )
  }
}

export default GamePage
