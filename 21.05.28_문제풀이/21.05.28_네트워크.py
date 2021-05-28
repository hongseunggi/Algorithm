def solution(n, computers):
    answer = [n]
    visit = [False for i in range(n)]
    count = 0
    for i in range(n):
        if visit[i] == False:
            dfs(i, answer, computers, visit)
            
  #  print(answer, visit)
    return answer[0]

def dfs(idx, answer, computers, visit) :
    visit[idx] = True
  #  print(idx, answer)
    for i in range(len(computers[idx])):
        if idx == i:
            continue
        if computers[idx][i] == 1 and visit[i] == False:
            answer[0] -= 1
          #  print("dd")
           # print(answer)2
            dfs(i, answer, computers, visit)
            
    
    