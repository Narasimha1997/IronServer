import requests
import time
import matplotlib.pyplot as plt

URL = "http://localhost:8888/static/js/main.30fffb9d.chunk.js.map"

URL2 = "http://localhost:5000/static/js/main.30fffb9d.chunk.js.map"

times2 = []
for i in range(100):

    st = time.time()
    data = requests.get(URL2)
    et = time.time() - st
    times2.append(et)

times = []

for i in range(100):

    st = time.time()
    data = requests.get(URL)
    et = time.time() - st
    times.append(et)


print('Total Time : ')
print("Node.js serve , 1000 requests : ", str(sum(times2)) + " seconds") 
print("Fast Web Server 1000 requests : ", str(sum(times)) + " seconds")

plt.plot(times, label = "Fast C server")
plt.plot(times2, label = "Node.js serve")
plt.show()
