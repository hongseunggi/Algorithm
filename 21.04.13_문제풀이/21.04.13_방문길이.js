/*
https://programmers.co.kr/learn/courses/30/lessons/49994?language=javascript#
문제설명 참고
*/
function solution(dirs) {
    var answer = 0;
    let map = new Set();
    let q = [[0,0]];
    let dir = dirs.split("");
     
    while(q.length != 0){
     //   console.log(q);
        let location = q.shift();
        let move = dir.shift();
        let done = "";
        let rdone = "";
        let x = location[0];
        let y = location[1];
    
        if(move == "U"){
    
            if(y == 5){
                q.push([x,y]);
                continue;
            }
    
            let newy = y+1;
            done = String(x)+","+String(y)+","+String(x)+","+String(newy);
            rdone = String(x)+","+String(newy)+","+String(x)+","+String(y);
            q.push([x,newy]);
    
            if(!map.has(done) && !map.has(rdone)){
                answer++;
                map.add(done);
                map.add(rdone)
            }
        }
    
        if(move == "D"){
    
            if(y == -5){
                q.push([x,y]);
                continue;
            }
    
            let newy = y-1;
            done = String(x)+","+String(y)+","+String(x)+","+String(newy);
            rdone = String(x)+","+String(newy)+","+String(x)+","+String(y);
            q.push([x,newy]);
    
            if(!map.has(done) && !map.has(rdone)){
                answer++;
                map.add(done);
                map.add(rdone)
            }
        }
    
        if(move == "L"){
    
            if(x == -5){
                q.push([x,y]);
                continue;
            }
    
            let newx = x-1;
            done = String(x)+","+String(y)+","+String(newx)+","+String(y);
            rdone = String(newx)+","+String(y)+","+String(x)+","+String(y);
            q.push([newx,y]);
    
            if(!map.has(done) && !map.has(rdone)){
                answer++;
                map.add(done);
                map.add(rdone)
            }
        }
    
        if(move == "R"){
    
            if(x == 5){
                q.push([x,y]);
                continue;
            }
    
            let newx = x+1;
            done = String(x)+","+String(y)+","+String(newx)+","+String(y);
            rdone = String(newx)+","+String(y)+","+String(x)+","+String(y);
            q.push([newx,y]);
    
            if(!map.has(done) && !map.has(rdone)){
                answer++;
                map.add(done);
                map.add(rdone)
            }
        }
     }
    return answer;
    
}