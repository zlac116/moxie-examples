# Remittance Cost Calculator

Compare the real cost of sending money to Africa via crypto (USDT) vs traditional channels (Western Union, banks).

## Live Demo

[moxiemetrx.com/remittance-calculator](https://moxiemetrx.com/remittance-calculator)

## Run Locally

```bash
git clone https://github.com/zlac116/moxie-examples.git
cd moxie-examples/remittance-calculator
```

1. Get a free API key at [moxiemetrx.com/signup](https://moxiemetrx.com/signup)
2. Open `index.html` in a text editor
3. Replace `%%BUILDER_API_KEY%%` with your key
4. Open `index.html` in a browser

No build step, no dependencies, no server — just one HTML file.

```bash
# Or serve with Python
python3 -m http.server 8080
# Open http://localhost:8080
```

## How It Works

- Fetches live USDT/NGN, USDT/ZAR, USDT/KES, USDT/GHS, USDT/UGX rates from the moxiemetrx API
- Compares the stablecoin premium (crypto cost) vs World Bank average remittance costs (traditional cost)
- Shows savings per transfer

## Links

- [API docs](https://docs.moxiemetrx.com)
- [Research: The African Stablecoin Premium](https://docs.moxiemetrx.com/blog/stablecoin-premium-africa)
