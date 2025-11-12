export default () => ({
  port: parseInt(String(process.env.PORT), 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(String(process.env.DATABASE_URL), 10) || 5432
  },
});
