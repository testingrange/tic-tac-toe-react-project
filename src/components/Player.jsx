import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {

    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)

    const handleEditClick = () => {
        setIsEditing((editing) => !editing)
    }
    
    const handleChange = (event) => {
        console.log(event.target.value)
        setPlayerName(event.target.value)
    }

    let playerNameFld = <>
        <span className="player-name">{playerName}</span>
    </>

    if (isEditing) {
        playerNameFld = <>
            <input type="text" required value={playerName} onChange={handleChange}/>
        </>
    }

    return (
        <li className={isActive && 'active'}>
            <span className="player">
              {playerNameFld}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}