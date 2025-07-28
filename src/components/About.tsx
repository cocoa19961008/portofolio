import React, { useRef, useState, useEffect } from 'react';
import './About.css';

const aboutText = `長年にわたり企業のエンジニアとして、さまざまな開発現場に携わってきました。
これまで積み重ねてきた確かな実績と信頼関係をもとに、単なる技術提供者にとどまらず、「本質的な課題解決を共に担うパートナー」として選ばれる存在を目指しています。
バックエンド開発を中心に経験を積んできましたが、方向転換し、先端科学技術であるAIに深い魅力を感じて、ここ5年間はAI開発者として活躍しています。
今後も培ってきた技術力と柔軟な対応力を活かし、お客様のビジネス成長を支える最適なソリューションを提供し続けてまいります。今後も培ってきた技術力と柔軟な対応力を活かし、お客様のビジネス成長を支える最適なソリューションを提供し続けてまいります。
`;

const About = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className='about-content'>
                <div className="about-title">
                    <h1>自己紹介</h1>
                </div>
                <div className="about-description">
                    <p className={animate ? 'wave-animate' : ''}>
                        {aboutText.split('').map((char, idx) => (
                            <span
                                key={idx}
                                className="wave-letter"
                                style={{
                                    display: char === ' ' ? 'inline-block' : undefined,
                                    ['--wave-index' as any]: idx
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;