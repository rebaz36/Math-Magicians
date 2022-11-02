const QuoteData = [
  {
    quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse',
  },
];

export default class GetQuotes {
  constructor() {
    this.Quote = QuoteData;
  }

  getRandomQuote() {
    return this.Quote[Math.floor(Math.random() * this.Quote.length)];
  }
}
