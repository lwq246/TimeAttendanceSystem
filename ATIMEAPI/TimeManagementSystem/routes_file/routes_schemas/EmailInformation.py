from pydantic import BaseModel


class EmailInformation(BaseModel):
    email: str
    password: str