from collections import deque
def solution(gems):
    answer = deque([1,len(gems)])
    size = len(set(gems))
    s = {}
    for i in range(len(gems)):
        if gems[i] in s:
            del s[gems[i]]
        s[gems[i]] = i
        if len(s) == size:
            f = list(s.values())[0]+1
            e = i+1
           # print(e,f,answer[1], answer[0])
            if e - f < answer[1]-answer[0]:
                answer[0] = f
                answer[1] = e
            else:
                continue
  #  print(answer)
  #  answer = sorted(answer, key = lambda x : x[1]-x[0])
   # print(answer)
    return list(answer)