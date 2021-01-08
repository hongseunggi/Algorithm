/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

function solution(s, n) {
    var answer = '';

    for(let i = 0; i < s.length; i++){
        if(s[i]== ' '){
            answer += ' ';
            continue;
        }
        var str = s.charCodeAt([i])+n;
        if(s.charCodeAt([i]) >= 97 && s.charCodeAt([i]) < 123){
            if(str >= 97 && str < 123){
                answer += String.fromCharCode(str);
            }
            else if(str >= 123){
                
                answer += String.fromCharCode(str-123+97);
            }
        }
        if(s.charCodeAt([i]) >= 65 && s.charCodeAt([i]) < 91){
            
            if(str >= 65 && str <= 90){
                answer += String.fromCharCode(str);
            }
            else if(str > 90){
                answer += String.fromCharCode(str-90+64);
            }
        }
    }
     
    return answer;
}