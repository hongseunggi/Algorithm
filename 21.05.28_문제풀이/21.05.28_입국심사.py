import math
def solution(n, times):
    answer = 0
    times.sort()
    min = 1
    max = times[len(times)-1]*n
    answer = max
    while max >= min :
        mid = math.floor((min+max)/2)
        pas = 0
        for i in times:
            pas += math.floor(mid/i)
        if pas >= n :
            if answer > mid:
                answer = mid
            max = mid-1
        else:
            min = mid+1
    return answer