def solution(board, moves):
    moves = [i-1 for i in moves]
    answer = 0
    ls = []
    for i in moves:
        for bo in board:
            if bo[i] == 0:
                continue
            else:
                ls.append(bo[i])
                bo[i] = 0
                break
        if len(ls) >= 2:
           # print(ls)
            if ls[len(ls)-2] == ls[len(ls)-1]:
                ls = ls[:len(ls)-2]
              #  print(ls)
                answer += 2
    return answer