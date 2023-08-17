// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN');
// console.log(50 + 2 - 1);
// let firstName = "roshnaPokharel";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof "roshan");
// console.log(typeof 43);
// console.log(typeof roshan);
// const firstName = 'roshan';
// console.log(firstName);
// firstName = 'ramesh';
// let lastName = 'pokharel';
// console.log(lastName);
// const current = 2030;
// const ageRamesh = current - 1999;
// const ageRoshan = current - 2001;
// console.log(ageRamesh);
// console.log(ageRamesh, ageRoshan);
// const x = 2 ** 4;
// console.log(x);
// //concatination of two string
// const space = ' ';
// const firstName = 'Roshan';
// const lastName = 'Pokharel';
// console.log(firstName + space + lastName + ' ' + ' is ' + 'my ' + 'name');
// console.log(ageRamesh > ageRoshan);
// console.log(8 - 3 - 4);
// const marksWeight = 95;
// const marksHight = 1.88;
// const johnWeight = 85;
// const johnHight = 1.76;
// let marksBMI, johnBMI, marksHigherBmi;
// marksBMI = marksWeight / marksHight ** 2;
// johnBMI = johnWeight / johnHight ** 2;
// marksHigherBmi = marksBMI > johnBMI;
// console.log(marksBMI, johnBMI);
// console.log(marksHigherBmi);
// const firstName = 'Roshan';
// const birthYear = 2001;
// const currentYear = 2022;
// const introduction = "I'm " + firstName + ' and age is ' + (currentYear - birthYear);
// console.log(introduction);
// template literals
// const RoshanIntro = `i'm ${firstName} and age is ${currentYear - birthYear}`;
// console.log(RoshanIntro);
// console.log('string with \n\ multiple \n\ line');
// console.log(`string with
// multiple
// line`);
// if (marksBMI > johnBMI) {
//     console.log(`"marksBMI (${marksBMI}) is higher than john's BMI (${johnBMI})!"`);
// }
// else {
//     console.log(`"john's BMI (${johnBMI}) is higher than mark's BMI (${marksBMI})!"`);
// }
// type conversion
// const year = '2001';
// const final = Number(year) + 22;
// console.log(final);
// const num = 34;
// console.log(String(num) + 23);
// // type coersion
// console.log('23' + '10' + 3);
// let n = 1 + '1';
// n = n - 1;
// console.log(n);
// console.log(Boolean(NaN));
// let height = 0;
// if (height) {
//     console.log(`height is defined`);
// }
// else {
//     console.log(`height is undefined`);
// }

// giving the value from the console
// const number = Number(prompt('enter the number'));
// console.log(number);
// if (number === 44) console.log('the number 44 is the amazing number xd');
// else if (number === 34) console.log('the number 34 is the second most amazing number');
// else if (number === 12) console.log('the third most amazing number is 12');
// else if (number !== 69) {
//     console.log('why not 69');
// }
// console.log(`the two team in gymnastics are compared using average of
// three result`);
// let D1 = 96, D2 = 108, D3 = 114;
// let K1 = 96, K2 = 114, K3 = 108;
// let dolphins = (D1 + D2 + D3) / 3;
// let koalas = (K1 + K2 + K3) / 3;
// if (dolphins >= 100 || koalas >= 100) {
//     if (dolphins === koalas) {
//         console.log('match is draw');
//     }
//     else if (dolphins > koalas) {
//         console.log('the team dolphins is the winner');
//     }
//     else {
//         console.log('the team koalas is winner');
//     }
// }
// else {
//     console.log('both team didnot pass the minimum value');
// }
// console.log(43);

// let age = 12;
// age >= 18 ? console.log('I like to drink alcohol 🍷') : console.log('I like to drink soda 🥤');
// const bill = 430;
// let tip = bill < 50 || bill > 300 ? 0.2 * bill : 0.15 * bill;
// console.log(`
//  the bill is ${bill}
//  tip is ${tip}
//  total is ${bill + tip}`);
// function logger() {
//     console.log('my name is roshan');
// }
// logger(43);
// logger();
// logger();
// logger();
// function intrest(principle, year, rate) {
//     const IntrestMoney = principle * year * 0.01 * rate / 12;
//     return IntrestMoney;
// }
// const value = intrest(100000000, 1, 11);
// console.log(`total interst money is ${value}`);
// console.log(`total interst money is ${intrest(100000000, 1, 11)}`);
// const num = Number('45');
// console.log(`number ${num + 4}`);

// function declaration
// function ageCalc1(birthday) {
//     const age1 = 2023 - birthday;
//     return age1;
// }
// const calAge = ageCalc1(2001);
// console.log(calAge);

