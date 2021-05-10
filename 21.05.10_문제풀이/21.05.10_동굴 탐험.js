/*

문제 설명
[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

오지 탐험가인 프로도는 탐험 도중 n개의 방으로 이루어진 지하 동굴을 탐험하게 되었습니다. 모든 방에는 0부터 n - 1 까지 번호가 붙어있고, 이 동굴에 들어갈 수 있는 유일한 입구는 0번 방과 연결되어 있습니다. 각 방들은 양방향으로 통행이 가능한 통로로 서로 연결되어 있는데, 서로 다른 두 방을 직접 연결하는 통로는 오직 하나입니다. 임의의 서로 다른 두 방 사이의 최단경로는 딱 한 가지만 있으며, 또한 임의의 두 방 사이에 이동이 불가능한 경우는 없습니다.

탐험에 앞서 이 지하 동굴의 지도를 손에 넣은 프로도는 다음과 같이 탐험 계획을 세웠습니다.

모든 방을 적어도 한 번은 방문해야 합니다.
특정 방은 방문하기 전에 반드시 먼저 방문할 방이 정해져 있습니다.
2-1. 이는 A번 방은 방문하기 전에 반드시 B번 방을 먼저 방문해야 한다는 의미입니다.
2-2. 어떤 방을 방문하기 위해 반드시 먼저 방문해야 하는 방은 없거나 또는 1개 입니다.
2-3. 서로 다른 두 개 이상의 방에 대해 먼저 방문해야 하는 방이 같은 경우는 없습니다.
2-4. 어떤 방이 먼저 방문해야 하는 방이면서 동시에 나중에 방문해야 되는 방인 경우는 없습니다.
위 계획 중 2-2, 2-3, 2-4는 순서를 지켜 방문해야 하는 두 방의 쌍이 A → B(A를 먼저 방문하고 B를 방문함) 형태로 유일함을 의미합니다. 즉, 프로도는 아래와 같은 형태로 방문순서가 잡히지 않도록 방문 계획을 세웠습니다.

A → B, A → C (방문순서 배열 order = [...,[A,B],...,[A,C],...]) 형태로 A를 방문 후에 방문해야 할 방이 B와 C로 두 개 또는 그 이상인 경우
X → A, Z → A (방문순서 배열 order = [...,[X,A],...,[Z,A],...]) 형태로 A를 방문하기 전에 방문해야 할 방이 X와 Z로 두 개 또는 그 이상인 경우
A → B → C (방문순서 배열 order = [...,[A,B],...,[B,C],...) 형태로 B처럼 A 방문 후이면서 동시에 C 방문 전인 경우
그리고 먼저 방문해야 할 방과 나중에 방문할 방을 반드시 연속해서 방문해야 할 필요는 없어 A방을 방문한 후 다른 방을 방문한 후 B방을 방문해도 좋습니다.

방 개수 n, 동굴의 각 통로들이 연결하는 두 방의 번호가 담긴 2차원 배열 path, 프로도가 정한 방문 순서가 담긴 2차원 배열 order가 매개변수로 주어질 때, 프로도가 규칙에 맞게 모든 방을 탐험할 수 있을 지 return 하도록 solution 함수를 완성해주세요.

[제한사항]
n은 2 이상 200,000 이하입니다.
path 배열의 세로(행) 길이는 n - 1 입니다.
path 배열의 원소는 [방 번호 A, 방 번호 B] 형태입니다.
두 방 A, B사이를 연결하는 통로를 나타냅니다.
통로가 연결하는 두 방 번호가 순서없이 들어있음에 주의하세요.
order 배열의 세로(행) 길이는 1 이상 (n / 2) 이하입니다.
order 배열의 원소는 [방 번호 A, 방 번호 B] 형태입니다.
A번 방을 먼저 방문한 후 B번 방을 방문해야 함을 나타냅니다.
*/
class Node{
    constructor(item) {
      this.item = item;
      this.next = null;
    }
}
  
