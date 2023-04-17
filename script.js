const famousPeople = [
  "Albert Einstein",
  "Maya Angelou",
  "Nelson Mandela",
  "Mahatma Gandhi",
  "Marie Curie",
];

const quotes = [
  "In the middle of every difficulty lies opportunity.",
  "You may encounter many defeats, but you must not be defeated.",
  "It always seems impossible until it's done.",
  "Be the change that you wish to see in the world.",
  "Nothing in life is to be feared, it is only to be understood.",
];

const advices = [
  "Believe in yourself.",
  "Take calculated risks.",
  "Never give up.",
  "Stay focused on your goals.",
  "Learn from your mistakes.",
];
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
function generateRandomMessage() {
  const randomFamousPerson = famousPeople[getRandomIndex(famousPeople)];
  const randomQuote = quotes[getRandomIndex(quotes)];
  const randomAdvice = advices[getRandomIndex(advices)];

  return `${randomFamousPerson} once said, "${randomQuote}" Remember this and always ${randomAdvice}`;
}
console.log(generateRandomMessage());
