/**
 * Returns a random emoji from an array of emojis.
 *
 * @returns {string} A random emoji from the array.
 *
 * @example
 * const randomEmote = getRandomEmote();
 * console.log(randomEmote); // Output: a random emoji from the array
 */
function getRandomEmote() {
  const emotes = ["😊", "🫡", "🥺", "🥳", "🤯", "😂", "😃", "🔥", "🤩", "✨"];
  const randomIndex = Math.floor(Math.random() * emotes.length);
  return emotes[randomIndex];
}

const features = [
  `https://emojik.vercel.app/s/😎_${getRandomEmote()}?size=128`,
];

const reviewEmotes = [
  `https://emojik.vercel.app/s/🧐_${getRandomEmote()}?size=128`,
];

const fixes = [`https://emojik.vercel.app/s/🤓_${getRandomEmote()}?size=128`];

const defaults = [
  `https://emojik.vercel.app/s/😁_${getRandomEmote()}?size=128`,
];

module.exports = {
  reviewEmotes,
  features,
  fixes,
  defaults,
};
