// run();

// const event = {
//   name: "Lura VPN Campaign",
// };

// const footerContactInfo = {
//   company: "Lura VPN",
//   address1: "15, Bayo Oyewale Street",
//   address2: "Same as above",
//   city: "Lagos",
//   state: "Lagos",
//   zip: "10026",
//   country: "NG",
// };

// const campaignDefaults = {
//   from_name: "Lura VPN",
//   from_email: "gaiusolawale@yahoo.com",
//   subject: "Lura First Campaign",
//   language: "EN_US",
// };

// async function run() {
//   const response = await mailchimp.lists.createList({
//     name: event.name,
//     contact: footerContactInfo,
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     campaign_defaults: campaignDefaults,
//   });

//   console.log(
//     `Successfully created an audience. The audience id is ${response.id}.`
//   );
// }

// const OfferEmailCampaign = () => {
//   const mailchimp = require("@mailchimp/mailchimp_marketing");

//   mailchimp.setConfig({
//     apiKey: process.env.REACT_APP_KEY,
//     server:  process.env.REACT_APP_SERVER 
//   });
//   async function run() {
//     const response = await mailchimp.ping.get();
//     console.log(response);
//   }
//   run();
//   return <div>OfferEmailCampaign</div>;
// };

// export default OfferEmailCampaign;
