export default () => ({
  port: parseInt(String(process.env.PORT), 10) || 3000,
  database: {
    url: String(process.env.DATABASE_URL) || 'file:./dev.db',
  },
});
