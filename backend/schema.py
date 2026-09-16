from pydantic import BaseModel
from datetime import date

class UserCreate(BaseModel):
    firstName: str
    middleName: str | None = None
    lastName: str
    email: str
    address: str | None = None
    phone: str | None = None
    guardianPhone: str | None = None
    gender: str | None = None
    dob: date | None = None
    country: str | None = None
    state: str | None = None
    zip: str | None = None

class AcademicsCreate(BaseModel):
    class_name: str | None = None
    division: str | None = None
    subjects: str | None = None
    batch: str | None = None 



class StudentCreate(BaseModel):
    firstName: str
    middleName: str | None = None
    lastName: str
    email: str
    address: str | None = None
    phone: str | None = None
    guardianPhone: str | None = None
    gender: str | None = None
    dob: date | None = None
    country: str | None = None
    state: str | None = None
    zip: str | None = None
    class_name: str | None = None
    division: str | None = None
    subjects: str | None = None
    batch: str | None = None   