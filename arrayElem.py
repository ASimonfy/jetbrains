# Check if all Elements in an Array are the same

def all_the_same(elements):
    print(True if all(x == elements[0] for x in elements) else False)

'''
Alternatives
listChar.count(listChar[0]) == len(listChar)
len(set(listChar))==1
'''

all_the_same([1, 1, 1]) # True
all_the_same([1, 2, 1]) # False
all_the_same(['a', 'a', 'a']) # True
all_the_same([]) # True
all_the_same([1]) # True