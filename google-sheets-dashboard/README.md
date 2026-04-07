# Google Sheets Live FX Dashboard

Get live African crypto-fiat rates auto-refreshing in your Google Sheet.

## Setup (2 minutes)

1. Get a free API key at [moxiemetrx.com/signup](https://moxiemetrx.com/signup)
2. Open Google Sheets → Extensions → Apps Script
3. Paste the code from `script.gs` below
4. Replace `YOUR_API_KEY_HERE` with your key
5. Click Run → `getMoxieRates`
6. (Optional) Run `createTrigger` once for auto-refresh every 5 minutes

## The Script

See `script.gs` in this directory.

## What You Get

| Column | Data |
|--------|------|
| Pair | e.g. BTCNGN, USDTZAR |
| Rate | VWAP from up to 4 exchanges |
| Status | verified / caution / unverified |
| Sources | Number of exchanges |
| Updated | Timestamp |

## Free Tier Limits

- 5,000 requests/month
- 10 requests/minute
- At 5-min auto-refresh = ~8,640 requests/month (needs Builder tier at $49/mo)
- Manual refresh = free tier is plenty

## Links

- [Live demo](https://moxiemetrx.com/gsheet-template)
- [API docs](https://docs.moxiemetrx.com)
- [Get API key](https://moxiemetrx.com/signup)
