/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/
function isPrime(num){
    if(num <= 1){
        return false;
    }
    if(num === 2 || num === 3){
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
    let div = 3;
    let limit = Math.floor(num / 2);
    while(limit >= div){
        if(num % div === 0){
            return false;
        }
        div += 2;
    }
    return true;
}
function solution(nums) {
    var answer = -1;
    var ans = [];
    nums.sort((a,b) => a-b);
//    console.log(nums);
    while(nums.length > 0){
        let a = nums.shift();
        for(let i = 0; i < nums.length; i++){
            let b = nums[i];
            for(let j = i+1; j < nums.length; j++){
                if(isPrime(a+b+nums[j])){
                    ans.push(a+b+nums[j]);   
                }
            }
        }
    }
 //   console.log(ans);
    return answer = ans.length;
}