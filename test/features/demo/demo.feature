Feature: Demo feature

    @demo
    Scenario Outline: Run firs demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then Url should match <ExpectedUrl>

        Examples:
            | TestID     | SearchItem | ExpectedUrl           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |