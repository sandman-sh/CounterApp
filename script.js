const result = document.getElementById("result");
const substract = document.getElementById("sub-btn");
const addition = document.getElementById("add-btn");
const reset = document.getElementById("reset-btn");
const setting = document.getElementById("setting");
const settingOption = document.getElementById("setting-option");
const closeBtn = document.getElementById("close-btn");
const info = document.getElementById("info");
const infoOption = document.getElementById("info-option");
const closeInfoBtn = document.getElementById("close-info");
const btn = document.getElementsByClassName('globalTheme');
const themeButtons = document.querySelectorAll('.themes-btn');

result.textContent = 0;
addition.addEventListener("click", (event) => {
  result.textContent = parseInt(result.textContent) + 1;
  checkSubstractButton();
});
substract.addEventListener("click", (event) => {
  result.textContent = parseInt(result.textContent) - 1;
  checkSubstractButton();
});
reset.addEventListener("click", (event) => {
  result.textContent = 0;
  checkSubstractButton();
});

const checkSubstractButton = () => {
  if (parseInt(result.textContent) <= 0) {
    substract.style.setProperty("visibility", "hidden");
  } else {
    substract.style.removeProperty("visibility");
  }
};
checkSubstractButton();
setting.addEventListener("click", (event) => {
  settingOption.style.setProperty("display", "block");
  closeBtn.style.setProperty("display", "block");
});
closeBtn.addEventListener("click", (event) => {
  settingOption.style.setProperty("display", "none");
});
info.addEventListener("click", (event) => {
  infoOption.style.setProperty("display", "block");
  closeInfoBtn.style.setProperty("display", "block");
});

closeInfoBtn.addEventListener("click", (event) => {
  infoOption.style.setProperty("display", "none");
});

themeButtons.forEach((clickBtn) => {
  clickBtn.addEventListener('click', () => {
    console.log(`User clicked:`, clickBtn.className);

    document.body.className = '';
    document.body.classList.add(clickBtn.classList[1]);

    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = '';
      btn[i].style.color = '';
      btn[i].style.border = '';
    }

    if (clickBtn.classList.contains('theme-white')) {
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = 'white';
        btn[i].style.color = 'black';
        btn[i].style.border = '2px solid black';
      }
    }

  });
});