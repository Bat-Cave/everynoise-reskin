window.addEventListener("click", () => {
  const playButtons = document.getElementsByClassName("playlink");

  const headphoneButtons = document.querySelectorAll(
    '[title="See this playlist"]'
  );

  console.log({ headphoneButtons });

  Array.from(playButtons).forEach((button) => {
    button.innerHTML = spotifySvg;
  });

  Array.from(headphoneButtons).forEach((button) => {
    button.innerHTML = spotifySvg;
  });
});

window.addEventListener("load", () => {
  const headphoneButtons = document.querySelectorAll(
    '[title="See this playlist"]'
  );

  Array.from(headphoneButtons).forEach((button) => {
    button.innerHTML = spotifySvg;
  });
});

const spotifySvg = `<svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 15C7 15 11.5 14 16 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
