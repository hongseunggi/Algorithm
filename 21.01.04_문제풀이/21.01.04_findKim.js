function solution(Seoul){
    var answer = '';
    var number = 0;
    for(let i = 0; i < Seoul.length; i++){
        if(Seoul[i] == "kim"){
            number = i;
        }
    }
    return answer = '김서방은 '+ number + '에 있다';
}
function init(){
    let Seoul = ["jane","hong" ,"kim"];
    let answer = solution(Seoul);
    console.log(answer);    
}
init();
