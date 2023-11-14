*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Tabs render data and can be navigated
    Given User has home page open in browser
    When User navigates to projects page
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Groupcalendar')]
    Click Button    xpath://*[@id="root"]/div/div[2]/div[1]/div/div/button[2]
    Wait Until Element Is Visible   xpath://*[@id="root"]/div/div[2]/div[3]/div/div/p[4]
