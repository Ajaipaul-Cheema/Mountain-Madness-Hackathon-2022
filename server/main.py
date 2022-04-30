from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/company/")
def read_company(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.list_companies(db, skip=skip, limit=limit)

@app.get("/inventory/")
def read_inventory(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.list_inventory(db, skip=skip, limit=limit)

@app.get("/portfolio/")
def read_companies(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.list_portfolio(db, skip=skip, limit=limit)


app.get("/company/{company_id}")
def read_company(company_id: int, db: Session = Depends(get_db)):
    db_company = crud.get_company(db, company_id=company_id)
    if db_company is None:
        raise HTTPException(status_code=404, detail="Company not found")
    return db_company

