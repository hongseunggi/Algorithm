/*
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/
function solution(n) {
    var answer = 0;
    var arr = [];
    if(n == 1){
        return answer = 1;
    }
    while(true){
        var x = Math.floor(n%3);
        n = Math.floor(n/3);
        if(n == 2 || n == 1){
            arr.push(x);
            arr.push(n);
            break;
        }
        else {arr.push(x);}
    }
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        answer += arr[arr.length-i-1]*3**i;
    }
    return answer;
}