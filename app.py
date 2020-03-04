##### Features - MVP #####
# Twin Stick Shooter 
# Based on the pre-bootcamp fighter jet game
# XP gain
# Items drop or money drop and buy items? Items Drop
# Stored player info in database
# Different modifiers for each map
# Create Enemies
# Create Player Ship
# 
# 
# 




##### Features - Product Backlog #####
# Abilities unlocked through equipment or levels? Mix-of both
# Different ships that you can fly with different slot arrangements
# purchase equipment
# Different Weapon Types
# Different Player Abilities
# Equipment Drops
# Equipment to purchase
# Difficulty Slider
# ROG Loot ?
# 
# 



# TODO
# Create Index.html Registration & Login system **DONE**
# CREATE Form to create abilities, ships, items, etc..
# Player Ship image
# Alt ship images
# enemy ship images
# Create function to quickly add basic equipment & abilities & users to game for testing
# Create Models/Relationships **DONE**
# TEST MODELS
# Create map to choose levels, start with simple list of links
# Create game.html
# Create Base Game, single level
# Create equipment.html
# Create dashboard.html **DONE**
# create ships.html
# create store.html
# Bcrypt everything important in session
# Create Page to Add Items/Abilities/Ships to Database
# Add Footer to each page with my info
# Create Manual
# Implement AJAX on necessary pages
# Eventually Set up Bootstrap "cards" system for each map
# 
# 


# GAME TODO
# Create movement controls
# Firing controls
# Background image
# enemy spawning
# scoring
# income
# 
# 
# 
# 




import re

from config import app, bcrypt, db
from flask import Flask, flash, redirect, render_template, request, session
from models import User_Character, Users, Equipment, Loadouts, Active_Abilities, Passive_Abilities, Ships, user_ships
from sqlalchemy.sql import func

##### ******************** ROUTES ******************** #####

##### /index #####
@app.route('/')
def index():
    return render_template("index.html")

##### /register #####
@app.route('/register', methods=["POST"])
def register():

    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
    PW_REGEX = re.compile(r'^.*(?=.{8,10})(?=.*[a-zA-Z])(?=.*?[A-Z])(?=.*\d)[a-zA-Z0-9!@£$%^&*()_+={}?:~\[\]]+$')
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    conPassword = request.form['passwordConfirm']
    form = request.form['formType']
    isValid = True
    

    users = Users.query.all()

    for user in users:
        if user.email == email:
            isValid = False
            flash("Email already in use", 'register')
        if user.username == username:
            isValid = False
            flash("Username already in use", 'register')

    if len(username) <= 0:
        isValid = False
        flash('Please enter a username', 'register')

    if not username.isalpha():
        isValid = False
        flash('Please enter a username using only alphabetic characters', 'register')

    if len(email) <= 3:
        isValid = False
        flash('Please enter an email address', 'register')

    if not EMAIL_REGEX.match(request.form['email']):
        isValid = False
        flash("Invalid email address!", 'register')

    if not PW_REGEX.match(request.form['password']):
        isValid = False
        flash("Invalid password! Minimum 8 characters, 1 number, and 1 special character", 'register')


    if not password == conPassword:
        isValid = False
        flash('Password doesnt match confirm password', 'register')

    
    
    if isValid == True:
        pwHash = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = Users(username = username, created_at = func.now(), updated_at = func.now(), email = email, password=pwHash, current_score = 0, current_money = 0, current_xp = 0, current_level = 0)
        db.session.add(new_user)
        db.session.commit()

        users = Users.query.all()
        print(users)
        flash('Success!')
        return redirect('/dashboard')
    else:
        return redirect('/')

# LOGOUT
@app.route('/logout', methods=['POST','GET'])
def logout():
    session.clear()
    return redirect('/')



##### /login #####
@app.route('/login', methods=['POST'])
def login():


    form = request.form['formType']

    email = request.form['emailLogin']
    password = str(request.form['passwordLogin'])


    emailCheckDB = Users.query.filter_by(email = email).all()

    if len(emailCheckDB) == 0:
        emailCheckDBFull = False
    else:
        emailCheckDBFull = True

    login_id = Users.query.filter_by(email = email).all()

    
    userId = Users.query.filter_by(email = email).all()


    idDict = Users.query.filter_by(email = email).all()

    print('idDict^%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^', idDict)
    if len(idDict) > 0:
        session['id'] = idDict[0].id
        
    if not emailCheckDBFull:
        print('EmailCheck ****************************', 'email')
        flash('Email not in our database', 'login')
        return redirect('/')
    else:
        hashCheck = bcrypt.check_password_hash(login_id[0].password, password)
        print('hashCheck ***************************************', hashCheck)
        if not hashCheck:
            flash('Invalid Password', 'login')
            return redirect('/')
        else:
            flash("Successfully Logged In!")
            if not 'username' in session:
                session['username'] = userId[0].username
                print('Session[username] *******---------------+***********', session['username'])
            return redirect('/dashboard')



# DASHBOARD
@app.route('/dashboard')
def dashboard():

    if 'id' in session:
        loggedInUser = Users.query.get(session['id'])
    else:
        loggedInUser = Users.query.get(1)   #DEFAULT USER, CHANGE THIS LATER

    return render_template("dashboard.html", thisUser = loggedInUser)



# MAP
@app.route('/map')
def map():
    loggedInUser = Users.query.get(session['id'])



    return render_template("map.html", thisUser = loggedInUser)



# Equipment
@app.route('/equipment')
def equipment():
    loggedInUser = Users.query.get(session['id'])



    return render_template("equipment.html", thisUser = loggedInUser)


# Store
@app.route('/store')
def store():
    loggedInUser = Users.query.get(session['id'])



    return render_template("store.html", thisUser = loggedInUser)




# Ships
@app.route('/ships')
def ships():
    loggedInUser = Users.query.get(session['id'])



    return render_template("ships.html", thisUser = loggedInUser)


# Game
@app.route('/game')
def game():
    loggedInUser = Users.query.get(session['id'])



    return render_template("game.html", thisUser = loggedInUser)













if __name__ == "__main__":
    app.run(debug=True)
