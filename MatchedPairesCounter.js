/**
 * Calculates the number of matched color shoes pairs
 * @param  {Number} shoesNumber the number of shoes
 * @param  {[Number]} shoesColors  array contains each shoe color code 
 */
const calcPairsNum = (shoesNumber, shoesColors) => {
    return [...new Set(shoesColors)].reduce((pairsNum, color) => pairsNum + parseInt(shoesColors.filter(shoeColor => shoeColor === color).length / 2), 0);
}

shoesColors = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3];
console.log(calcPairsNum(9, shoesColors));