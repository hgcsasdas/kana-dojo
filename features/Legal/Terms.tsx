import LegalLayout from '@/shared/components/layout/LegalLayout';
import PostWrapper from '@/shared/components/layout/PostWrapper';
import termsOfService from '@/shared/lib/legal/termsOfService';
import { ScrollText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <LegalLayout>
      <PostWrapper
        textContent={termsOfService}
        icon={<ScrollText className='size-6' />}
        lastUpdated='April 8, 2026'
      />
    </LegalLayout>
  );
};

export default TermsOfService;
