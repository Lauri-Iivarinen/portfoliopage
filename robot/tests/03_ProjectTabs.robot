*** Settings ***
Resource    keywords.robot
Suite Teardown    Close all browsers


*** Test Cases ***
Projects render data and can be searched
    Given User has home page open in browser
    When User navigates to projects page
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Groupcalendar')]
    Input text  xpath://input[@name="SearchField"]  recommendations
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Groupcalendar')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Movie Recommendations')]

Projects can be searched by description
    Click Element   xpath://*[@id="mui-component-select-SearchBy"]
    Wait Until Element Is Visible   xpath://*[@id=":r3:"]/li[2]
    Click Element   xpath://*[@id=":r3:"]/li[2]
    Wait Until Element Is Not Visible    xpath://*[@id=":r3:"]/li[2]
    Input text  xpath://input[@name="SearchField"]  a fun
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Movie Recommendations')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]

Projects can be searched by technology
    Click Element   xpath://*[@id="mui-component-select-SearchBy"]
    Wait Until Element Is Visible   xpath://*[@id=":r3:"]/li[3]
    Click Element   xpath://*[@id=":r3:"]/li[3]
    Wait Until Element Is Not Visible    xpath://*[@id=":r3:"]/li[3]
    Input text  xpath://input[@name="SearchField"]  docker
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Warspear Offline')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Efilibrary')]

Search function can be reset
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Warspear Offline')] 
    When User resets search functions
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]

Projects can be filtered with type
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]
    When User sets type filter to personal
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Warspear Offline')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Discord Bot')]
    When User sets type filter to school
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Discord Bot')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]

Projects can be filtered with group type
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]
    When User sets group filter to group
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Warspear Offline')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Mobile Chess Game')]
    When User sets group filter to solo
    Wait Until Element Is Not Visible   xpath://*[contains(text(), 'Mobile Chess Game')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Ground Source Heat Pump')]



*** Keywords ***
User resets search functions
    Click Button    xpath://button[contains(text(), 'Reset filters')]
    Wait Until Element Is Visible   xpath://*[contains(text(), 'Warspear Offline')]

User sets type filter to personal
    Click Element   xpath://*[@id="mui-component-select-FilterByType"]
    Wait Until Element Is Visible   xpath://*[@id=":r5:"]/li[2]
    Click Element   xpath://*[@id=":r5:"]/li[2]
    Wait Until Element Is Not Visible   xpath://*[@id=":r5:"]/li[2]

User sets type filter to school
    Click Element   xpath://*[@id="mui-component-select-FilterByType"]
    Wait Until Element Is Visible   xpath://*[@id=":r5:"]/li[3]
    Click Element   xpath://*[@id=":r5:"]/li[3]
    Wait Until Element Is Not Visible   xpath://*[@id=":r5:"]/li[3]

User sets group filter to group
    Click Element   xpath://*[@id="mui-component-select-FilterByGroup"]
    Wait Until Element Is Visible   xpath://*[@id=":r7:"]/li[2]
    Click Element   xpath://*[@id=":r7:"]/li[2]
    Wait Until Element Is Not Visible   xpath://*[@id=":r7:"]/li[2]

    
User sets group filter to solo
    Click Element   xpath://*[@id="mui-component-select-FilterByGroup"]
    Wait Until Element Is Visible   xpath://*[@id=":r7:"]/li[3]
    Click Element   xpath://*[@id=":r7:"]/li[3]
    Wait Until Element Is Not Visible   xpath://*[@id=":r7:"]/li[3]
    
