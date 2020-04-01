#!/bin/bash
PROJECT="autoSound"

grunt clean
grunt exec:$PROJECT
grunt less:$PROJECT

sudo chmod -R 777 /var/www/html
