

readfile = open('topics.txt','r')

writefile = open('topics_new.txt','w+')

for line in readfile:
    print(line)
    writefile.write('\"'+line[:-1]+'\",')
    
readfile.close()
writefile.close()
