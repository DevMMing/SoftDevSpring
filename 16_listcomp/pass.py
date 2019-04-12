# Matthew Ming 
# Softdev pd 8
# K16 -- Do You Even List?
# 2019-04-11

UPPER_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWER_CHAR="abcdefghijklmnopqrstuvwxyz"
NUMERAL="0123456789"
SPECIAL=". ? ! & # , ; : - _ *"
def threshold(password):
    a=[True if x in UPPER_CHAR else False for x in password ]
    b=[True if x in LOWER_CHAR else False for x in password ]
    c=[True if x in NUMERAL else False for x in password ]
    a=True in a
    b=True in b
    c=True in c
    return a==b==c
def rating(password):
    if threshold(password):
        d=[True if x in SPECIAL else False for x in password]
        d=True in d
        if d:
            return 10
        return 8
    else:
        return 2
