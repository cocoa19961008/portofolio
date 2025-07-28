import './Section.css';

const projects = [
  {
    icon: '💻',
    title: 'AIを用いたチャットボット開発システム',
    desc: 'このシステムは、自然言語処理を活用してユーザーとの対話を行うチャットボットを構築するためのAI開発環境です。Groq社製の超高速推論チップに対応し、LangChainとStreamlitを用いて、応答の柔軟性・スピード・UI操作性を強化した構成になっています。',
    tech: 'Groq / langchain-Groq / langchain / streamlit / os'
  },
  {
    icon: '📝',
    title: 'OpenAIを使用したdiscord-botシステム',
    desc: 'このDiscord Botは、ユーザーからのメッセージを受け取り、OpenAIのAPI（例：GPT-4）に送信して応答を生成し、Discord上で返信するAIアシスタントBotです。',
    tech: 'Python / Docker'
  },
  {
    icon: '🤖',
    title: '高度なフィルタとLLM対応の出力形式を備えたGoogle検索＆ニュースツール！',
    desc: '20種類以上の強力なフィルタでGoogleを検索</br>LLMに最適化されたMarkdownおよびJSON形式で結果を取得</br>asyncio、プロキシ、地域ターゲティングなどの組み込みサポート！',
    tech: 'LLM'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">プロジェクト</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <span className="project-title">{project.title}</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-meta">
              <span className="project-tech">
                <span className="tech-dot" />{project.tech}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-btn-wrapper">
        <a href="https://github.com/cocoa19961008" target="_blank" rel="noopener noreferrer" className="more-projects-btn">もっと見る</a>
      </div>
    </section>
  );
};

export default Projects; 