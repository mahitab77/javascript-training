function areAnagrams(word1, word2) {
    // Function to normalize the words: convert to lowercase and sort the characters
    function normalize(word) {
        return word.toLowerCase().split('').sort().join('');
    }

    // Normalize both words and compare the results
    return normalize(word1) === normalize(word2);
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // true
console.log(areAnagrams("hello", "billion"));  // false
console.log(areAnagrams("Dreeming", "Dear mumm")); // false (case-sensitive and spaces are not removed)
console.log(areAnagrams("The ears", "Those eyes")); // false (case-sensitive and spaces are not removed)
