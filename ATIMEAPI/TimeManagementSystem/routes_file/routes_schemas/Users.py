from pydantic import BaseModel
from datetime import datetime
from typing import Optional
class users(BaseModel):
    users_rno: int
    license_rno: int
    username: str
    email: str
    passwordquestion: Optional[str]
    passwordanswer: Optional[str]
    IsApproved: Optional[bool]  # Make this field optional
    LastActivityDate: Optional[datetime]
    LastLoginDate: Optional[datetime]
    LastPasswordChangedDate: Optional[datetime]
    IsLockedOut: Optional[bool]  # Make this field optional
    LastLockedOutDate: Optional[datetime]
    FailedPasswordAttemptCount: Optional[int]
    FailedPasswordAnswerAttemptCount: Optional[int]
    Latitude: Optional[str]
    Longitude: Optional[str]
    createdon: Optional[datetime]  # Make this field optional
    LoweredEmail: Optional[str]
    picture: Optional[str]
    emailactivatelink: Optional[str]  # Make this field optional