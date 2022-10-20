console.log(`----- Date 객체 사용하기 -----`);

let now = new Date();

console.log(now);
console.log(now.toLocaleString());
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getUTCFullYear());

// 시작 숫자 0~ 11
console.log(now.getMonth());
// 시작 숫자 1~31
console.log(now.getDate());
// 시작 숫자 0~6
console.log(now.getDay());


console.log(`현재 시간 : ${now.getHours()}`);
console.log(`현재 UTC 시간 : ${now.getUTCHours()}`);
console.log(`현재 분 : ${now.getMinutes()}`);
console.log(`현재 초 : ${now.getSeconds()}`);

console.log();

console.log(`----- Math 객체 사용하기 -----`);

console.log(`PI : ${Math.PI}`);

let result = 10 / 3;
console.log(`10 / 3 을 그대로 출력 시 : ${result}`);
console.log(`10 / 3 의 소수점 올리기 : ${Math.ceil(result)}`);
console.log(`10 / 3 의 소수점 버리기 : ${Math.floor(result)}`);
console.log(`5.5 의 소수점 반올림 : ${Math.round(5.5)}`);
console.log(`5.4 의 소수점 반올림 : ${Math.round(5.4)}`);
console.log(`매개변수 중 최대값 선택 : ${Math.max(10, 20, 30, 40, 50)}`);
console.log(`매개변수 중 최소값 선택 : ${Math.min(10, 20, 30, 40, 50)}`);

// 0.0~ 0.9까지 랜덤
console.log(`랜덤 숫자 발생 ${Math.random()}`);

console.log();

// 문제1) Math.radom()을 사용하여 로또 번호 생성 프로그램 생성
//  Math.round((Math.random()) * 45) + 1)

let number = [];

for(let i =0; i < 7; i++) {
    let random = Math.floor(((Math.random()) * 45) + 1);

    for (let j = 0; j < i; j++) {
        if (random == number[j]) {
        i--;
        break;
        }
        number[i] = random;
    }

    if (i == 0) {
        number.push(random);
    }
}

console.log(number);

for(let i = 0; i < number.length; i++) {
    if(i == number.length -1) {
        console.log(`이번 주 보너스 번호는 : ${number[i]}`);
    }
    else {
        console.log(`이번 주 당첨 번호는 : ${number[i]}`);
    }
}













