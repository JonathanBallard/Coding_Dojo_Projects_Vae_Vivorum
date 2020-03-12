from sqlalchemy.sql import func
from config import db
from sqlalchemy import text
from flask_migrate import Migrate





class User_Character(db.Model): 
    __tablename__ = 'User_Character'
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id', ondelete='cascade'), primary_key=True)
    passive_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete='cascade'), primary_key=True)
    passive_rank = db.Column(db.Integer)
    user = db.relationship('Users')



user_ships = db.Table('user_ships',
            db.Column('user_id', db.Integer, db.ForeignKey('Users.id', ondelete='cascade'), primary_key=True),
            db.Column('ship_id', db.Integer, db.ForeignKey('Ships.id', ondelete='cascade'), primary_key=True))







class Users(db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    current_kills = db.Column(db.Integer, default=0)
    current_score = db.Column(db.Integer, default=0)
    current_money = db.Column(db.Integer, default=0)
    current_xp = db.Column(db.Integer, default=0)
    current_level = db.Column(db.Integer, default=0)
    # active_ability_id = db.Column(db.Integer)
    # passive_abilities_id = db.Column(db.Integer)
    active_ship = db.Column(db.Integer, default=0)
    abilityPointsEarned = db.Column(db.Integer, default=0)
    abilityPointsSpent = db.Column(db.Integer, default = 0)
    passive1 = db.Column(db.Integer, default=0)
    passive2 = db.Column(db.Integer, default=0)
    passive3 = db.Column(db.Integer, default=0)
    passive4 = db.Column(db.Integer, default=0)
    passive5 = db.Column(db.Integer, default=0)
    passive6 = db.Column(db.Integer, default=0)
    passive7 = db.Column(db.Integer, default=0)
    passive8 = db.Column(db.Integer, default=0)
    passive9 = db.Column(db.Integer, default=0)
    passive10 = db.Column(db.Integer, default=0)
    passive11 = db.Column(db.Integer, default=0)
    passive12 = db.Column(db.Integer, default=0)
    passive13 = db.Column(db.Integer, default=0)
    passive14 = db.Column(db.Integer, default=0)
    passive15 = db.Column(db.Integer, default=0)
    passive16 = db.Column(db.Integer, default=0)
    passive17 = db.Column(db.Integer, default=0)
    passive18 = db.Column(db.Integer, default=0)
    passive19 = db.Column(db.Integer, default=0)
    passive20 = db.Column(db.Integer, default=0)
    character_active_ability_id = db.Column(db.Integer, db.ForeignKey("Active_Abilities.id", ondelete="cascade"))
    passive_abilities_this_user_has = db.relationship('User_Character', backref="characters_that_have_this_passive")
    # character_passive_abilities_id = db.Column(db.Integer, db.ForeignKey("Passive_Abilities.id", ondelete="cascade"))
    





class Ships(db.Model):
    __tablename__ = "Ships"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    price = db.Column(db.Integer)
    max_hp = db.Column(db.Integer)
    max_shields = db.Column(db.Integer)
    owner_id = db.relationship('Ships', secondary = user_ships, backref="ships_owned_id")
    active_id = db.Column(db.Integer, db.ForeignKey('Active_Abilities.id', ondelete='cascade'))
    passive_1_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete='cascade'))
    passive_2_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete='cascade'))
    passive_3_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete='cascade'))

    
class Passive_Abilities(db.Model):
    __tablename__ = "Passive_Abilities"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    passive_ability_type = db.Column(db.String(45))
    passive_ability_amount = db.Column(db.Integer)
    # ships_that_have_this_passive = db.relationship('Ships', secondary = ship_ability, backref='passives_this_ship_has') #One posssible method


class Active_Abilities(db.Model):
    __tablename__ = "Active_Abilities"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    ability_type = db.Column(db.String(45))
    ability_amount = db.Column(db.Integer)
    ability_duration = db.Column(db.Integer)

class Loadouts(db.Model):
    __tablename__ = "Loadouts"
    id = db.Column(db.Integer, primary_key=True)
    ship_id = db.Column(db.Integer, db.ForeignKey('Ships.id', ondelete='cascade'))   #the ship which is equipped in this way
    slot_1_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_2_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_3_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_4_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_5_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_6_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_7_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))
    slot_8_id = db.Column(db.Integer, db.ForeignKey('Equipment.id', ondelete='cascade'))

class Equipment(db.Model):
    __tablename__ = "Equipment"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    equip_type = db.Column(db.String(255))
    damage = db.Column(db.Integer)
    fire_rate = db.Column(db.Integer)
    fire_type = db.Column(db.Integer)
    max_hp = db.Column(db.Integer)
    hp_armor = db.Column(db.Integer)
    max_shields = db.Column(db.Integer)
    shield_resistance = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    passive_1_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete="cascade"))
    passive_2_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete="cascade"))
    passive_3_id = db.Column(db.Integer, db.ForeignKey('Passive_Abilities.id', ondelete="cascade"))
    active_1_id = db.Column(db.Integer, db.ForeignKey('Active_Abilities.id', ondelete="cascade"))


class Map(db.Model):
    __tablename__ = "Map"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    difficulty = db.Column(db.Integer)
    modifier1Name = db.Column(db.String(255))
    modifier1Amount = db.Column(db.Integer)
    modifier2Name = db.Column(db.String(255))
    modifier2Amount = db.Column(db.Integer)
    modifier3Name = db.Column(db.String(255))
    modifier3Amount = db.Column(db.Integer)

















