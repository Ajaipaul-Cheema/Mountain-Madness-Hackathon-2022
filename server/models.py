from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Company(Base):
    __tablename__ = "company"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String)
    name = Column(String)

    # One to Many (Inventory)
    inventory_id = Column(Integer, ForeignKey('inventory.id')) 
    inventory = relationship("Inventory", back_populates="company")
    
class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)

    # Many To One (Portfolio)   
    portfolio = relationship("Portfolio", back_populates="portfolio")
    # Many To One (Company)   
    company = relationship("Company", back_populates="company")


class Portfolio(Base):
    __tablename__ = "portfolio"

    id = Column(Integer, primary_key=True, index=True)
    money = Column(Integer)

    # One to Many (Inventory)
    inventory_id = Column(Integer, ForeignKey('inventory.id')) 
    inventory = relationship("Inventory", back_populates="portfolio")
    