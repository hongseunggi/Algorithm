function compress(arr, length, answer){
    
    let first = arr[0][0];
    let sum = arr.reduce((a,b) => a+b.reduce((c, d) => c+d,0),0);
    let div1 = arr.slice(0,length/2);
    let div2 = arr.slice(length/2);
//    console.log(arr, length, answer, sum);
    if(length == 1){
        answer[first] += 1;
        return;
    }
    if(sum == 0 || sum == length*length){
        answer[first] += 1;
        return;
    }
    compress(div1.map(value => value.slice(0,length/2)),length/2,answer);
    compress(div1.map(value => value.slice(length/2)),length/2,answer);
    compress(div2.map(value => value.slice(0,length/2)),length/2, answer);
    compress(div2.map(value => value.slice(length/2)),length/2, answer);
}
function solution(arr) {
    var answer = [0,0];
 //   console.log(di);
 //   console.log("asdfasdf",di2); 
 //   console.log(di.map(value=>value.slice(0,arr.length/2)));
 //   console.log(di.map(value=>value.slice(arr.length/2)));
 //   console.log(di2.map(value=>value.slice(0,arr.length/2)));
 //   console.log(di2.map(value=>value.slice(arr.length/2)))//.reduce((a,b) => a+b));
    compress(arr, arr.length, answer);
    return answer;
}