Feature: Sample feature

  Scenario: Navigate to a page and check the title
    Given I navigate to "https://playwright.dev/"
    Then the title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
