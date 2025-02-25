import { fetchUserCommits } from "@/lib/github";
import { NextResponse } from "next/server";

const GITHUB_USERNAME = "harrybaines";

export async function GET() {
  try {
    const commits = await fetchUserCommits(GITHUB_USERNAME);
    return NextResponse.json(commits);
  } catch (error) {
    console.error("Failed to fetch commits:", error);
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 }
    );
  }
}
