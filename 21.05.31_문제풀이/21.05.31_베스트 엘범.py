class genere :
    def __init__(self, v):
        self.name = v
        self.num = []
        self.total = 0
    def setnum(self, n, play):
        self.num.append([n, play])

    def settotal(self, n):
        self.total += n

def solution(genres, plays) :
    answer = []
    num = 0
    gen = {i : genere(i) for i in set(genres)}
  ##  gen["classic"].num = 0
    for i in range(len(plays)):
        num = 0
        gen[genres[i]].setnum(i, plays[i])
        gen[genres[i]].settotal(plays[i])
    #gen["classic"].setnum(10)
   # print(gen.items())
    gen = dict(sorted(gen.items(), key = lambda x : x[1].total, reverse = True))
    for i in gen:
        gen[i].num = sorted(gen[i].num, key = lambda x : x[1], reverse = True)
     #   print(gen[i].num)
    for i in gen:
        count = 0
        for j in gen[i].num:
            if count == 2:
                break
            answer.append(j[0])
            count += 1
    return answer