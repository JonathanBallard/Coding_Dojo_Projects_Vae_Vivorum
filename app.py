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
# 
# 



# TODO
# Create Index.html Registration & Login system **DONE**
# Player Ship image
# Alt ship images
# enemy ship images
# Create Models/Relationships **STARTED**
# Create map to choose levels
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
# Implement AJAX
# 
# 



from flask import Flask, render_template, request, redirect, session, flash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_migrate import Migrate
import re
from flask_bcrypt import Bcrypt
from sqlalchemy import text



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///$vae_vivorum.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.secret_key = "53cr3t5tuff"
bcrypt = Bcrypt(app)


##### ******************** MODELS ******************** #####
# Users (id, username, email, password, created_at, updated_at, 
# ships_unlocked, items_owned, current_score, current_money, current_xp, current_level, 
# ship_equipped, unlocked_passives, unlocked_actives, equipped_actives
# )
# Ships(id, name, owner_id, price, max_hit_points, current_hit_points, max_shield_points, current_shield_points, special_ability, special_timer, special_active, passive_1, passive_2, passive_3 slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, slot_7, slot_8 )
# 
# 


class Users(db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    current_score = db.Column(db.Integer)
    current_money = db.Column(db.Integer)
    current_xp = db.Column(db.Integer)
    current_level = db.Column(db.Integer)
    character_active_ability_id = db.Column(db.Integer, db.ForeignKey("Character_Active_Abilities.id", ondelete="cascade"))
    character_passive_abilities_id = db.Column(db.Integer, db.ForeignKey("Character_Passive_Abilities.id", ondelete="cascade"))
    active_ship = db.Column(db.String(255))

class Character_Active_Abilities(db.Model):
    __tablename__ = "Character_Active_Abilities"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    ability_type = db.Column(db.String(45))
    ability_amount = db.Column(db.Integer)
    ability_duration = db.Column(db.Integer)

class Character_Passive_Abilities(db.Model):
    __tablename__ = "Character_Passive_Abilities"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    passive_ability_type = db.Column(db.String(45))
    passive_ability_amount = db.Column(db.Integer)




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

    loggedInUser = Users.query.get(session['id'])

    return render_template("dashboard.html", thisUser = loggedInUser)




















if __name__ == "__main__":
    app.run(debug=True)
