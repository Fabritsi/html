/* 
 Зав 8. 
*/

const selectButton = document.getElementById("banner-button");
const selectHolder = document.getElementById("holder");
const linkInput = document.getElementById("link-input");
const headingInput = document.getElementById("h2-input");
const imageInput = document.getElementById("image-input");

selectButton.addEventListener("click", () => {
  let link = linkInput.value;
  let heading = headingInput.value;
  let image = imageInput.value;

  const htmlReturn = `<div><a href="${link}"><img src="${image}"></a><h2>${heading}</h2></div>`;

  selectHolder.innerHTML = htmlReturn;
});

/*
Зав 9.
*/

function Dobutok(a, b, c) {
  return a * b * c;
}
console.log(Dobutok(1, 2, 3));

function minVal(a, b, c) {
  return Math.min(a, b, c);
}

console.log(minVal(3, -4, -9));

/*
Зав 10.
*/

let myFunc = function (n) {
  if (n == 1 || n == 2 || n == 12) {
    return "Зима";
  } else if (n == 3 || n == 4 || n == 5) {
    return "Весна";
  } else if (n == 6 || n == 7 || n == 8) {
    return "Літо";
  } else if (n == 9 || n == 10 || n == 11) {
    return "Осінь";
  } else {
    return "Такого місяця нема";
  }
};

console.log(myFunc(6));
