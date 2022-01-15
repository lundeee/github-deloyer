#!/bin/bash

PWD=$(pwd)
# touch "$NOW"
echo "$PWD"
git pull
pm2 restart github-deployer

