from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base
# data models

class PersonFields:
    id = Column(Integer, primary_key=True, index=True)

    firstName = Column(String(50), nullable=False)
    middleName = Column(String(50), nullable=True)
    lastName = Column(String(50), nullable=False)

    email = Column(String(100), unique=True, nullable=False)
    dob = Column(Date, nullable=False)
    gender = Column(String(10), nullable=False)
    phone = Column(String(10), unique=True, nullable=False)

    address = Column(String(255), nullable=True)
    country = Column(String(50), nullable=False)
    state = Column(String(100), nullable=False)
    zip = Column(String(6), nullable=True)

    status = Column(String(10), nullable=False)

class User(PersonFields, Base):
    __tablename__ = "users"

    guardianPhone = Column(String(10), nullable=True)

    academics = relationship(
        "Academics",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan"
    )


class Academics(Base):
    __tablename__ = "academics"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
        unique=True
    )

    class_name = Column("class", String(2), nullable=False)
    division = Column(String(1), nullable=False)
    batch = Column(String(20), nullable=False)
    subjects = Column(String(255), nullable=False)

    user = relationship(
        "User",
        back_populates="academics"
    )

class Employee(PersonFields, Base):
    __tablename__ = "employees"

    empId = Column(String(50), unique=True, nullable=False)
    department = Column(String(50), nullable=False)
    role = Column(String(50), nullable=False)
    joining_date = Column(Date,nullable=False)

    academics = relationship(
        "TeacherAcademics",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan"
    )


class TeacherAcademics(Base):
    __tablename__ = "teacheracademics"

    id = Column(Integer, primary_key=True, index=True)

    employee_id = Column(
        Integer,
        ForeignKey("employees.id"),
        nullable=False,
        unique=True
    )

    class_name = Column("class", String(255), nullable=False)
    division = Column(String(255), nullable=False)
    batch = Column(String(255), nullable=False)
    subjects = Column(String(255), nullable=False)

    user = relationship(
        "Employee",
        back_populates="academics"
    )


