(function () { })();


// 1-1. 関数に型をつけよう
// 正解!!
(function () {
  function isPositive(num:number) {
    return num >= 0;
  }


  // 使用例
  isPositive(3);

  // エラー例
  // isPositive('123');

})();

// 1-2. オブジェクトの型
// 正解!!
(function () {
  type User = {
    name: string,
    age: number,
    private: boolean
  }

  function showUserInfo(user: User) {
    // 省略
  }

  // 使用例
  showUserInfo({
      name: 'John Smith',
      age: 16,
      private: false,
  });

  // エラー例
  // showUserInfo({
  //     name: 'Mary Sue',
  //     private: false,
  // });
  // const usr: User = {
  //     name: 'Gombe Nanashino',
  //     age: 100,
  // };
})();


// 1-3. 関数の型
// 正解!!以下でもOK!!
// type IsPositiveFunc = (num: number)=> boolean;
(function () {
  type IsPositiveFunc = {
    (num: number): boolean;
  }
  const isPositive: IsPositiveFunc = num => num >= 0;

  // 使用例
  isPositive(5);

  // エラー例
  // isPositive('foo');
  // const res: number = isPositive(123);

})();


// 1-4. 配列の型
// 正解!!以下でもOK!!
// function sumOfPos(arr:Array<number>):number {
//   return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

(function () {
  function sumOfPos(arr:number[]):number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
  }

  // 使用例
  const sum: number = sumOfPos([1, 3, -2, 0]);
  console.log(sum);
  // エラー例
  // sumOfPos(123, 456);
  // sumOfPos([123, "foobar"]);
})();
