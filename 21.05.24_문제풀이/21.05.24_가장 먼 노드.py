from collections import deque
def solution(n, edge):
    answer = 0
    q = deque([])
    visit = [False for _ in range(n)]
    graph = [[] for _ in range(n)]
    depth = []
    for i in edge:
        start = i[0]
        end = i[1]
        graph[start-1].append(end)
        graph[end-1].append(start)
    q.append([0,0])
    visit[0] = True
    while len(q) > 0 :
        node = q.popleft()
        n = node[0]
        dp = node[1]
        depth.append(dp)
        for i in range(len(graph[n])):
            if visit[graph[n][i]-1] == False :
                visit[graph[n][i]-1] = True
                q.append([graph[n][i]-1, dp+1])
    Max = max(depth)
    
    return depth.count(Max)