import { useEffect, useRef, useState } from 'react';
import './Section.css';

const Education = () => {
  const cardRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // reset
          setTimeout(() => setAnimate(true), 10); // retrigger
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section id="education" className="education-section">
      <h1 className="education-title">学歴</h1>
      <div
        className={`education-card${animate ? ' animate' : ''}`}
        ref={cardRef}
      >
        <div className="education-card-header">
          <div>
            <div className="education-university">会津大学（福島県）</div>
            <div className="education-degree">
              コンピュータ理工学士（工学）
              <br />
              コンピュータ情報工学専攻
            </div>
          </div>
          <div className="education-date">2012年4月-2016年3月</div>
        </div>
        <div className="education-description">
          ソフトウェア開発、アルゴリズム、データ構造、人工知能、コンピュータシステムを中心に研究。
          <br />
          C++、Python、Javaなどの言語を習得。
        </div>
      </div>
    </section>
  );
};

export default Education; 