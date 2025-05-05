const hqBlock = 42
const blockDistanceInFeet = 264

const distanceFromHqInBlocks = (blockNumber) => {
    return Math.abs(blockNumber - hqBlock)
}

const distanceFromHqInFeet = (blockNumber) => {
    return 264 * distanceFromHqInBlocks(blockNumber)
}