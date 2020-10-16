(function () {

})();

// NG
// 4-1. 無い場合はunknown
(function () {

  // // function getFoo(obj) {
  // //   return obj.foo;
  // // }
  // function getFoo<T extends { foo: V }, V>(obj:T): V {
  //   return obj.foo;
  // }

  // // 使用例
  // // numはnumber型
  // const num = getFoo({
  //   foo: 123
  // });
  // // strはstring型
  // const str = getFoo({
  //   foo: "hoge",
  //   bar: 0
  // });
  // // unkはunknown型
  // const unk = getFoo({
  //   hoge: true
  // });

  // // エラー例
  // getFoo(123);
  // getFoo(null);

})();
