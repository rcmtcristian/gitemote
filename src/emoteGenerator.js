const { features, fixes, defaults } = require("./emote");

/**
 * * The getEmoteUrl function takes an array of emotes and returns a random emote URL from the array.
 * @param {Array} emoteArray- An array of emotes.
 * @returns {String}
 */
/**

 */
const getEmoteUrl = (emoteArray) =>
  emoteArray[Math.floor(Math.random() * emoteArray.length)];

/**
 * @param {String} prTitle
 *
 * @returns {String}
 */
/*
 * Generates an emote based on the given pull request title.
 * @param {string} prTitle - The title of the pull request.
 * @returns {string} - A string containing an image URL of the generated emote.
 */
const generateEmote = (prTitle) => {
  let emoteArray = defaults;
  const titleCase = prTitle.toLowerCase();
  const keywordMatch = titleCase.match(/^(feat|fix)/);
  const keyword = keywordMatch ? keywordMatch[0] : null;
  switch (keyword) {
    case 'feat':
      emoteArray = features;
      break;
    case 'fix':
      emoteArray = fixes;
      break;
  }
  return `![emote](${getEmoteUrl(emoteArray)})`;
};

module.exports = generateEmote;

//Example Usage
// const prTitle = "Fix bug in login feature";
// const emote = generateEmote(prTitle);
// console.log(emote);
// Output: ![emote](<random emote URL>)
