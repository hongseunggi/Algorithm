from collections import deque
def solution(A, B):
    answer = 0
    A = sorted(A, reverse = True)
    B = deque(sorted(B, reverse = True))
    for i in A:
        for j in B:
            if i < j:
               # print(i, j)
                answer += 1
                B.popleft()
                break
    return answer