const game = new Chess()
const board = Chessboard("board", {
    position: "start",
    draggable: true,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
})

function onDragStart(source, piece) {
    if (game.game_over() || !piece.startsWith(game.turn())) {
        return false;
    }
}

function onDrop(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: "q" //TODO
    })
    if (move === null) return "snapback";
}

function onSnapEnd() {
    board.position(game.fen());
}
