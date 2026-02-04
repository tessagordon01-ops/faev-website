import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Send to Google Apps Script (for spreadsheet logging)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL) {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      }).catch(console.error); // Don't block on this
    }

    // Send email notification via Resend (more reliable)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    console.log("RESEND_API_KEY exists:", !!RESEND_API_KEY);

    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);
        const emailResult = await resend.emails.send({
          from: "Faev <onboarding@resend.dev>",
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
        console.log("Resend result:", JSON.stringify(emailResult));
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
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
