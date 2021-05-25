from collections import deque
def solution(n, words):
    answer = []
    count = 0
    Str = []
    length = len(words)
    words = deque(words)
    while len(words) > 0:
        first = words.popleft()
        if first in Str:
     #       print(first)
            break
        elif len(words) > 0:
            if first[len(first)-1] == words[0][0]:
                Str.append(first)
                count += 1
            else:
                count += 1
                break 
        else:
            Str.append(first)
   # print(count, Str)
    if len(Str) == length:
        return [0,0]
    person = count%n+1
    c = count//n+1
   # print(person,c)
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
   # print('Hello Python')

    return [person, c]