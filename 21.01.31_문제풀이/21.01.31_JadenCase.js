/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
*/
function solution(s) {
    var answer = '';
    var ans = s.split(' ');
    var sc = '';
    for(let i = 0; i < ans.length; i++){
        let a = ans[i];
        for(let j = 0; j < a.length; j++){
            if(j == 0){
                if(!isNaN(a[j])){
                    sc += a[j];
                    continue;
                }
                else{
                    sc += a[j].toUpperCase();
                    continue;
                }
            }
            sc += a[j].toLowerCase();
        }
        if(i != ans.length - 1){
            sc += ' ';    
        }
        ans[i] = a;
    }
    return answer = sc;
}