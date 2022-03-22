module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1cef254f46ec96cc873344c020e3e4fb'),
  },
});
