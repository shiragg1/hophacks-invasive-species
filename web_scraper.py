#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep 16 13:27:05 2023

@author: srisha
"""

import requests
from bs4 import BeautifulSoup
import os

headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}

count = 1
folder_name = 'plant1'

def create_images(plant_search):
    
    # input: google search
    # output: folder
    
    global count
    # send HTTP request
    url = 'https://www.google.com/search?q=' + plant_search + '&tbm=isch'
    response = requests.get(url, headers=headers)
    html = response.text
    
    soup = BeautifulSoup(html, 'html.parser')
    img_tags = soup.find_all("img")
    
    # get link of all images
    img_urls = []
    for img in img_tags:
        img_url = img.get('src')
        if img_url and img_url.startswith('http'):
            img_urls.append(img_url)
            #print(img_urls)
    
    # create an image folder
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    
    # download all pictures
    for i, url in enumerate(img_urls):
        response = requests.get(url, headers=headers)
        with open(f"{folder_name}/{count}.jpg", 'wb') as f:
            f.write(response.content)
            count += 1

# do multiple function calls to create multiple folders of images
# need to replace 
create_images('Berberis+thunbergii')
create_images('Berberis+thunbergii+fall')
create_images('Berberis+thunbergii+spring')
create_images('Berberis+thunbergii+pink')
create_images('Berberis+thunbergii+purple')
create_images('Berberis+thunbergii+bluish+green')
create_images('Berberis+thunbergii+nice+photos')
create_images('Berberis+thunbergii+baltimore')
create_images('Berberis+thunbergii+forest')
              

