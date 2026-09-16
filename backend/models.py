from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String(50), nullable=False)
    middleName = Column(String(50), nullable=True)
    lastName = Column(String(50), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    dob = Column(Date, nullable=False)
    gender = Column(String(10), nullable=False)
    phone = Column(String(10), unique=True, nullable=False)
    guardianPhone = Column(String(10), nullable=True)
    address = Column(String(255), nullable=True)
    country = Column(String(50), nullable=False)
    state = Column(String(100), nullable=False)
    zip = Column(String(6), nullable=True)

    academics = relationship(
        "Academics",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan",
    )


class Academics(Base):
    __tablename__ = "academics"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, unique=True)
    class_name = Column("class", String(2), nullable=False)
    division = Column(String(1), nullable=False)
    batch = Column(String(20), nullable=False)
    subjects = Column(String(255), nullable=False)

    user = relationship("User", back_populates="academics")

