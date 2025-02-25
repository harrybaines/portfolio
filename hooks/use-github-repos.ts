import { useQuery } from "@tanstack/react-query";

async function fetchGithubReposRepos() {
  const response = await fetch("/api/github/repos");
  const data = await response.json();
  return data.toString();
}

export function useGithubRepos() {
  const { data: repos, isLoading } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGithubReposRepos,
    initialData: "0",
  });

  return { repos, loading: isLoading };
}
