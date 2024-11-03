*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Browser opens inside docker
    When User has home page open in browser
    Wait Until Element Is Visible    xpath://*[contains(text(), "My name is Lauri and I'm an enthusiastic, IT professional. I currently work as a technical consultant at Apix Messaging Oy.")]
