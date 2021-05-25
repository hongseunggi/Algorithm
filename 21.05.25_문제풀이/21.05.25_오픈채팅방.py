def solution(record):
    answer = []
    split = []
    ans = {}
    for i in record:
        i = i.split(" ")
        if len(i) > 2:
            ans[i[1]] = i[2]
        split.append(i)
  #  print(ans['uid1234']+"hellow")
    for i in range(len(split)):
        if split[i][0] == "Enter":
            answer.append(ans[split[i][1]]+"님이 들어왔습니다.")
        if split[i][0] == "Leave":
            answer.append(ans[split[i][1]]+"님이 나갔습니다.")
        else:
            continue
    return answer