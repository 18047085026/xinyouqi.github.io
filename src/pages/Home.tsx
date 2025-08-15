import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-700 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-center">新巴尔虎右旗党群服务</h1>
          <p className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-center">一中心两站点概况</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Introduction Section */}
        <section className="bg-white rounded-16 shadow-lg p-6 mb-6 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
            <i className="fa-solid fa-info-circle text-red-600 mr-2"></i>
            总体概况
          </h2>
           <p className="text-gray-800 text-base leading-relaxed">
            新巴尔虎右旗聚焦打造科学党群服务圈，结合地区实际，开展党群服务中心提质行动，本着"因地制宜、合理布局、应有尽有"的原则，对辖区各类党群服务中心及驿站（便民服务站）进行规范调整，进一步优化"一中心两站点"的布局，逐步形成"1＋7＋63+N"党群服务矩阵，即1个旗级党群服务中心、7个苏木镇党群服务中心、63个嘎查社区党群服务中心和多个党群服务驿站（便民服务站）。
          </p>
          
           <div className="mt-4">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596135170/attachment/wechat_2025-08-15_093905_800_20250815104636.png" 
               alt="党群服务中心外观" 
                className="w-full h-auto object-cover rounded-12 shadow-md max-w-full"
            />
          </div>
        </section>

        {/* Service Centers Grid */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i className="fa-solid fa-building text-red-600 mr-2"></i>
            服务中心与站点
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Sumu Town Service Center Card */}
             <motion.div 
               className="bg-white rounded-16 shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
             >
               <Link to="/sumu-town-service-center" className="block">
                 <div className="h-40 overflow-hidden">
                    <img 
                       src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596135170/attachment/图片1_20250815105358.png" 
                      alt="苏木镇党群服务中心" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                 </div>
                 <div className="p-4">
                   <h3 className="text-lg font-bold text-gray-800 mb-2">苏木镇党群服务中心</h3>
                   <p className="text-gray-600 text-sm mb-3">
                     位于苏木镇所在地，建设规模不低于500平米，由专职人员管理，面向苏木镇牧（居）民提供综合服务。
                   </p>
                   <div className="bg-red-50 text-right p-2 rounded-12 mt-2">
                     <span className="text-red-700 text-sm font-medium flex items-center justify-end">
                       点击查看详情 <i className="fa-solid fa-arrow-right ml-1"></i>
                     </span>
                   </div>
                 </div>
               </Link>
             </motion.div>

            {/* Gaqa Community Service Center Card */}
             <motion.div 
               className="bg-white rounded-16 shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <Link to="/gaqa-community-service-center" className="block">
                  <div className="h-[420px] overflow-hidden">
                      <img 
                       src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596135170/attachment/wechat_2025-08-15_105134_269_20250815110140.png" 
                      alt="嘎查社区党群服务中心" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                 </div>
                 <div className="p-4">
                   <h3 className="text-lg font-bold text-gray-800 mb-2">嘎查社区党群服务中心</h3>
                   <p className="text-gray-600 text-sm mb-3">
                     位于嘎查社区所在地，以盘活闲置资源为主，由嘎查社区"两委"管理，服务嘎查社区及周边牧（居）民。
                   </p>
                   <div className="bg-red-50 text-right p-2 rounded-12 mt-2">
                     <span className="text-red-700 text-sm font-medium flex items-center justify-end">
                       点击查看详情 <i className="fa-solid fa-arrow-right ml-1"></i>
                     </span>
                   </div>
                 </div>
               </Link>
             </motion.div>

            {/* Service Stations Card */}
             <motion.div 
               className="bg-white rounded-16 shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
             >
               <Link to="/service-stations" className="block">
                 <div className="h-40 overflow-hidden">
                    <img 
                       src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596135170/attachment/677b1eae3c8b5d76ced4fc43e52bdc49_20250815110645.jpg" 
                      alt="党群服务站点" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                 </div>
                 <div className="p-4">
                   <h3 className="text-lg font-bold text-gray-800 mb-2">党群服务站点</h3>
                   <p className="text-gray-600 text-sm mb-3">
                     包括依托旗所在地建立的党群服务驿站、依托苏木镇建立的便民服务站和依托北疆红色堡垒户建立的便民服务站。
                   </p>
                   <div className="bg-red-50 text-right p-2 rounded-12 mt-2">
                     <span className="text-red-700 text-sm font-medium flex items-center justify-end">
                       点击查看详情 <i className="fa-solid fa-arrow-right ml-1"></i>
                     </span>
                   </div>
                 </div>
               </Link>
             </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>新巴尔虎右旗党群服务中心 © {new Date().getFullYear()}</p>
          <p className="mt-1 text-gray-400">版权所有</p>
        </div>
      </footer>
    </div>
  );
}