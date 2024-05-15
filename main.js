let dateInput = document.querySelector(".date");
let form = document.querySelector("form");
let result = document.querySelector(".result");

form.onsubmit = function (e) {
  // Don't Send The Data
  e.preventDefault();
  //  Get The User BirthDay
  let birthDay = new Date(dateInput.value);
  let D1 = birthDay.getDate();
  let M1 = birthDay.getMonth() + 1;
  let Y1 = birthDay.getFullYear();

  //  Get Now Date
  let dateNow = new Date();
  let D2 = dateNow.getDate();
  let M2 = dateNow.getMonth() + 1;
  let Y2 = dateNow.getFullYear();

  //  Result Var
  let YR, DR, MR;

  //   Years
  YR = Y2 - Y1;

  //   Months Condtion
  if (M2 >= M1) {
    MR = M2 - M1;
  } else {
    YR--;
    MR = 12 + M2 - M1;
  }

  //   Days Condtion
  if (D2 >= D1) {
    DR = D2 - D1;
  } else {
    MR--;
    DR = getDayInMonth(Y1, M1) + D2 - D1;
  }

  if (MR < 0) {
    MR = 11;
    YR--;
  }

  result.innerHTML = `Your Age Is ${YR} Years ${MR} Months ${DR} Days`;
//   Function To Get DaysInMonths
  function getDayInMonth(Year, Month) {
    return new Date(Year, Month, 0).getDate();
  }
};
