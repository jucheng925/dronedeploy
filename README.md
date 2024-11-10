# Drone Deploy

# How to get started

Go into client folder `cd client`

Install the require packages (client-side) using `npm install`.

To run the react server: `npm run dev` 
It will be running on the default port 5173.

---

Go into the server folder from the root directory `cd server`

Install the require packages (server-side) using `pipenv install`

Enter the virtual environment by `pipenv shell`. 

To prepopulate the database with seed data, run `python seed.py` in the server folder.

To run the backend server `python app.py` which will be running on port 5555.