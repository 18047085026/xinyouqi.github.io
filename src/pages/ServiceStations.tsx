import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function ServiceStations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="党群服务站点" />
      
      <main className="container mx-auto p-4">
        <ContentSection 
          title="基本概况"
          content={
            <p>党群服务站点是党群服务中心的延伸和补充，包括依托旗所在地建立的党群服务驿站、依托苏木镇党群服务中心或所在地社区党群服务中心建立的便民服务站，以及依托嘎查社区北疆红色堡垒户建立的便民服务站，共同构成了覆盖广泛的服务网络。</p>
          }
        />
        
        <ContentSection 
          title="依托旗所在地建立的党群服务驿站"
          content={
            <>
              <h3 className="font-bold text-gray-800 mb-2">基本信息</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>所处位置：旗所在地</li>
                <li>建设规模：联建或单独租赁房屋</li>
                <li>管理方式：旗所在地居住"两委"</li>
                <li>服务群体：旗所在地居住的本嘎查社区牧（居）民</li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-2">功能定位</h3>
              <p className="mb-3">结合嘎查社区大部分服务对象在旗所在地居住特点，是嘎查社区党群服务中心向上（旗所在地）延伸和补充。</p>
              
              <h3 className="font-bold text-gray-800 mb-2">服务内容</h3>
              <p>可提供党员服务、教育培训、民政、社保、医疗、法律咨询、红色代办等与群众生活息息相关的业务，能够实现"一站式"便民服务。</p>
            </>
          }
        />
        
        <ContentSection 
          title="依托苏木镇建立的便民服务站"
          content={
            <>
              <h3 className="font-bold text-gray-800 mb-2">基本信息</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>所处位置：苏木镇所在地（或集中居住地）</li>
                <li>建设规模：多以联建为主，规模适中</li>
                <li>管理方式：旗所在地居住"两委"、选调生、驻村干部等</li>
                <li>服务群体：苏木所在地居住的本嘎查社区牧（居）民</li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-2">功能定位</h3>
              <p className="mb-3">主要依托苏木镇党群服务中心或苏木镇所在地社区党群服务中心建立的，是嘎查社区党群服务中心向上（苏木镇所在地）延伸和补充，与社区共享服务阵地。</p>
              
              <h3 className="font-bold text-gray-800 mb-2">服务内容</h3>
              <p>重点提供学习教育培训，为嘎查社区党员提供"三会一课"和主题党日等党内组织的规范运行提供阵地作用，还可提供便民服务、帮办代办等业务，能够实现"一站式"便民服务。</p>
            </>
          }
        />
        
        <ContentSection 
          title="依托北疆红色堡垒户建立的便民服务站"
          content={
            <>
              <h3 className="font-bold text-gray-800 mb-2">基本信息</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>所处位置：北疆红色堡垒户</li>
                <li>建设规模：规模较小，一间房屋</li>
                <li>管理方式：北疆红色堡垒户</li>
                <li>服务群体：北疆红色堡垒户辐射的牧民</li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-2">功能定位</h3>
              <p className="mb-3">作为党员群众服务的"延伸触角"，是嘎查社区党群服务中心向下延伸和补充，辐射半径小，补充服务盲区，发挥"最后一公里"作用，侧重日常便民服务，主要提供政策咨询、帮办代办等基础便民服务，覆盖特定小范围，服务更具针对性。</p>
              
              <h3 className="font-bold text-gray-800 mb-2">服务内容</h3>
              <p>具有政策咨询、学习教育、帮办代办、收集意见建议等服务内容，主要辐射红色堡垒户（通常辐射一个网格）周边的牧户。</p>
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