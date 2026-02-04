import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <style
            dangerouslySetInnerHTML={{
              __html: `
                [data-custom-class='body'], [data-custom-class='body'] * {
                  background: transparent !important;
                }
                [data-custom-class='title'], [data-custom-class='title'] * {
                  font-family: Arial !important;
                  font-size: 26px !important;
                  color: #000000 !important;
                }
                [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
                  font-family: Arial !important;
                  color: #595959 !important;
                  font-size: 14px !important;
                }
                [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
                  font-family: Arial !important;
                  font-size: 19px !important;
                  color: #000000 !important;
                }
                [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
                  font-family: Arial !important;
                  font-size: 17px !important;
                  color: #000000 !important;
                }
                [data-custom-class='body_text'], [data-custom-class='body_text'] * {
                  color: #595959 !important;
                  font-size: 14px !important;
                  font-family: Arial !important;
                }
                [data-custom-class='link'], [data-custom-class='link'] * {
                  color: #3030F1 !important;
                  font-size: 14px !important;
                  font-family: Arial !important;
                  word-break: break-word !important;
                }
                .privacy-content ul {
                  list-style-type: square;
                }
                .privacy-content ul > li > ul {
                  list-style-type: circle;
                }
                .privacy-content ul > li > ul > li > ul {
                  list-style-type: square;
                }
                .privacy-content ol li {
                  font-family: Arial;
                }
                .privacy-content h1, .privacy-content h2, .privacy-content h3 {
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                }
                .privacy-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 1em 0;
                }
                .privacy-content th, .privacy-content td {
                  padding: 8px 12px;
                  text-align: left;
                  border: 1px solid black;
                }
              `,
            }}
          />
          <div data-custom-class="body" className="privacy-content">
            <div>
              <strong>
                <span style={{ fontSize: "26px" }}>
                  <span data-custom-class="title">
                    <h1>PRIVACY POLICY</h1>
                  </span>
                </span>
              </strong>
            </div>
            <div>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <strong>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="subtitle">
                      Last updated February 03, 2026
                    </span>
                  </span>
                </strong>
              </span>
            </div>
            <div>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  This Privacy Notice for Faev Inc (&quot;
                  <strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or
                  &quot;<strong>our</strong>&quot;), describes how and why we
                  might access, collect, store, use, and/or share (&quot;
                  <strong>process</strong>&quot;) your personal information when
                  you use our services (&quot;<strong>Services</strong>&quot;),
                  including when you:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    Visit our website at{" "}
                    <a
                      href="https://faev.app"
                      target="_blank"
                      data-custom-class="link"
                    >
                      https://faev.app
                    </a>{" "}
                    or any website of ours that links to this Privacy Notice
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  Use Faev App. Faev is a web-based technology platform that helps individuals find compatible roommates, form apartment-hunting groups, and fill open rooms, while enabling verified real-estate brokers and property managers to connect with qualified, ready-to-rent groups.
                </span>
                <br /><br />
                <span style={{ fontSize: "15px" }}>
                  Users create profiles and complete lifestyle-based onboarding to discover compatibility-based housing matches, coordinate group apartment searches, and express interest in listings. Faev processes user-provided lifestyle data to generate compatibility recommendations.
                </span>
                <br /><br />
                <span style={{ fontSize: "15px" }}>
                  Faev uses third-party identity verification through Didit to promote safety. Faev does not perform background checks and does not collect or store government-issued identification documents. Brokers and property managers are verified through license checks and manual review.
                </span>
                <br /><br />
                <span style={{ fontSize: "15px" }}>
                  Faev is a technology platform only and does not act as a real-estate broker or property manager, does not negotiate leases, and does not collect rent or fees related to housing transactions. All arrangements, communications, and housing decisions between users, brokers, and property managers occur at their own discretion.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    Engage with us in other related ways, including any
                    marketing or events
                  </span>
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>Questions or concerns?</strong> Reading this Privacy
                  Notice will help you understand your privacy rights and
                  choices. We are responsible for making decisions about how
                  your personal information is processed. If you do not agree
                  with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  .
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <strong>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="heading_1">
                    <h2>SUMMARY OF KEY POINTS</h2>
                  </span>
                </span>
              </strong>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>
                      This summary provides key points from our Privacy Notice,
                      but you can find out more details about any of these
                      topics by clicking the link following each key point or by
                      using our table of contents below to find the section you
                      are looking for.
                    </em>
                  </strong>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>What personal information do we process?</strong> When
                  you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use. Learn more about{" "}
                  <a data-custom-class="link" href="#personalinfo">
                    personal information you disclose to us
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    Do we process any sensitive personal information?
                  </strong>{" "}
                  We do not process sensitive personal information.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    Do we collect any information from third parties?
                  </strong>{" "}
                  We do not collect any information from third parties.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>How do we process your information?</strong> We
                  process your information to provide, improve, and administer
                  our Services, communicate with you, for security and fraud
                  prevention, and to comply with law. We may also process your
                  information for other purposes with your consent. Learn more about{" "}
                  <a data-custom-class="link" href="#infouse">
                    how we process your information
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    In what situations and with which types of parties do we
                    share personal information?
                  </strong>{" "}
                  We may share information in specific situations and with
                  specific categories of third parties. Learn more about{" "}
                  <a data-custom-class="link" href="#whoshare">
                    when and with whom we share your personal information
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>How do we keep your information safe?</strong> We have
                  adequate organizational and technical processes and procedures
                  in place to protect your personal information. However, no
                  electronic transmission over the internet or information
                  storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about{" "}
                  <a data-custom-class="link" href="#infosafe">
                    how we keep your information safe
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>What are your rights?</strong> Depending on where you
                  are located geographically, the applicable privacy law may
                  mean you have certain rights regarding your personal
                  information. Learn more about{" "}
                  <a data-custom-class="link" href="#privacyrights">
                    your privacy rights
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>How do you exercise your rights?</strong> The easiest
                  way to exercise your rights is by visiting{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Want to learn more about what we do with any information we collect?{" "}
                  <a data-custom-class="link" href="#toc">
                    Review the Privacy Notice in full
                  </a>
                  .
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div id="toc" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  <strong>
                    <span data-custom-class="heading_1">
                      <h2>TABLE OF CONTENTS</h2>
                    </span>
                  </strong>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#infocollect">
                  1. WHAT INFORMATION DO WE COLLECT?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#infouse">
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#whoshare">
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#cookies">
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#ai">
                  5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#inforetain">
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#infosafe">
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#infominors">
                  8. DO WE COLLECT INFORMATION FROM MINORS?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#privacyrights">
                  9. WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#DNT">
                  10. CONTROLS FOR DO-NOT-TRACK FEATURES
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#uslaws">
                  11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <a data-custom-class="link" href="#policyupdates">
                  12. DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#contact">
                <span style={{ fontSize: "15px" }}>
                  13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </span>
              </a>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href="#request">
                <span style={{ fontSize: "15px" }}>
                  14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </span>
              </a>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div id="infocollect" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
                  </span>
                </strong>
              </span>
              <span data-custom-class="heading_2" id="personalinfo" style={{ color: "rgb(0, 0, 0)" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>
                    <h3>Personal information you disclose to us</h3>
                  </strong>
                </span>
              </span>
              <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We collect personal information that you provide to us.</em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>Personal Information Provided by You.</strong> The
                  personal information that we collect depends on the context of
                  your interactions with us and the Services, the choices you
                  make, and the products and features you use. The personal
                  information we collect may include the following:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  names
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  phone numbers
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  email addresses
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  mailing addresses
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  job titles
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  passwords
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  usernames
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  contact preferences
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  billing addresses
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  contact or authentication data
                </span>
              </li>
            </ul>
            <div id="sensitiveinfo" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>Sensitive Information.</strong> We do not process
                  sensitive information.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>Payment Data.</strong> We may collect data necessary
                  to process your payment if you choose to make purchases, such
                  as your payment instrument number, and the security code
                  associated with your payment instrument. All payment data is
                  handled and stored by Stripe. You may find their privacy
                  notice link(s) here:{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    data-custom-class="link"
                  >
                    https://stripe.com/privacy
                  </a>
                  .
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <span
                data-custom-class="heading_2"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                <span style={{ fontSize: "15px" }}>
                  <strong>
                    <h3>Information automatically collected</h3>
                  </strong>
                </span>
              </span>
              <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    Some information — such as your Internet Protocol (IP)
                    address and/or browser and device characteristics — is
                    collected automatically when you visit our Services.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  Like many businesses, we also collect information through
                  cookies and similar technologies.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  The information we collect includes:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <em>Log and Usage Data.</em> Log and usage data is
                  service-related, diagnostic, usage, and performance
                  information our servers automatically collect when you access
                  or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <em>Device Data.</em> We collect device data such as
                  information about your computer, phone, tablet, or other
                  device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <em>Location Data.</em> We collect location data such as
                  information about your device&apos;s location, which can be either
                  precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                </span>
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>Google API</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  Our use of information received from Google APIs will adhere to{" "}
                </span>
              </span>
              <a
                data-custom-class="link"
                href="https://developers.google.com/terms/api-services-user-data-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    Google API Services User Data Policy
                  </span>
                </span>
              </a>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">, including the </span>
              </span>
              <a
                data-custom-class="link"
                href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    Limited Use requirements
                  </span>
                </span>
              </a>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">.</span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div id="infouse" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We process your information to provide, improve, and
                    administer our Services, communicate with you, for security
                    and fraud prevention, and to comply with law. We may also
                    process your information for other purposes with your
                    consent.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    We process your personal information for a variety of
                    reasons, depending on how you interact with our Services,
                    including:
                  </strong>
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts.
                  </strong>{" "}
                  We may process your information so you can create and log in to your account, as well as keep your account in working order.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To deliver and facilitate delivery of services to the user.
                  </strong>{" "}
                  We may process your information to provide you with the requested service.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To respond to user inquiries/offer support to users.
                  </strong>{" "}
                  We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To send administrative information to you.</strong>{" "}
                  We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To fulfill and manage your orders.</strong>{" "}
                  We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To enable user-to-user communications.</strong>{" "}
                  We may process your information if you choose to use any of our offerings that allow for communication with another user.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To request feedback.</strong>{" "}
                  We may process your information when necessary to request feedback and to contact you about your use of our Services.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To send you marketing and promotional communications.
                  </strong>{" "}
                  We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see &quot;<a data-custom-class="link" href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a>&quot; below.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To protect our Services.</strong>{" "}
                  We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To evaluate and improve our Services, products, marketing,
                    and your experience.
                  </strong>{" "}
                  We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To identify usage trends.</strong>{" "}
                  We may process information about how you use our Services to better understand how they are being used so we can improve them.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    To determine the effectiveness of our marketing and
                    promotional campaigns.
                  </strong>{" "}
                  We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>To comply with our legal obligations.</strong>{" "}
                  We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                </span>
              </li>
            </ul>

            <div id="whoshare" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>
                      3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                      INFORMATION?
                    </h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We may share information in specific situations described in
                    this section and/or with the following categories of third
                    parties.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    Vendors, Consultants, and Other Third-Party Service
                    Providers.
                  </strong>{" "}
                  We may share your data with third-party vendors, service
                  providers, contractors, or agents (&quot;third parties&quot;) who
                  perform services for us or on our behalf and require access to
                  such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  The categories of third parties we may share personal
                  information with are as follows:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Cloud Computing Services
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Communication & Collaboration Tools
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Data Analytics Services
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Data Storage Service Providers
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Performance Monitoring Tools
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Product Engineering & Design Tools
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Testing Tools
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                User Account Registration & Authentication Services
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Website Hosting Service Providers
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                AI Platforms
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Payment Processors
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                Sales & Marketing Tools
              </li>
            </ul>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  We also may need to share your personal information in the following situations:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests. This includes: Approximate geographic location (city, neighborhood, or area); Location coordinates (latitude and longitude, approximate); User-submitted address data for housing searches or listings; Geocoded location data derived from user input; Map interaction data (e.g., viewed areas or pins); and other similar information. A full list of what we use information for can be found in this section and in the previous section titled &quot;<a data-custom-class="link" href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a>&quot; Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device (&quot;cache&quot;) your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document. The Google Maps Platform APIs that we use store and access cookies and other information on your devices. If you are a user currently in the European Economic Area (EU countries, Iceland, Liechtenstein, and Norway) or the United Kingdom, please take a look at our Cookie Notice.
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    <strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.
                  </span>
                </span>
              </li>
            </ul>

            <div id="cookies" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>
                      4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We may use cookies and other tracking technologies to
                    collect and store your information.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to gather information when you interact
                  with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  To the extent these online tracking technologies are deemed to be a &quot;sale&quot;/&quot;sharing&quot; (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section &quot;<a data-custom-class="link" href="#uslaws">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>&quot;
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>Google Analytics</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit{" "}
                  <a
                    data-custom-class="link"
                    href="https://tools.google.com/dlpage/gaoptout"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "rgb(0, 58, 250)" }}
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  . For more information on the privacy practices of Google, please visit the{" "}
                  <a
                    data-custom-class="link"
                    href="https://policies.google.com/privacy"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "rgb(0, 58, 250)" }}
                  >
                    Google Privacy & Terms page
                  </a>
                  .
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div id="ai" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>
                      5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                    </h2>
                  </span>
                </strong>
                <strong>
                  <em>
                    <span data-custom-class="body_text">In Short:</span>
                  </em>
                </strong>
                <em>
                  <span data-custom-class="body_text">
                    {" "}
                    We offer products, features, or tools powered by artificial
                    intelligence, machine learning, or similar technologies.
                  </span>
                </em>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  As part of our Services, we offer products, features, or tools
                  powered by artificial intelligence, machine learning, or
                  similar technologies (collectively, &quot;AI Products&quot;). These
                  tools are designed to enhance your experience and provide you
                  with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="body_text">Use of AI Technologies</span>
                </strong>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  We provide the AI Products through third-party service providers (&quot;AI Service Providers&quot;), including OpenAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in &quot;<a data-custom-class="link" href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot; You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="body_text">Our AI Products</span>
                </strong>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Our AI Products are designed for the following functions:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">AI applications</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">AI insights</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">AI automation</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">Machine learning models</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">Natural language processing</span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">Text analysis</span>
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="body_text">How We Process Your Data Using AI</span>
                </strong>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data&apos;s safety.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="body_text">How to Opt Out</span>
                </strong>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  We believe in giving you the power to decide how your data is used. To opt out, you can:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="body_text">
                    Log in to your account settings and update your user account
                  </span>
                </span>
              </li>
            </ul>

            <div id="inforetain" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We keep your information for as long as necessary to fulfill
                    the purposes outlined in this Privacy Notice unless
                    otherwise required by law.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this Privacy Notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </span>
              </span>
            </div>

            <div id="infosafe" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We aim to protect your personal information through a system
                    of organizational and technical security measures.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We have implemented appropriate and reasonable technical and
                  organizational security measures designed to protect the
                  security of any personal information we process. However, despite our safeguards and efforts to secure your information, no
                  electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                </span>
              </span>
            </div>

            <div id="infominors" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We do not knowingly collect data from or market to children
                    under 18 years of age.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We do not knowingly collect, solicit data from, or market to
                  children under 18 years of age, nor do we knowingly sell such
                  personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may
                  have collected from children under age 18, please contact us
                  at{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  .
                </span>
              </span>
            </div>

            <div id="privacyrights" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    You may review, change, or terminate your account at any
                    time, depending on your country, province, or state of
                    residence.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div id="withdrawconsent" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <u>Withdrawing your consent:</u>
                  </strong>{" "}
                  If we are relying on your consent to process your personal
                  information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at
                  any time. You can withdraw your consent at any time by
                  contacting us by using the contact details provided in the
                  section &quot;<a data-custom-class="link" href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <u>Opting out of marketing and promotional communications:</u>
                  </strong>{" "}
                  You can unsubscribe from our marketing and promotional
                  communications at any time by clicking on the unsubscribe link
                  in the emails that we send, replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot;
                  to the SMS messages that we send, or by contacting us using the details provided in the section &quot;<a data-custom-class="link" href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="heading_2">
                  <strong>
                    <h3>Account Information</h3>
                  </strong>
                </span>
                <span data-custom-class="body_text">
                  If you would at any time like to review or change the information in your account or terminate your account, you can:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: "15px" }}>
                    Log in to your account settings and update your user account.
                  </span>
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <u>Cookies and similar technologies:</u>
                  </strong>{" "}
                  Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: "15px" }}>
                  If you have questions or comments about your privacy rights,
                  you may email us at{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  .
                </span>
              </span>
            </div>

            <div id="DNT" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track (&quot;DNT&quot;) feature or
                  setting you can activate to signal your privacy preference not
                  to have data about your online browsing activities monitored
                  and collected. At this stage, no uniform technology standard
                  for recognizing and implementing DNT signals has been
                  finalized. As such, we do not currently respond to DNT browser
                  signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                </span>
              </span>
            </div>

            <div id="uslaws" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>
                      11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                      RIGHTS?
                    </h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the
                    right to request access to and receive details about the
                    personal information we maintain about you and how we have
                    processed it, correct inaccuracies, get a copy of, or delete
                    your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="heading_2">
                  <strong>
                    <h3>Categories of Personal Information We Collect</h3>
                  </strong>
                </span>
                <span data-custom-class="body_text">
                  The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section &quot;<a data-custom-class="link" href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a>&quot;
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ width: "33%", textAlign: "left" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>Category</strong>
                      </span>
                    </span>
                  </th>
                  <th style={{ width: "51%", textAlign: "left" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>Examples</strong>
                      </span>
                    </span>
                  </th>
                  <th style={{ width: "14%", textAlign: "left" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>Collected</strong>
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">A. Identifiers</span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        B. Personal information as defined in the California Customer Records statute
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Name, contact information, education, employment, employment history, and financial information
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        C. Protected classification characteristics under state or federal law
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">D. Commercial information</span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Transaction information, purchase history, financial details, and payment information
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">E. Biometric information</span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">Fingerprints and voiceprints</span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">NO</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        F. Internet or other similar network activity
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">G. Geolocation data</span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">Device location</span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        H. Audio, electronic, sensory, or similar information
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Images and audio, video or call recordings created in connection with our business activities
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        I. Professional or employment-related information
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">J. Education Information</span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Student records and directory information
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">NO</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        K. Inferences drawn from collected personal information
                      </span>
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&apos;s preferences and characteristics
                      </span>
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">YES</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-custom-class="body_text">L. Sensitive personal Information</span>
                  </td>
                  <td></td>
                  <td style={{ textAlign: "center" }}>
                    <span data-custom-class="body_text">NO</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  Receiving help through our customer support channels;
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  Participation in customer surveys or contests; and
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  Facilitation in the delivery of our Services and to respond to your inquiries.
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text">
                We will use and retain the collected personal information as needed to provide the Services or for:
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category A - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category B - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category C - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category D - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category F - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category G - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category H - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category I - As long as the user has an account with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="body_text">
                  Category K - As long as the user has an account with us
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <strong>
                <span style={{ fontSize: "15px" }}>
                  <span data-custom-class="heading_2">
                    <h3>Sources of Personal Information</h3>
                  </span>
                </span>
              </strong>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Learn more about the sources of personal information we collect in &quot;<a data-custom-class="link" href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a>&quot;
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <strong>
                    <span data-custom-class="heading_2">
                      <h3>How We Use and Share Personal Information</h3>
                    </span>
                  </strong>
                </span>
              </span>
              <span data-custom-class="body_text" style={{ fontSize: "15px" }}>
                Learn more about how we use your personal information in the section, &quot;<a data-custom-class="link" href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a>&quot;
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>Will your information be shared with anyone else?</strong>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, &quot;<a data-custom-class="link" href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: "15px" }}>
                  We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.
                </span>
              </span>
              <span style={{ fontSize: "15px" }}>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    {" "}We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                  </span>
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    Category A. Identifiers
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    Category C. Characteristics of protected classifications under state or federal law
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    Category F. Internet or other electronic network activity information
                  </span>
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">Category G. Geolocation data</span>
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under &quot;<a data-custom-class="link" href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>Your Rights</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                </span>
              </span>
            </div>
            <ul>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to know</strong> whether or not we are processing your personal data
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to access</strong> your personal data
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to correct</strong> inaccuracies in your personal data
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to request</strong> the deletion of your personal data
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to obtain a copy</strong> of the personal data you previously shared with us
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to non-discrimination</strong> for exercising your rights
                </span>
              </li>
              <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px" }}>
                  <strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California&apos;s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&quot;profiling&quot;)
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>How to Exercise Your Rights</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  To exercise these rights, you can contact us by visiting{" "}
                  <a
                    href="mailto:support@faev.app"
                    data-custom-class="link"
                    style={{ color: "rgb(0, 58, 250)" }}
                  >
                    support@faev.app
                  </a>
                  , by emailing us at{" "}
                  <a
                    href="mailto:support@faev.app"
                    data-custom-class="link"
                    style={{ color: "rgb(0, 58, 250)" }}
                  >
                    support@faev.app
                  </a>
                  , or by referring to the contact details at the bottom of this document.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>Request Verification</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="heading_2">
                  <strong>
                    <h3>Appeals</h3>
                  </strong>
                </span>
                <span data-custom-class="body_text">
                  Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  . We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span data-custom-class="heading_2">
                    <h3>California &quot;Shine The Light&quot; Law</h3>
                  </span>
                </strong>
                <span data-custom-class="body_text">
                  California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section &quot;<a data-custom-class="link" href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot;
                </span>
              </span>
            </div>

            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>

            <div id="policyupdates" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    Yes, we will update this notice as necessary to stay
                    compliant with relevant laws.
                  </em>
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated &quot;Revised&quot; date
                  at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                </span>
              </span>
            </div>

            <div id="contact" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>{" "}
                  or contact us by post at:
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">Faev Inc</span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">651 N. Broad Street</span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text" style={{ fontSize: "15px" }}>
                Suite 201
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="body_text">
                  Middletown, DE 19709
                </span>
              </span>
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span data-custom-class="body_text" style={{ fontSize: "15px" }}>
                United States
              </span>
            </div>

            <div id="request" style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  <span data-custom-class="heading_1">
                    <h2>
                      14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                      COLLECT FROM YOU?
                    </h2>
                  </span>
                </strong>
              </span>
              <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  Based on the applicable laws of your country or state of
                  residence in the US, you may have the right to request access
                  to the personal information we collect from you, details about
                  how we have processed it, correct inaccuracies, or delete your
                  personal information. You may also have the right to withdraw
                  your consent to our processing of your personal information.
                  These rights may be limited in some circumstances by applicable law.
                  To request to review, update, or delete your personal
                  information, please visit:{" "}
                  <a href="mailto:support@faev.app" data-custom-class="link">
                    support@faev.app
                  </a>
                  .
                </span>
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
