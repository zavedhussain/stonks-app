# 📈STONKS

STONKS is a stock tracking app.

Check the stats of your favourite stock by providing the stock symbol and date. See if your stock went up (stonks) or went down (anti-stonks).

## Back-end

Built with Node/Express

Fetches the stock statistics of a stock from (https://polygon.io/) using [axios](https://axios-http.com/docs/api_intro) library.

Stock data is exposed to endpoint "/api/fetchStockData".

## Front-end

Built with React and Styled-components.

Landing page has a search form which displays stock stats or error based on inputs.

### Search Form

![form](/screenshots/form.jpg?raw=true)

### Stock

![Alt text](/screenshots/result.jpg?raw=true)

### Error

![Alt text](/screenshots/error.jpg?raw=true)

## Setup

Clone repo.

### Back-end Setup

Set Polygon API key in `.env` file

```
API_SECRET=
```

```
cd server
npm install
npm start
```

### Front-end Setup

```
cd client
npm install
npm start
```

## Optional tasks

1. Imagine this is a real world scenario which thousands of users use to get the historic data of a stock for a particular day, how would this product change in order to improve the UX.

- Rate Limit the API endpoint
- Use a Load-Balancer to distribute the request load.
- Use a Caching mechanism to optimize fetching.
- Scale horizontally by adding more servers
- Use CDNs for serving the front-end.

2. What new features would you add in this product to increase it's utility for the end user.

- Provide overtime data instead of 1-day data.
- Use Charts to display the changing stock value
- Allow multiple requests to be made and compare the stock values
- Show the most popular stock values in the Landing page.
