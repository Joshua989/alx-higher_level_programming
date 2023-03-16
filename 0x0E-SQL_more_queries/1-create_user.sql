--Check if the user already exists
if mysql -h localhost -u root -p -e "SELECT EXISTS(SELECT 1 FROM mysql.user WHERE user = 'user_0d_1');"; then
    echo "User user_0d_1 already exists, skipping creation."
else
    --Create the user with all privileges and set the password
    echo "CREATE USER 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';" | mysql -h localhost -u root -p
    echo "GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost' WITH GRANT OPTION;" | mysql -h localhost -u root -p
    echo "FLUSH PRIVILEGES;" | mysql -h localhost -u root -p
    echo "User user_0d_1 created successfully."
fi

