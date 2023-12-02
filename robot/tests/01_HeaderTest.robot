*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
User can navigate to work experience page
    Given User has home page open in browser
    When User navigates to work page
    Wait Until Element Is Visible    xpath://*[contains(text(), 'Gymnastics instructor')]

User can navigate to bio page
    When User navigates to bio page
    Wait Until Element Is Visible    xpath://*[contains(text(), 'Who am I?')]

User can navigate to projects page
    When User navigates to projects page
    Wait Until Element Is Visible    xpath://*[contains(text(), 'These are projects')]


*** Keywords ***
User navigates to work page
    Click Element   xpath://*[@href="/career"]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]

User navigates to bio page
    Click Element   xpath://*[@href='/']
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]


    