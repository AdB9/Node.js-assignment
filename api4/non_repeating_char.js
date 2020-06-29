function nonRepeatingChar(string) {
  return new Promise(function (resolve, reject) {
    const nospace_string = string.split(/\s/).join('');
    console.log(nospace_string)
    for (let i = 0; i < nospace_string.length; i++) {
      let current_char = nospace_string.charAt(i);
      if (nospace_string.indexOf(current_char) == i && nospace_string.indexOf(current_char, i + 1) == -1) {
        resolve({ code: 200, data: `first non-repeating char in the string is: ${current_char}` });
      }
    }
    reject({ code: 500, data: 'No non-repeating char found' });
  });
}

export {nonRepeatingChar};