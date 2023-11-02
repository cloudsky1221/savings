const createTarget = 10000;
// const createTarget =
//   JSON.parse(localStorage.getItem("target")) ||
//   document.querySelector("#targetSavings").value ||
//   0;

const setTarget = document.querySelector("#clickmeForSaving");
// if (setTarget) localStorage.setItem("target", JSON.stringify(createTarget));

const createComponent = (
  width,
  height,
  position = "relative",
  top = "0",
  color = "white",
  backdropFilter = "0",
  backgroundColor = "white"
) => {
  const component = document.createElement("div");
  component.style.width = width;
  component.style.height = height;
  component.style.position = position;
  component.style.top = top;
  component.style.color = color;
  component.style.backdropFilter = backdropFilter;
  component.style.backgroundColor = backgroundColor;
  return component;
};

const progress = (price) => {
  const circularProgress = createComponent(
    "500px",
    "500px",
    undefined,
    undefined,
    undefined,
    undefined,
    "blue"
  );
  circularProgress.innerText = `You can save Rs.${price} by not purchasing this product`;
  return circularProgress;
};

const message = (parentDiv, price) => {
  const modal = createComponent("100vw", "100vh", "absolute", "0", "blur(2px)");
  const displayProgress = progress(price);

  modal.appendChild(displayProgress);
  parentDiv.appendChild(modal);
};

async function main() {
  const productName = document.querySelector("#productTitle");
  const productPrice = document.querySelectorAll(".a-price-whole")[0];
  const buyBtn = document.querySelector("#buy-now-button");
  const checkoutPage = document.querySelector("h1");
  const body = document.querySelector("body");

  const price = 1200 || parseFloat(productPrice.innerText) || 0;
  if (checkoutPage) {
    if (checkoutPage.innerText === "Checkout") message(body, price);
  }
  if (buyBtn) {
    const product = productName.innerText || "not shown";
    const price = parseFloat(productPrice.innerText) || 0;
    console.log(price);
    // const items = JSON.parse(localStorage.getItem("products")) || [];
    // buyBtn.addEventListener("click", () => {
    //   items.push({ product, price });
    //   localStorage.setItem(JSON.stringify(items));
    // });
  }
}
main();
