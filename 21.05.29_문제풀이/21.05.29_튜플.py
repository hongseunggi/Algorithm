import re
def solution(s):
    answer = []
    reg2 = re.compile('\d+')
    s = s.split(",{")
  #  print(s)
    for i in range(len(s)):
       # print(reg2.findall(s[i]))
        s[i] = reg2.findall(s[i])
    s = sorted(s, key = lambda x : len(x))
    #s = reg.findall(s)
  #  print(s)
    for i in s:
        for j in i:
            if int(j) in answer:
                continue
            answer.append(int(j))
    return answer