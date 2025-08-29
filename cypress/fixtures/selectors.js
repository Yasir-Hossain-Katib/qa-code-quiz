export const LoginSelectors = {
    HEADER_TEXT: "div[class='sc-bdVaJa cCkHTg'] div",
    USERNAME_INPUT: "input[placeholder='Enter Username']",
    PASSWORD_INPUT: "input[placeholder='password']",
    LOGIN_BUTTON: "button:contains('LOGIN')",
    NOT_HAVE_ACCOUNT_TEXT: "div:contains('If you do not have an account, contact an admin')"
}

export const AccountSelectors = {
    ACCOUNT_HEADER: "div:contains('Hello')",
    NAME: "//div[normalize-space()='Name']",
    NAME1:"//div[normalize-space()='SomeName']",
    FAVOURITE_FRUIT: "//div[normalize-space()='Favourite Fruit']",
    FRUIT1:"//div[normalize-space()='some fruit']",
    FRUIT2:"//div[normalize-space()='Mango']",
    FAVOURITE_MOVIE: "//div[normalize-space()='Favourite Movie']",
    MOVIE1:"//div[normalize-space()='The Room']",
    MOVIE2:"//div[normalize-space()='V for Vendetta']",
    FAVOURITE_NUMBER: "//div[normalize-space()='Favourite Number']",
    NUMBER1:"//div[normalize-space()='BN<1234>']",
    NUMBER2:"//div[normalize-space()='The last prime number']",
    LOGOUT_BUTTON: "button:contains('LOGOUT')"
}
