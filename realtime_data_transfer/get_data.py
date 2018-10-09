import picamera
from pqueue import Queue
from mcp3208 import MCP3208
import datetime as dt
import random
import time
import sys
import signal
import os
import tensorflow as tf
import pandas as pd
import json
import numpy as np
from firebase import firebase


adc = MCP3208()

cnt = 0

g_data = " "
g_cnt = 0
g_dtime = 0
g_sr = 0
g_dt = 0

g_disk = os.statvfs("/")
g_first_avail = g_disk.f_bsize * g_disk.f_bavail

count = 0

s_buff = ''
r_buff = list()
room_buff = list()

q = Queue("buffer")

# REST api (based on http)
firebase = firebase.FirebaseApplication('https://pnu-dubleve.firebaseio.com')

class NumpyEncoder(json.JSONEncoder):
   def default(self, obj):
      if isinstance(obj, np.ndarray):
         return obj.tolist()
      return json.JSONEncoder.default(self, obj)

def Sender():
   global sr
   while True:
      try:
         dtime = time.time()-start_time
         mydt = long(dtime*1000)/10
         cdt = int(mydt%100)

         global pdt
         global cnt

         if cdt!=pdt: # read datas for 0.01 second
            read = adc.read(6)
            sr = cnt/dtime
            #data = data + str(read) + " "
            data = str(read)
            pdt = cdt
               
            buff.append(map(int, data.split()))
                  
            if len(buff)>=100 :
               ret_flag = True
               cnt = cnt + 1
               s_buff = buff[first_idx:last_idx]
               if cnt==15: # for 0.15 second
                     # for removing first 15 datas of list
                  buff.reverse()
                  for i in range(15):
                     buff.pop()
                  buff.reverse()

                  s_buff = sum(s_buff, []) # 2 dimension list to 1 dimension list
#                     print "s_buff len: ", len(s_buff)
                  q.put_nowait(s_buff)

                  signal.signal(signal.SIGUSR1, Receiver)
                  os.kill(os.getpid(), signal.SIGUSR1)

                  del s_buff[:]
                  cnt = 0

         if cdt==0: # write datas in file for 1 second
            data = ""

         avail = g_disk.f_bsize * g_disk.f_bavail

         if avail < (g_first_avail * 3 / 5) :
            raise KeyboardInterrupt

      except KeyboardInterrupt:
         break


def Receiver(sig, variable):

   global count
   count += 1

   r_buff.append(q.get_nowait())

   X_data = r_buff

   # Neural Network

   if str(predictions1[0]) == "[ 1.  0.]":
         firebase.put('Results/Result_'+str(count), 'Who', exist)
   else:
         firebase.put('Results/Result_'+str(count), 'Who', not_exist)

   del r_buff[0]

if __name__ == '__main__':

   mydt = 0                           
   pdt = 0
   sr = 0
   cnt = 0
   data = ''

   buff = list() # buffer that collects datas(more than 100 datas)         

   first_idx = 0
   last_idx = first_idx + 100

   Sender()