# moxiemetrx Examples

Open-source demos built with the [MoxieMetrx API](https://moxiemetrx.com) — real-time crypto-to-fiat exchange rates for African markets.

## Demos

| Demo | Description | Live |
|------|-------------|------|
| [Stablecoin Premium Monitor](./premium-monitor) | Real-time USDT premium vs official USD rate across 5 African currencies | [View](https://moxiemetrx.com/premium-monitor) |
| [Remittance Cost Calculator](./remittance-calculator) | Compare crypto vs traditional remittance costs to Africa | [View](https://moxiemetrx.com/remittance-calculator) |
| [Google Sheets Dashboard](./google-sheets-dashboard) | Live crypto-fiat rates in Google Sheets with Apps Script | [Setup](https://moxiemetrx.com/gsheet-template) |

## Get Started

All demos use the MoxieMetrx API. Get a free key (5,000 requests/month, no credit card):

```bash
curl -X POST https://api.moxiemetrx.com/v1/auth/free-key \
  -H "Content-Type: application/json" \
  -d '{"customer_name": "my-app", "email": "you@email.com"}'
```

## Links

- [API Documentation](https://docs.moxiemetrx.com)
- [Research Blog](https://docs.moxiemetrx.com/blog)
- [Interactive API Playground](https://api.moxiemetrx.com/docs)
- [All Demos](https://moxiemetrx.com/demos)

## License

MIT
