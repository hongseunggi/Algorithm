from collections import deque
def solution(skill, skill_trees):
    answer = 0
    q = deque(skill_trees)
    while len(q) > 0:
        cur = q.popleft()
        ls = []
        s = ""
        count = 0
        
        for i in cur:
            if i in skill:
                s += i
                
        for i in range(len(s)):
            if s[i] == skill[i]:
                count += 1
                
        if count == len(s):
            answer += 1
            
    return answer