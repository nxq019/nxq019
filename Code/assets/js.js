const modal = document.querySelector(".modal");
const registerElement = document.querySelector(".header__nav-item--register");
const loginElement = document.querySelector(".header__nav-item--login");
const registerActive = document.querySelector(".modal-auth--register");
const loginActive = document.querySelector(".modal-auth--login");
const returnBtns = document.querySelectorAll(".btn-return");
const modalSwitchs = document.querySelectorAll("modal__body-switch");

// đăng nhập - đăng ký
registerElement.onclick = function () {
  modal.classList.add("active-flex");
  loginActive.classList.add("not-active");
};

loginElement.onclick = function () {
  modal.classList.add("active-flex");
  registerActive.classList.add("not-active");
};

returnBtns.forEach(function (returnBtn) {
  returnBtn.onclick = function () {
    modal.classList.remove("active-flex");
    registerActive.classList.remove("not-active");
    loginActive.classList.remove("not-active");
  };
});

modalSwitchs.forEach(function (modalSwitch) {
  modalSwitch.onclick = function () {
    loginActive.classList.remove("not-active");
    registerActive.classList.remove("not-active");
  };
});

//render meat
const meats = [
  {
    name: "Ức gà",
    protein: 30,
    fat: 4,
    energy: 164,
    img: "./assets/img/food/protein/thit/ucga.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt heo nạc",
    protein: 19,
    fat: 7,
    energy: 139,
    img: "./assets/img/food/protein/thit/thitheo.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt bò",
    protein: 26,
    fat: 10.7,
    energy: 182,
    img: "./assets/img/food/protein/thit/thitbo.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt vịt",
    protein: 17.8,
    fat: 21.8,
    energy: 267,
    img: "./assets/img/food/protein/thit/thitvit.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt dê",
    protein: 23,
    fat: 2.6,
    energy: 122,
    img: "./assets/img/food/protein/thit/thitde.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt thỏ",
    protein: 31.5,
    fat: 8,
    energy: 183,
    img: "./assets/img/food/protein/thit/thittho.jpg",
    quanlity: 1,
  },
  {
    name: "Thịt trâu",
    protein: 26,
    fat: 5,
    energy: 160,
    img: "./assets/img/food/protein/thit/thittrau.jpg",
    quanlity: 1,
  },
];
const proteinMeat = document.querySelector("#protein-meat");
const renderMeat = meats
  .map(
    (meat) => `<div class="col l-2-4 m-4 c-6 container__body-content">
                    <div class="container__body-content--item">
                        <img src="${meat.img}" alt="" class="container__body-content--img">
                        <ul class="container__body-content--infor">
                            <li>${meat.name}<input type="checkbox"><span></span></li>
                            <li>Protein: ${meat.protein}g </li>
                            <li>Chất béo:${meat.fat}g</li>
                            <li>Năng lượng: ${meat.energy} kcal</li>
                        </ul>   
                    </div>
              </div>`
  )
  .join("");
proteinMeat.innerHTML = renderMeat;

////////////////////////////////
const clickBtns = document.querySelectorAll("input[type=checkbox]");
const foodList = document.querySelector(".header__collection-list");

//add thực phẩm
let fooditems = [];
clickBtns.forEach(function (clickBtn, index) {
  clickBtn.onclick = function () {
    fooditems.push(meats[index]);
    let food = fooditems
      .map(
        (fooditem) =>
          `<li class="header__collection-item">
          <img class="header__collection-img" src="${fooditem.img}" alt="">
          <div class="header__collection-body">
            <span class="header__collection-infor">${fooditem.name}</span>
            <div class="header__collection-quantily">
            <span class="foodQuanlity">Số lượng: ${fooditem.quanlity}</span>
            <div class="header__collection-up-and-down">
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-minus"></i>
            </div>
            </div>
          </div>
      </li>`
      )
      .join("");
    foodList.innerHTML = food;
    // console.log(fooditems);
    //tăng giảm số lượng thực phẩm
    const upQuanlitys = document.querySelectorAll(".fa-plus");
    const downQuanlitys = document.querySelectorAll(".fa-minus");
    const foodQuanlitys = document.querySelectorAll(".foodQuanlity");
    const headerCollectionItem = document.querySelectorAll(
      ".header__collection-item"
    );

    let i = 1;
    upQuanlitys.forEach(function (upQuanlity, index) {
      upQuanlity.onclick = function () {
        foodQuanlitys[index].innerText = `Số lượng: ${i + 1}`;
        fooditems[index].quanlity += 1;
        i = i + 1;
      };
    });

    downQuanlitys.forEach(function (downQuanlity, index) {
      downQuanlity.onclick = function (e) {
        foodQuanlitys[index].innerText = `Số lượng: ${i - 1}`;
        fooditems[index].quanlity -= 1;
        i = i - 1;
        console.log(fooditems[index]);
        if (fooditems[index].quanlity === 0) {
          headerCollectionItem[index].style.display = "none";
        }
      };
    });
  };
});
