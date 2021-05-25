import re
def solution(new_id):
    answer = ''
    new_id = new_id.lower()
    reg = re.compile('[a-zA-Z0-9\-_.]')
    m = reg.findall(new_id)
    new_id = "".join(m)
  #  print(new_id)
    reg = re.compile('\.{2,}')
    m = reg.sub(".",new_id)
    #print(m)
    new_id = dotcheck(m)
    if new_id == None:
        new_id = "a"
    if len(new_id) > 15:
        new_id = new_id[:15]
      #  print(new_id, "16")
        new_id = dotcheck(new_id)
    if len(new_id) < 3:
        while len(new_id) != 3:
            new_id += new_id[len(new_id)-1]
   # print(new_id)
    return new_id

def dotcheck(s) :
    if len(s) == 0:
        return
    else:
        if s[0] == ".":
            s = s[1:]
            return dotcheck(s)
        elif s[len(s)-1] == ".":
            s = s[:len(s)-1]
            return dotcheck(s)
        else:
            return s