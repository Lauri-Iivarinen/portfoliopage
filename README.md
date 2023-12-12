# Personal portfolio to showcase all the projects I've been working on in the past few years



# Features 😎

### ▶️ <a href="https://iivarinen-lauri-8db9db2f7a51.herokuapp.com/">Demo</a> ◀️

### Backend for the project can be found ▶️ <a href="https://github.com/Lauri-Iivarinen/portfolioback"> Here </a>

 - Small bio
 - Career timeline
 - Interactive project listings (search/filter/paginate)
 - GitHub stats
 - Contact details
 - Mobile responsive layoput and header

# Screenshots


  <img width="400" alt="Näyttökuva 2023-12-12 kello 21 44 31" src="https://github.com/Lauri-Iivarinen/portfoliopage/assets/94760484/036eb13e-355e-45ea-ad80-b86fb9515e3c">
  <img width="400" alt="Näyttökuva 2023-12-12 kello 21 45 05" src="https://github.com/Lauri-Iivarinen/portfoliopage/assets/94760484/5063956f-1c05-4f79-b531-943f807a7487">
  <img width="300" alt="Näyttökuva 2023-12-8 kello 20 39 51" src="https://github.com/Lauri-Iivarinen/portfoliopage/assets/94760484/20e4d2cd-1782-4c93-8a2a-c15c17c474d3">


# Running the project

 - Clone repository
 - Run command to install packages
   ```
    npm install
   ```
 - Run command to build the app
   ```
    npm run build
   ```
 - Start the service by running command:
   ```
    npm start
   ```

# Testing
Tests are done using Docker containers therefore running tests requires <a href="https://www.docker.com/">Docker</a> to be installed

To run the tests use command:
  ```
    docker compose up -d
  ```
Using ```-d``` to detach test output from console is optional

# Workflow
The project uses GitHub <a href="https://github.com/Lauri-Iivarinen/portfoliopage/actions">actions</a> to ensure working pushes to main and to allow automatic deployments to Heroku


