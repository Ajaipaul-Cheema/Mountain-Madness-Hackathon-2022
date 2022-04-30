from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Company(Base):
    __tablename__ = "company"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String)
    name = Column(String)

class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    # relationships 

class Portfolio(Base):
    __tablename__ = "portfolio"

    id = Column(Integer, primary_key=True, index=True)
    money = Column(Integer)

    
    

