// this는 함수가 호출될때 결정이 된다
// 화살표 함수에서의 this는 함수가 속해있는 상위 this를 계승 받는다
const ageTest = {
  unit: "살",
  ageList: [10, 20, 30],
  getAgeList: function () {
    const result = this.ageList.map((age) => {
      return age + ageTest.unit;
    })
    console.log(result)
  },
};

ageTest.getAgeList();