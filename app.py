

import re
import json
from config import app, bcrypt, db
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from models import User_Character, Users, Equipment, Loadouts, Active_Abilities, Passive_Abilities, Ships, user_ships, Map
from sqlalchemy.sql import func
from createRows import createMap


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
        thisUser = Users.query.filter_by(email = email).first()

        if thisUser:
            session['id'] = thisUser.id

        return redirect('/dock')
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
            return redirect('/dock')



# Space Dock
@app.route('/dock')
def dock():
    

    if 'id' in session:
        loggedInUser = Users.query.get(session['id'])
    else:
        return redirect('/')

    print('CURRENT SESSION USER: ', session['id'])

    return render_template("dock.html", thisUser = loggedInUser)



# MAP
@app.route('/map')
def map():
    loggedInUser = Users.query.get(session['id'])
    allMaps = Map.query.all()
    print('allMaps***************************************************',allMaps)


    return render_template("map.html", thisUser = loggedInUser, allMaps = allMaps)



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
    if 'id' in session:
        loggedInUser = Users.query.get(session['id'])
    else:
        print('NO LOGGED IN USER -- GAME ROUTE')
        loggedInUser = False

    return render_template("game.html", thisUser = loggedInUser)

# Game With Map ID
@app.route('/game/<mapID>')
def gameId(mapID):

    if(mapID):
        thisMap = Map.query.get(mapID)
    else:
        return redirect('/game')

    if 'id' in session:
        loggedInUser = Users.query.get(session['id'])
    else:
        print('NO LOGGED IN USER -- GAME ROUTE')
        loggedInUser = False

    return render_template("game.html", thisUser = loggedInUser, thisMap = thisMap)







@app.route('/getjson/<jsondata>')
def getjson(jsondata):
    return jsondata

@app.route('/output', methods=['POST'])
def output():
    
    # add to database
    # if request.is_json():
    # print("*&********************************REQUEST.IS_JSON*****************************************")
    data = request.get_json()
    thisUser = Users.query.get(session['id'])
    print('data*******************************', data)
    print('UserData****************************************** score:', thisUser.current_score, 'xp:', thisUser.current_xp, 'money:', thisUser.current_money)
    previousXp = thisUser.current_xp
    thisUser.current_score += data['score']
    thisUser.current_kills += data['kills']
    thisUser.current_xp += data['xp']
    thisUser.current_money += data['money']
    print('after addition:', thisUser.current_score, 'xp:', thisUser.current_xp, 'money:', thisUser.current_money)

    # determine player level
    levelChart = [
        0,       #Level 0
        300,
        600,
        1000,
        1400,
        1900,
        2400,
        2900,
        3500,
        4100,
        4700,       #Level 10
        5300,
        6000,
        6700,
        7500,
        8300,
        9100,
        10000,
        11000,
        12000,
        13100,      #Level 20
        16300,
        20000,
        25800,
        31600,
        38800       #Level 25, Max
    ]

    playerLevel = 0
    for i in range(len(levelChart)):
        if thisUser.current_xp >= levelChart[i]:
            playerLevel = i



    thisUser.current_level = playerLevel
    thisUser.abilityPointsEarned = thisUser.current_level * 4
    thisUser.abilityPointsSpent = thisUser.passive1 + thisUser.passive2 + thisUser.passive3 + thisUser.passive4 + thisUser.passive5 + thisUser.passive6 + thisUser.passive7 + thisUser.passive8
    db.session.commit()


    print("data['score']", data['score'])

    session['endScore'] = data['score']
    session['endKills'] = data['kills']
    session['endXp'] = data['xp']
    session['endMoney'] = data['money']


    print('**********************************************************************************')
    print("inner - session['endScore']", session['endScore'])

    thisUser = Users.query.get(session['id'])
    print('This User Score, Kills, XP, Money:', thisUser.current_score, thisUser.current_kills, thisUser.current_xp, thisUser.current_money)
    return redirect('/overview')



@app.route('/outputPassives', methods=["POST"])
def outputPassives():
    data = request.get_json()
    thisUser = Users.query.get(session['id'])
    print(data)
    if data:
        thisUser.passive1 = data['p1']
        thisUser.passive2 = data['p2']
        thisUser.passive3 = data['p3']
        thisUser.passive4 = data['p4']
        thisUser.passive5 = data['p5']
        thisUser.passive6 = data['p6']
        thisUser.passive7 = data['p7']
        thisUser.passive8 = data['p8']
        thisUser.abilityPointsSpent = thisUser.passive1 + thisUser.passive2 + thisUser.passive3 + thisUser.passive4 + thisUser.passive5 + thisUser.passive6 + thisUser.passive7 + thisUser.passive8
        # thisUser.passive9 = data['p9']
        # thisUser.passive10 = data['p10']
        # thisUser.passive11 = data['p11']
        # thisUser.passive12 = data['p12']
        # thisUser.passive13 = data['p13']
        # thisUser.passive14 = data['p14']
        # thisUser.passive15 = data['p15']
        # thisUser.passive16 = data['p16']
        # thisUser.passive17 = data['p17']
        # thisUser.passive18 = data['p18']
        # thisUser.passive19 = data['p19']
        # thisUser.passive20 = data['p20']
        db.session.commit()
        print('passives:', thisUser.passive1, thisUser.passive2, thisUser.passive3, thisUser.passive4, thisUser.passive5, thisUser.passive6, thisUser.passive7, thisUser.passive8)
    else:
        print('failing to receive data')
    return redirect('/dock')

@app.route('/overview')
def overview():
    thisUser = Users.query.get(session['id'])

    print('**********************************************************************************')
    print("outer - session['endScore']", session['endScore'])

    if 'endScore' in session:
        print('**********************************************************************************')
        print('endScore in session')
        score = session['endScore']
    else:
        score = -1

    if 'endKills' in session:
        kills = session['endKills']
    else:
        kills = -1

    if 'endXp' in session:
        xp = session['endXp']
    else:
        xp = -1

    if 'endMoney' in session:
        money = session['endMoney']
    else:
        money = -1

    return render_template('overview.html', thisUser = thisUser, score = score, xp = xp, kills = kills, money = money)


@app.route('/populateDatabase')
def populateDatabase():

    thisUser = Users.query.get(session['id'])

    #admin access only
    if session['id'] == 1 or thisUser.username == "Tax":
        return render_template('populateDatabase.html', thisUser = thisUser)
    else:
        return redirect('/')

@app.route('/addMap', methods=["POST"])
def addMap():

    print('TEST ADDMAP*************************************************')
    print(
        request.form['mapName'], 
        request.form['mapBackground'], 
        request.form['mapDifficulty'], 
        request.form['modifier1Name'], 
        request.form['modifier1Amount'], 
        request.form['modifier2Name'], 
        request.form['modifier2Amount'], 
        request.form['modifier3Name'], 
        request.form['modifier3Amount']
    )

    createMap(
        request.form['mapName'], 
        request.form['mapBackground'], 
        request.form['mapDifficulty'], 
        request.form['modifier1Name'], 
        request.form['modifier1Amount'], 
        request.form['modifier2Name'], 
        request.form['modifier2Amount'], 
        request.form['modifier3Name'], 
        request.form['modifier3Amount']
    )

    return redirect('/populateDatabase')



if __name__ == "__main__":
    app.run(debug=True)
