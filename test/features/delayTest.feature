Feature: Delay test

    Scenario: Testing client side delay
        Given Main page is open
        When I click on 'Client Side Delay'
        Then Client side page is open
        When I click on button
        Then 'Data calculated on the client side.' message is displayed