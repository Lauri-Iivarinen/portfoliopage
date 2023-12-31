*** Settings ***
Resource    resources.robot


*** Variables ***
${URL}              http://172.17.0.1:3000    # Localhost port 3000
${BROWSER}          headlesschrome


*** Keywords ***
User has home page open in browser
    Open Browser    url=${URL}    browser=${BROWSER}    options=add_argument("--no-sandbox")
    Set Window Size    1920    1080

User navigates to projects page
    Click Element   xpath://*[@id="root"]/div/div[1]/header/div/div[2]/button[3]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]

User navigates to homepage
    Click Element   xpath://*[@id="root"]/div/div[1]/header/div/div[2]/button[1]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]
