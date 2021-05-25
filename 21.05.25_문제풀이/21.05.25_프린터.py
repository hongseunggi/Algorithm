from collections import deque
def solution(priorities, location):
    answer = 0
    priority = deque([])
    pr = []
    for i in range(len(priorities)):
        priority.append([i,priorities[i]])
        
    while len(priority) > 0:
        node = priority.popleft()
        flag = True
       # print(node, priority)
        for i in priority:
            if i[1] > node[1]:
                priority.append(node)
                flag = False
                break
        if not flag:
            continue
        else:
            pr.append(node)  
    """ 
        for i in range(len(priority)):
            if priority[i][1] < priority[i+1][1]:
                continue
            if i == len(priority)-1:
                flag = False
        if not flag:
            break"""
    for i in range(len(pr)):
        if pr[i][0] == location:
            answer = i+1
    return answer