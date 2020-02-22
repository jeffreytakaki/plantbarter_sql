#!/bin/sh

/usr/bin/mysqld_safe --skip-grant-tables &
sleep 5
mysql -h 127.0.0.1 -P 3306 -u root -e "CREATE DATABASE plantbarter"; 
mysql -h 127.0.0.1 -P 3306 -u root plantbarter < ./plantBarter_01_2020-02-20.sql