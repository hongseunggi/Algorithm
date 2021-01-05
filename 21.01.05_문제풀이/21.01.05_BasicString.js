/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
*/
function solution(s) {
    var answer = true;
    if(s.length == 4 || s.length == 6){
       var a = parseInt(s);
       if(a !== s*1) answer = false;  
    }
    else answer = false;
    return answer;
}