import time
import sys

g_cnt = 0

targetfdate = input("Target Date : ")
#file open & input list function
#ofname = "data" + targetfdate + ".txt"
ofname = input("Target OFile : ")
with open(ofname) as data:
	raw_arr = data.readline().split()

wfname = "labeled_data" + targetfdate + ".txt"
wf = open(wfname, 'a')

def SliceStr(w_size, stride, first_idx, last_idx):
	global raw_arr, wf, g_cnt
	a_idx = first_idx
	b_idx = a_idx+w_size
	cnt = 0

	while last_idx>=b_idx:
		slice_arr = raw_arr[a_idx:b_idx]
		line_str = ' '.join(slice_arr)
		#print line_str
		wf.write(line_str+"\n")

		a_idx=a_idx+stride
		b_idx=b_idx+stride

		g_cnt = g_cnt + 1
		cnt = cnt + 1
	print "g_cnt : ", g_cnt, " cnt : ", cnt


#main loop
if __name__ == '__main__':
	arr_len = len(raw_arr)
	print arr_len

	while True:
		w_size = input("window size : ")
		stride = input("stride : ")
		if w_size>=arr_len or stride>w_size:
			print "Invalid number"
		else:
			break
	f_cnt = 1
	while True:
		try:
			wfname = "labeled_data" + targetfdate + "_human" + str(f_cnt) +".csv"
			wf = open(wfname, 'a')
			first_idx,last_idx = input("input index including \',\' [stop:(0,0)] : ")

			if last_idx == 0:
				wf.close()
				break
			elif last_idx>=arr_len:
				print "Last input exceeds maximum"
			else:
				SliceStr(w_size, stride, first_idx, last_idx)
				wf.close()
				f_cnt += 1
		except KeyboardInterrupt:
			wf.close()
			break

#if vector input

#if y input (save & end)
#ifile = open(


