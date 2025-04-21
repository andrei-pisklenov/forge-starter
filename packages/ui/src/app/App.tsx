import { useGetContextQuery } from '@/hooks/useContext';
import { MODULE_KEYS } from '@app/shared';
import Spinner from '@atlaskit/spinner';
import { lazy, Suspense } from 'react';

const GenericPlaceholder = lazy(() => import('@/components/GenericPlaceholder/GenericPlaceholder'));
const JiraIssuePanel = lazy(() => import('@/components/JiraIssuePanel/JiraIssuePanel'));

export const App = () => {
  const { data: context, isLoading } = useGetContextQuery();

  if (isLoading) {
    return <Spinner size="large" />;
  }

  switch (context?.moduleKey) {
    case MODULE_KEYS.jiraIssuePanel:
      return (<Suspense fallback={<>Loading...</>}><JiraIssuePanel context={context} /></Suspense>);
    default:
      return (<Suspense fallback={<>Loading...</>}><GenericPlaceholder context={context} /></Suspense>);
  }
};
