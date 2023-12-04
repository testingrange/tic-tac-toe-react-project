export default function Log({ gameTurns }){
    let turns = []

    for (const turn of gameTurns) {
        const { square, player} = turn
        const { row, col } = square
        turns = [{key: `${player}${row}${col}`, player: player, row: row, col: col}, ...turns]

    }

    return (<ol id="log">
        {turns.map((item) => <li key={item.key}>Player "{item.player}": {item.row},{item.col}</li>)}
    </ol>)
}