import picamera
from mcp3208 import MCP3208
import datetime as dt
import time
import sys
import signal
import os
#6
adc = MCP3208()

g_data = " "
g_cnt = 0
g_dtime = 0
g_sr = 0
g_dt = 0

g_disk = os.statvfs("/")
g_first_avail = g_disk.f_bsize * g_disk.f_bavail

fname = "data"+str(dt.datetime.now())+".txt"
f=open(fname, "w")

if __name__ == '__main__':
	#signal.signal(signal.SIGUSR1, getpir)

	#os.kill(os.getpid(),signal.SIGUSR1)

	mydt = 0
	pdt = 0
	sr = 0
	cnt = 0
	data = ''

#	cam = picamera.PiCamera()
#	cam.resolution = (320,240)
#	cam.framerate = 10
#	cam.start_recording('video'+str(dt.datetime.now())+'.h264')
#	cam.start_preview()
#	cam.annotate_background = picamera.Color('black')
#	cam.annotate_text_size = 10

	start_time = time.time()
	while True:
		try:
			dtime = time.time()-start_time
			mydt = long(dtime*1000)/10
			cdt = int(mydt%100)
			if cdt!=pdt:
				read = adc.read(6)
				cnt = cnt + 1
				sr = cnt/dtime
				data = data + str(read) + " "
				pdt = cdt
#			cam.annotate_text = (dt.datetime.now().strftime('%m-%d %H:%M:%S.%f')[:-4]
#			+ " sr : " + str(round(sr, 1)) + " sn : " + str(cnt) + "\npir : " + data[0:30])

			if cdt==0:
				f.write(data)
				data = ""
				print "sr", sr, "dt", str(dt.datetime.now())

			avail = g_disk.f_bsize * g_disk.f_bavail

			if avail < (g_first_avail * 3 / 5) :
				raise KeyboardInterrupt
		except KeyboardInterrupt:
			break

#	cam.stop_preview()
#	cam.stop_recording()
#	cam.close()

	f.close()
