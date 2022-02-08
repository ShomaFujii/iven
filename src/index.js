/** 
 * const,let等の変数宣言
*/
// var val1 = "var変数";
// console.log(val1);

// // varは変数を上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "ket変数を再宣言";

// //const変数は宣言可能
// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数は上書き保存不可"
// console.log(val3);

// //const変数は再宣言不可
// const val3 = "const変数再代入不可";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "shoma",
//   age: 26,
// };
// val4.address = "osaka";
// val4.name = "koyaman";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレレート文字列
 */
// const name = "shoma";
// const age = 26;

// //「私の名前はしょうまです。年齢は２６歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)

/**
 * 　アロー関数
 */

// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2 ;
// }
// console.log(func3(10,10));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "shoma",
//   age: 26,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name ,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)

// const myProfile = ["shoma","26"]

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3)

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}`;
// console.log(message4)

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") =>{
//   return console.log(`こんにちは${name}さん`)
// } 
// sayHello();

/**
 * スプレット構文...
 */

//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFun = (num1,num2) => {
//   return console.log(num1+num2);
// }
// sumFun(arr1[0],arr1[1]);
// sumFun(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 被れるのコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6)

// const arr7 = [...arr4,...arr5]
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4)

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["shoma","koyama","nakamura"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index) => {
//   return console.log(`${index+1}番目は${name}`)
// })

// const numArr = [1,2,3,4,5]
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 == 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "shoma"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */

// ある条件？条件がtrueの時：条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const fortmattenNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(fortmattenNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(50,10));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("１か２はtrueになります")
// }

// if (flag1 && flag2){
//   console.log("１mo２はtrueになります")
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&　は左が側trueなら右側を返す
// const num2 = 10
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);