import PostWrapper from '@/shared/components/layout/PostWrapper';
import securityPolicy from '@/shared/lib/legal/securityPolicy';
import LegalLayout from '@/shared/components/layout/LegalLayout';
import { FileLock2 } from 'lucide-react';

const SecurityPolicy = () => {
  return (
    <LegalLayout>
      <PostWrapper
        textContent={securityPolicy}
        icon={<FileLock2 className='size-6' />}
        lastUpdated='April 8, 2026'
      />
    </LegalLayout>
  );
};

export default SecurityPolicy;
