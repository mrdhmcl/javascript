function selectPlayer() {
  let playerName = document.querySelector('#playerName')
  let playerPosition = document.querySelector('#position')
  let playerPositionText = playerPosition.options[playerPosition.selectedIndex].text
  let playerNumber = document.querySelector('#playerNumber')

  let verifySelection = confirm(`Do you confirm ${playerName.value} in the team's ${playerPositionText} position?`)

  if(verifySelection) {
    let ul = document.getElementById('teamList')
    let liPlayer = document.createElement('li')
    liPlayer.id = `player${playerNumber.value}`
    liPlayer.innerText = `${playerPositionText}: ${playerName.value} (${playerNumber.value})`
    ul.appendChild(liPlayer)

    playerName.value = ''
    playerPosition.value = ''
    playerNumber.value = ''
  }
}

function removePlayer() {
  let ul = document.querySelector('#teamList')
  let removePlayerByNumber = document.querySelector('#removePlayerByNumber')
  let removePlayerByNumberValue = removePlayerByNumber.value
  let playerId = document.querySelector(`#player${removePlayerByNumberValue}`)

  let verifyRemoval = confirm(`Are you sure you want to remove the player number ${removePlayerByNumber.value} from the team?`)

  if(verifyRemoval) {
    ul.removeChild(playerId)
    removePlayerByNumber.value = ''
  }
}