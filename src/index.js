module.exports = function reverse (n) {
  if (n < 0) {
        number = -n;
} else {
    number = n;
}
        let string = String(number);
        console.log(string);
        let reverseStr = "";
    
        for (let i = 0; i < string.length; i += 1) {
            console.log(string[i]);
            reverseStr = `${string[i]}${reverseStr}`;
        }
        
        return Number(reverseStr);
}

// 162 170 506 564 233 520 228 165 535
