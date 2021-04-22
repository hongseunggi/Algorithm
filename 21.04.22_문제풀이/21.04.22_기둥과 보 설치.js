/*
빙하가 깨지면서 스노우타운에 떠내려 온 "죠르디"는 인생 2막을 위해 주택 건축사업에 뛰어들기로 결심하였습니다. "죠르디"는 기둥과 보를 이용하여 벽면 구조물을 자동으로 세우는 로봇을 개발할 계획인데, 그에 앞서 로봇의 동작을 시뮬레이션 할 수 있는 프로그램을 만들고 있습니다.
프로그램은 2차원 가상 벽면에 기둥과 보를 이용한 구조물을 설치할 수 있는데, 기둥과 보는 길이가 1인 선분으로 표현되며 다음과 같은 규칙을 가지고 있습니다.

기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
단, 바닥은 벽면의 맨 아래 지면을 말합니다.

2차원 벽면은 n x n 크기 정사각 격자 형태이며, 각 격자는 1 x 1 크기입니다. 맨 처음 벽면은 비어있는 상태입니다. 기둥과 보는 격자선의 교차점에 걸치지 않고, 격자 칸의 각 변에 정확히 일치하도록 설치할 수 있습니다.
 (1, 0)에서 위쪽으로 기둥을 하나 설치 후, (1, 1)에서 오른쪽으로 보를 하나 만듭니다.
(2, 1)에서 위쪽으로 기둥을 하나 설치 후, (2, 2)에서 오른쪽으로 보를 하나 만듭니다.
(5, 0)에서 위쪽으로 기둥을 하나 설치 후, (5, 1)에서 위쪽으로 기둥을 하나 더 설치합니다.
(4, 2)에서 오른쪽으로 보를 설치 후, (3, 2)에서 오른쪽으로 보를 설치합니다.
만약 (4, 2)에서 오른쪽으로 보를 먼저 설치하지 않고, (3, 2)에서 오른쪽으로 보를 설치하려 한다면 2번 규칙에 맞지 않으므로 설치가 되지 않습니다. 기둥과 보를 삭제하는 기능도 있는데 기둥과 보를 삭제한 후에 남은 기둥과 보들 또한 위 규칙을 만족해야 합니다. 만약, 작업을 수행한 결과가 조건을 만족하지 않는다면 해당 작업은 무시됩니다.

벽면의 크기 n, 기둥과 보를 설치하거나 삭제하는 작업이 순서대로 담긴 2차원 배열 build_frame이 매개변수로 주어질 때, 모든 명령어를 수행한 후 구조물의 상태를 return 하도록 solution 함수를 완성해주세요.

*/
function checkcol(answer,x,y){
    if(y==0){
        return true;
    }
    else if(answer.find(v => (v[0] == x && v[1] == y-1) && v[2] == 0)){
        return true;
    }
    else if(answer.find(v => (v[0] == x-1 && v[1] == y) && v[2] == 1)){
        return true;
    }
    else if(answer.find(v => (v[0] == x && v[1] == y) && v[2] == 1)){
        return true;
    }
    return false;
}
function checkfloor(answer, x, y){
    if(answer.find(v => (v[0] == x && v[1] == y-1) && v[2] == 0)){
        return true;
    }
    else if(answer.find(v => (v[0] == x+1 && v[1] == y-1) && v[2] == 0)){
        return true;
    }
    else if(answer.find(v => (v[0] == x-1 && v[1] == y) && v[2] == 1) && answer.find(v1 => (v1[0] == x+1 && v1[1] == y) && v1[2] == 1)){
        return true;
    }
    return false;
}
function del(arr, x, y, frame){
    let tempanswer = arr.map(v => v);
//   console.log(tempanswer[0] == answer[0], frame);
    let target = tempanswer.find(v => (v[0] == x && v[1] == y) && v[2] == frame);
    let flag = true;
    let idx = tempanswer.indexOf(target); 
    tempanswer.splice(idx, 1);
    for(let i = 0; i < tempanswer.length; i++){
        if(tempanswer[i][2] == 0){
            if(!(checkcol(tempanswer, tempanswer[i][0], tempanswer[i][1]))){
                flag = false;   
            }
        }
        else{
            if(!(checkfloor(tempanswer, tempanswer[i][0], tempanswer[i][1]))){
                flag = false;
            }
        }
    }
    if(flag){
       // console.log("flag",arr);
        arr = tempanswer;
        return arr;
    }
    return arr;
           // console.log(tempanswer);
}

function solution(n, build_frame) {
    // 0 삭제 1 설치 0 기둥 1 보
    var answer = [];
    let build = [];
    let frame = {};
    for(let i = 0; i < build_frame.length; i++){
        build.push(build_frame[i].pop());
    }
 //   console.log(build, build_frame);
    while(build_frame.length > 0){
        let frame = build_frame.shift();
        let action = build.shift();
        // 기둥 설치
        if(frame[2] == 0 && action == 1){
        //    console.log("기둥 설치");
              if(checkcol(answer, frame[0], frame[1])){
                  answer.push([frame[0], frame[1], frame[2]]);
                  //console.log(answer);
              }
        }
        // 삭제
        if(frame[2] == 0 && action == 0){
        //    console.log("기둥 삭제");
              answer = del(answer, frame[0], frame[1], frame[2]);
        //      console.log(answer);
        }
        // 보 설치
        if(frame[2] == 1 && action == 1){
       //     console.log("보 설치");
            if(checkfloor(answer, frame[0], frame[1])){
               // console.log("dd");
                answer.push([frame[0],frame[1],frame[2]]);
            }
        }
        // 삭제
        if(frame[2] == 1 && action == 0){
       //     console.log("보 삭제");
              answer = del(answer, frame[0], frame[1], frame[2]);
        }
    }
 //   console.log(answer);
    answer.sort(function(a,b){
        if(a[0] == b[0]){
            if(a[1] == b[1]){
                return a[2]-b[2];
            }
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })
 //   console.log(answer);
    return answer;
}