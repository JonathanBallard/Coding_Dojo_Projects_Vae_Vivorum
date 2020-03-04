"""empty message

Revision ID: 483160b92506
Revises: 
Create Date: 2020-03-03 12:57:25.091751

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '483160b92506'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Active_Abilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('ability_type', sa.String(length=45), nullable=True),
    sa.Column('ability_amount', sa.Integer(), nullable=True),
    sa.Column('ability_duration', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Passive_Abilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('passive_ability_type', sa.String(length=45), nullable=True),
    sa.Column('passive_ability_amount', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Equipment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('equip_type', sa.String(length=255), nullable=True),
    sa.Column('damage', sa.Integer(), nullable=True),
    sa.Column('fire_rate', sa.Integer(), nullable=True),
    sa.Column('fire_type', sa.Integer(), nullable=True),
    sa.Column('max_hp', sa.Integer(), nullable=True),
    sa.Column('hp_armor', sa.Integer(), nullable=True),
    sa.Column('max_shields', sa.Integer(), nullable=True),
    sa.Column('shield_resistance', sa.Integer(), nullable=True),
    sa.Column('speed', sa.Integer(), nullable=True),
    sa.Column('passive_1_id', sa.Integer(), nullable=True),
    sa.Column('passive_2_id', sa.Integer(), nullable=True),
    sa.Column('passive_3_id', sa.Integer(), nullable=True),
    sa.Column('active_1_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['active_1_id'], ['Active_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_1_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_2_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_3_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Ships',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('max_hp', sa.Integer(), nullable=True),
    sa.Column('max_shields', sa.Integer(), nullable=True),
    sa.Column('active_id', sa.Integer(), nullable=True),
    sa.Column('passive_1_id', sa.Integer(), nullable=True),
    sa.Column('passive_2_id', sa.Integer(), nullable=True),
    sa.Column('passive_3_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['active_id'], ['Active_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_1_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_2_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['passive_3_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('current_score', sa.Integer(), nullable=True),
    sa.Column('current_money', sa.Integer(), nullable=True),
    sa.Column('current_xp', sa.Integer(), nullable=True),
    sa.Column('current_level', sa.Integer(), nullable=True),
    sa.Column('active_ship', sa.Integer(), nullable=True),
    sa.Column('character_active_ability_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['character_active_ability_id'], ['Active_Abilities.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Loadouts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ship_id', sa.Integer(), nullable=True),
    sa.Column('slot_1_id', sa.Integer(), nullable=True),
    sa.Column('slot_2_id', sa.Integer(), nullable=True),
    sa.Column('slot_3_id', sa.Integer(), nullable=True),
    sa.Column('slot_4_id', sa.Integer(), nullable=True),
    sa.Column('slot_5_id', sa.Integer(), nullable=True),
    sa.Column('slot_6_id', sa.Integer(), nullable=True),
    sa.Column('slot_7_id', sa.Integer(), nullable=True),
    sa.Column('slot_8_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ship_id'], ['Ships.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_1_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_2_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_3_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_4_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_5_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_6_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_7_id'], ['Equipment.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['slot_8_id'], ['Equipment.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('User_Character',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('passive_id', sa.Integer(), nullable=False),
    sa.Column('passive_rank', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['passive_id'], ['Passive_Abilities.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['user_id'], ['Users.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('user_id', 'passive_id')
    )
    op.create_table('user_ships',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('ship_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['ship_id'], ['Ships.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['user_id'], ['Users.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('user_id', 'ship_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_ships')
    op.drop_table('User_Character')
    op.drop_table('Loadouts')
    op.drop_table('Users')
    op.drop_table('Ships')
    op.drop_table('Equipment')
    op.drop_table('Passive_Abilities')
    op.drop_table('Active_Abilities')
    # ### end Alembic commands ###
