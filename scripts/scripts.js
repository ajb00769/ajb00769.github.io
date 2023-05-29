function toggleVisibility(element) {
  element.classList.toggle("hidden");
}

const parent = document.getElementById("parent");
const headline = "WELCOME TO MY SITE ;)".split(" ");

headline.forEach((headlineWord, i) => {
  const headlineWordElement = document.createElement("h3");
  headlineWordElement.textContent = headlineWord;
  headlineWordElement.id = `headline-${i}`;
  headlineWordElement.classList.add("hidden");
  parent.appendChild(headlineWordElement);
});

function toggleHeadlineWords() {
  headline.forEach((headlineWord, i) => {
    const headlineWordElement = document.getElementById(`headline-${i}`);
    setTimeout(() => toggleVisibility(headlineWordElement), i * 700);
    setTimeout(() => toggleVisibility(headlineWordElement), i * 700 + 700);
  });
}

toggleHeadlineWords();

setInterval(toggleHeadlineWords, 3500);
