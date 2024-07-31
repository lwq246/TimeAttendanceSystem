from pydantic import BaseModel

class ShiftSection(BaseModel):
    sectioncode: str
    description: str