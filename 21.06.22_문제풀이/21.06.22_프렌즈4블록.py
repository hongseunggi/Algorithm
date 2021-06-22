def solution(m, n, board):
    answer = 0
    graph = [[j for j in board[i]] for i in range(len(board))]
    #print(graph)
    while True:
        block = []
        for i in range(m-1):
            for j in range(n-1):
                if graph[i][j] != 0 and graph[i][j] == graph[i][j+1] and graph[i][j] == graph[i+1][j] and graph[i][j] == graph[i+1][j+1]:
                    block.append([i,j])
        #print(block, graph)    
        if len(block) == 0:
            for i in graph:
                count = i.count(0)
                answer += count
            return answer
        
        for i in block:
            x = i[0]
            y = i[1]
            graph[x][y] = 0
            graph[x][y+1] = 0
            graph[x+1][y] = 0
            graph[x+1][y+1] = 0
            
        for i in range(m-1,0,-1):
         #   print(i)
            if not 0 in graph[i]:
              #  print("dddd")
                continue
            for j in range(n):
               # print(j)
                if graph[i][j] == 0:
                #    print(graph[i][j], i, j)
                #    print(graph)
                  #  print("dddddddd")
                    for k in range(i-1, -1, -1):
                       # print(graph[k][j])
                        if graph[k][j] != 0:
                            graph[i][j] = graph[k][j]
                            graph[k][j] = 0
                            #print("dasddd")
                            break
    #    print(graph)