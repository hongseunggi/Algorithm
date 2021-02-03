/*
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어

0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형은

0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.
*/
function solution(board)
{
    var col = board[0].length
    var row = board.length
    var answer = 0
    if(row < 2 || col < 2 ) return 1
    for(var i=1;i<row;i++){
        for(var j=1;j<col;j++){
            if(board[i][j]>0){
                let min = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j])
                board[i][j] = min+1
            } 
            if(answer < board[i][j]){
                answer = board[i][j]
            }
        }
    }
   // console.log(board);
    return answer * answer
}