import copy
def bancheck(user, ban):
    result = []
    for i in user:
        u = i
        count = 0
        for j in range(len(ban)):
            if len(u) < len(ban):
                break
            if u[j] == ban[j] or ban[j] == "*":
                count += 1
            else:
                break
        if len(u) == count:
            result.append(u)
    return result
def dfs(ban, ls, Set, i):
  #  print(ls, i)
    if i == len(ban):
        Copy = copy.deepcopy(ls)
        Copy.sort()
     #   print(ls)
        Set.add("".join(Copy))
    #    print(Set)
        return
    for j in ban[i]:
        if j in ls:
            continue
        else:
            ls.append(j)
       #     print(ls, j, "else")
            dfs(ban,ls, Set, i+1)
            ls.pop()

def solution(user_id, banned_id):
    answer = 0
    ban = []
    Set = set()
    for i in banned_id:
        b = bancheck(user_id, i)
        ban.append(b)
    dfs(ban, [], Set, 0)
  #  print("main", len(Set))
    return len(Set)