*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Contact component works as intended
    Click Element   xpath://*[@id="root"]/div/div[1]/header/div/button[5]
    Wait Until Element Is Visible    xpath://*[contains(text(), 'Name:')]
    Wait Until Element Is Not Visible    xpath://*[contains(text(), 'contact:')]
    Click Button    xpath://*[@id="root"]/div/div[2]/div[6]/div/div/div[2]/button[2]
    Wait Until Element Is Visible    xpath://*[contains(text(), 'contact: ')]
    Click Button    xpath://*[@id="root"]/div/div[2]/div[6]/div/div/div[2]/button[1]
    Wait Until Element Is Not Visible    xpath://*[contains(text(), 'contact: ')]