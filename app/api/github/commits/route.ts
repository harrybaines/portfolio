import { fetchUserCommits, GITHUB_USERNAME } from "@/lib/github";
import { NextResponse } from "next/server";

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
