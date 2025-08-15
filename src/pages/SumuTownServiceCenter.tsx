import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function SumuTownServiceCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="苏木镇党群服务中心" />
      
      <main className="container mx-auto p-4">
        <ContentSection 
          title="基本概况"
          content={
            <>
              <p className="mb-3">苏木镇党群服务中心位于苏木镇所在地，是区域党建核心阵地，整合党建、政务和社会服务等各种资源，具有综合统筹协调作用。</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>建设规模：不低于500平米</li>
                <li>管理方式：专职人员</li>
                <li>服务群体：苏木镇牧（居）民</li>
              </ul>
              <p>作为区域党建核心阵地，苏木镇党群服务中心体现综合性更强，在项目功能化上可以提供更多的服务。</p>
            </>
          }
        />
        
        <ContentSection 
          title="功能定位"
          content={
            <p>由苏木镇党委主导建设和管理，承担政治引领、教育培训、便民服务、文化活动、矛盾调解等综合功能。相比较嘎查社区党群服务中心和党群服务驿站，体现综合性更强，在项目功能化上可以提供更多的服务。</p>
          }
        />
        
        <ContentSection 
          title="服务内容"
          content={
            <>
              <p className="mb-3">苏木镇党群服务中心提供以下服务内容：</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>党建指导、党群服务、政策咨询、教育培训、志愿帮扶</li>
                <li>办理各类政务、民生事务、帮办代办等</li>
                <li>收集社情民意，解决群众实际困难</li>
                <li>设有党员服务、政务综合服务、咨询接待、帮办代办等窗口</li>
                <li>能够实现"一站式"办理</li>
              </ul>
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