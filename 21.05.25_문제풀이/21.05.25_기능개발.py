from collections import deque
def solution(progresses, speeds):
    answer = []
    q = deque(progresses)
    length = len(q)
    speeds = deque(speeds)
    while len(q) > 0:
        check = 0
        count = 0
        start = q.popleft()
        speed = speeds.popleft()
        check += 1
        while start < 100 :
            start += speed
            count += 1
     #   print(start)
        for i in range(len(q)) :
            if q[i] >= 100:
                continue
            q[i] += speeds[i]*count
      #  print(q)
        while len(q) > 0:
            if q[0] >= 100:
                q.popleft()
                speeds.popleft()
                check += 1
            else:
                break
      #  result = length - len(q);
        answer.append(check)
    return answer