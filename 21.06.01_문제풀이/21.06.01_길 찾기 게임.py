import sys
sys.setrecursionlimit(10**6)

class Node:
    def __init__(self, num, arr):
        self.num = num
        self.x, self.y = arr
        self.left = None
        self.right = None

class Tree:
    def __init__(self, root = None):
        self.root = root

    def insert(self, node):
        if self.root == None:
            self.root = node
            return
        if self.root.x > node.x:
            if self.root.left == None:
                self.root.left = Tree(node)
                return
            else:
                self.root.left.insert(node)
        else:
            if self.root.right == None:
                self.root.right = Tree(node)
                return
            else:
                self.root.right.insert(node)

    def pre(self, arr):
        arr.append(self.root.num)
        if self.root.left != None :
            self.root.left.pre(arr)
        if self.root.right != None:
            self.root.right.pre(arr)

    def post(self, arr):
        if self.root.left != None:
            self.root.left.post(arr)
        if self.root.right != None:
            self.root.right.post(arr)
        arr.append(self.root.num)

def solution(nodeinfo):
    answer = []
    pre = []
    post = []
    tree = Tree()
    node = {i : [] for i in range(len(nodeinfo))}
    for i in range(len(nodeinfo)):
        node[i] = nodeinfo[i]

    node = dict(sorted(node.items(), key = lambda x : (x[1][1], x[1][0]), reverse = True))
    for i in node:
        n = Node(i+1,node[i])
        tree.insert(n)
    tree.pre(pre)
    tree.post(post)
    answer.append(pre)
    answer.append(post)
    return answer