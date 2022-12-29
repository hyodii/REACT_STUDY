// this는 함수가 호출될때 결정이 된다
// 화살표 함수에서의 this는 함수가 속해있는 상위 this를 계승 받는다
const testCar = {
  name: 'benz',
  getName: function () {
    console.log("getname", this.name)
    const innerFun = ()=> {
      console.log("innerFunc", this);
    };
    innerFun();
  },
};

testCar.getName()