/*
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
경과 시간	다리를 지난 트럭	  다리를 건너는 트럭	대기 트럭
  0	            []	            []	       [7,4,5,6]
 1~2	        []	            [7]	       [4,5,6]
  3	            [7]	            [4]	       [5,6]
  4	            [7]	            [4,5]	   [6]
  5	            [7,4]	        [5]	       [6]
 6~7	        [7,4,5]	        [6]	       []
  8	            [7,4,5,6]	    []         []
*/
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge = [];
    let sum = 0;
    let flag = true;
    for (let i = 0; i < bridge_length; i++) {
      bridge.push(0);
    }
  
    while (flag) {
      let shiftVal = bridge.shift();
      sum -= shiftVal;
      if (sum + truck_weights[0] > weight) {
        bridge.push(0);
      } 
      else {
        sum += truck_weights[0];
        bridge.push(truck_weights[0]);
        truck_weights.shift();
      }
      answer++;
      if (truck_weights.length === 0) {
        for (let i = 0; i < bridge_length; i++) {
          answer++;
        }
        flag = false; 
      }
    }
    return answer;
  }