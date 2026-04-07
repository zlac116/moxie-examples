# Stablecoin Premium Monitor

Real-time USDT premium vs official USD exchange rate across 5 African currencies. Auto-refreshes every 60 seconds.

## Live Demo

[moxiemetrx.com/premium-monitor](https://moxiemetrx.com/premium-monitor)

## Run Locally

```bash
git clone https://github.com/zlac116/moxie-examples.git
cd moxie-examples/premium-monitor
```

1. Get an API key at [moxiemetrx.com/signup](https://moxiemetrx.com/signup) (Builder tier recommended for synthetic rate access)
2. Open `index.html` in a text editor
3. Replace `YOUR_API_KEY_HERE` with your key
4. Open `index.html` in a browser

No build step, no dependencies, no server — just one HTML file.

```bash
# Or serve with Python
python3 -m http.server 8080
# Open http://localhost:8080
```

**Note:** The premium calculation uses the synthetic rate (official FX rate) from the API. Free tier will fall back to an estimate. Builder tier ($49/mo) gives the exact official rate via `include_synthetic=true`.

## What It Shows

| Currency | What You See |
|----------|-------------|
| Ghana (GHS) | ~5-6% premium — tightest FX controls |
| Nigeria (NGN) | ~1-2% premium — parallel market signal |
| Kenya (KES) | ~0.5-1.5% premium |
| Uganda (UGX) | ~0.5-1% premium |
| South Africa (ZAR) | ~0.5% premium — most open market |

## Links

- [API docs](https://docs.moxiemetrx.com)
- [Research: The African Stablecoin Premium](https://docs.moxiemetrx.com/blog/stablecoin-premium-africa)
