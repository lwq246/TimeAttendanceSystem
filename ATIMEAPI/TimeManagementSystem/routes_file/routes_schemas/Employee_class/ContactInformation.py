from pydantic import BaseModel
from typing import Optional

class ContactInformation(BaseModel):
    contactno1: Optional[str]
    email: Optional[str]
    contactno2: Optional[str]
    address1: Optional[str]
    address2: Optional[str]
    address3: Optional[str]
    town: Optional[str]
    state: Optional[str]
    country: Optional[str]
    postcode: Optional[str]