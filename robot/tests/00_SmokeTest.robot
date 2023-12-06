*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Browser opens inside docker
    When User has home page open in browser
    Wait Until Element Is Visible    xpath://*[contains(text(), "My name is Lauri and I'm an enthusiastic, up-and-coming software developer looking for an internship.")]