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
  "https://media.giphy.com/media/3oz8xQQP4ahKiyuxHy/giphy.gif",
  "https://media.giphy.com/media/12KMwdClRgh6o0/giphy.gif",
  "https://media.giphy.com/media/mgqefqwSbToPe/giphy.gif",
  "https://media.giphy.com/media/diUKszNTUghVe/giphy.gif",
  "https://media.giphy.com/media/xUKrrEnN9I5lnrcSMv/giphy.gif",
];

const fixes = [`https://emojik.vercel.app/s/🤓_${getRandomEmote()}?size=128`];

const defaults = [
  `https://emojik.vercel.app/s/😁_${getRandomEmote()}?size=128`,
];
//   "https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif",
//   "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
//   "https://media.giphy.com/media/d68IdpvmAHohx5NMEV/giphy.gif",
//   "https://media.giphy.com/media/WV9Xx9itqEIu8GQloO/giphy.gif",
//   "https://media.giphy.com/media/xUA7aMYThXDVx4y5O0/giphy.gif",
//   "https://media.giphy.com/media/pqcKfVvWRowVy/giphy.gif",
// ];

module.exports = {
  reviewEmotes,
  features,
  fixes,
  defaults,
};
