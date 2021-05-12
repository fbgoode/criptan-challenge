
const isPalindrome = (number) => {
    const str = number.toString();
    const arr = str.split('');
    const half = arr.length%2 === 0 ? arr.length/2 : (arr.length-1)/2;
    for (let i = 0; i<half; i++) {
        if (arr[i] !== arr[arr.length-i-1]) return false;
    }
    return true;
}

const getChild = (number) => {
    const str = number.toString();
    const arr = str.split('');
    if (arr.length%2 !== 0) arr.push('0');
    let result = "";
    for (let i = 0; i<arr.length-1; i+=2) {
        result += (parseInt(arr[i]) + parseInt(arr[i+1]));
    }
    return parseInt(result);
}

const hasPalindromeChild = (number,first = true) => {
    if (first && typeof number != 'number') throw new Error('input must be a number')
    if (number<9) return false;
    if (!isPalindrome(number)) return hasPalindromeChild(getChild(number),false);
    else {
        console.log(number);
        return true
    }
}

module.exports = hasPalindromeChild;