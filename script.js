const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Programs must be written for people to read. – Harold Abelson"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = quote;
}
