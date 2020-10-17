(function () {

})();

// NG
// 4-1. 無い場合はunknown
(function () {

  // 不正解!!!
  // function getFoo<T extends { foo: V } , V>(obj:T): V{
  //   return obj.foo;
  // }

  // 正解!!
  // TODO: infer? emit?
  function getFoo<T extends object>(obj: T): T extends { foo: infer E } ? E : unknown {
    return (obj as any).foo;
  }

  // 使用例
  // numはnumber型
  const num = getFoo({
    foo: 123
  });
  // strはstring型
  const str = getFoo({
    foo: "hoge",
    bar: 0
  });
  // unkはunknown型
  const unk = getFoo({
    hoge: true
  });

  // エラー例
  getFoo(123);
  getFoo(null);

})();
