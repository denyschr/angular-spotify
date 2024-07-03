export const randomEmoji = (): string => {
  const emojis = ['😘', '🤓', '😜', '🤪', '😎', '🤩', '🥳', '🤘', '🎉', '🔥'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};
