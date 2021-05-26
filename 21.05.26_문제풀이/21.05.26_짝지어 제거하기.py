from collections import deque
def solution(s):
    answer = 0
    node = deque([])
    q = deque(list(s))
    #print(q)
    while len(q) > 0 :
        head = q.popleft()
        if len(node) != 0:
            if node[len(node)-1] == head:
                node.pop()
            else:
                node.append(head)
        else:
            node.append(head)
    if len(node) == 0:
        answer = 1
    return answer