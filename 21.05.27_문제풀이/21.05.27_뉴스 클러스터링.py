import re
import math
def solution(str1, str2):
    answer = 0
    arr1 = []
    arr2 = []
    str1 = str1.lower()
    str2 = str2.lower()
    reg = re.compile('[^a-zA-Z]')
    snum1 = reg.findall(str1)
    for i in range(len(str1)-1):
        if not str1[i] in snum1 and not str1[i+1] in snum1:
            arr1.append(str1[i]+str1[i+1])
    snum2 = reg.findall(str2)
    for i in range(len(str2)-1):
        if not str2[i] in snum2 and not str2[i+1] in snum2:
            arr2.append(str2[i]+str2[i+1])
  #  print(arr1, arr2)
    if len(arr1) == 0 and len(arr2) == 0:
        return 1*65536
    inter = 0
    ans = []
    for i in arr1:
        if i in ans:
            continue
        count = arr1.count(i)
        if i in arr2:
            count2 = arr2.count(i)
            if count2 == count:
                inter += count
            elif count < count2:
                inter += count
            else:
                inter += count2
            ans.append(i)
    union = len(arr1)+len(arr2)-inter
   # print(arr3, arr4)
    answer = math.floor(65536*(inter/union))
    return answer