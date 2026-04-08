# Cross-Exchange Arbitrage Scanner

Live price spreads across 7 African exchanges for every crypto-fiat pair. See where BTC/NGN, USDT/ZAR, and other pairs price differently — in real time.

## Live Demo

[moxiemetrx.com/arbitrage-scanner](https://moxiemetrx.com/arbitrage-scanner)

## Run Locally

```bash
git clone https://github.com/zlac116/moxie-examples.git
cd moxie-examples/arbitrage-scanner
```

1. Get an API key at [moxiemetrx.com/signup](https://moxiemetrx.com/signup) (Builder tier recommended for source transparency)
2. Open `index.html` in a text editor
3. Replace `%%BUILDER_API_KEY%%` with your key
4. Open `index.html` in a browser

No build step, no dependencies, no server — just one HTML file.

```bash
# Or serve with Python
python3 -m http.server 8080
# Open http://localhost:8080
```

## What It Shows

For each pair with 2+ exchange sources:
- **Spread %** — price difference between cheapest and most expensive exchange
- **Buy side** — cheapest exchange and price
- **Sell side** — most expensive exchange and price
- **Source count** — how many exchanges are quoting this pair

Sort by highest spread, pair name, or most sources.

## Example Spreads

| Pair | Spread | Buy | Sell |
|------|--------|-----|------|
| USDCNGN | ~4% | Busha | Luno |
| BTCKES | ~3.5% | Busha | Ovex |
| BTCNGN | ~3% | Busha | Ovex |
| XRPNGN | ~3% | Luno | Quidax |
| BTCZAR | ~0.9% | AltCoinTrader | Ovex |

Spreads update every 60 seconds. Actual values vary.

## Important Disclaimer

These spreads are based on displayed mid-market prices, not executable order book prices. Actual execution includes exchange fees (0.1-0.5%), withdrawal fees, transfer time (10-60 min), and slippage. A 2% displayed spread may yield 0-1% after all costs.

## Links

- [API docs](https://docs.moxiemetrx.com)
- [Research: South Africa vs Nigeria Market Efficiency](https://docs.moxiemetrx.com/blog/african-crypto-market-efficiency)
