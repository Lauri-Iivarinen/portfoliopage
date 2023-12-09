*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Display size defines mobile view
    Given User has homepage open in browser
    Wait Until Element Is Not Visible   xpath://button[@name="mobileHeader"]
    Set Window Size    430    670
    Wait Until Element Is Visible   xpath://button[@name="mobileHeader"]

Header button opens menu
    Wait Until Element Is Visible   xpath://button[@name="mobileHeader"]
    Wait Until Element Is Not Visible   xpath://button[@name="BIOMobile"]
    Click Button    xpath://button[@name="mobileHeader"]
    Wait Until Element Is Visible   xpath://button[@name="BIOMobile"]