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


/* The code `module.exports` is used in Node.js to export variables, objects, or functions from a
module so that they can be used in other modules. In this case, the code is exporting an object that
contains four arrays: `reviewEmotes`, `features`, `fixes`, and `defaults`. These arrays contain URLs
of images with emojis, generated using the `getRandomEmote()` function. The exported object can be
imported and used in other modules by using the `require()` function. */

module.exports = {
  reviewEmotes,
  features,
  fixes,
  defaults,
};
