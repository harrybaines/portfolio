import { GitHubCommit } from "@/lib/github";
import { useQuery } from "@tanstack/react-query";

async function fetchGithubCommits() {
  const response = await fetch("/api/github/commits");
  const data = await response.json();
  return data as GitHubCommit[];
}

export function useGithubCommits() {
  const { data: commits, isLoading } = useQuery({
    queryKey: ["github-commits"],
    queryFn: fetchGithubCommits,
    initialData: [],
  });

  return { commits, loading: isLoading };
}
