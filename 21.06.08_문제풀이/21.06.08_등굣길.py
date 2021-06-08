def solution(m, n, puddles):
    answer = 0
    maps = [[0 for _ in range(m)] for _ in range(n)]
  #  print(maps)
    maps[0][0] = 1
  #  print(maps)
    for i in range(len(maps)):
        for j in range(len(maps[i])):
            if i == 0 and j == 0:
                continue
            if [j+1, i+1] in puddles:
                continue
            maps[i][j] = maps[i][j-1]+maps[i-1][j]
      #  print(maps)
    answer = maps[n-1][m-1]
    return answer%1000000007