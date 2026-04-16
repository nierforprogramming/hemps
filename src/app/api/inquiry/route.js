import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      company,
      email,
      country,
      inquiryType,
      quantity,
      useCase,
      message,
    } = body;

    const errors = {};

    if (!fullName || validator.isEmpty(fullName.trim())) {
      errors.fullName = "Full name is required";
    }

    if (!company || validator.isEmpty(company.trim())) {
      errors.company = "Company is required";
    }

    if (!email || !validator.isEmail(email)) {
      errors.email = "Valid email is required";
    }

    if (!country || validator.isEmpty(country.trim())) {
      errors.country = "Country is required";
    }

    if (!inquiryType || validator.isEmpty(inquiryType.trim())) {
      errors.inquiryType = "Inquiry type is required";
    }

    if (!message || validator.isEmpty(message.trim())) {
      errors.message = "Message is required";
    }

    if (quantity && !validator.isLength(quantity, { max: 100 })) {
      errors.quantity = "Quantity too long";
    }

    if (useCase && !validator.isLength(useCase, { max: 200 })) {
      errors.useCase = "Use case too long";
    }

    if (message && !validator.isLength(message, { max: 2000 })) {
      errors.message = "Message too long";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const clean = {
      fullName: validator.escape(fullName.trim()),
      company: validator.escape(company.trim()),
      email: validator.normalizeEmail(email),
      country: validator.escape(country.trim()),
      inquiryType: validator.escape(inquiryType.trim()),
      quantity: quantity ? validator.escape(quantity.trim()) : "",
      useCase: useCase ? validator.escape(useCase.trim()) : "",
      message: validator.escape(message.trim()),
    };

    const mailOptions = {
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: clean.email,
      subject: `New Inquiry from ${clean.fullName}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${clean.fullName}</p>
        <p><strong>Company:</strong> ${clean.company}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        <p><strong>Country:</strong> ${clean.country}</p>
        <p><strong>Inquiry Type:</strong> ${clean.inquiryType}</p>
        <p><strong>Quantity:</strong> ${clean.quantity}</p>
        <p><strong>Use Case:</strong> ${clean.useCase}</p>
        <p><strong>Message:</strong></p>
        <p>${clean.message}</p>
      `,
      headers: { "X-Entity-Ref-ID": "newmail" },
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    transporter.sendMail(mailOptions);

    transporter.sendMail({
      to: clean.email,
      from: process.env.EMAIL_USER,
      subject: "We received your inquiry",
      html: `
  <div style="margin:0; padding:0; background-color:#f1f5f9; font-family: Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
      <tr>
        <td align="center">
          
          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e2e8f0;">
            
            <!-- Header -->
            <tr>
              <td style="background:#1b3820; padding:24px; text-align:center;">
                <h1 style="margin:0; color:#d4af37; font-size:20px; letter-spacing:1px;">
                  Nepal Hemp Collective
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                
                <p style="margin:0 0 16px; color:#0a0a0a; font-size:14px;">
                  Hi <strong>${clean.fullName}</strong>,
                </p>

                <p style="margin:0 0 16px; color:#525252; font-size:14px; line-height:1.6;">
                  Thank you for reaching out to us. We’ve received your inquiry and our team will review it carefully.
                </p>

                <!-- Highlight Box -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                  <tr>
                    <td style="background:#f1f5f9; padding:16px; border-left:4px solid #d4af37;">
                      <p style="margin:0; font-size:13px; color:#525252;">
                        ⏱ <strong>Response time:</strong> Within 2 business days  
                        <br/>
                        For urgent matters, reply with <strong>URGENT</strong> in subject.
                      </p>
                    </td>
                  </tr>
                </table>
                <p style="margin:24px 0 0; font-size:14px; color:#525252;">
                  — Nepal Hemp Collective
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px; text-align:center; font-size:11px; color:#a3a3a3; background:#f1f5f9;">
                Bajhang District, Far-Western Nepal
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </div>
  `,
    });
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
