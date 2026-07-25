import { Navigate, useParams } from 'react-router-dom';
import type { ComponentType } from 'react';
import CrushCupDetail from './CrushCupDetail';
import NexuShiftDetail from './NexuShiftDetail';
import AdaniOneDetail from './AdaniOneDetail';

type CaseStudyPageProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const caseStudyPages: Record<string, ComponentType<CaseStudyPageProps>> = {
  'crush-cup': CrushCupDetail,
  nexushift: NexuShiftDetail,
  adanione: AdaniOneDetail,
};

export default function ProjectDetail({ theme, onToggleTheme }: CaseStudyPageProps) {
  const { slug } = useParams();
  const Page = slug ? caseStudyPages[slug] : undefined;

  if (!Page) {
    return <Navigate to="/" replace />;
  }

  return <Page theme={theme} onToggleTheme={onToggleTheme} />;
}
