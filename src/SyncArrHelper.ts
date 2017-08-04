export function arrNumbers2ArrayTuples(numbers: Array<number>): Array<[number, number]> {

    let result: Array<[number, number]> = [];

    let currentTuple: [number, number] = [1, 1];

    let size = numbers.length;

    console.log("numbers: " + numbers);

    for (let i = 1; i < size; i++) {

        let isLast = i == size - 1;

        let isChanged = numbers[i] - numbers[i - 1] != 1;

        if (isLast) {

            if (isChanged) {
                result.push(currentTuple);
                result.push([numbers[i], numbers[i]])
            } else {
                currentTuple[1] = numbers[i];
                result.push(currentTuple)
            }

        } else {

            if (isChanged) {
                result.push(currentTuple);
                currentTuple = [numbers[i], numbers[i]]
            } else {
                currentTuple[1] = numbers[i]
            }

        }

    }

    return result

}

export function arrNumbersToStr(numbers: Array<number>): string {

    return arrNumbers2ArrayTuples(numbers)
        .map(t => {
            if (t[0] == t[1]) {
                return `${t[0]}`
            } else {
                return `${t[0]}-${t[1]}`
            }
        }).join(",");

}

