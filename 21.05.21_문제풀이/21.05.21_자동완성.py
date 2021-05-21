def solution(words):
    answer = 0
    tries = {}
    for word in words:
        cur = tries
        for j in range(len(word)):
            if word[j] in cur:
                cur[word[j]][0] += 1
            else:
                cur[word[j]] = [1, {}]
            cur = cur[word[j]][1]
    print(tries)
    for word in words:
        cur = tries
        for i in range(len(word)):
            answer += 1
            if cur[word[i]][0] == 1:
                break
            cur = cur[word[i]][1]
    return answer