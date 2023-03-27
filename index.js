
function writeCards(list, event) {
    let message_List = []
    for (let i=0; i < list.length; i++) {
        message_List.push( `Thank you, ${list[i]}, for the wonderful ${event} gift!`)
    }
    return message_List;
}

function countDown(int) {
    let iterator = 0;
    while( iterator <= int ) {
        console.log(int)
        int --
    }
}