// function expression
// const calAge1 = function (birthday) {
//     const age2 = 2023 - birthday;
//     return age2;
// }
// const calAge2 = calAge1(2001);
// console.log(calAge2);
// console.log(calAge, calAge2);

// arrow function
// const retirementAge = (birthday, fName) => {
//     const age = 2023 - birthday;
//     const retired = 65 - age;
//     return ` ${fName} will retired in ${retired} age`;
// }
// console.log(retirementAge(2001, 'Roshan'));
// console.log(retirementAge(2003, 'Sujan'));
// console.log(retirementAge(2002, 'Sujal'));

// javaScript fundamental part 2
// practics


// const friends = ['roshan', 'sujal', 'sujan'];
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// const year = new Array(2001, 2003, 2009, 2012, 2015, 2019, 2020);
// console.log(year[5]);
// friends[2] = 'bishnu';
// console.log(friends);
// // friends = ['aman', 'manish', 'sandeep'];
// // console.log(friends);
// const college = 'bmc';
// const Roshan = ['Roshan', 'pokhrel', 2001, college, friends];
// console.log(Roshan);
// function ageCalc1(birthday) {
//     const age1 = 2023 - birthday;
//     return age1;
// }
// console.log(ageCalc1(year[0]));
// const friends = ['roshan', 'sujal', 'sujan'];
// console.log(friends);
// friends.push('bishnu');
// console.log(friends);
// friends.unshift('manish');
// console.log(friends);
// const popedElement = friends.pop();
// console.log(friends);
// console.log(popedElement);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('roshan'));
// console.log(friends.indexOf('manish'));
// console.log(friends.includes('sujal'));
// console.log(friends.includes('bishmu'));
// friends.push(23);
// console.log(friends.includes(23));
// if (friends.includes('sujan')) {
//     console.log(`indeed you have friend name sujan`);
// }
// function calcTip(bill) {
//     if (bill >= 50 || bill <= 300) {
//         return (0.15 * bill);
//     }
//     else {
//         return (0.2 * bill)
//     };
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(tips);
// console.log(total);

// const roshan = {
//     firstName: 'roshan',
//     lastName: 'pokhrel',
//     age: 2023 - 2001,
//     job: 'student',
//     friends: ['sujal', 'sujal', 'sandeep']
// };
// console.log(roshan);
// console.log(roshan.firstName);
// console.log(roshan['lastName']);
// const roshan = {
//     firstName: 'roshan',
//     lastName: 'pokhrel',
//     age: 2001,
//     job: 'student',
//     friends: ['sujal', 'sujal', 'sandeep'],
//     hasDriverLicense: false,
//     // calAge: function (agebirth) {
//     //     return 2023 - agebirth;
//     // }

//     // calAge: function () {
//     //     return 2023 - this.age;
//     // }

//     calAge: function () {
//         this.ages = 2023 - this.age;
//         return this.ages;
//     },
//     // summery: `${this.firstName} is ${this.calAge} years old ${this.job} and has ${this.hasDriverLicense ? 'a' : 'no'
//     //     } driving license`,

//     getSummery: function () {
//         return `${this.firstName} is ${this.calAge()} years old ${this.job} and has ${this.hasDriverLicense ? 'a' : 'no'} driving license`
//     }
// };
// // console.log(roshan.calAge());
// console.log(roshan.age);
// console.log(roshan.getSummery());
// console.log(roshan.summery);
// // console.log(roshan.age);
// // console.log(roshan.age);
// // console.log(roshan['calAge'](2001));

// const mark =
// {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     hight: 1.69,
//     calBMI: function () {
//         return this.mass / this.hight ** 2;
//     },
//     getsummery: function () {
//         return `${this.firstName} ${this.lastName}(${this.calBMI()})`
//     }
// }
// console.log(mark.getsummery());
// const john =
// {
//     firstName: 'johns',
//     lastName: 'smith',
//     mass: 92,
//     hight: 1.95,
//     calBMI: function () {
//         return this.mass / this.hight ** 2;
//     },
//     getsummery: function () {
//         return `${this.firstName} ${this.lastName}(${this.calBMI()})`
//     }
// }
// console.log(john.getsummery());

// console.log(john.calBMI < mark.calBMI ? `${john.getsummery()}BMI is higher than ${mark.getsummery()} BMI` : `${mark.getsummery()} BMI is higher than ${john.getsummery()} BMI`);

// const Roshan = [
//     'Roshan',
//     'pokhrel',
//     2001,
//     'college',
//     ['sujan', 'sujal', 'sandeep'],
//     true

