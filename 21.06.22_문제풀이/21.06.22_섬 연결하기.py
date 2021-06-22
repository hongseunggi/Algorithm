from collections import deque
def find(visit, a):
    if visit[a] == a:
        return a
    visit[a] = find(visit, visit[a])
    return visit[a]
def solution(n, costs):
    answer = 0
    visit = [i for i in range(n)]
    costs = deque(sorted(costs, key = lambda x : x[2]))
    while len(costs) > 0:
        cur = costs.popleft()
        a = find(visit, cur[0])
        b = find(visit, cur[1])
        #print(a,b,cur[0],cur[1], visit)
        if a != b:
            visit[b] = a
            answer += cur[2]
    return answer