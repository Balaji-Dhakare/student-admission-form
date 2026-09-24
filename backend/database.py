import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_NAME=os.getenv("DATABASE_NAME")

if not DATABASE_PASSWORD:
    raise ValueError("DATABASE_PASSWORD is not set")
if not DATABASE_NAME:
    raise ValueError("DATABASE_NAME is not set")

Base = declarative_base()
engine = create_engine(
    f"mysql+mysqlconnector://root:{DATABASE_PASSWORD}@localhost:3306/{DATABASE_NAME}"
)
#                       mysql+pymysql://USERNAME:PASSWORD@HOST/DATABASE_NAME
SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)