// ];
// // const x = Roshan.length;
// for (let i = 0; i < Roshan.length; i++) {
//     console.log(Roshan[i], typeof Roshan[i]);
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// for (let i = 0; i < bills.length; i++) {
//     calcTip(bills);
//     function calcTip(bills) {
//         if (bills[i] >= 50 || bills[i] <= 300) {
//             tips.push(0.15 * bills[i]);
//             return (0.15 * bills[i]);

//         }
//         else {
//             tips.push(0.2 * bills[i]);
//             return (0.2 * bills[i])
//         };
//     }
// }

// // for (let i = 0; i < bills.length; i++) {
// //     total.push(tips[i] + bills[i]);
// // }
// // let sum = 0;
// // for (let i = 0; i < bills.length; i++) {
// //     sum = sum + total[i];
// // }
// // calcAverage = sum / total.length;
// // console.log(calcAverage);

// let average = 0;
// let av;
// const calcAv = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         average = average + arr[i];

//     }

//     return (av = average / arr.length);
// }
// console.log(bills);
// console.log(tips);
// console.log(total);
// console.log(calcAv(tips));
// const name = 'roshan';
// console.log(43);
// var arr = [3, 6, 2, 56, 32, 5, 89, 32, 453];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);
// console.log(document.querySelector('.javaScript').textContent);
// document.querySelector('.javaScript').textContent=' 🥰Js is fun isn\'t it!';
// console.log(document.querySelector('.massage').textContent);
// document.querySelector('.massage').textContent='🎉correct Number';
// console.log(document.querySelector('.massage').textContent);
// document.querySelector('.score').textContent=4;
// document.querySelector('.high-score').textContent=10;
// document.querySelector('.random-number').textContent=3;
// document.querySelector('.input').value = 2;
// console.log(document.querySelector('.input').value);

//game of guessing number

// let randomNumber= Math.trunc(Math.random()*10)+1;
// let score=10;
// let highScore=0; 
// document.querySelector('.button').addEventListener('click', function(){
// const guessNumber = Number( document.querySelector('.input').value);
// console.log(guessNumber,typeof(guessNumber));
// score--;
// document.querySelector('.score').textContent=score;
//  if(score>0)
//  {
// if(!guessNumber)
// {
//   document.querySelector('.massage').textContent='🚫 No number is entered!';
// }
// else if(guessNumber<0||guessNumber>10)
// {
//   document.querySelector('.massage').textContent='Number should be between 1 to 10';
// }
// else if(guessNumber===randomNumber)
// {
//   document.querySelector('.massage').textContent='🎉correct number';
//   document.querySelector('body').style.backgroundColor='#60b347';
//   document.querySelector('.random-number').style.width='50rem';
//   document.querySelector('.random-number').textContent=randomNumber;
//   if(score>highScore)
//   {
//     highScore=score;
//     document.querySelector('.high-score').textContent=highScore;
//   }
// }
// else if(guessNumber<randomNumber)
// {
//   document.querySelector('.massage').textContent='⬆️guess higher';
// }
// else if(guessNumber>randomNumber)
// {
//   document.querySelector('.massage').textContent='⬇️guess lower';
// }
//  }
//  else{
//   document.querySelector('.massage').textContent='game over';
//   document.querySelector('body').style.backgroundColor='red';
//  }


// }
// )
// document.querySelector('.button1').addEventListener('click', function(){
//   document.querySelector('body').style.backgroundColor='white';
//   randomNumber= Math.trunc(Math.random()*10)+1;
//   document.querySelector('.massage').textContent='guess the number....';
//   // document.querySelector('.score').textContent='10';
//   score=10;
//   document.querySelector('.score').textContent=score;
//   document.querySelector('.random-number').textContent='?';
//   document.querySelector('.input').value='';
// })


// const modal=document.querySelector('.modal');
// const overlay=document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModel = document.querySelectorAll('.show-modal');
// const openModal = function()
// {
//      modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
// }
// const closeModal = function()
// {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }
// console.log(btnOpenModel);
// for(let i=0;i<btnOpenModel.length;i++)
// {
//     btnOpenModel[i].addEventListener('click', openModal);
//     btnCloseModal.addEventListener('click', closeModal)
//     overlay.addEventListener('click', closeModal);
    
// }
// document.addEventListener('keydown', function(e){
//     // console.log('key is pressed');
//     console.log(e.key);
//     if(e.key==='Escape')
//     { if(!modal.classList.contains('hidden')){
//         closeModal();
//     }
//     }
// })

