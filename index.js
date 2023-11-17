// 1-vazifa : a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.
// const numbers = [5, 3, 0]
// let [a, b, c] = numbers
// let isZero = false
// for (i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] <= 0) {
//         isZero = true
//     }
// }
// if (!isZero) {
//     const uch_xonali_son = a * 100 + b * 10 + c
//     console.log(uch_xonali_son);
// } else { console.log(0); }


// 2-vazifa  Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.
// const hafta_kunlari = [
//     {
//         code: 1,
//         title: "Dushanba"
//     },
//     {
//         code: 2,
//         title: "Seshanba"
//     },
//     {
//         code: 3,
//         title: "Chorshanba"
//     },
//     {
//         code: 4,
//         title: "Payshanba"
//     },
//     {
//         code: 5,
//         title: "JUMA"
//     },
//     {
//         code: 6,
//         title: "Shanba"
//     },
//     {
//         code: 7,
//         title: "Yakshanba"
//     }
// ]

// function kunni_aniqlash(a) {
//     const kun = hafta_kunlari.find((item) => {
//         return item.code == a
//     })
//     if (kun) {
//         console.log("Berilgan kun: " + " " + kun.title);
//     } else { console.log("none"); }
// }

// kunni_aniqlash(10)


// 3-vazifa Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.
// function kabisa_yili(yil) {
//     if (yil % 4 == 0) { console.log("true"); }
//     else { console.log("false"); }
// }
// kabisa_yili(2002)


// 4-vazifa a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.
// function son(a) {
//     return (String(a).length)
// }
// console.log(son(23));

// 5-vazifa  a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.
// const numbers = [5, 8, 9, 78]
// const isMusbat = numbers.every(item => {
//     return item > 0
// })
// console.log(isMusbat);


// 6-vazifa  a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.
// function summa(a) {
//     let sum = 0
//     for (let i = 0; i <= a; i++) {
//         sum+= i
//     }
//     return sum
// }
// console.log(summa(9));

// 7-vazifa   a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas
// function mukammal_son(a) {
//     let buluvchilar = []
//     let buluvchilar_yigindisi = 0
//     for (let i = 0; i < a; i++) {
//         if (a % i == 0) {
//             buluvchilar.push(i)
//         }
//     }
//     console.log(buluvchilar);
//     buluvchilar.forEach((item) => {
//         buluvchilar_yigindisi += item
//     })
//     if (buluvchilar_yigindisi === a) return true
//     else return false
// }
// console.log(mukammal_son(6));

// 8-vaizfa  n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3
// function raqamlar_soni(a){
//     return String(a).length
// }
// console.log(raqamlar_soni(25));


// 9-vazifa n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .
// function isPalindrome(n) {
//     let nStr = String(n);
//     for (let i = 0; i < nStr.length / 2; i++) {
//       if (nStr[i] !== nStr[length - i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isPalindrome(123211));

// 10-vazifa 
// function summa(n) {
//     let nStr = String(n)
//     let sum = 0
//     for(let i=0 ; i< nStr.length ; i++){
//       sum += +nStr[i]
//     }
//     console.log(sum);
// }
// summa(15)

// 11-vazifa array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.
// const numbers = [true, "Sheroz", 15, 27]
// const teskasi_massiv = numbers.reverse()
// console.log(teskasi_massiv);

// 12-vaizfa n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.
// const numbers = [2, 4, 6, 4,]
// const n = 4
// const n_topish = numbers.filter((item) => {
//     return item === n
// })
// console.log(n_topish);
// console.log(`${n} sonidan massivda ${n_topish.length} ta`);

// 13-vazifa.  a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.


// 14-vazifa.  Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.
// const numbers = [2, 4, 6, 1,]
// const increasing_number = numbers.sort((a, b) => (a - b))
// console.log(increasing_number);


// 15-vazifa Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.
const numbers = [2, 4, 6, 1,]
const increasing_number = numbers.sort((a, b) => (a - b))
console.log(increasing_number[increasing_number.length - 2]);

