import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function GaqaCommunityServiceCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="嘎查社区党群服务中心" />
      
      <main className="container mx-auto p-4">
        <ContentSection 
          title="基本概况"
          content={
            <>
              <p className="mb-3">嘎查社区党群服务中心位于嘎查社区所在地，结合边境地区实际，根据人口居住特点，在嘎查集体草场盘活闲置资产为主，为嘎查社区牧民提供开放的共享空间。</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>建设规模：以盘活闲置资源为主，一间房屋或蒙古包等</li>
                <li>管理方式：嘎查社区"两委"</li>
                <li>服务群体：嘎查社区所在地和周边居住的牧（居）民</li>
              </ul>
            </>
          }
        />
        
        <ContentSection 
          title="功能定位"
          content={
            <p>由嘎查社区党组织管理，结合边境地区实际，根据人口居住特点，在嘎查集体草场盘活闲置资产为主，主要体现政治向嘎查社区牧民提供开放的共享空间。</p>
          }
        />
        
        <ContentSection 
          title="服务内容"
          content={
            <>
              <p className="mb-3">嘎查社区党群服务中心重点突出政治引领作用，深化生产、生活、生态"三服务"功能，结合各嘎查社区实际能够实现特色化功能（与嘎查生产、生活相结合）。</p>
              <p>服务内容与当地牧民生产生活紧密结合，提供针对性强的服务项目。</p>
            </>
          }
        />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>新巴尔虎右旗党群服务中心 © {new Date().getFullYear()}</p>
          <p className="mt-1 text-gray-400">版权所有</p>
        </div>
      </footer>
    </div>
  );
}