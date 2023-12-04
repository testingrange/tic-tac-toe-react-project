export default function Log({ turns }){
    // let turns = []

    // for (const turn of gameTurns) {
    //     const { square, player} = turn
    //     const { row, col } = square
    //     turns = [{key: `${player}${row}${col}`, player: player, row: row, col: col}, ...turns]

    // }

    return (<ol id="log">
        {turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
    </ol>)
}