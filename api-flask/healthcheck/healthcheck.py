import http.client
import os
import sys

timeout = 2
host = 'localhost'
port = os.getenv('PORT', 5000)
path = "/ping"


def initiate_health_check():
    try:
        conn = http.client.HTTPConnection(host, port, timeout=timeout)
        conn.request("GET", path)
        res = conn.getresponse()
        print(f"STATUS: {res.status}")

        sys.exit(0 if res.status == 200 else 1)
    except Exception as err:
        print(f"ERROR: {err}")
    finally:
        if 'conn' in locals():
            conn.close()


initiate_health_check()