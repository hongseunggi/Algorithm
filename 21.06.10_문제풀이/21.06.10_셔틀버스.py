from collections import deque
def caltime(time):
    h = time//60
    mn = time%60
    if h < 10:
        h = "0"+str(h)
    if mn < 10:
        mn = "0"+str(mn)
    return str(h)+":"+str(mn)

def solution(n, t, m, timetable):
    answer = ''
    crew = deque([])
    for i in timetable:
        h, mn = i.split(":")
        time = int(h)*60+int(mn)
        crew.append(time)
    crew = deque(sorted(list(crew)))
    
    for i in range(n):
        bus = 9*60+i*t
        c = []
        while len(crew) > 0:
           # print(len(c),int(m))
            if len(c) == m:
                break
            if crew[0] <= bus:
                c.append(crew.popleft())
            else:
                break
        #print(bus, c)
        if i == n-1:
            if len(c) < m:
                answer = caltime(bus)
                return answer
            else:
                latest = max(c)
                answer = caltime(latest-1)
                return answer