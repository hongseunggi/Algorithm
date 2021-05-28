def solution(n, results):
    answer = 0
    graph = [["False" for i in range(n)] for i in range(n)]
   # print(graph)
    for i in results:
        win = i[0]
        lose = i[1]
        graph[win-1][lose-1] = 1
        graph[lose-1][win-1] = -1
        graph[win-1][win-1] = 0
        graph[lose-1][lose-1] = 0
  #  print(graph)
    for i in range(len(graph)):
        for x in range(len(graph)):
            for y in range(len(graph[x])):
                if graph[x][i] == 1 and graph[i][y] == 1:
                    graph[x][y] = 1
                if graph[x][i] == -1 and graph[i][y] == -1:
                    graph[x][y] = -1
    for cur in graph:
        if "False" in cur:
            continue
        answer += 1
    return answer