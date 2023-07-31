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

export const arrToMatrix = (items, col, row) => {
    const matrix = []
    let index = 0
    for(let i = 1; i <= col; i++){
        const col = [];
        for(let j = 1; j <= row; j++){
            col.push(items[index++])
        }
        matrix.push(col)
    }
    return matrix;
}

export const handleConcern = (concern) => {
    if(concern >= Math.pow(10, 6))
        return `${Math.round(concern*10/Math.pow(10, 6))/10}M`
    else if(concern >= Math.pow(10, 3))
        return `${Math.round(concern/Math.pow(10, 3))}K`
    else 
        return concern
}