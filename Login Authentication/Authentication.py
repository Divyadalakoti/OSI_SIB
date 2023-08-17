import sqlite3
from hashlib import sha256

# Create or connect to the database
conn = sqlite3.connect('user_database.db')
cursor = conn.cursor()

# Create users table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT UNIQUE,
        password TEXT
    )
''')
conn.commit()

# Function to register a new user
def register_user(username, password):
    hashed_password = sha256(password.encode()).hexdigest()
    try:
        cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
        conn.commit()
        print("Registration successful!")
    except sqlite3.IntegrityError:
        print("Username already exists.")

# Function to authenticate user
def authenticate_user(username, password):
    hashed_password = sha256(password.encode()).hexdigest()
    cursor.execute('SELECT * FROM users WHERE username=? AND password=?', (username, hashed_password))
    user = cursor.fetchone()
    return user is not None

# User registration
register_user('divya', 'password123')
register_user('bob', 'securepass')

# User authentication
username = input("Username: ")
password = input("Password: ")
if authenticate_user(username, password):
    print("Authentication successful! You've logged in.")
else:
    print("Authentication failed. Invalid credentials.")
# Close the database connection
conn.close()
