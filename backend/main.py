from fastapi import FastAPI, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from database import engine, Base, SessionLocal
from schema import StudentDetails

from models import User, Academics
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    

@app.get("/")
def greet():
    return {"message": "Welcome to the Smart Onboarding API!"}

@app.get("/students/")
def fetch_students(db: Session = Depends(get_db)):
    data = db.query(User).all()
    return jsonable_encoder(data)


@app.post("/students/")
def create_user(new_student:StudentDetails, db: Session = Depends(get_db)):
    try:
        new_user = User(
            firstName=  new_student.firstName,
            middleName=  new_student.middleName,
            lastName=  new_student.lastName,
            email=  new_student.email,
            address=  new_student.address,
            phone= new_student.phone,
            guardianPhone= new_student.guardianPhone,
            gender=  new_student.gender,
            dob=  new_student.dob,
            country=  new_student.country,
            state=  new_student.state,
            zip=  new_student.zip,
            status = new_student.status
        )

        db.add(new_user)

        db.flush()
        new_academics = Academics(
            user_id=new_user.id,
            class_name=new_student.class_name,
            division=new_student.division,
            subjects=new_student.subjects,
            batch=new_student.batch
        )

        db.add(new_academics)
        db.commit()
        db.refresh(new_user)
        db.refresh(new_academics)

        return {

            "message":
                "Student admission submitted successfully",

            "user_id":
                new_user.id,

            "academic_id":
                new_academics.id
        }
    except Exception as error :
        db.rollback()
        raise HTTPException( status_code=500, detail=str(error))

