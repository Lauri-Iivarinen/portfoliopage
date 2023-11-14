*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Contact component works as intended
    Given User has home page open in browser
    Wait Until Element Is Visible    xpath://*[contains(text(), 'contact: ')]
    Click Button    xpath://*[@id="root"]/div/div[2]/div/div/div[2]/button[2]
    Wait Until Element Is Not Visible    xpath://*[contains(text(), 'contact: ')]
    Wait Until Element Is Visible    xpath://*[contains(text(), 'lauri.iivarinen@gmail.com')]
    Click Button    xpath://*[@id="root"]/div/div[2]/div/div/div[2]/button[1]
    Wait Until Element Is Visible    xpath://*[contains(text(), 'contact: ')]