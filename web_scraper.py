#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep 16 13:27:05 2023

@author: srisha
"""

import requests
from bs4 import BeautifulSoup
import os
import os.path 

headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}


def create_images(plant_search, plant_species):
    
    # input: google search
    # output: folder
    
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
    if not os.path.exists(plant_species):
        os.makedirs(plant_species)
    
    # download all pictures
    for url in img_urls:
        response = requests.get(url, headers=headers)
        with open(f"{plant_species}/{len(os.listdir(f'./{plant_species}'))}.jpg", 'wb') as f:
            f.write(response.content)


def image_run(plant_name):
    
    create_images(f'{plant_name}', f'{plant_name}')
    create_images(f'{plant_name}+fall', f'{plant_name}')
    create_images(f'{plant_name}+spring', f'{plant_name}')
    create_images(f'{plant_name}+pink', f'{plant_name}')
    create_images(f'{plant_name}+purple', f'{plant_name}')
    create_images(f'{plant_name}+bluish+green', f'{plant_name}')
    create_images(f'{plant_name}+yellow', f'{plant_name}')
    create_images(f'{plant_name}+green', f'{plant_name}')
    create_images(f'{plant_name}+nice+photos', f'{plant_name}')
    create_images(f'{plant_name}+baltimore', f'{plant_name}')
    create_images(f'{plant_name}+forest', f'{plant_name}')

image_run('Berberis+thunbergii') # Invasive
image_run('Corydalis+incisa') # Invasive
image_run('Celtis occidentalis') # Common
image_run('Cercis canadensis') # Common
image_run('Quercus alba') # Common
image_run('Nyssa sylvatica') # Common
image_run('Pinus virginiana') # Common


