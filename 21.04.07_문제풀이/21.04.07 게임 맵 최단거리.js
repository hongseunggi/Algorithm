/*
ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.

위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
*/
function solution(maps) {
    var answer = -1;
   // var ans = [];    
    let xpos=[0,0,1,-1];
    let ypos=[1,-1,0,0];
  /*  maps.forEach(e => {
         let a = Array(e.length).fill(0);
         ans.push(a);
    });*/
    var q = [[0,0,1]];
    while(q.length != 0){
        //console.log(q);
        let ror = q.shift();
        //count++;
      //  ans[ror[0]][ror[1]] = 1;
        let x = ror[1];
        let y = ror[0];
        let cnt = ror[2];
        if(x == maps[0].length-1 && y == maps.length-1){
            return answer = cnt;
        }
        for(let i = 0; i < 4; i++) { 
            let nextX = x + xpos[i]; 
            let nextY = y + ypos[i]; 
            if(nextX<0 || nextY<0 || nextX>=maps[0].length || nextY>=maps.length){
                continue;
            }
            if(maps[nextY][nextX]==2){
                continue;
            }
            if(maps[nextY][nextX]==0){
                continue;
            }
            q.push([nextY, nextX, cnt+1]); 
            maps[nextY][nextX] = 2;
        }

    }
    //console.log(ans);
    return answer;
}