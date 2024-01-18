# Crypto Price Tracker Project Overview:

This project is a web-based Crypto Price Tracker that allows users to dynamically select a cryptocurrency from a pre-fetched list and view its real-time price in US dollars. The application utilizes the CoinGecko API, a popular cryptocurrency data provider, to fetch information about various cryptocurrencies.

Key Features:

Dynamic Cryptocurrency Selection:
The project provides users with a dropdown menu (<select> element) populated with a list of cryptocurrencies retrieved from the CoinGecko API.
Cryptocurrency options include both the unique identifier (id) and the display name (name).


Initialization on DOM Load:
The application ensures that the Crypto Select dropdown is populated with cryptocurrency options only after the DOM content has fully loaded. This is achieved using the DOMContentLoaded event listener.


Fetching Cryptocurrency List:
The initializeCryptoSelect function fetches the list of cryptocurrencies from the CoinGecko API and dynamically creates <option> elements for each cryptocurrency. These options are then added to the Crypto Select dropdown.


Displaying Cryptocurrency Prices:
Users can select a cryptocurrency from the dropdown, triggering the getCryptoPrice function.
The selected cryptocurrency's ID is used to fetch its real-time price from the CoinGecko API.
The retrieved price is then displayed in a designated HTML element with the id price, including the cryptocurrency's name for better user understanding.


Error Handling:
The application incorporates error handling mechanisms to log any issues that may occur during the API requests, providing useful feedback for debugging.
