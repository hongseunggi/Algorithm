/*
앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

제한사항
문자열 s의 길이 : 2,500 이하의 자연수
문자열 s는 알파벳 소문자로만 구성
*/
function solution(s)
{
   // var answer = 0;
    for(let i = s.length; i >= 1; i--){
        for(let j = 0; j <= s.length-i; j++){
            if(ispalindrome(s.slice(j, j+i))){
                return s.slice(j,j+i).length;//console.log(s.slice(j,j+i));   
            }
        }
    }
   // return answer;
}
function ispalindrome(s){
    let cen = Math.floor(s.length/2);
    for(let i = 0; i < cen; i++){
        console.log(s, i, s.length-1-i, s[i], s[s.length-1-i]);
        if(s[i] != s[s.length-1-i]) {
            return false;
        }
    }
    return true;
}
