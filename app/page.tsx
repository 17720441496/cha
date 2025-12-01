'use client';
import { useState, useEffect } from 'react';

// 带渐变遮罩和内容浮出效果的图片组件
const TeaImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: 0,
        paddingBottom: '75%', // 4:3 宽高比，确保所有图片大小一致
        borderRadius: '8px', 
        marginBottom: '1.5rem', 
        overflow: 'hidden', 
        cursor: 'pointer',
        transition: 'all 0.3s ease' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%',
          objectFit: 'cover',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transformOrigin: 'center',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
        }}
      />
      {/* 移除了重复的渐变遮罩 */}
      {/* 浮出内容 */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '2rem',
        color: 'white',
        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
        opacity: isHovered ? 1 : 0,
        transition: 'all 0.5s ease'
      }}>
        <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}></p>
      </div>
    </div>
  );
};

export default function TeaCulturePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teaData = [
    {
      id: 1,
      name: '龙井茶',
      type: '绿茶',
      region: '浙江杭州',
      image: '/cha/longjingcha.jpg',
      description: '中国十大名茶之一，产于杭州西湖地区，以"色翠、香郁、味甘、形美"四绝著称。',
      details: {
        origin: '产于浙江杭州西湖地区，狮峰、龙井、云栖、虎跑、梅家坞五地为核心产区。',
        characteristics: [
          '外形：扁平挺直，色泽翠绿',
          '汤色：清澈明亮，碧绿如玉',
          '香气：清香持久，豆香明显',
          '滋味：鲜爽甘醇，回甘生津'
        ],
        brewing: '水温80-85℃，玻璃杯冲泡，可观赏茶叶舒展。投茶量3-5克，冲泡时间1-2分钟。',
        benefits: '抗氧化、提神醒脑、降脂减肥、防癌抗癌、保护牙齿'
      }
    },
    {
      id: 2,
      name: '祁门红茶',
      type: '红茶',
      region: '安徽祁门',
      image: '/cha/hongcha.jpg',
      description: '世界三大高香红茶之一，产于安徽祁门，有"红茶皇后"的美誉。',
      details: {
        origin: '产于安徽祁门县，地处黄山支脉，海拔600-800米，气候温和，雨量充沛。',
        characteristics: [
          '外形：条索紧细，色泽乌润',
          '汤色：红艳明亮，金圈明显',
          '香气：蜜糖香，兰花香',
          '滋味：醇厚甘鲜，回味悠长'
        ],
        brewing: '水温95-100℃，盖碗或紫砂壶冲泡。可清饮或加牛奶、糖调饮，别具风味。',
        benefits: '暖胃养生、提神消疲、生津清热、利尿解毒、助消化'
      }
    },
    {
      id: 3,
      name: '铁观音',
      type: '乌龙茶',
      region: '福建安溪',
      image: '/cha/wlc.jpg',
      description: '安溪铁观音，中国十大名茶之一，独具"观音韵"，清香雅韵。',
      details: {
        origin: '产于福建安溪县，地处戴云山脉，云雾缭绕，土壤肥沃，适宜茶树生长。',
        characteristics: [
          '外形：条索卷曲，肥壮圆结',
          '汤色：金黄明亮，清澈见底',
          '香气：天然兰花香，香气持久',
          '滋味：醇厚甘鲜，回甘带蜜'
        ],
        brewing: '水温95-100℃，功夫茶泡法。可多次冲泡，每泡时间递增10-15秒。',
        benefits: '减肥美容、降血脂、抗衰老、提神益思、防龋齿'
      }
    },
    {
      id: 4,
      name: '碧螺春',
      type: '绿茶',
      region: '江苏苏州',
      image: '/cha/blc.jpg',
      description: '中国十大名茶之一，产于江苏苏州太湖洞庭山，以"形美、色艳、香浓、味醇"四绝闻名。',
      details: {
        origin: '产于江苏苏州太湖洞庭东、西山，气候温和湿润，土壤肥沃，为茶树生长提供了得天独厚的条件。',
        characteristics: [
          '外形：条索纤细，卷曲成螺',
          '汤色：嫩绿明亮，清澈见底',
          '香气：清香高雅，持久浓郁',
          '滋味：鲜爽甘醇，回味悠长'
        ],
        brewing: '水温75-80℃，玻璃杯冲泡。投茶量2-3克，第一泡时间30秒，后续可延长。',
        benefits: '抗氧化、防辐射、提神醒脑、保护心血管、增强免疫力'
      }
    },
    {
      id: 5,
      name: '普洱茶',
      type: '黑茶',
      region: '云南普洱',
      image: '/cha/baicha.jpg',
      description: '云南特产，有"可以喝的古董"之称，越陈越香，具有独特的陈香韵味。',
      details: {
        origin: '主产于云南省普洱市及西双版纳傣族自治州、临沧等地区，海拔1000-2000米的山地。',
        characteristics: [
          '外形：饼形或砖形，色泽红褐',
          '汤色：红浓明亮，金圈明显',
          '香气：陈香浓郁，独特持久',
          '滋味：醇厚回甘，润滑饱满'
        ],
        brewing: '水温95-100℃，紫砂壶或盖碗冲泡。投茶量5-8克，可多次冲泡，越陈茶耐泡性越好。',
        benefits: '降血脂、降血压、减肥瘦身、暖胃安神、调节肠胃'
      }
    },
    {
      id: 6,
      name: '大红袍',
      type: '乌龙茶',
      region: '福建武夷山',
      image: '/cha/molihongcha.jpg',
      description: '武夷岩茶之王，中国十大名茶之一，产于武夷山天心岩九龙窠，品质独特。',
      details: {
        origin: '产于福建武夷山天心岩九龙窠，地势险峻，土壤肥沃，云雾缭绕，气候适宜。',
        characteristics: [
          '外形：条索紧结，色泽乌褐',
          '汤色：橙黄明亮，清澈通透',
          '香气：兰花香高长，岩韵明显',
          '滋味：醇厚甘滑，岩骨花香'
        ],
        brewing: '水温100℃，盖碗冲泡。投茶量8克左右，第一泡10秒，后续递增，可冲泡8-10次。',
        benefits: '提神醒脑、美容养颜、降血脂、抗氧化、保护牙齿'
      }
    }
  ];

  const ceremonySteps = [
    {
      id: 1,
      title: '备器',
      description: '精心准备茶具，摆放整齐有序。茶具不仅是泡茶的工具，更是茶道精神的载体。',
      icon: '🛠️'
    },
    {
      id: 2,
      title: '温杯',
      description: '用热水温热茶具，既清洁消毒，又提高茶具温度，有利于茶叶香气的充分释放。',
      icon: '🔥'
    },
    {
      id: 3,
      title: '置茶',
      description: '用茶匙量取适量茶叶放入壶中。量的把握体现茶人对茶叶的尊重与理解。',
      icon: '🍃'
    },
    {
      id: 4,
      title: '冲泡',
      description: '将适温的热水冲入茶壶。水流要柔和，注水有序，体现对茶与客人的敬意。',
      icon: '💧'
    },
    {
      id: 5,
      title: '奉茶',
      description: '将泡好的茶汤倒入茶杯，双手奉给客人。茶汤七分满为宜，留有三分人情。',
      icon: '🙏'
    },
    {
      id: 6,
      title: '品茗',
      description: '先观色，再闻香，后品味。小口慢饮，感受茶汤在口中的变化与回甘。',
      icon: '☕'
    }
  ];

  const teaTools = [
    { name: '茶壶', description: '泡茶之主器', icon: '🫖' },
    { name: '茶杯', description: '品茗之器具', icon: '🍵' },
    { name: '茶海', description: '公道之分茶', icon: '⚱️' },
    { name: '茶滤', description: '净汤之利器', icon: '🔍' },
    { name: '茶匙', description: '量茶之工具', icon: '🥄' },
    { name: '煮水器', description: '烹泉之器物', icon: '💧' }
  ];

  return (
    <div className="tea-culture-website">
      <style jsx global>{`
        :root {
          --tea-green: #8cba80;
          --tea-brown: #8b4513;
          --tea-dark: #3d2b1f;
          --tea-light: #f5f1e6;
          --tea-gold: #d4af37;
          --tea-red: #c53d3d;
        }
        
        /* 锚点样式 */
        .anchor-point {
          position: absolute;
          top: -100px; /* 考虑导航栏高度，确保内容在可见区域 */
          left: 0;
          width: 1px;
          height: 1px;
          visibility: hidden;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Noto Serif SC', serif;
          background-color: var(--tea-light);
          color: var(--tea-dark);
          line-height: 1.8;
          overflow-x: hidden;
        }
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 1.2rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          background: rgba(245, 241, 230, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(139, 69, 19, 0.1);
          transition: all 0.3s;
        }
        
        .navbar.scrolled {
          padding: 0.8rem 5%;
          box-shadow: 0 5px 20px rgba(61, 43, 31, 0.1);
        }
        
        .logo {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 2.2rem;
          color: var(--tea-brown);
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        
        .nav-links a {
          color: var(--tea-dark);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--tea-green);
          transition: width 0.3s;
        }
        
        .nav-links a:hover {
          color: var(--tea-green);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--tea-brown);
          cursor: pointer;
        }
        
        .section {
          min-height: 100vh;
          padding: 100px 5% 80px;
          position: relative;
        }
        
        .hero {
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
          color: white;
          min-height: 80vh; /* 减小高度 */
          padding: 120px 5% 100px; /* 调整内边距 */
        }
        
        .hero-content {
          max-width: 50%;
          z-index: 2;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15; /* 设置更高的透明度 */
          transform: scale(1.05);
        }
        
        .hero-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 4.5rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          max-width: 90%;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          padding-left: 2rem;
        }
        
        .hero-subtitle::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background: var(--tea-green);
        }
        
        .cta-button {
          display: inline-block;
          padding: 0.8rem 2.5rem;
          background: var(--tea-green);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s;
          border: 2px solid var(--tea-green);
        }
        
        .cta-button:hover {
          background: transparent;
          color: var(--tea-green);
        }
        
        .tea-culture {
          background: var(--tea-dark);
          color: var(--tea-light);
        }
        
        .culture-container {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        
        .section-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: var(--tea-gold);
        }
        
        .tea-types {
          background: linear-gradient(135deg, #fefcf7 0%, #f9f5f0 100%);
          padding: 100px 5% 80px;
        }
        
        .types-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .types-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .types-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 4rem;
          color: var(--tea-brown);
          margin-bottom: 1.5rem;
        }
        
        .tea-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }
        
        .tea-card {
          position: relative;
          height: 500px;
          perspective: 1200px;
          border-radius: 20px;
          cursor: pointer;
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.1);
        }
        
        .tea-card:hover .card-inner {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
        }
        
        .card-front {
          background: white;
          display: flex;
          flex-direction: column;
        }
        
        .tea-image-container {
          position: relative;
          width: 100%;
          height: 70%;
          overflow: hidden;
        }
        
        .tea-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }
        
        .tea-card:hover .tea-image {
          transform: scale(1.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.4));
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          color: white;
        }
        
        .tea-name {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        
        .card-front-content {
          padding: 2rem;
          flex: 1;
        }
        
        .card-back {
          background: var(--tea-dark);
          color: white;
          transform: rotateY(180deg);
          padding: 2.5rem;
          overflow-y: auto;
        }
        
        .tea-ceremony {
          background: linear-gradient(135deg, #fefcf7 0%, #f9f5f0 100%);
          padding: 120px 5% 80px;
        }
        
        .ceremony-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .ceremony-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .ceremony-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 4rem;
          color: var(--tea-brown);
          margin-bottom: 1.5rem;
        }
        
        .ceremony-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        .ceremony-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .ceremony-step {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        
        .ceremony-step.active {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(61, 43, 31, 0.15);
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          background: var(--tea-green);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .step-title {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
          color: var(--tea-dark);
        }
        
        .ceremony-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .ceremony-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.05;
        }
        
        .decorative-leaf {
          position: absolute;
          background-color: var(--tea-brown);
          border-radius: 50% 0 50% 0;
          transform: rotate(45deg);
        }
        
        .leaf-1 {
          width: 150px;
          height: 150px;
          top: -50px;
          right: -50px;
          opacity: 0.2;
        }
        
        .leaf-2 {
          width: 100px;
          height: 100px;
          bottom: 10%;
          left: 5%;
          opacity: 0.15;
        }
        
        .leaf-3 {
          width: 80px;
          height: 80px;
          top: 40%;
          right: 20%;
          opacity: 0.1;
        }
        
        .ceremony-demo {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.08);
          position: relative;
          overflow: hidden;
        }
        
        .demo-content {
          text-align: center;
        }
        
        .demo-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
        
        .progress-indicator {
          margin-top: 2rem;
          text-align: center;
        }
        
        .progress-bar {
          width: 100%;
          height: 6px;
          background-color: #f0f0f0;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.8rem;
        }
        
        .progress-fill {
          height: 100%;
          background-color: var(--tea-green);
          transition: width 0.5s ease;
        }
        
        .progress-text {
          color: var(--tea-brown);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .tea-implements {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.08);
        }
        
        .implements-title {
          color: var(--tea-brown);
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .implements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .implement-item {
          text-align: center;
          padding: 1rem;
          background: var(--tea-light);
          border-radius: 10px;
          transition: transform 0.3s;
        }
        
        .implement-item:hover {
          transform: translateY(-5px);
        }
        
        .implement-icon {
          font-size: 2rem;
          margin-bottom: 0.8rem;
        }
        
        .implement-name {
          color: var(--tea-dark);
          font-weight: 500;
        }
        
        /* 茶道内容布局容器 */
        .ceremony-content-wrapper {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .ceremony-left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        

        
        .tea-horizontal-container {
          display: flex;
          gap: 2rem;
          width: 100%;
        }

        .tea-tips {
          flex: 1;
          background: linear-gradient(135deg, var(--tea-dark) 0%, #5c4033 100%);
          color: white;
          border-radius: 20px;
        }
        
        .tea-silk-road {
          background-image: url('/cha/beijing2.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.85;
          padding: 2rem;
          border-radius: 20px;
        }

        .tea-essence {
          flex: 1;
          background: linear-gradient(135deg, var(--tea-dark) 0%, #5c4033 100%);
          color: white;
          border-radius: 20px;
          padding: 2rem;
        }

        .essence-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--tea-gold);
          text-align: center;
        }

        .essence-content p {
          margin: 0.75rem 0;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .essence-content strong {
          color: var(--tea-gold);
        }
        
        .tips-title {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: var(--tea-gold);
        }
        
        .tips-list {
          list-style-type: none;
        }
        

        
        /* 响应式布局 */
        @media (max-width: 768px) {
          .ceremony-content-wrapper {
            flex-direction: column;
          }
          

        }
        
        .tips-list li {
          padding: 0.8rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 1.1rem;
        }
        
        .tips-list li::before {
          content: '•';
          color: var(--tea-gold);
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          line-height: 0.8;
        }
        
        .ceremony-tools {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .tool-item {
          text-align: center;
          padding: 1.5rem 1rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(61, 43, 31, 0.08);
        }
        
        .tool-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        /* 中国茶文化与历史 */
        .tea-culture-history {
          background: linear-gradient(135deg, #fefcf7 0%, #f9f5f0 100%);
          padding: 120px 5% 80px;
        }
        
        .history-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        /* 茶文化概述 */
        .culture-overview {
          margin-bottom: 3rem;
        }
        
        .history-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .history-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 4rem;
          color: var(--tea-brown);
          margin-bottom: 1.5rem;
        }
        
        .culture-intro {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(61, 43, 31, 0.1);
        }
        
        .culture-intro p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--tea-dark);
          margin-bottom: 1rem;
        }
        
        .culture-intro p:last-child {
          margin-bottom: 0;
        }
        
        /* 茶历史时间线 */
        .history-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .history-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          height: 100%;
          width: 2px;
          background: var(--tea-green);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 120px;
        }
        
        .timeline-period {
          position: absolute;
          left: 0;
          top: 0;
          width: 100px;
          height: 50px;
          background: var(--tea-green);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(140, 186, 128, 0.3);
        }
        
        .timeline-content {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(61, 43, 31, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.15);
        }
        
        .timeline-content h3 {
          color: var(--tea-brown);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .timeline-content p {
          color: var(--tea-dark);
          line-height: 1.8;
        }
        
        /* 丝绸之路与茶分布样式 */
        .tea-silk-road {
          margin-top: 5rem;
          padding: 3rem;
          background-image: url('/cha/beijing2.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.85; /* 调整透明度 */
          border-radius: 20px;
        }
        
        .road-title {
          font-family: 'Ma Shan Zheng', cursive;
          font-size: 2.5rem;
          color: var(--tea-brown);
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .road-description {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: var(--tea-dark);
          line-height: 1.8;
        }
        
        .tea-map-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        
        .map-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.1);
        }
        
        .tea-map {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        
        .map-markers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .marker {
          position: absolute;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        
        .marker-dot {
          width: 12px;
          height: 12px;
          background: var(--tea-red);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 2px var(--tea-red);
          transition: all 0.3s ease;
        }
        
        .pulse-active {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(197, 61, 61, 0.7);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(197, 61, 61, 0);
            transform: scale(1.1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(197, 61, 61, 0);
            transform: scale(1);
          }
        }
        
        .marker:hover .marker-dot {
          background: var(--tea-dark-red);
          transform: scale(1.3);
          box-shadow: 0 0 0 3px white, 0 0 0 5px var(--tea-dark-red);
        }
        
        .marker-label {
          position: absolute;
          top: -5px;
          left: 20px;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(61, 43, 31, 0.1);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          white-space: nowrap;
          z-index: 10;
          pointer-events: none;
        }
        
        .marker:hover .marker-label {
          opacity: 1;
          transform: translateX(0);
        }
        
        .marker:active .marker-label {
          background: var(--tea-light-green);
          color: white;
        }
        
        .marker-title {
          font-weight: bold;
          color: var(--tea-dark);
          margin-bottom: 0.2rem;
        }
        
        .marker-desc {
          font-size: 0.9rem;
          color: var(--tea-green);
        }
        
        .silk-road-info {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(61, 43, 31, 0.1);
        }
        
        .silk-road-info h4 {
          color: var(--tea-brown);
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }
        
        .trade-routes {
          list-style-type: none;
          margin-bottom: 1.5rem;
          padding: 0;
        }
        
        .trade-routes li {
          padding: 0.8rem 0;
          color: var(--tea-dark);
          line-height: 1.6;
        }
        
        .trade-routes strong {
          color: var(--tea-brown);
        }
        
        /* 响应式设计调整 */
        @media (max-width: 768px) {
          .history-timeline::before {
            left: 30px;
          }
          
          .timeline-item {
            padding-left: 90px;
          }
          
          .timeline-period {
            width: 80px;
            height: 40px;
            font-size: 0.9rem;
          }
          
          .tea-map-container {
            grid-template-columns: 1fr;
          }
          
          .culture-intro {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .history-title {
            font-size: 2.8rem;
          }
          
          .timeline-content {
            padding: 1.5rem;
          }
          
          .map-wrapper {
            height: 350px;
          }
        }
        
        /* 茶文化体验预约表单样式 */
        .tea-booking {
          background: linear-gradient(135deg, var(--tea-light-cream) 0%, var(--tea-light-green) 100%);
          padding: 4rem 5%;
          margin-top: 2rem;
        }
        
        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(61, 43, 31, 0.1);
          overflow: hidden;
        }
        
        .booking-header {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--tea-green);
          color: white;
        }
        
        .booking-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .booking-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .tea-form {
          padding: 3rem 2rem;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        .form-group label {
          margin-bottom: 0.5rem;
          color: var(--tea-dark);
          font-weight: 500;
          font-size: 1rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid #8B4513;
          background-color: #FFFFE0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--tea-green);
          box-shadow: 0 0 0 3px rgba(82, 183, 93, 0.1);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--tea-gray);
        }
        
        .submit-button {
          background: var(--tea-green);
          color: white;
          border: none;
          padding: 1.2rem 3rem;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
        }
        
        .submit-button:hover {
          background: var(--tea-dark-green);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(82, 183, 93, 0.3);
        }
        
        .submit-button:active {
          background: var(--tea-dark-green);
          transform: translateY(0);
        }
        
        .footer {
          background: var(--tea-dark);
          color: var(--tea-light);
          padding: 3rem 5%;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .nav-toggle {
            display: block;
          }
          
          .hero-content {
            max-width: 100%;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .culture-container {
            flex-direction: column;
          }
          
          .tea-grid {
            grid-template-columns: 1fr;
          }
          
          .ceremony-content {
            grid-template-columns: 1fr;
          }
          
          .implements-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .demo-icon {
            font-size: 3rem;
          }
          
          .ceremony-demo,
          .tea-implements,
          .tea-tips {
            padding: 1.5rem;
          }
          
          /* 表单响应式设计 */
          .tea-booking {
            padding: 3rem 3%;
          }
          
          .booking-title {
            font-size: 2rem;
          }
          
          .tea-form {
            padding: 2rem 1.5rem;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .booking-header {
            padding: 2rem 1.5rem;
          }
          
          .booking-title {
            font-size: 1.8rem;
          }
          
          .submit-button {
            width: 100%;
            padding: 1rem 2rem;
          }
        }
      `}</style>

      {/* 导航栏 */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="logo">🍃 茶韵雅集</a>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home">首页</a>
          <a href="#culture">茶文化</a>
          <a href="#types">茶叶种类</a>
          <a href="#ceremony">茶道艺术</a>
          <a href="#culture-history">茶历史</a>
          <a href="#types">茶健康</a>
          <a href="#ceremony-tools">茶具展示</a>
          <a href="#booking">联系我们</a>
        </div>
        <button 
          className="nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* 首页 */}
      <section id="home" className="section hero">
        {/* 背景图片 */}
        <div className="hero-background">
          <img src="/cha/beijing.jpg" alt="茶文化背景" className="hero-bg-image" style={{ opacity: '0.75' }} />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">一盏清茶<br />品味千年文化</h1>
          <p className="hero-subtitle">
            中国茶文化源远流长，融合了哲学、艺术与生活智慧。从采茶、制茶到泡茶、品茶，每一道工序都蕴含着深厚的文化底蕴。
          </p>
            <a href="#culture" className="cta-button">探索茶文化</a>
          </div>
        </section>

      {/* 中国茶文化与历史 */}
      <section id="culture" className="section tea-culture-history">
        <div className="history-container">
          {/* 茶历史锚点 */}
          <div id="culture-history" className="anchor-point"></div>
          
          {/* 标题部分 */}
          <div className="history-header">
            <h2 className="history-title" style={{ fontFamily: '"Ma Shan Zheng", "Noto Serif SC", serif', fontSize: '2.8rem', color: 'var(--primary-green)' }}>
              中国茶文化与历史
            </h2>
            <h3 className="history-subtitle" style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              Chinese Tea Culture & History
            </h3>
            <p style={{ fontFamily: '"Noto Sans SC", sans-serif', lineHeight: '1.8' }}>中国是茶的故乡，茶文化历史悠久，内涵丰富</p>
          </div>
          
          {/* 茶文化和茶历史左右分布容器 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            {/* 茶文化概述 - 左侧 */}
            <div className="culture-overview" style={{ width: '48%', maxWidth: '650px', minWidth: '300px' }}>
              <div className="culture-intro" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--foreground)', display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: '2rem' }}>

                {/* 插入茶文化图片 - 优化悬停时内容浮出显示效果 */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {/* 第一张图片 - 茶文化历史 */}
                  <div style={{ width: 'calc(50% - 0.5rem)', minWidth: '250px', maxWidth: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                    // 获取子元素并触发动画
                    const overlay = e.currentTarget.querySelector('div:first-of-type');
                    const content = overlay?.querySelector('div');
                    if (overlay) (overlay as HTMLElement).style.height = '100%';
                    if (content) {
                      content.style.transform = 'translateY(0)';
                      content.style.opacity = '1';
                    }
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    // 获取子元素并恢复原始状态
                    const overlay = e.currentTarget.querySelector('div:first-of-type');
                    const content = overlay?.querySelector('div');
                    if (overlay) (overlay as HTMLElement).style.height = '0%';
                    if (content) {
                      content.style.transform = 'translateY(20px)';
                      content.style.opacity = '0';
                    }
                  }}>
                    <img 
                      src="/cha/chawenhua.jpg" 
                      alt="中国茶文化" 
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'all 0.5s ease' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '0%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
                        transition: 'height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem 1rem'
                      }}
                    >
                      <div style={{ textAlign: 'center', transform: 'translateY(20px)', opacity: 0, transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
                        <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 'bold', letterSpacing: '0.05rem', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}>千年茶文化</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', letterSpacing: '0.02rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>中国茶文化源远流长，承载着东方文明的精髓和智慧</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 第二张图片 - 茶艺之美 */}
                  <div style={{ width: 'calc(50% - 0.5rem)', minWidth: '250px', maxWidth: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                    // 获取子元素并触发动画
                    const overlay = e.currentTarget.querySelector('div:first-of-type');
                    const content = overlay?.querySelector('div');
                    if (overlay) (overlay as HTMLElement).style.height = '100%';
                    if (content) {
                      content.style.transform = 'translateY(0)';
                      content.style.opacity = '1';
                    }
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    // 获取子元素并恢复原始状态
                    const overlay = e.currentTarget.querySelector('div:first-of-type');
                    const content = overlay?.querySelector('div');
                    if (overlay) (overlay as HTMLElement).style.height = '0%';
                    if (content) {
                      content.style.transform = 'translateY(20px)';
                      content.style.opacity = '0';
                    }
                  }}>
                    <img 
                      src="/cha/chawenhua1.jpg" 
                      alt="中国茶文化" 
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'all 0.5s ease' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '0%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
                        transition: 'height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem 1rem'
                      }}
                    >
                      <div style={{ textAlign: 'center', transform: 'translateY(20px)', opacity: 0, transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
                        <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 'bold', letterSpacing: '0.05rem', color: '#ffffff', textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}>茶艺之美</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', letterSpacing: '0.02rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>精致的茶具与优雅的茶道，展现东方美学的独特魅力</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 文本内容放在图片下方 */}
                <div>
                  <p style={{ fontFamily: '"Noto Sans SC", sans-serif', marginBottom: '1.5rem', fontSize: '1.25rem' }}>中国是茶的故乡，也是茶文化的发源地。茶的发现和利用，在中国已有四五千年历史，且长盛不衰，传遍全球。</p>
                  <p style={{ fontFamily: '"Noto Sans SC", sans-serif', marginBottom: '1.5rem', fontSize: '1.25rem' }}>茶是中华民族的举国之饮，<a href="#shennong" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>发于神农</a>，<a href="#lu-zhougong" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>闻于鲁周公</a>，<a href="#tang-dynasty" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>兴于唐朝</a>，<a href="#song-dynasty" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>盛于宋代</a>，普及于明清之时。</p>

                </div>
                
                {/* 茶与生活美学 - 已移除 */}
                
                {/* 茶文化的国际传播 */}

                
                {/* 传统茶艺表演 */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(250, 250, 245, 0.7)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem', fontSize: '1.4rem', textAlign: 'center' }}>传统茶艺表演</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: 'white', fontWeight: 'bold' }}>唐</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ color: 'var(--primary-green)', margin: '0 0 0.3rem 0', fontSize: '1.2rem' }}>唐代煎茶</h4>
                          <p style={{ fontFamily: '"Noto Sans SC", sans-serif', lineHeight: '1.5', margin: 0 }}>根据陆羽《茶经》记载的煎茶法，将茶饼碾碎成末，用风炉和茶鍑煎煮，讲究&quot;三沸&quot;之法。</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <img 
                          src="/cha/blc.jpg" 
                          alt="唐代煎茶场景" 
                          style={{ 
                            maxWidth: '48%', 
                            height: 'auto', 
                            borderRadius: '6px', 
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                            minWidth: '200px',
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'scale(1)'
                          }} 
                          onMouseEnter={(e) => {
// Next.js Image 组件引入失败，暂用原生 img 标签代替
// import Image from 'next/image';
// 将原生的 <img> 替换为 Next.js 的 <Image> 组件，并添加必要的属性以优化性能
<img
  src="/cha/wlc.jpg"
  alt="唐代茶具"
  style={{
    maxWidth: '48%',
    height: 'auto',
    borderRadius: '6px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    transform: 'scale(1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
/>
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                        <img 
                          src="/cha/wlc.jpg" 
                          alt="唐代茶具" 
                          style={{ 
                            maxWidth: '48%', 
                            height: 'auto', 
                            borderRadius: '6px', 
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                            minWidth: '200px',
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'scale(1)'
                          }} 
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                      </div>
                    </div>
                    

                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: 'white', fontWeight: 'bold' }}>明</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ color: 'var(--primary-green)', margin: '0 0 0.3rem 0', fontSize: '1.2rem' }}>明清泡茶</h4>
                          <p style={{ fontFamily: '"Noto Sans SC", sans-serif', lineHeight: '1.5', margin: 0 }}>明太祖朱元璋废团茶兴散茶，泡茶法逐渐流行，强调茶叶的自然香气和茶汤的清澈，茶具也更加精美多样。</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <img 
                          src="/cha/hongcha.jpg" 
                          alt="明清茶具" 
                          style={{ 
                            maxWidth: '48%', 
                            height: 'auto', 
                            borderRadius: '6px', 
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                            minWidth: '200px',
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'scale(1)'
                          }} 
                          onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                        <img 
                          src="/cha/sy.jpg" 
                          alt="茶艺展示" 
                          style={{ 
                            maxWidth: '48%', 
                            height: 'auto', 
                            borderRadius: '6px', 
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                            minWidth: '200px',
                            transition: 'transform 0.3s ease-in-out',
                            cursor: 'pointer',
                            transform: 'scale(1)'
                          }} 
                          onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 茶与健康 */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(245, 250, 252, 0.7)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem', fontSize: '1.4rem', textAlign: 'center' }}>茶与健康</h3>
                  
                  <p style={{ fontFamily: '"Noto Sans SC", sans-serif', lineHeight: '1.7', marginBottom: '1rem' }}>茶不仅是一种美味的饮品，还具有丰富的营养价值和保健功效，这也是茶能够传承千年的重要原因之一。</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--primary-green)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>🍵</div>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: 0, fontWeight: 'bold' }}>抗氧化</p>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: '0.3rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>茶叶中的茶多酚具有强大的抗氧化作用，有助于延缓衰老。</p>
                    </div>
                    
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--primary-green)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>❤️</div>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: 0, fontWeight: 'bold' }}>保护心血管</p>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: '0.3rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>茶中的儿茶素有助于降低胆固醇，保护心血管健康。</p>
                    </div>
                    
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--primary-green)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>🧠</div>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: 0, fontWeight: 'bold' }}>提神醒脑</p>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: '0.3rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>咖啡因和茶氨酸的组合能够提神醒脑，提高注意力和记忆力。</p>
                    </div>
                    
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                      <div style={{ color: 'var(--primary-green)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>💪</div>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: 0, fontWeight: 'bold' }}>增强免疫力</p>
                      <p style={{ fontFamily: '"Noto Sans SC", sans-serif', margin: '0.3rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>茶叶中的多种营养成分有助于增强人体免疫力，预防疾病。</p>
                    </div>
                  </div>
                </div>
                 

              </div>
            </div>
            
            {/* 茶历史时间轴 - 右侧 */}
            <div className="history-timeline" style={{
              position: 'relative',
              padding: '2rem 0',
              width: '48%',
              maxWidth: '650px',
              minWidth: '300px'
            }}>
            {/* 垂直时间轴线 */}
            <div style={{
              position: 'absolute',
              left: '50px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--accent-gold)',
              opacity: 0.6
            }}></div>
            
            {/* 神农时代 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              {/* 时间线节点 */}
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>神农时代</div>
              </div>
              
              {/* 内容卡片与图片 */}
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} id="shennong">
                <div style={{ flex: 1 }}>
                <h3 style={{
                    marginTop: 0,
                    marginBottom: '1rem',
                    color: 'var(--primary-green)',
                    fontSize: '1.3rem',
                    fontFamily: 'Noto Sans SC, sans-serif'
                  }}>茶的发现</h3>
                  <p style={{
                    margin: 0,
                    lineHeight: 1.7,
                    fontFamily: 'Noto Sans SC, sans-serif'
                  }}>传说中，神农氏尝百草，偶然发现茶叶具有解毒功效。<a href="#shennong-bencao" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>《神农本草经》</a>记载：{"\""}神农尝百草，日遇七十二毒，得茶而解之。{"\""}这是关于茶的最早记载。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/shennongbencaojing.jpg" alt="神农尝百草" />
                </div>
              </div>
            </div>
            
            {/* 秦汉时期 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>秦汉时期</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>茶的药用与饮用</h3>
                <p style={{ margin: 0, lineHeight: 1.7, fontFamily: 'Noto Sans SC, sans-serif' }}>秦汉时期，茶叶从最初的药用逐渐发展为日常饮品。西汉王褒<a href="#tongyue" style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--primary-green)',
                  paddingBottom: '0.1rem',
                  transition: 'all 0.3s ease'
                }}>《僮约》</a>中提到{"\""}烹茶尽具{"\""}、<a href="#wuyang" style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--primary-green)',
                  paddingBottom: '0.1rem',
                  transition: 'all 0.3s ease'
                }}>{"\""}武阳买茶{"\""}</a>，表明当时茶叶已有一定的商品流通。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/maoyi.jpg" alt="秦汉茶文化" />
                </div>
              </div>
            </div>
            
            {/* 魏晋南北朝 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>魏晋南北朝</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>茶文化的形成</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>魏晋时期，饮茶之风在士大夫阶层盛行，出现了{"\""}以茶养廉{"\""}的风气。<a href="#zuo-si" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>左思</a>、<a href="#wang-xun" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>王珣</a>等文人都有关于茶的诗文。佛教的兴起也促进了茶文化的发展，<a href="#temple-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>寺庙茶</a>成为独特的文化现象，僧人通过饮茶来修行。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/sancha.jpg" alt="魏晋茶文化" />
                </div>
              </div>
            </div>
            
            {/* 唐朝 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                    zIndex: 1
                }}
                ></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>唐朝</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} id="tang-dynasty">
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>茶文化的兴盛</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>唐朝是中国茶文化的黄金时期。<a href="#lu-yu" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>茶圣陆羽</a>撰写了世界第一部茶叶专著<a href="#cha-jing" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>《茶经》</a>，系统总结了茶的种植、采摘、制作和品饮方法。<a href="#tang-dynasty-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>茶道精神</a>初步形成，茶成为{"\""}国饮{"\""}，文人墨客多以茶会友。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/yaoyong.jpg" alt="唐朝茶道" />
                </div>
              </div>
            </div>
            
            {/* 宋朝 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>宋朝</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} id="song-dynasty">
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>点茶与斗茶</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>宋朝时期，<a href="#diancha-method" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>点茶法</a>盛行，<a href="#tea-competition" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>斗茶</a>成为文人雅士的一种社交活动。<a href="#song-huizong" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>皇帝宋徽宗赵佶</a>撰写<a href="#daguan-chalun" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>《大观茶论》</a>，大力推崇茶文化，使饮茶之风更为普及。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/diancha.jpg" alt="宋朝点茶" />
                </div>
              </div>
            </div>
            
            {/* 明朝 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green)',
                    border: '4px solid var(--accent-gold)',
                    zIndex: 1
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '100px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    color: 'var(--accent-gold)'
                  }}>明朝</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>散茶的兴起</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>明朝洪武年间，<a href="#emperor-zhu" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>朱元璋</a>下诏废<a href="#tea-cake" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>团茶</a>，兴<a href="#loose-leaf-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>散茶</a>，促进了茶叶加工工艺的革新。<a href="#purple-clay-teapot" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>紫砂壶</a>的兴起也为泡茶提供了理想的器具，<a href="#tea-brewing-method" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>泡茶法</a>逐渐成为主流。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/blc.jpg" alt="明朝散茶" />
                </div>
              </div>
            </div>
            
            {/* 清朝 */}
            <div style={{
              display: 'flex',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>清朝</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>茶叶对外贸易</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>清朝时期，中国<a href="#tea-trade" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>茶叶大量出口</a>到欧洲和世界各地。<a href="#kungfu-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>工夫茶法</a>在福建、广东等地兴起，形成了独特的品饮文化。各种<a href="#tea-types" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>茶类</a>如<a href="#black-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>红茶</a>、<a href="#oolong-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>乌龙茶</a>、<a href="#white-tea" style={{
                    color: 'var(--primary-green)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--primary-green)',
                    paddingBottom: '0.1rem',
                    transition: 'all 0.3s ease'
                  }}>白茶</a>等相继出现并发展。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/hongcha.jpg" alt="清朝茶叶贸易" />
                </div>
              </div>
            </div>
            
            {/* 现代 */}
            <div style={{
              display: 'flex',
              position: 'relative'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                  border: '4px solid var(--accent-gold)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  color: 'var(--accent-gold)'
                }}>现代</div>
              </div>
              
              <div style={{
                flex: 1,
                display: 'flex',
                gap: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginLeft: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                borderLeft: '3px solid var(--primary-green)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ flex: 1 }}>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '1rem',
                  color: 'var(--primary-green)',
                  fontSize: '1.3rem',
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>茶文化的复兴</h3>
                <p style={{
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: 'Noto Sans SC, sans-serif'
                }}>现代社会，随着人们生活水平的提高和健康意识的增强，传统茶文化得到复兴。各种茶艺表演、茶文化活动蓬勃开展，茶叶的保健功效也得到科学验证。</p>
                </div>
                <div style={{ flex: 0, minWidth: '150px', maxWidth: '200px' }}>
                  <TeaImage src="/cha/xingcheng.jpg" alt="现代茶文化" />
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* 丝绸之路与茶分布部分已删除 */}
        </div>
      </section>

      {/* 茶叶种类 */}
      <section id="types" className="section tea-types">
        <div className="types-container">
          <div className="types-header">
            <h2 className="types-title">茶叶品种展示</h2>
            <p>中国茶叶种类丰富，各具特色</p>
          </div>
          
          <div className="tea-grid">
            {teaData.map((tea) => (
              <div key={tea.id} className="tea-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="tea-image-container">
                      <img
                        src={tea.image}
                        alt={tea.name}
                        className="tea-image"
                      />
                      <div className="image-overlay">
                        <div>
                          <h3 className="tea-name"><a href={`#${tea.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.name}</a></h3>
                          <div><a href={`#${tea.type.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.type}</a> · <a href={`#${tea.region.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.region}</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-front-content">
                      <p>{tea.description}</p>
                    </div>
                  </div>
                  
                  <div className="card-back">
                    <h3>{tea.name}</h3>
                    <p><strong>产地：</strong><a href={`#${tea.region.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.details.origin}</a></p>
                    <p><strong>特点：</strong></p>
                    <ul>
                      {tea.details.characteristics.map((char, index) => (
                        <li key={index}>
                          {char.includes('外形') && (
                            <a href="#tea-shape" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{char}</a>
                          )}
                          {char.includes('汤色') && (
                            <a href="#tea-color" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{char}</a>
                          )}
                          {char.includes('香气') && (
                            <a href="#tea-aroma" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{char}</a>
                          )}
                          {char.includes('滋味') && (
                            <a href="#tea-taste" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{char}</a>
                          )}
                          {!char.includes('外形') && !char.includes('汤色') && !char.includes('香气') && !char.includes('滋味') && char}
                        </li>
                      ))}
                    </ul>
                    <p><strong>冲泡：</strong><a href="#brewing-methods" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.details.brewing}</a></p>
                    <p><strong>功效：</strong><a href="#health-benefits" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{tea.details.benefits}</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 茶道展示 */}
      <section id="ceremony" className="section tea-ceremony">
        <div className="ceremony-container">
          <div className="ceremony-header">
            <h2 className="ceremony-title">茶道艺术</h2>
            <p>茶道是一种以茶为媒的生活礼仪，一种以茶修身的生活方式。</p>
          </div>
          
          <div className="ceremony-content">
            <div className="ceremony-steps">
              {ceremonySteps.map((step) => (
                <div
                  key={step.id}
                  className={`ceremony-step ${activeStep === step.id ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="step-number">{step.id}</div>
                  <div className="step-content">
                    <h3 className="step-title"><a href={`#ceremony-step-${step.id}`} style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>{step.title}</a></h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="ceremony-visual">
              <div className="ceremony-background">
                <div className="decorative-leaf leaf-1"></div>
                <div className="decorative-leaf leaf-2"></div>
                <div className="decorative-leaf leaf-3"></div>
              </div>
              
              <div className="ceremony-demo">
                <div className="demo-content">
                  <div className="demo-icon">{ceremonySteps.find(s => s.id === activeStep)?.icon}</div>
                  <h3>{ceremonySteps.find(s => s.id === activeStep)?.title}</h3>
                  <p>{ceremonySteps.find(s => s.id === activeStep)?.description}</p>
                </div>
                
                {/* 步骤进度指示器 */}
                <div className="progress-indicator">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${((activeStep - 1) / (ceremonySteps.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    步骤 {activeStep} / {ceremonySteps.length}
                  </div>
                </div>
              </div>
              
              <div className="ceremony-content-wrapper">
                <div className="ceremony-left-content">
                  <div id="ceremony-tools" className="anchor-point"></div>
                  <div className="tea-implements">
                    <h4 className="implements-title">茶器展示</h4>
                    <div className="implements-grid">
                      {teaTools.slice(0, 4).map((tool, index) => (
                        <div key={index} className="implement-item">
                          <div className="implement-icon">{tool.icon}</div>
                          <a href={`#${tool.name.toLowerCase().replace(/\s+/g, '-')}`} 
                             className="implement-name"
                             style={{
                               color: 'var(--primary-green)',
                               textDecoration: 'none',
                               borderBottom: '1px solid var(--primary-green)',
                               paddingBottom: '0.1rem',
                               transition: 'all 0.3s ease'
                             }}>
                            {tool.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="tea-horizontal-container">
                    <div className="tea-tips">
                      <h4 className="tips-title">茶道要点</h4>
                      <ul className="tips-list">
                        <li><a href="#tea-harmony" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>和 — 和谐相处</a></li>
                        <li><a href="#tea-tranquility" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>静 — 宁静致远</a></li>
                        <li><a href="#tea-purity" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>清 — 清透纯净</a></li>
                        <li><a href="#tea-serenity" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>寂 — 寂然自守</a></li>
                      </ul>
                    </div>
                    
                    <div className="tea-essence">
                      <h5 className="essence-title">茶道精髓</h5>
                      <div className="essence-content">
                        <p>• <a href="#ichigo-ichie" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}><strong>一期一会</strong></a>：珍惜每一次茶会，如同一生只有一次的相遇</p>
                        <p>• <a href="#wa-kei-sei-jaku" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}><strong>和敬清寂</strong></a>：茶道的核心理念，追求和谐、尊敬、清净、静寂</p>
                        <p>• <a href="#follow-nature" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}><strong>道法自然</strong></a>：遵循自然规律，顺应天时地利</p>
                        <p>• <a href="#return-simplicity" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}><strong>返璞归真</strong></a>：追求简单质朴的生活态度</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相关文物展示 */}


      {/* 茶文化体验预约表单 */}
      <section id="booking" className="section tea-booking">
        <div className="booking-container">
          <div className="booking-header">
            <h2 className="booking-title">预约茶文化体验</h2>
            <p className="booking-subtitle">填写表单，开启您的茶文化探索之旅</p>
            
            <div className="recommended-activities" style={{ marginTop: '1.5rem', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>推荐体验活动：</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="#tea-ceremony-experience" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>传统茶道表演与品鉴</a></li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="#tea-making-course" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>手工制茶工艺体验</a></li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="#tea-farm-tour" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>茶园观光与采茶体验</a></li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="#tea-pairing" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>茶与茶点搭配品鉴会</a></li>
                <li>• <a href="#tea-health" style={{ color: 'var(--primary-green)', textDecoration: 'none', borderBottom: '1px solid var(--primary-green)', paddingBottom: '0.1rem', transition: 'all 0.3s ease' }}>茶与健康养生讲座</a></li>
              </ul>
            </div>
          </div>
          
          <form className="tea-form" onSubmit={(e) => {
            e.preventDefault();
            alert('感谢您的预约！我们将尽快与您联系。');
          }}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">您的姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="请输入您的姓名" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">电子邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="请输入您的邮箱" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">联系电话</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="请输入您的电话号码" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tea-type">感兴趣的茶类</label>
                <select id="tea-type" name="tea-type" required>
                  <option value="">请选择</option>
                  <option value="green">绿茶</option>
                  <option value="black">红茶</option>
                  <option value="oolong">乌龙茶</option>
                  <option value="white">白茶</option>
                  <option value="pu-erh">普洱茶</option>
                  <option value="yellow">黄茶</option>
                </select>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">留言或特殊需求</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder="请输入您的留言或特殊需求（选填）" 
                ></textarea>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-button">提交预约</button>
            </div>
          </form>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer" style={{
        padding: '2rem 0',
        textAlign: 'center',
        backgroundColor: 'var(--primary-green)'
      }}>
        <div className="footer-content" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="footer-links">
            <a href="#about" style={{
              color: 'white',
              textDecoration: 'none',
              margin: '0 15px',
              padding: '5px 0',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
               onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}>关于我们</a>
            <a href="#contact" style={{
              color: 'white',
              textDecoration: 'none',
              margin: '0 15px',
              padding: '5px 0',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
               onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}>联系方式</a>
            <a href="#privacy" style={{
              color: 'white',
              textDecoration: 'none',
              margin: '0 15px',
              padding: '5px 0',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
               onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}>隐私政策</a>
            <a href="#terms" style={{
              color: 'white',
              textDecoration: 'none',
              margin: '0 15px',
              padding: '5px 0',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
               onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}>使用条款</a>
          </div>
          <p style={{ marginTop: '15px', marginBottom: 0 }}>© 2024 茶韵雅集中国茶文化中心 版权所有</p>
        </div>
      </footer>
    </div>
  );
}