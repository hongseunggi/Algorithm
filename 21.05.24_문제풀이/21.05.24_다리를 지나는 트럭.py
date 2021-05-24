from collections import deque
def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = deque([])
    truck = deque(truck_weights)
    sum1 = 0
    for i in range(bridge_length):
        bridge.append(0)
    while len(truck) > 0:
        value = bridge.popleft()
        sum1 -= value
        if sum1 + truck[0] > weight:
            bridge.append(0)
        else:
            bridge.append(truck[0])
            sum1 += truck[0]
            truck.popleft()
        answer += 1
    count = 0
 #   print(bridge)
    for i in bridge:
        if i == 0:
            count += 1
            continue
        else:
         #   print(i, count)
            for j in range(0,count+1):
                answer += 1
            count = 0
    return answer