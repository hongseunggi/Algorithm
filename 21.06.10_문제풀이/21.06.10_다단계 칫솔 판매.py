import math
def cal(amount, sell, graph, money):
    if "root" in graph[sell]:
        money[sell] += math.ceil(amount*0.9)
        return
    else:
        if amount*0.1 < 1:
            money[sell] += amount
            return
        money[sell] += math.ceil(amount*0.9)
        cal(amount-math.ceil(amount*0.9), graph[sell][0], graph, money)
def solution(enroll, referral, seller, amount):
    answer = []
    graph = {i : [] for i in enroll}
    money = {i : 0 for i in enroll}
    count = 0
    for key in graph:
        if referral[count] == "-":
            graph[key].append("root")
        else:
            graph[key].append(referral[count])
        count += 1
   # print(graph)
    for i in range(len(amount)):
       # print(graph["young"][0])
        cal(amount[i]*100, seller[i], graph, money)
    #print(money)
   # print(money.values())
    return list(money.values())