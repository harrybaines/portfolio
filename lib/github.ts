import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
  repository: {
    name: string;
    full_name: string;
  };
}

export async function fetchUserCommits(
  username: string
): Promise<GitHubCommit[]> {
  // First get user's repositories
  const { data: repos } = await octokit.request("GET /users/{username}/repos", {
    username,
    type: "owner",
    sort: "updated",
    per_page: 5,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  // Then fetch recent commits from each repo
  const commitsPromises = repos.map(async (repo) => {
    const { data: commits } = await octokit.request(
      "GET /repos/{owner}/{repo}/commits",
      {
        owner: username,
        repo: repo.name,
        per_page: 3,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return commits.map((commit: any) => ({
      sha: commit.sha,
      commit: {
        message: commit.commit.message,
        author: {
          date: commit.commit.author.date,
        },
      },
      html_url: commit.html_url,
      repository: {
        name: repo.name,
        full_name: repo.full_name,
      },
    }));
  });

  const commits = await Promise.all(commitsPromises);

  // Flatten array and sort by date
  return commits
    .flat()
    .sort(
      (a, b) =>
        new Date(b.commit.author.date).getTime() -
        new Date(a.commit.author.date).getTime()
    )
    .slice(0, 10); // Get most recent 10 commits
}

export async function fetchTotalRepos(username: string): Promise<number> {
  const { data: user } = await octokit.request("GET /users/{username}", {
    username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return user.public_repos;
}
