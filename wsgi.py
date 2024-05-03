# -*- coding: utf-8 -*-
import os,sys

#путь к проекту
sys.path.append('/home/d/dkarp3nck2/mathcamera/public_html')
#путь к фреймворку
sys.path.append('/home/d/dkarp3nck2/mathcamera')
#путь к виртуальному окружению
sys.path.append('/home/d/dkarp3nck2/mathcamera/.flaskvenv/lib/python3.8/site-packages/')
#исключить системную директорию
if '/usr/lib/python3.8/site-packages' in sys.path:
    sys.path.remove('/usr/lib/python3.8/site-packages')

from app import app
application = app