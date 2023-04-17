import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRepo } from '../api/getRepo';
import { starRepo } from '../api/starRepo';
import type { RepoData, SearchCriteria } from '../api/types';
import { SearchRepoForm } from './SearchRepoForm';
import { FoundRepo } from './FoundRepo';
import { StarRepoButton } from './StarRepoButton';

export function RepoPage() {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>();
  const { data } = useQuery(
    ['repo', searchCriteria],
    () => getRepo(searchCriteria as SearchCriteria),
    {
      enabled: searchCriteria !== undefined,
    },
  );
  const [starCount, setStarCount] = useState(data?.repository.stargazers.totalCount);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(starRepo, {
    onSuccess: () => {
      queryClient.setQueryData<RepoData>(['repo', searchCriteria], (repo) => {
        if (repo === undefined) {
          console.log('mutate repo undefined');
          return undefined;
        }
        console.log('mutate repo=', repo);
        setStarCount(repo?.repository.stargazers.totalCount);
        return {
          ...repo,
          viewerHasStarred: true,
        };
      });
    },
  });

  function handleSearch(search: SearchCriteria) {
    setSearchCriteria(search);
  }

  function handleStarClick() {
    if (data) {
      const res = mutate(data.repository.id);
      console.log(res);
    }
  }

  return (
    <main className="max-w-xs ml-auto mr-auto">
      <SearchRepoForm onSearch={handleSearch} />
      {data && (
        <>
          <FoundRepo
            name={data.repository.name}
            description={data.repository.description}
            stars={starCount ?? data.repository.stargazers.totalCount}
          />
          {!data.repository.viewerHasStarred && <StarRepoButton onClick={handleStarClick} />}
        </>
      )}
    </main>
  );
}
