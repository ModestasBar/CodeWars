def main(data, maxlen):
    start = data[1:] + ' '
    check = data[0]
    result = ''
    times = 1
    for digit in start:
        if digit != check:
            result = result + str(times)+check
            check = digit
            times = 1
        else:
            times = times + 1
    maxlen = maxlen -1
    if maxlen == 0:
        return result
    else:
        return result +' '+ main(result, maxlen)

def look_and_say(data='1', maxlen=5):
    return main(data,maxlen).split()

look_and_say(data='1', maxlen=10)