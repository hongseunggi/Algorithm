def solution(n, s, a, b, fares):
    answer = 0
    graph = [[20000000 for i in range(n)] for i in range(n)]
    
    for i in fares:
        start, end, cost = i
        graph[start-1][end-1] = cost
        graph[end-1][start-1] = cost
        graph[start-1][start-1] = 0
        graph[end-1][end-1] = 0
    
    for i in range(len(graph)):
        for x in range(len(graph)):
            for y in range(len(graph)):
                if graph[x][y] > graph[x][i]+graph[i][y]:
                    graph[x][y] = graph[x][i]+graph[i][y]
                
    answer = 20000000
    for i in range(len(graph)):
        if answer > graph[s-1][i]+graph[i][a-1]+graph[i][b-1]:
            answer = graph[s-1][i]+graph[i][a-1]+graph[i][b-1]

    return answer