import sys  
sys.setrecursionlimit(10**8)
def solution(k, room_number):
    answer = {}
    ans = []
  #  print(answer)
    for i in room_number:
        room = check(answer, i)
        print(answer)
        ans.append(room)
    return ans
def check(answer, number):
    if number in answer :
        a = check(answer, answer.get(number))
        answer[number] = a+1
        return a
    answer[number] = number+1
    return number