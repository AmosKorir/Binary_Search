const values = [2, 10, 26, 45, 67, 13, 19]

function search(valueX,array){
    let sortedArray=array.sort((a,b)=>a-b)

    let lower=0
    let upper=sortedArray.length-1

    while (lower<=upper){
        let middle=lower+Math.floor((upper-lower)/2)

        let middleValue=sortedArray[middle]

        if (valueX==middleValue){
            return "found"
        }

        if (valueX<middleValue){
            upper=middle-1
        }else {
            lower=middle+1
        }
    }
    return 'not found'
}



console.log(search(7,values))