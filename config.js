const config = {
  details: {
    application_name: 'whattheysaid-api',
    port: 8080,
  },
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "wts-test-db.clq3mntuxry8.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "AxMgNRDsNEfqE#J4",
    database: "primary",
  },
  listPerPage: 10,
};

export default config;
