/*
n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 
권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 
심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.

선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.
*/
function solution(n, results) {
    var answer = 0;
    let graph = Array.from({ length: n }, () => Array(n).fill(false));
	//console.log(graph);
    results.map((v) => {
		let [win, lose] = v;
		graph[win-1][lose-1] = 1;
		graph[lose-1][win-1] = -1;
		graph[win-1][win-1] = 0;
		graph[lose-1][lose-1] = 0;
	});
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let x = 0; x < n; x++){
                if (graph[j][i] === 1 && graph[i][x] === 1) graph[j][x] = 1;
				if (graph[j][i] === -1 && graph[i][x] === -1)
					graph[j][x] = -1;
            }
        }
    }
    for(let i = 0; i < graph.length; i++){
        let check = true;
        for(let j = 0; j < graph[i].length; j++){
           if(graph[i][j] === false){
                check = false;
            }
        }
        if(check){
            answer += 1;
        }
    }
    return answer;
}