@homepage
Feature: user should be navigate all category in homepage
  Scenario Outline: user should be able to navigate  all pages
       Given user is on homepage
    When user click on "<category>" link
    Then user should navigate on "<selected_link>"

    Examples:
      | category | selected_link |
      | computers  | http://demo.nopcommerce.com/computers |
      | electronics | http://demo.nopcommerce.com/electronics |
      | apparel | http://demo.nopcommerce.com/apparel |
      | books | http://demo.nopcommerce.com/books |
