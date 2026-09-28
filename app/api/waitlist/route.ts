import { NextResponse } from "next/server";
import { WAITLIST_URL } from "@/lib/blog-api";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(WAITLIST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    // 409 usually means this email is already on the list
    if (res.ok || res.status === 409) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }
    return NextResponse.json(
      { message: "We couldn't save your email. Try again in a moment." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { message: "We couldn't reach the server. Try again in a moment." },
      { status: 502 }
    );
  }
}
