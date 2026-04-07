# Rate Attestation Generator

Generate HMAC-SHA256 signed crypto-fiat rate certificates for any pair at any point in time. Tamper-proof, audit-ready, with full data provenance.

## Live Demo

[moxiemetrx.com/attestation](https://moxiemetrx.com/attestation)

## Run Locally

```bash
git clone https://github.com/zlac116/moxie-examples.git
cd moxie-examples/attestation-generator
```

1. Get an Enterprise tier API key at [moxiemetrx.com/signup](https://moxiemetrx.com/signup) (certificates require Enterprise plan)
2. Open `index.html` in a text editor
3. Replace `YOUR_API_KEY_HERE` with your key
4. Open `index.html` in a browser

No build step, no dependencies, no server — just one HTML file.

```bash
# Or serve with Python
python3 -m http.server 8080
# Open http://localhost:8080
```

## What It Shows

Each certificate includes:
- **Rate data** — pair, timestamp, VWAP rate, calculation method, source exchanges
- **Verification** — status (verified/caution/unverified), confidence score, divergence from synthetic benchmark, data quality
- **Cryptographic signature** — HMAC-SHA256 signature over the signed payload, algorithm identifier
- **Signed payload** — the exact JSON that was signed, for independent verification

## Use Cases

- **Auditors** — generate point-in-time rate attestations for financial statement audits
- **Compliance** — cryptographic proof of the rate used in a transaction
- **Accounting** — period-end rate certificates for crypto asset valuation (IFRS 13)
- **Legal** — tamper-proof evidence of exchange rates at specific timestamps

## Note

Rate certificates are an **Enterprise feature** ($999/mo). The certificates endpoint requires an Enterprise tier API key. Free and Builder tier keys will receive a 403 response.

## Links

- [API docs — Certificates endpoint](https://docs.moxiemetrx.com/api-reference/certificates)
- [API docs](https://docs.moxiemetrx.com)
