from collections import deque
def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities)*5
    answer = 0
    q = deque(cities)
    cache = deque([])
    while len(q) > 0:
        cur = q.popleft().upper()
        if cur in cache:
            del cache[cache.index(cur)]
            cache.append(cur)
            answer += 1
        else:
            if len(cache) == cacheSize:
                cache.popleft()
                cache.append(cur)
                answer += 5
            else:
                cache.append(cur)
                answer += 5
    return answer