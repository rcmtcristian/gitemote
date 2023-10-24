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

  if (prTitle.match(/Feat|FEAT|feat/)) {
    emoteArray = features;
  } else if (prTitle.match(/Fix|FIX|fix/)) {
    emoteArray = fixes;
  }

  return `![emote](${getEmoteUrl(emoteArray)})`;
};

module.exports = generateEmote;