class Queue{
    constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    push(item){
      const node = new Node(item);
      if (this.head === null) {
        this.head = node;
        this.head.next = this.tail;
      } 
      else{
          this.tail.next = node;
      }
      this.tail = node;
      this.size += 1;
    }
  
    length(){
      return this.size;
    }

    popLeft(){
      if(this.head === null){
          return;
      }
      const popedItem = this.head;
   //   console.log(this.head.next.i);
      if(this.size == 1){
          this.head = null;
          this.tail = null;
          this.size = 0;
          return popedItem;
      }
      this.head = this.head.next;
      this.size -= 1;
      return popedItem;
    }
  
    print() {
      let current = this.head;
    //  console.log('start print');
      while (current) {
    //    console.log(current.item);
        current = current.next;
      }
    }
}
function solution(n, path, order) {
      var answer = true;
      //let ans = Array.from({length : n}, () => []);
      let arr = []//Array.from({length : n});
      let ord = []//Array.from({length : n});
      let check = []//Array.from({length : n});
      let result = [];
      
   //   console.log(ord);
      //let last = [];
      for(let i = 0; i < n; i ++){
          arr.push([]);
          ord.push([]);
          check.push(0);
      }
      for(let i = 0; i < path.length; i++){
          let from = path[i][0];
          let to = path[i][1];
          arr[from].push(to);
          arr[to].push(from);
          //console.log(arr);
      }
      for(let i = 0; i < order.length; i++){
          ord[order[i][0]] = [order[i][1]];
       //   ord[order[i][1]] = [order[i][0]];
          check[order[i][1]]++;
      }
    /*  for(let i = 0; i < order.length; i++){
          if(ans.hasOwnProperty(order[i][0])){
              ans[order[i][0]].push(order[i][1]);
          }
          if(ans.hasOwnProperty(order[i][1])){
              ans[order[i][1]].push(order[i][0]);
          }
      }*/
      /*for(let i in ans){
          arr[i] = ans[i];
      }*/
  //    console.log(ord);
  //    console.log(arr);
      bfs(n, arr, ord,check);
   //   console.log(check);
      let q = new Queue();
     // q.push(0);
     /// q.push(1);
     // cnsole.log(q);
      for(let i = 0; i < check.length; i++){
          if(check[i] == 0){
             // console.log(check);
              q.push(i);
      //        console.log(q);
          }
      }
   //   console.log(q);
   //   console.log(ord);
     while(q.length() > 0){
          let node = q.popLeft();
   //       console.log(q);
   //       console.log(node.item);
          result.push(node.item);
          for(let i = 0; i < ord[node.item].length; i++){
              check[ord[node.item][i]]--;
            //  console.log(ord[node][i], check[ord[node][i]]);
              if(check[ord[node.item][i]] == 0){
     //             console.log(ord[node.item], ord[node.item][i])
                  q.push(ord[node.item][i]);
       //           console.log(q);
              }
          }
       //   console.log(q);
          //q.splice(0,1);
          ord[node.item] = [];
      }
     // console.log(result);
      if(result.length < n){
          return false;
      }
      return true;
      // console.log("ddd",result);
      //ss(ans, 0, first, last, arr,n);
   //   console.log(arr);
      /*path.sort(function(a,b){
          return a[0]-b[0];
      });*/
      
   //   return answer;
  }
  function bfs(n, arr, ord, check){
      let visit = Array.from({length : n}, () => false);
      let q = new Queue();
      q.push(0);
      visit[0] = true;
      //console.log(q.popLeft());
      while(q.length() > 0){
          let cur = q.popLeft();
          //console.log(cur);
          for(let i = 0; i < arr[cur.item].length; i++){
              let node = arr[cur.item][i];
            //  console.log(node);
              if(!visit[node]){
                  visit[node] = true;
                  q.push(node);
                  ord[cur.item].push(node);
                  check[node]++;
              }
          }
          //q.splice(0,1);
      }
      
  }