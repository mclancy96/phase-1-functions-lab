const hqBlock = 42
const blockDistanceInFeet = 264

const distanceFromHqInBlocks = (blockNumber) => {
    return Math.abs(blockNumber - hqBlock)
}

const distanceFromHqInFeet = (blockNumber) => {
    return blockDistanceInFeet * distanceFromHqInBlocks(blockNumber)
}

const distanceTravelledInFeet = (start, end) => {
    return Math.abs(start - end) * blockDistanceInFeet
}