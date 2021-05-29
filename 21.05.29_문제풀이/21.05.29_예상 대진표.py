import copy
def solution(n,a,b):
    answer = 0
    count = 0
    com = [0 for i in range(n)]
    com[a-1] = "A"
    com[b-1] = "B"
   # flag = True
    while len(com) > 0:
        cnt = 0
        count += 1
        Match = []
        for i in range(len(com)):
            cnt += 1
            if cnt == 2:
                if type(com[i]) == str and type(com[i-1]) == str:
                    return count
                else:
                    if type(com[i]) == str:
                        Match.append(com[i])
                    elif type(com[i-1]) == str:
                        Match.append(com[i-1])
                    else:
                        Match.append(0)
                    cnt = 0
        com = Match
      #  print(com)
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  #  print('Hello Python')

    return answer