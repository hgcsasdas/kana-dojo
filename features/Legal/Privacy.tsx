import PostWrapper from '@/shared/components/layout/PostWrapper';
import privacyPolicy from '@/shared/lib/legal/privacyPolicy';
import LegalLayout from '@/shared/components/layout/LegalLayout';
import { Cookie } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <LegalLayout>
      <PostWrapper
        textContent={privacyPolicy}
        icon={<Cookie className='size-6' />}
        lastUpdated='April 8, 2026'
      />
    </LegalLayout>
  );
};

export default PrivacyPolicy;
