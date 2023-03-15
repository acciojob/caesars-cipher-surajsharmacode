function rot13(str) {
  // Create an empty array to store the decoded characters
  let decoded = [];

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the character code of the current character
    let charCode = str.charCodeAt(i);

    // Check if the current character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 cipher by adding 13 to the character code
      // If the result is greater than 90 (the character code for 'Z'),
      // subtract 26 to wrap around to the beginning of the alphabet
      let decodedCharCode = charCode + 13;
      if (decodedCharCode > 90) {
        decodedCharCode -= 26;
      }

      // Convert the decoded character code back to a string
      let decodedChar = String.fromCharCode(decodedCharCode);

      // Add the decoded character to the decoded array
      decoded.push(decodedChar);
    } else {
      // If the current character is not an uppercase letter,
      // add it to the decoded array without decoding it
      decoded.push(str[i]);
    }
  }

  // Join the decoded array into a string and return it
  return decoded.join('');
}
