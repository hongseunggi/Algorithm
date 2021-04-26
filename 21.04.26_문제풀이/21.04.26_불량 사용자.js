/*
개발팀 내에서 이벤트 개발을 담당하고 있는 "무지"는 최근 진행된 카카오이모티콘 이벤트에 비정상적인 방법으로 당첨을 시도한 응모자들을 발견하였습니다. 
이런 응모자들을 따로 모아 불량 사용자라는 이름으로 목록을 만들어서 당첨 처리 시 제외하도록 이벤트 당첨자 담당자인 "프로도" 에게 전달하려고 합니다. 
이 때 개인정보 보호을 위해 사용자 아이디 중 일부 문자를 '*' 문자로 가려서 전달했습니다. 가리고자 하는 문자 하나에 '*' 문자 하나를 사용하였고 아이디 당 최소 하나 이상의 '*' 문자를 사용하였습니다.
"무지"와 "프로도"는 불량 사용자 목록에 매핑된 응모자 아이디를 제재 아이디 라고 부르기로 하였습니다.

예를 들어, 이벤트에 응모한 전체 사용자 아이디 목록이 다음과 같다면

응모자 아이디
frodo
fradi
crodo
abc123
frodoc

다음과 같이 불량 사용자 아이디 목록이 전달된 경우,

불량 사용자
fr*d*
abc1**

불량 사용자에 매핑되어 당첨에서 제외되어야 야 할 제재 아이디 목록은 다음과 같이 두 가지 경우가 있을 수 있습니다.

제재 아이디
frodo
abc123

제재 아이디
fradi
abc123

이벤트 응모자 아이디 목록이 담긴 배열 user_id와 불량 사용자 아이디 목록이 담긴 배열 banned_id가 매개변수로 주어질 때, 당첨에서 제외되어야 할 제재 아이디 목록은 몇가지 경우의 수가 가능한 지 return 하도록 solution 함수를 완성해주세요.
*/
function match(ban, user){
    let result = [];
    for(let i = 0; i < user.length; i++){
        let str = "";
        for(let j = 0; j < user[i].length; j++){
            if(ban[j] == user[i][j] || ban[j] == "*"){
                str += user[i][j];   
            }
            else{
                break;
            }
        }
        if(str != user[i]){
            continue;
        }
        if(str.length != ban.length){
            continue;
        }
        result.push(str);
    }
  //  console.log(result);
    return result;
}
function dfs(ans,list,num,res,banned_id){
    if(num > ans.length-1){
        list.sort();
        res.push(list.toString());
        return res;
    }
    let ls = list;
    let aa = ans[num];
    
    for(let i = 0; i < aa.length; i++){
        if(!ls.includes(aa[i])){
            ls.push(aa[i]);
            dfs(ans,[...ls],num+1,res,banned_id);
            ls.pop();
        }
  //  console.log(ls);
    }
}
function solution(user_id, banned_id) {
  //  var answer = 0;
    let ans = [];
    let res = [];
    let answer = new Set();
    for(let i = 0; i < banned_id.length; i++){
        let str = match(banned_id[i], user_id);
        if(str.length > 0){
            ans.push(str);
        }
    }
    dfs(ans, [], 0, res, banned_id)
    for(let i = 0; i < res.length; i++){
        if(answer.has(res[i])){
            continue;
        }
        answer.add(res[i]);
    }
 //   console.log(answer.size);
    return answer.size;
}