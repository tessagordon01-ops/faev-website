import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Send to Google Apps Script (for spreadsheet logging) — MUST await so serverless doesn't exit before request completes
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    if (GOOGLE_SCRIPT_URL) {
      try {
        const sheetResponse = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!sheetResponse.ok) {
          console.error("Google Sheets signup log failed:", sheetResponse.status, await sheetResponse.text());
        }
      } catch (sheetError) {
        console.error("Google Sheets signup request error:", sheetError);
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL not set — signups will not be logged to Google Sheets");
    }

    // Send emails via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      const from = "Faev <onboarding@resend.dev>";

      // 1. Internal notification to you
      try {
        await resend.emails.send({
          from,
          to: "tessa@faev.app",
          subject: `🎉 New Faev Signup: ${data.email}`,
          html: `
            <h2>New Signup!</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Instagram:</strong> @${data.instagram || "N/A"}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Timeline:</strong> ${data.timeline}</p>
            <p><strong>Looking for:</strong> ${data.lookingFor?.join(", ") || ""}</p>
            <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>
            <p><strong>Neighborhoods:</strong> ${data.neighborhoods?.join(", ") || "N/A"}</p>
            <p><strong>Vibes:</strong> ${data.vibes?.join(", ") || ""}</p>
            <p><strong>Notes:</strong> ${data.vibeText || "N/A"}</p>
            <p><strong>Dealbreakers:</strong> ${data.dealbreakers || "N/A"}</p>
            <p><strong>Referred by:</strong> ${data.referredBy || "Direct"}</p>
          `,
        });
      } catch (emailError) {
        console.error("Resend internal notification error:", emailError);
      }

      // 2. Welcome/confirmation email to the new user
      try {
        await resend.emails.send({
          from,
          to: data.email,
          subject: "You're on the Faev waitlist",
          html: `
            <p>Hi —</p>
            <p>Thanks for requesting access to Faev. You're on the list.</p>
            <p>We're matching roommates and building groups for NYC and LA. We'll be in touch when we're ready to invite you in.</p>
            <p>In the meantime, share your referral link — each friend who signs up moves you up the waitlist.</p>
            <p>Best,<br>Faev</p>
          `,
        });
      } catch (emailError) {
        console.error("Resend welcome email error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY not set — no signup emails will be sent");
    }

    // Generate referral code
    const refCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Use the request URL to build referral link
    const host = request.headers.get("host") || "faev-website.vercel.app";
    const protocol = host.includes("localhost") ? "http" : "https";

    return NextResponse.json({
      success: true,
      referralCode: refCode,
      referralLink: `${protocol}://${host}/signup?ref=${refCode}`,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}
