/*
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */
function solution(answers) {
    var answer = [];
    var st = {
        one : [1,2,3,4,5],
        two : [2,1,2,3,2,4,2,5],
        three : [3,3,1,1,2,2,4,4,5,5],
        count1 : 0,
        count2 : 0,
        count3 : 0
    };
    st.count1 = answers.filter((e,i) => {return e === st.one[i%st.one.length];}).length;
    st.count2 = answers.filter((e,i) => {return e === st.two[i%st.two.length];}).length;
    st.count3 = answers.filter((e,i) => {return e === st.three[i%st.three.length];}).length;

    var max = Math.max(st.count1, st.count2, st.count3);
    console.log(st.count1, st.count2, st.count3);
    if(st.count1 === max) answer.push(1);
    if(st.count2 === max) answer.push(2);
    if(st.count3 === max) answer.push(3);
    return answer;
}