/*

양의 정수 x에 대한 함수 f(x)를 다음과 같이 정의합니다.

x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
예를 들어,

f(2) = 3 입니다. 다음 표와 같이 2보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 3이기 때문입니다.
수	비트	다른 비트의 개수
2	000...0010	
3	000...0011	1
f(7) = 11 입니다. 다음 표와 같이 7보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 11이기 때문입니다.
수	비트	다른 비트의 개수
7	000...0111	
8	000...1000	4
9	000...1001	3
10	000...1010	3
11	000...1011	2
정수들이 담긴 배열 numbers가 매개변수로 주어집니다. numbers의 모든 수들에 대하여 각 수의 f 값을 배열에 차례대로 담아 return 하도록 solution 함수를 완성해주세요.
*/
function solution(numbers) {
    var answer = [];
   // let i = numbers[0].toString(2,);
  //  let i = 7^11;
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        if(num%2 == 0){
            num = num.toString(2);
            let idx = 0;
            for(let i = 0; i < num.length; i++){
                if(num[i] == 0){
                    idx = i;
                }
            }
          //  num.replace("1",v);
            let str = "";
            for(let i = 0; i < num.length; i++){
                if(i == idx){
                    str += "1";
                    continue;
                }
                str += num[i];
            }
            answer.push(parseInt(str,2));
        }
        else{
            num = num.toString(2);
            let idx = 0;
            for(let i = 0; i < num.length; i++){
                if(num[i] == 0){
                    idx = i;
                }
            }
            if(idx == 0){
                num = "1"+num;
              //  console.log(num);
                let str = "";
                for(let i = 0; i < num.length; i++){
                    if(i == 1){
                        str += "0";
                        continue;
                    }
                    str += num[i];
                }
                answer.push(parseInt(str,2));
            }
            else{
                let one = num.indexOf("1",idx);
                let str = "";
                for(let i = 0; i < num.length; i++){
                    if(i == idx){
                        str += "1";
                        continue;
                    }
                    if(i == one){
                        str += "0";
                        continue;
                    }
                    str+=num[i];
                }
              //  console.log(str);
                answer.push(parseInt(str,2));
            }
        }
            /*  let xor = num^j;
            xor = xor.toString(2);
            let count = 0;
            let str = xor.match(/1/g);
          //  console.log(str.length);
           /* let v = xor.indexOf("1");
            while(v != -1){
                count++;
                v = xor.indexOf("1", v+1);
            }
          //  console.log(count);
            if(str.length == 2 || str.length == 1){
                answer.push(j);
          //      console.log(num.toString(2),j.toString(2),xor,count);
                break;
            }*/
        
    }
    return answer;
}