from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()
engine = create_engine("mysql+mysqlconnector://root:12345678@localhost:3306/hmarkit")

#                       mysql+pymysql://USERNAME:PASSWORD@localhost/student_admission

SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)
