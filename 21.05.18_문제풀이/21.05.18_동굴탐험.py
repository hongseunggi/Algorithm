from collections import deque
def solution(n, path, order):
    answer = True
    result = []
    ls = [[] for i in range(n)]
    d = [[] for i in range(n)]
    check = [0 for i in range(n)]
    visit = [False for _ in range(n)]
    for i in path:
        start = i[0]
        end = i[1]
        ls[start].append(end)
        ls[end].append(start)
    for i in order:
        start = i[0]
        end = i[1]
        d[start].append(end)
        check[end] += 1
    q = deque([0])
    visit[0] = True
    while len(q) > 0 :
        cur = q.popleft()
      #  print(cur)
        for i in range(len(ls[cur])):
            node = ls[cur][i]
          #  print("node", node)
            if not visit[node]:
              #  print("not visit", node)
                visit[node] = True
                q.append(node)
                d[cur].append(node)
                check[node] += 1
    q = deque([])
    for i in range(len(check)):
        if check[i] == 0:
            q.append(i)
            
    while len(q) > 0:
        node = q.popleft()
        result.append(node)
        for i in range(len(d[node])):
            check[d[node][i]] -= 1
            if check[d[node][i]] == 0:
                q.append(d[node][i])
    #print(check)
    if len(result) == n:
        return True
    else:
        return False
    return answer