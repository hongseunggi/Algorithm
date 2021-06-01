from collections import deque
def solution(operations):
    answer = deque([])
    op = [i.split(' ') for i in operations]
  #  print(op)
    for i in op:
        if i[0] == "I":
            answer.append(int(i[1]))
            answer = deque(sorted(list(answer), key = lambda x : x))
            
        if i[0] == "D":
            if len(answer) > 0:
                if int(i[1]) == -1:
                    answer.popleft()
                    
                else:
                    answer.pop()
   # print(answer)
    if len(answer) == 0:
        return [0,0]
    else:
        return [answer[len(answer)-1],answer[0]]