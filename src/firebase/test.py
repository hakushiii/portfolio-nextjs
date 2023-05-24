import pyrebase
from random import uniform
from time import sleep
from datetime import datetime

config = {
  'apiKey': 'AIzaSyAxc8zhc-s5ASLgh7nzmU7b6_t3yii3BaE',
  'authDomain': 'dynazenon-hksh.firebaseapp.com',
  'projectId': 'dynazenon-hksh',
  'storageBucket': 'dynazenon-hksh.appspot.com',
  'messagingSenderId': '542379814829',
  'appId': '1:542379814829:web:91dda779a3fb5b8d873b24',
  'measurementId': 'G-8NB0SE92PL',
  'databaseURL': 'gs://dynazenon-hksh.appspot.com'
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
db = firebase.database()

while True:
    now = datetime.now().strftime('%H:%M:%S %Y-%m-%d')
    currentDate = datetime.now().strftime('%Y-%m-%d')

    data = {'Time': now,'Current': round(uniform(0.02,0.03),4), 'Voltage': round(uniform(0.5,0.6),4)}
    print(data)
    try:
        db.child(currentDate).push(data)
    except:
        print('Data not uploaded')
    else:
        print('Data successfully uploaded')

    sleep(1)