// code your solution here

function superbowlWin (record) {
    const winRecord = record.find(element => element.result === 'W');
    if (typeof winRecord === 'object') {
        return winRecord.year;
    } else {
        return undefined;
    }
}