from flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(UserMixin):
    """
    The User class that encapsulates user-related operations.
    """
    def __init__(self, db, username, password=None):
        """
        The constructor for User class.

        Parameters:
           db (obj): The database object.
           username (str): The username of the user.
           password (str): The password of the user (default is None).
        """
        self.db = db
        self.username = username
        self.password = password

    @staticmethod
    def generate_hash(password):
        """
        Generates a hash of the password.

        Parameters:
           password (str): The password to be hashed.
        """
        return generate_password_hash(password).decode('utf-8')

    @staticmethod
    def verify_hash(password, hash):
        """
        Verifies a password against a hash.

        Parameters:
           password (str): The password to be verified.
           hash (str): The hash to be compared against.
        """
        return check_password_hash(hash, password)

    def save(self):
        """
        Saves the user object to the database.
        """
        users = self.db.users
        hash_pass = self.generate_hash(self.password)
        users.insert_one({"username": self.username, "password": hash_pass})

    @classmethod
    def get(cls, db, username):
        """
        Retrieves a user from the database.

        Parameters:
           db (obj): The database object.
           username (str): The username of the user to be retrieved.
        """
        users = db.users
        user_data = users.find_one({"username": username})
        if user_data:
            return cls(db, username, user_data["password"])
        return None
