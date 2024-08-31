module.exports = function reverse (n) {
    let result = '';
    let str = n.toString();
    let i = 0;
    let a = 1
  
    while(i < str.length) {
      result = result + str[str.length-a];
      i++;
      a++;
    }
  
    return Number(result);
}
