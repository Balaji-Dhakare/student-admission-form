from datetime import date
from pydantic import BaseModel, Field

# API schema models used for request validation

# Common fields for Student and Employee
class UserDetails(BaseModel):
    firstName: str = Field(..., pattern=r"^[A-Za-z .'-]{2,50}$")
    middleName: str | None = Field(None, pattern=r"^[A-Za-z .'-]{0,50}$")
    lastName: str = Field(..., pattern=r"^[A-Za-z .'-]{2,50}$")
    email: str = Field(..., pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    dob: date
    gender: str = Field(..., pattern=r"^(Male|Female|Other|Prefer not to say)$")
    phone: str = Field(..., pattern=r"^\+?[0-9]{10,15}$")
    address: str | None = Field(None, min_length=5, max_length=200)
    country: str = Field(..., pattern=r"^[A-Za-z .'-]{2,50}$")
    state: str = Field(..., pattern=r"^[A-Za-z .'-]{2,50}$")
    zip: str | None = Field(None, pattern=r"^[A-Za-z0-9 -]{3,10}$")
    status: str = Field("Active", pattern=r"^[A-Za-z .'-]{2,50}$")


# Student academic details
class AcademicsDetails(BaseModel):
    class_name: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,50}$")
    division: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,20}$")
    subjects: str = Field(..., pattern=r"^[A-Za-z ,.-]{2,200}$")
    batch: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,30}$")


# Student = UserDetails + AcademicsDetails + guardianPhone
class StudentDetails(UserDetails, AcademicsDetails, BaseModel):
    guardianPhone: str | None = Field(None,pattern=r"^\+?[0-9]{10,15}$")


# Teacherdetails = UserDetails + TeacherAcademic + empId
class TeacherDetails(UserDetails, BaseModel):
    empId: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,50}$")
    class_name: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,255}$")
    division: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,255}$")
    subjects: str = Field(..., pattern=r"^[A-Za-z ,.-]{2,255}$")
    batch: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,255}$")


# Employee = UserDetails + empId
class EmployeeDetails(UserDetails,BaseModel):
    empId: str = Field(..., pattern=r"^[A-Za-z0-9 .'-]{1,50}$")