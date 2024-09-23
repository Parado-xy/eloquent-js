import os

def create_user():

    with open('cred.db', 'a') as usernames, open('pass.db', 'a') as passwords:
        # Request username and password
        username, password = input('Enter your details in the format username,password: ').strip().split(',')
        # save the username and password.
        usernames.write(f"{username}\n")
        passwords.write(f"{password}\n")
        print('User created successfully.')

def log_in():
    # I was about to submit before i rembered this. 
    # Check if the files exist before trying to read them
    if not os.path.exists('cred.db') or not os.path.exists('pass.db'):
        print("Database files don't exist. Please create a user first.")
        create_user()
        return

    # Open files using 'with' to ensure proper closing
    with open('cred.db', 'r') as usernames, open('pass.db', 'r') as passwords:
        # Read usernames and passwords into lists
        # The strip function here removes the new line character that was introduced when creating the file. 
        credentials = [line.strip() for line in usernames]
        credentials_passwords = [line.strip() for line in passwords]
    
    count = 5  # Track login attempts

    while count > 0:
        username = input("What's your username? ").strip()
        if username in credentials:
            password = input("What's your password? ").strip()
            user_index = credentials.index(username)
            # We'll match based on the index. 
            if password == credentials_passwords[user_index]:
                print('Login successful')
                break
            else:
                print('Login unsuccessful. Try again.')
                count -= 1

        else:
            move_on = input('404 error. Create an account (Y/N)? ').strip().lower()
            if move_on == 'y':
                create_user()
                break
            else:
                print('Aiight, later.')
                break
        
        # If all attempts ar gone, ask the user if he wants to sign up. 
        if count == 0:
            signup_instead = input('Too many failed attempts. Sign up instead (Y/N)? ').strip().lower()
            if signup_instead == 'y':
                create_user()
            else:
                print('No access for you then.')

def main():
    # Ask if the user wants to log in or sign up
    action = input('Do you want to log in or sign up? (Enter either login or signup): ').strip().lower()
    
    if action == 'login':
        log_in()
    else:
        create_user()


main()
