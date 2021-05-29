from collections import deque
def solution(s):
    answer = 0
    s = deque(s)
    lft = ["{", "[", "("]
    #print(s)
    for i in range(len(s)):
        left = 0
        right = 0
        for j in range(len(s)):
            
            if s[j] == "{":
                if j < len(s)-1:
                    if not s[j+1] in lft and not s[j+1] == "}":
                        break
                left += 1
            
            if s[j] == "(":
                if j < len(s)-1:
                    if not s[j+1] in lft and not s[j+1] == ")":
                        break
                left += 1
            
            if s[j] == "[":
                if j < len(s)-1:
                    if not s[j+1] in lft and not s[j+1] == "]":
                        break
                left += 1
            
            if s[j] == "}" or s[j] == "]" or s[j] == ")":
                right += 1
            
            if right > left:
               # print("ss",s)
                break
        
        if right == left and not left == 0:
        #    print(s)
            answer += 1
        
        f = s.popleft()
        s.append(f)
        
    return answer