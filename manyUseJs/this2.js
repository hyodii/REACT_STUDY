// this는 함수가 호출될때 결정이 된다
// 화살표 함수에서의 this는 함수가 속해있는 상위 this를 계승 받는다
// 콜백함수를 화살표 함수로 바꾸면, 상위의 this를 계승합니다.
const ageTest = {
  unit: "살",
  ageList: [10, 20, 30],
  getAgeList: function () {
    const result = this.ageList.map((age) => {
      return age + this.unit;
      // return age + ageTest.unit;
    })
    console.log(result)
  },
};

ageTest.getAgeList();