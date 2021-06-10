def solution(N, road, K):
    answer = 0
    graph = [[10000*N for i in range(N)] for _ in range(N)]
    edge = [[False for i in range(N)] for _ in range(N)]
    
    for i in road:
        start, end, cost = i
        if graph[start-1][end-1] > cost:
            graph[start-1][end-1] = cost
            graph[end-1][start-1] = cost
            
        graph[start-1][start-1] = 0
        graph[end-1][end-1] = 0
        edge[start-1][end-1] = 1
        edge[end-1][start-1] = 1
        edge[start-1][start-1] = 1
        edge[end-1][start-1] = 1
    #print(graph, edge)
    
    for i in range(N):
        for x in range(N):
            for y in range(N):
                if edge[x][i] == 1 and edge[i][y] == 1:
                    edge[x][y] = 1
                    if graph[x][y] == 0:
                        continue
                    if graph[x][y] > graph[x][i]+graph[i][y]:
                        graph[x][y] = graph[x][i]+graph[i][y]
                        
    answer = list(filter(lambda x : x <= K, graph[0]))
    return len(answer)