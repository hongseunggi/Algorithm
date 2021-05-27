def solution(N, stages):
    answer = []
    ans = {}
    stages.sort()
    count = 0
    for i in range(1, N+1):
        count += stages.count(i-1)
        challenger = len(stages)-count
        fail = stages.count(i)
        if fail == 0:
            ans[i] = 0
            continue
        ans[i] = fail/challenger
    ans = dict(sorted(ans.items(), key = lambda x : x[1], reverse = True))
   # print(ans)
    for i in ans : 
        answer.append(i)
    return answer