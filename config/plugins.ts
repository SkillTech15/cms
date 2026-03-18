export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env.int("SMTP_PORT"),
        secure: env.bool("SMTP_SECURE", false),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_FROM", "no-reply@yourdomain.com"),
        defaultReplyTo: env("SMTP_REPLYTO", "sales@yourdomain.com"),
      },
    },
  },
});