"""empty message

Revision ID: b96f6ad09987
Revises: 46c1f1ada6e5
Create Date: 2020-03-02 17:14:47.071099

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b96f6ad09987'
down_revision = '46c1f1ada6e5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Users', sa.Column('active_ship', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('Users', 'active_ship')
    # ### end Alembic commands ###
