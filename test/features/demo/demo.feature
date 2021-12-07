Feature: Demo feature google example

@Demo
    Scenario Outline: Scenario google data search
        Given google is open
        When i enter <searchKey> 
        Then click on the first link
        Then Url should match <expectedurl>
    
        Examples:
        | TestID | searchKey | expectedurl |
        | TS_1  | wdio  | https://webdriver.io/ |