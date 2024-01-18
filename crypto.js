document.addEventListener('DOMContentLoaded', function () {
    initializeCryptoSelect();
});

async function initializeCryptoSelect() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        const data = await response.json();

        const cryptoSelect = document.getElementById('cryptoSelect');

        data.forEach(crypto => {
            const option = document.createElement('option');
            option.value = crypto.id;
            option.text = crypto.name;
            cryptoSelect.add(option);
        });
    } catch (error) {
        console.error('Error fetching cryptocurrency list:', error);
    }
}

async function getCryptoPrice() {
    const cryptoSelect = document.getElementById('cryptoSelect');
    const selectedCrypto = cryptoSelect.value;

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=usd`);
        const data = await response.json();

        const price = document.getElementById('price');
        const selectedCryptoName = cryptoSelect.options[cryptoSelect.selectedIndex].text;
        const cryptoPrice = data[selectedCrypto].usd;

        price.textContent = `${selectedCryptoName} Price: $${cryptoPrice}`;
    } catch (error) {
        console.error('Error fetching cryptocurrency price:', error);
    }
}
