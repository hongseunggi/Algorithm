def solution(nums):
    answer = 0
    ans = []
    for i in nums:
        if i in ans:
            continue
        ans.append(i)
    if len(ans) > len(nums)/2 :
        answer = len(nums)/2
    else:
        answer  = len(ans)
    return answer