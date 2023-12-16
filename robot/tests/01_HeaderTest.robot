*** Settings ***
Resource    keywords.robot


*** Test Cases ***
User can navigate to work experience page
    Given User has home page open in browser
    When User navigates to work page
    Wait Until Element Is Visible    xpath://*[contains(text(), 'Gymnastics instructor')]

User can navigate to bio page
    When User navigates to bio page
    Wait Until Element Is Visible    xpath://*[contains(text(), "My name is Lauri and I'm an enthusiastic, up-and-coming full-stack developer looking for an internship.")]

User can navigate to projects page
    When User navigates to projects page
    Wait Until Element Is Visible    xpath://*[contains(text(), 'EfiLibrary')]


*** Keywords ***
User navigates to work page
    Click Element   xpath://*[@id="root"]/div/div[1]/header/div/button[2]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]

User navigates to bio page
    Click Element   xpath://*[@id="root"]/div/div[1]/header/div/button[1]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]


    