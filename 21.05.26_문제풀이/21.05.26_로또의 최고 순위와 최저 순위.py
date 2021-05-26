def solution(lottos, win_nums):
    answer = []
    count = 0
    ans = 0
    for i in lottos:
        if i == 0:
            count += 1
        if i in win_nums:
            ans += 1
    Max = ans + count
    Min = ans
 #   print(Max, Min)
    ranking(Max, answer)
    ranking(Min, answer)
    return answer

def ranking(number, answer):
    if number == 6:
        answer.append(1)
    elif number == 5:
        answer.append(2)
    elif number == 4:
        answer.append(3)
    elif number == 3:
        answer.append(4)
    elif number == 2:
        answer.append(5)
    else:
        answer.append(6)
    