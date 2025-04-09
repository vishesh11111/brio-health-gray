// import PageContainer from '<components>/components/layout/page-container';
import PageContainer from '<components>/components/layout/page-container';
import { DiscoverGridContent } from './discover-grid-content';

export default function DiscoverViewPage() {
  return (
    // <PageContainer>
      <div className='mx-auto -mt-5 w-full max-w-[1086px] space-y-4'>
        {/* <Heading title={`Discover`} description='Discover' /> */}
        <div>
          <DiscoverGridContent />
        </div>
      </div>
    // </PageContainer>
  );
}
