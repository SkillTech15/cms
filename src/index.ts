export default {
  register() {},

  async bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["api::product-enquiry.product-enquiry"],

      async afterCreate(event) {
        const result: any = event.result;
        const enquiryId = result?.id;

        // ✅ Product is TEXT field
        const productTitle = result?.Product || "-";

        const name = result?.Name || "";
        const email = result?.Email || "";
        const phone = result?.Phone || "";
        const message = result?.Message || "";

        // ✅ Direct link to this enquiry entry in Strapi Admin
        const adminBase = process.env.ADMIN_URL || "http://localhost:1337/admin";
        const enquiryLink =
          `${adminBase}/content-manager/collection-types/api::product-enquiry.product-enquiry/${enquiryId}`;

        const subject = `New Product Enquiry - ${productTitle}`;

        const html = `
          <h2>New Product Enquiry</h2>
          <p><b>Product:</b> ${productTitle}</p>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b><br/>${String(message).replace(/\n/g, "<br>")}</p>
          <hr/>
          <p><b>Open in Strapi:</b>
            <a href="${enquiryLink}" target="_blank">${enquiryLink}</a>
          </p>
        `;

        try {
          await strapi.plugin("email").service("email").send({
            to: process.env.ENQUIRY_TO || "skilltech313@gmail.com",
            replyTo: email || undefined,
            subject,
            html,
          });

          console.log("✅ Enquiry email sent to:", process.env.ENQUIRY_TO);
        } catch (err: any) {
          console.log("❌ Email send failed:", err?.message || err);
        }
      },
    });
  },
};