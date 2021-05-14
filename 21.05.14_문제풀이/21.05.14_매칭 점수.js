/*

매칭 점수
프렌즈 대학교 조교였던 제이지는 허드렛일만 시키는 네오 학과장님의 마수에서 벗어나, 카카오에 입사하게 되었다.
평소에 관심있어하던 검색에 마침 결원이 발생하여, 검색개발팀에 편입될 수 있었고, 대망의 첫 프로젝트를 맡게 되었다.
그 프로젝트는 검색어에 가장 잘 맞는 웹페이지를 보여주기 위해 아래와 같은 규칙으로 검색어에 대한 웹페이지의 매칭점수를 계산 하는 것이었다.

한 웹페이지에 대해서 기본점수, 외부 링크 수, 링크점수, 그리고 매칭점수를 구할 수 있다.
한 웹페이지의 기본점수는 해당 웹페이지의 텍스트 중, 검색어가 등장하는 횟수이다. (대소문자 무시)
한 웹페이지의 외부 링크 수는 해당 웹페이지에서 다른 외부 페이지로 연결된 링크의 개수이다.
한 웹페이지의 링크점수는 해당 웹페이지로 링크가 걸린 다른 웹페이지의 기본점수 ÷ 외부 링크 수의 총합이다.
한 웹페이지의 매칭점수는 기본점수와 링크점수의 합으로 계산한다.
예를 들어, 다음과 같이 A, B, C 세 개의 웹페이지가 있고, 검색어가 hi라고 하자.

이때 A 웹페이지의 매칭점수는 다음과 같이 계산할 수 있다.

기본 점수는 각 웹페이지에서 hi가 등장한 횟수이다.
A,B,C 웹페이지의 기본점수는 각각 1점, 4점, 9점이다.
외부 링크수는 다른 웹페이지로 링크가 걸린 개수이다.
A,B,C 웹페이지의 외부 링크 수는 각각 1점, 2점, 3점이다.
A 웹페이지로 링크가 걸린 페이지는 B와 C가 있다.
A 웹페이지의 링크점수는 B의 링크점수 2점(4 ÷ 2)과 C의 링크점수 3점(9 ÷ 3)을 더한 5점이 된다.
그러므로, A 웹페이지의 매칭점수는 기본점수 1점 + 링크점수 5점 = 6점이 된다.
검색어 word와 웹페이지의 HTML 목록인 pages가 주어졌을 때, 매칭점수가 가장 높은 웹페이지의 index를 구하라. 만약 그런 웹페이지가 여러 개라면 그중 번호가 가장 작은 것을 구하라.

제한사항
pages는 HTML 형식의 웹페이지가 문자열 형태로 들어있는 배열이고, 길이는 1 이상 20 이하이다.
한 웹페이지 문자열의 길이는 1 이상 1,500 이하이다.
웹페이지의 index는 pages 배열의 index와 같으며 0부터 시작한다.
한 웹페이지의 url은 HTML의 <head> 태그 내에 <meta> 태그의 값으로 주어진다.
예를들어, 아래와 같은 meta tag가 있으면 이 웹페이지의 url은 https://careers.kakao.com/index 이다.
<meta property="og:url" content="https://careers.kakao.com/index" />
한 웹페이지에서 모든 외부 링크는 <a href="https://careers.kakao.com/index"\>의 형태를 가진다.
<a> 내에 다른 attribute가 주어지는 경우는 없으며 항상 href로 연결할 사이트의 url만 포함된다.
위의 경우에서 해당 웹페이지는 https://careers.kakao.com/index 로 외부링크를 가지고 있다고 볼 수 있다.
모든 url은 https:// 로만 시작한다.
검색어 word는 하나의 영어 단어로만 주어지며 알파벳 소문자와 대문자로만 이루어져 있다.
word의 길이는 1 이상 12 이하이다.
검색어를 찾을 때, 대소문자 구분은 무시하고 찾는다.
예를들어 검색어가 blind일 때, HTML 내에 Blind라는 단어가 있거나, BLIND라는 단어가 있으면 두 경우 모두 해당된다.
검색어는 단어 단위로 비교하며, 단어와 완전히 일치하는 경우에만 기본 점수에 반영한다.
단어는 알파벳을 제외한 다른 모든 문자로 구분한다.
예를들어 검색어가 "aba" 일 때, "abab abababa"는 단어 단위로 일치하는게 없으니, 기본 점수는 0점이 된다.
만약 검색어가 "aba" 라면, "aba@aba aba"는 단어 단위로 세개가 일치하므로, 기본 점수는 3점이다.
결과를 돌려줄때, 동일한 매칭점수를 가진 웹페이지가 여러 개라면 그중 index 번호가 가장 작은 것를 리턴한다
즉, 웹페이지가 세개이고, 각각 매칭점수가 3,1,3 이라면 제일 적은 index 번호인 0을 리턴하면 된다.
*/
function solution(word, pages) {
    var answer = 0;
    let w = word.toLowerCase();
    let count = 0;
    let cnt = 0;
    let str = "";
    let arr = ['a', 'b', 'c', 'd', 'e',
               'f', 'g', 'h', 'i', 'j',
               'k', 'l', 'm', 'n', 'o',
               'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y',
               'z'];
    let match = {};
    pages = pages.map(v => v.toLowerCase());
   // let ad = "<a href=";
   // console.log(ad.length);
    for(let i = 0; i < pages.length; i++){
        let v = pages[i].indexOf("<meta property=\"og:url\" content=");
        let st = "";
        for(let j = v+32; j < pages[i].length; j++){
            if(pages[i][j] == "/" && pages[i][j+1] == ">"){
                break;
            }
            st += pages[i][j];
        }
        match[st] = {
            total : 0,
            basic : 0,
            c : [],
            count : 0
        };
        st = "";
    }
    let k = Object.keys(match);
   // console.log(match[0]);
   // for(let i = 0; i < )
    //console.log(str);
    for(let i = 0; i < pages.length; i++){
        /*let a = pages[i].indexOf("<meta property=\"og:url\" content=");
        let st = "";
        for(let j = a+32; j < pages[i].length; j++){
            if(pages[i][j] == "/" && pages[i][j+1] == ">"){
                break;
            }
            st += pages[i][j];
        }*/
        let key = k[i];
        let v = pages[i].indexOf(w);
        while(v !== -1){
            if(arr.includes(pages[i][v+w.length])){
                v = pages[i].indexOf(w, v+1);
                continue;
            }
            if(arr.includes(pages[i][v-1])){
                v = pages[i].indexOf(w, v+1);
                continue;
            }
            count++;
            v = pages[i].indexOf(w, v+1);
        }
     //   console.log(count);
        let v1 = pages[i].indexOf("<a href=");
        while(v1 != -1){
            cnt++;
            for(let j = v1+8; j < pages[i].length; j++){
                if(pages[i][j] == ">"){
                    break;
                }
                str += pages[i][j];
            }
         //   console.log(str);
            if(match[str]){
                match[str].c.push(key);    
            }
            str = "";
            v1 = pages[i].indexOf("<a href=", v1+1);
        }
        //cnt = 0;
        match[key].count = cnt;
        match[key].basic = count;
        cnt = 0;
      //  str = "";
        count = 0;
    }
    
  //  console.log(match);
    let c = 0;
    let max = 0;
    for(let key in match){
        for(let i = 0; i < match[key].c.length; i++){
            if(match[match[key].c[i]]){
                let link = match[match[key].c[i]].basic/match[match[key].c[i]].count;
                match[key].total += link
            }   
        }
        match[key].total += match[key].basic;
        if(match[key].total > max){
          //  console.log(c, key, max, match[key].total)
            max = match[key].total;
          //  console.log("asdfasdf");
            answer = c;
        }
        c++;
    }
    //console.log(match);
  /*  let c = 0;
    let max = 0;
    for(let key in match){
        if(match[key].total > max){
            max = match[key].total;
          //  console.log("asdfasdf");
            answer = c;   
        }
        c++;
    }*/
  //  console.log(pages[0].match(word))
    return answer;
}