//[0, 1, 2, 3, 4 ,5, 6]

// start = 0, end = 2
// start = 5, end = 0
export const getSliderArr = (start, end, length) => {
    const limit = start > end ? length - 1 : end
    let output = []

    for(let i = start; i <= limit; i++)
        output.push(i)

    if(start > end) {
        for(let i = 0; i <= end; i++)
            output.push(i)
    }
    return output
}

export const getRandomIndex = (arr, curIndex) => {
    const size = arr.length
    let randomIndex
    do{
        randomIndex = Math.floor(Math.random() * size)
    }while(curIndex === randomIndex)
    return randomIndex
}