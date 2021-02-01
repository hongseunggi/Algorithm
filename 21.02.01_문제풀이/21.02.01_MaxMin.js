/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.
*/
function solution(s) {
    var answer = '';
    var split = s.split(' ');
    split = split.sort((a, b) => a - b);
    answer = split[0] + ' ' + split[split.length-1]; 

    return answer;
}