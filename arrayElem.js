// Check if all Elements in an Array are the same

const allTheSame = function (elements) {
    return elements.every((i) => i == elements[0]) ? true : false
}

console.log(allTheSame([1, 1, 1])) // True
console.log(allTheSame([1, 2, 1])) // False
console.log(allTheSame(['a', 'a', 'a'])) // True
console.log(allTheSame([])) // True
console.log(allTheSame([1])) // True