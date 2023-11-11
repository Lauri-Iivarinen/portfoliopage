*** Settings ***
Resource    resources.robot


*** Variables ***
${URL}              http://host.docker.internal:3000    # Localhost port 3000
${BROWSER}          headlesschrome


*** Keywords ***
User has home page open in browser
    Open Browser    url=${URL}    browser=${BROWSER}    options=add_argument("--no-sandbox")
    Set Window Size    1920    1080
