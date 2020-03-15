
import re
import json
from config import app, bcrypt, db
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from models import User_Character, Users, Equipment, Loadouts, Active_Abilities, Passive_Abilities, Ships, user_ships, Map
from sqlalchemy.sql import func





def createMap(name,background,difficulty,mod1,mod1Amt,mod2,mod2Amt,mod3,mod3Amt):
    newMap = Map(
        name = name, 
        background = background, 
        difficulty = difficulty, 
        modifier1Name = mod1, 
        modifier1Amount = mod1Amt, 
        modifier2Name = mod2, 
        modifier2Amount = mod2Amt, 
        modifier3Name = mod3, 
        modifier3Amount = mod3Amt
    )
    db.session.add(newMap)
    db.session.commit()
    print('New Map Created: ', name, 'background:', background, 'difficulty:', difficulty, 'modifier1Name:', mod1, 'modifier1Amount', mod1Amt, 'modifier2Name:', mod2, 'modifier2Amount', mod2Amt, 'modifier3Name:', mod3, 'modifier3Amount', mod3Amt)


























