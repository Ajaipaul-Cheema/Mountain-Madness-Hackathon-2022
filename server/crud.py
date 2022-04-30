from sqlalchemy.orm import Session

from server.models import Company
from server.models import Inventory
from server.models import Portfolio

def create_company(db: Session, id, ticker, name, inventory_id):

    new_company = Company(id=id, ticker=ticker, name=name,
                          inventory_id=inventory_id)
    # place object in the database session
    db.add(new_company)
    # commit your instance to the database
    db.commit()
    # reefresh the attributes of the given instance
    db.refresh(new_company)
    return new_company


def get_company(db: Session, id: int):

    company = db.query(Company).filter(Company.id == id).first()
    return company


def list_companies(db: Session):

    all_friends = db.query(Company).all()
    return all_friends


def create_inventory(db: Session, id):

    new_inventory = Inventory(id=id)
    # place object in the database session
    db.add(new_inventory)
    # commit your instance to the database
    db.commit()
    # reefresh the attributes of the given instance
    db.refresh(new_inventory)
    return new_inventory


def get_inventory(db: Session, id: int):

    inventory = db.query(Inventory).filter(Inventory.id == id).first()
    return inventory


def list_inventory(db: Session):

    inventory = db.query(Inventory).all()
    return inventory


def create_portfolio(db: Session, id, money, inventory_id):
    new_portfolio = Portfolio(id=id, money=money, inventory_id=inventory_id)
    # place object in the database session
    db.add(new_portfolio)
    # commit your instance to the database
    db.commit()
    # reefresh the attributes of the given instance
    db.refresh(new_portfolio)
    return new_portfolio


def get_portfolio(db: Session, id: int):

    portfolio = db.query(Portfolio).filter(Portfolio.id == id).first()
    return portfolio


def list_portfolios(db: Session):

    portfolios = db.query(Portfolio).all()
    return portfolios
