import psycopg2

DATABASE = 'easydb'
USERNAME = 'postgres'
PASSWORD = 'admin123%'
HOST = '103.6.244.135'
PORT = '5432'

def get_db_connection():
    conn = psycopg2.connect(
        dbname=DATABASE,
        user=USERNAME,
        password=PASSWORD,
        host=HOST,
        port=PORT
    )
    return conn


 