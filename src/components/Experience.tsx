import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            date: '2016年3月-2018年6月',
            employer: 'シンク株式会社 – 福島県会津若松市',
            title: 'インターン開発者',
            description: '社内およびクライアント向けソフトウェアシステムの開発に携わり、上級エンジニアの指導の下、プログラミング業務やデバッグプロセスに貢献しました。ネットワークインフラストラクチャおよびシステム統合プロジェクトの設計・保守を支援し、サーバー、ルーター、IT構成に関する実践的な経験を積みました。カスタムビジネスアプリケーションの計画、テスト、および部分的な実装を支援しました。実際のエンジニアリング環境において、ソフトウェア開発、IT運用、共同開発ワークフローの基礎スキルを強化しました。'
        },
        {
            date: '2018年6月-2020年8月',
            employer: '株式会社福島情報処理センター',
            title: 'バックエンド開発者',
            description: 'Laravel（PHP）およびNode.jsを用いたWebアプリケーションの開発・保守を行い、エンタープライズレベルのシステムのフロントエンドおよびバックエンドロジックの開発に貢献しました。複数部門のチームと連携し、公共部門および民間部門の顧客要件を満たすスケーラブルなソリューションを実装しました。サーバー設定、デプロイメントパイプライン、データベース統合を含むインフラ環境の設計・構成を行いました。'
        },
        {
            date: '2021年1月-2025年5月',
            employer: 'ロジスティックソリューションズ株式会社（秋田事業所）– 秋田市',
            title: 'AI & クラウド開発者',
            description: 'Pythonおよび最新のAIフレームワーク（TensorFlow、PyTorch、LangChainなど）を用いたAI駆動型システムの設計・開発を主導し、貢献しました。Lambda、S3、EC2、RDS、CloudFormationなどのサービスを含むAWS上で、スケーラブルなアプリケーションを構築・デプロイしました。機械学習モデルをクラウドベースのプラットフォームに統合し、物流ワークフローを自動化し、運用効率を向上させました。'
        },
        {
            date: '2025年5月-現在',
            employer: 'フリーランス開発者 – クラウドワークス（リモート、日本）',
            title: '',
            description: 'クラウドワークスプラットフォームを通じて、Web開発、自動化、AI関連タスクを中心に、様々なクライアントにソフトウェア開発サービスを提供しています。プロジェクトの要件に応じて、Python、JavaScript、Laravel、Node.jsなどのテクノロジーを用いたカスタムソリューションを提供しています。AWSインフラストラクチャのセットアップ、バックエンドAPIの統合、AIアプリケーションの概念実証（PoC）など、クライアントを支援しています。'
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h1>経験</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="timeline-date">{exp.date}</div>
                        <div className="timeline-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="timeline-content">
                            <h3>{exp.employer}</h3>
                            <h4>{exp.title}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience; 