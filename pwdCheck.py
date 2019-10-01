'''
Password check with conditions agains regex conditions, with at least:
- 10 characters
- 1+ lowercase letter
- 1+ uppercase letter
- 1+ numeric symbol
'''

import re

def checkio(data):
    regex = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})" #(?=.[!@#\$%\^&]) Opt for special chars
    print(True if re.match(regex, data) else False)

checkio('A1213pokl') # False
checkio('bAse730onE4') # True
checkio('asasasasasasasaas') # False
checkio('QWERTYqwerty') # False
checkio('123456123456') # False
checkio('QwErTy911poqqqq') # True