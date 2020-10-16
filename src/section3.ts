(function () {

})();

// TODO: NG
// 3-1. 配列からMapを作る
(function () {

  function mapFromArray<T>(arr: T[], key: keyof T) {

    // libのバージョンアップ？
    const result = new Map();
    for (const obj of arr) {
      result.set(obj[key], obj);
    }
    return result;
  }

  // 使用例
  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray(data, "id");
  /*
  dataMapは
  Map {
    1 => { id: 1, name: 'John Smith' },
    2 => { id: 2, name: 'Mary Sue' },
    100 => { id: 100, name: 'Taro Yamada' }
  }
  というMapになる
  */

  // エラー例
  mapFromArray(data, "age");

})();

// TODO: NG
// 3-2. Partial
(function () {

  type MyPartial<T> = {
    t?: keyof T,
  }

  // 使用例
  /*
  * T1は { foo?: number; bar?: string; } となる
  */
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;
  //const t1: T1 = { foo: 1, bar: "a" };
  const t1: T1 = {t:"foo"}

  /*
  * T2は { hoge?: { piyo: number; } } となる
  */
  type T2 = MyPartial<{
    hoge: {
      piyo: number;
    };
  }>;
})();

// TODO: NG
// 3-3. イベント
(function () {

  interface EventPayloads {
    start: {
      user: string;
    };
    stop: {
      user: string;
      after: number;
    };
    end: {};
  }


  // class EventDischarger<E, U=keyof E> {
  //   emit(eventName: U, payload: E[U] ) {
  //     // 省略
  //   }
  // }

  // // 使用例
  // const ed = new EventDischarger<EventPayloads>();
  // ed.emit("start", {
  //   user: "user1"
  // });
  // ed.emit("stop", {
  //   user: "user1",
  //   after: 3
  // });
  // ed.emit("end", {});

  // // エラー例
  // ed.emit("start", {
  //   user: "user2",
  //   after: 0
  // });
  // ed.emit("stop", {
  //   user: "user2"
  // });
  // ed.emit("foobar", {
  //   foo: 123
  // });
})();


// 3-4. reducer
//正解!!!
(function () {
  type Action = {
    type: "increment"
    amount: number,
  } | {
    type: "decrement",
    amount: number,
  } | {
    type: "reset",
    value: number
  };

  type Reducer = {
    (state: number, action: Action): number
  }

  const reducer :Reducer= (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.amount;
      case "decrement":
        return state - action.amount;
      case "reset":
        return action.value;
    }
  };

  // 使用例
  reducer(100, {
      type: 'increment',
      amount: 10,
  }) === 110;
  reducer(100, {
      type: 'decrement',
      amount: 55,
  }) === 45;
  reducer(500, {
      type: 'reset',
      value: 0,
  }) === 0;

  // エラー例
  // reducer(0,{
  //     type: 'increment',
  //     value: 100,
  // });
})();


// TODO: NG
// 3-5. undefinedな引数
(function () {
  // type Func<A, R> = (arg?: A) => R;
  // type Func<A, R, B=undefined> = (arg: A | B) => R;

  // // 使用例
  // const f1: Func<number, number> = num => num + 10;
  // const v1: number = f1(10);

  // const f2: Func<undefined, number> = () => 0;
  // const v2: number = f2();
  // const v3: number = f2(undefined);

  // const f3: Func<number | undefined, number> = num => (num || 0) + 10;
  // const v4: number = f3(123);
  // const v5: number = f3();

  // // エラー例
  // const v6: number = f1();

})();
