// 2-1. ジェネリクス
// 正解!!
(function () {

  function myFilter<T>(arr:T[], predicate:(item:T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  // 使用例
  const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
  const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);
  console.log(res);
  console.log(res2);

  // エラー例
  // myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

})();

// 2-2. いくつかの文字列を受け取れる関数
// 正解!!
(function () {

  type Speed = "slow" | "medium" | "fast";
  function getSpeed(speed: Speed): number {
    switch (speed) {
      case "slow":
        return 10;
      case "medium":
        return 50;
      case "fast":
        return 200;
    }
  }

  // 使用例
  const slowSpeed = getSpeed("slow");
  const mediumSpeed = getSpeed("medium");
  const fastSpeed = getSpeed("fast");

  // エラー例
  // getSpeed("veryfast");
})();



// 2-3. 省略可能なプロパティ
// 正解!!以下でもOK
// type addEventListenerCustome2Option = { capture?: boolean, once?: boolean, passive?: boolean }
// declare function addEventListenerCustome2(event: string, callBack: () => void, option?: boolean | addEventListenerCustome2Option): void;

declare function addEventListenerCustome(event: string, callBack: () => void, option?: boolean | { capture?: boolean, once?: boolean, passive?: boolean }): void;

(function () {
  // 使用例
  addEventListenerCustome("foobar", () => {});
  addEventListenerCustome("event", () => {}, true);
  addEventListenerCustome("event2", () => {}, {});
  addEventListenerCustome("event3", () => {}, {
    capture: true,
    once: false
  });

  // エラー例
  // addEventListenerCustome("foobar", () => {}, "string");
  // addEventListenerCustome("hoge", () => {}, {
  //   capture: true,
  //   once: false,
  //   excess: true
  // });

})();

// 2-4. プロパティを1つ増やす関数
// 不正解!!!

(function () {
  // 正解はこっち!!!!
  function giveId<T, U>(obj: T): T & {id:string} {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }
  // function giveId<T>(obj: T): T {
  //   const id = "本当はランダムがいいけどここではただの文字列";
  //   return {
  //     ...obj,
  //     id
  //   };
  // }

  // 使用例
  const obj1: {
    id: string;
    foo: number;
  } = giveId({ foo: 123 });
  const obj2: {
    id: string;
    num: number;
    hoge: boolean;
  } = giveId({
    num: 0,
    hoge: true
  });

  // エラー例
  // const obj3: {
  //   id: string;
  //   piyo: string;
  // } = giveId({
  //   foo: "bar"
  // });

})();

// 2-5. useState
// 不正解!!!
// declare function useState<T>(initParam: T): [T, (arg: T) => void];

// 正解は以下
// TODO: 他の形がダメっぽい。解説よく見る
type UseStateUpdateArguments<T> = T | ((oldValue: T) => T)
declare function useState<T>(initValue:T): [T, (updator: UseStateUpdateArguments<T>) => void]

(function () {

  // 使用例
  // number型のステートを宣言 (numStateはnumber型)
  const [numState, setNumState] = useState(0);
  // setNumStateは新しい値で呼び出せる
  setNumState(3);
  // setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
  setNumState(state => state + 10);

  // 型引数を明示することも可能
  const [anotherState, setAnotherState] = useState<number | null>(null);
  setAnotherState(100);

  // エラー例
  // setNumState('foobar');
})();

(function () {
})();


