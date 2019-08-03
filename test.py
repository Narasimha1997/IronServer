import requests
import time
import matplotlib.pyplot as plt

URL = "http://localhost:8888/static/js/main.30fffb9d.chunk.js.map"

URL2 = "http://localhost:5000/static/main.30fffb9d.chunk.js.map"

times = []

for i in range(191):

    st = time.time()
    data = requests.get(URL)

    print(data.headers, data.status_code)
    et = time.time() - st
    times.append(et)



print("Fast Web Server 1000 requests : ", str(sum(times)) + " seconds")

plt.plot(times)
plt.show()
