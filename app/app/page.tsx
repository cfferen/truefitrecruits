export default function Home() {
  return (
    <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'14px',fontFamily:'system-ui,Segoe UI,Arial',textAlign:'center',padding:'36px'}}>
      <h1 style={{fontSize:'44px',margin:0}}>TrueFit Recruits</h1>
      <p style={{fontSize:'18px',opacity:.85,maxWidth:720}}>
        Smart athlete profiles • coach discovery • AI-assisted matching.
        <br/>We’re building. Want early access?
      </p>
      <a href="mailto:info@truefitrecruits.com" style={{padding:'12px 16px',border:'1px solid #111',borderRadius:12,background:'#111',color:'#fff',cursor:'pointer',textDecoration:'none'}}>
        Notify Me
      </a>
    </main>
  );
}
