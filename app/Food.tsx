"use client";
import { useState, useEffect } from "react";
import { Toaster,toast } from "sonner";
const NAV_LINKS = ["Categories","Products", "Offers", "Blog", "About"];

export default function FoodWeb() {
  const [email, setEmail] = useState("");
  const [done, setDone]   = useState(false);
  const [menu, setMenu]   = useState(false);
  const [tick, setTick]   = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 530);
    return () => clearInterval(iv);
  }, []);

  const submit = () => { if (email.trim()) setDone(true); };

  return (
    <div style={{ fontFamily:"'Instrument Sans','Helvetica Neue',Arial,sans-serif", background:"#f8f5f0", minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Toaster richColors position="top-center" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ticker    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .fu { animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation-delay:.05s; } .d2 { animation-delay:.13s; }
        .d3 { animation-delay:.22s; } .d4 { animation-delay:.33s; }
        .d5 { animation-delay:.45s; }

        .ticker-track { display:inline-flex; white-space:nowrap; animation:ticker 24s linear infinite; }

        .nav-a { font-size:13.5px; font-weight:500; color:#444; text-decoration:none; opacity:.7; transition:opacity .15s; }
        .nav-a:hover { opacity:1; }

        .mob-row { display:flex; align-items:center; justify-content:space-between; padding:14px 0; border-bottom:1px solid #ede8df; font-size:15px; font-weight:500; color:#222; text-decoration:none; }
        .mob-row:last-of-type { border-bottom:none; }

        .pill { background:#1a7a3f; color:#fff; border:none; border-radius:99px; font-family:inherit; font-size:13px; font-weight:600; padding:9px 18px; cursor:pointer; transition:background .15s,transform .12s; white-space:nowrap; }
        .pill:hover { background:#155f30; transform:translateY(-1px); }

        .email-wrap { display:flex; border:1.5px solid #d5cfc5; border-radius:10px; overflow:hidden; background:#fff; transition:border-color .2s,box-shadow .2s; }
        .email-wrap:focus-within { border-color:#1a7a3f; box-shadow:0 0 0 3px rgba(26,122,63,.1); }
        .email-in  { flex:1; min-width:0; border:none; outline:none; padding:13px 15px; font-family:inherit; font-size:14px; color:#1c1c1c; background:transparent; }
        .email-in::placeholder { color:#b5ada3; }
        .email-btn { background:#1a7a3f; color:#fff; border:none; padding:0 18px; font-family:inherit; font-size:13px; font-weight:600; cursor:pointer; transition:background .15s; white-space:nowrap; }
        .email-btn:hover { background:#155f30; }

        .tag { display:inline-flex; align-items:center; gap:6px; background:#e8f5ed; color:#1a7a3f; border-radius:99px; font-size:11.5px; font-weight:600; padding:5px 12px 5px 9px; }
        .liveDot { width:7px; height:7px; border-radius:50%; background:#1a7a3f; flex-shrink:0; }

        .squiggle { text-decoration:underline; text-decoration-style:wavy; text-decoration-color:#1a7a3f; text-underline-offset:4px; }

        .feat { display:flex; align-items:flex-start; gap:12px; padding:15px 0; border-bottom:1px solid #e8e2d8; }
        .feat:last-child { border-bottom:none; }

        .ok-box { display:flex; align-items:center; gap:12px; background:#eaf5ee; border:1.5px solid #b8dfc4; border-radius:10px; padding:14px 18px; }

        /* ── desktop ── */
        .desktop-links  { display:flex; }
        .desktop-right  { display:flex; }
        .hamburger      { display:none; }
        .mobile-drawer  { display:none; }

        /* hero two-col */
        .hero-grid { display:flex; gap:60px; align-items:flex-start; }
        .hero-right { width:272px; flex-shrink:0; padding-left:44px; border-left:1px solid #e8e2d8; }
        .hero-h1 { font-size:54px; letter-spacing:-1.5px; }
        .hero-pad { padding:72px 0 80px; }
        .cert-row { display:flex; align-items:center; gap:28px; flex-wrap:wrap; }
        .bottom-bar { margin-top:60px; padding-top:24px; border-top:1px solid #e8e2d8; }

        /* ── tablet (≤900px) ── */
        @media (max-width:900px) {
          .hero-h1   { font-size:46px !important; letter-spacing:-1px !important; }
          .hero-grid { gap:40px !important; }
          .hero-right { width:240px !important; padding-left:32px !important; }
        }

        /* ── mobile (≤680px) ── */
        @media (max-width:680px) {
          .desktop-links { display:none !important; }
          .desktop-right { display:none !important; }
          .hamburger     { display:flex !important; }

          .hero-grid  { flex-direction:column !important; gap:40px !important; }
          .hero-right { width:100% !important; border-left:none !important; padding-left:0 !important; border-top:1px solid #e8e2d8; padding-top:28px !important; }
          .hero-h1    { font-size:38px !important; letter-spacing:-.8px !important; }
          .hero-pad   { padding:48px 0 60px !important; }
          .cert-row   { gap:18px !important; }
          .bottom-bar { margin-top:44px !important; }
        }

        /* ── small mobile (≤400px) ── */
        @media (max-width:400px) {
          .hero-h1   { font-size:32px !important; }
          .email-wrap { flex-direction:column !important; border-radius:10px !important; }
          .email-btn  { padding:13px !important; border-radius:0 0 8px 8px !important; }
        }
      `}</style>

      {/* TICKER */}
      <div style={{ background:"#1a7a3f", color:"#fff", fontSize:12, fontWeight:500, height:28, display:"flex", alignItems:"center", overflow:"hidden", letterSpacing:".04em" }}>
        <Toaster richColors position="top-center" />
        <div className="ticker-track">
          {[0,1].map(r => (
            <span key={r} style={{ display:"flex" }}>
              {["Farm to door in 3 - 5 days","Lab tested, always","FSSAI certified","Zero adulteration guarantee","Launching in your city soon"].map((t,i) => (
                <span key={i} style={{ display:"flex", alignItems:"center", padding:"0 22px", gap:10 }}>
                  <span style={{ opacity:.4, fontSize:9 }}>◆</span>{t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav style={{ background:"#fff", borderBottom:"1px solid #ede8df", position:"sticky", top:0, zIndex:50 }}>
        <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", height:56, gap:24 }}>

          {/* Logo */}
          <a href="/" style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none", flexShrink:0 }}>
            <div style={{ width:28, height:28, background:"#1a7a3f", borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>🌿</div>
            <span style={{ fontSize:16.5, fontWeight:700, color:"#1a1a1a", letterSpacing:"-.3px" }}>
              The<span style={{ color:"#1a7a3f" }}>Heritage Co</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="desktop-links" style={{ alignItems:"center", gap:26, flex:1 }}>
            {NAV_LINKS.map(l => <a key={l} href="#" className="nav-a" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon! "); }}>{l}</a>)}
          </div>

          {/* Desktop right */}
          <div className="desktop-right" style={{ alignItems:"center", gap:14, marginLeft:"auto" }}>
            <span style={{ fontSize:12.5, color:"#9c9489", fontWeight:500 }}>📍 India</span>
            <button className="pill" onClick={() => toast.info("Coming Soon! ")}>Get early access</button>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenu(v => !v)}
            aria-label="Toggle menu"
            style={{ marginLeft:"auto", background:"none", border:"none", cursor:"pointer", flexDirection:"column", gap:5, padding:4 }}
          >
            <span style={{ display:"block", width:20, height:1.5, background:"#333", transition:"all .2s", transform: menu ? "rotate(45deg) translateY(6.5px)" : "none" }}/>
            <span style={{ display:"block", width:20, height:1.5, background:"#333", transition:"all .2s", opacity: menu ? 0 : 1 }}/>
            <span style={{ display:"block", width:20, height:1.5, background:"#333", transition:"all .2s", transform: menu ? "rotate(-45deg) translateY(-6.5px)" : "none" }}/>
          </button>
        </div>

        {/* Mobile drawer */}
        {menu && (
          <div style={{ background:"#fff", borderTop:"1px solid #ede8df", padding:"4px 20px 20px", animation:"slideDown .2s ease" }}>
            {NAV_LINKS.map(l => (
              <a key={l} href="#" className="mob-row" onClick={(e) => { e.preventDefault(); toast.info("Coming Soon! "); }}>
                {l}
                <svg width="14" height="14" fill="none" stroke="#ccc" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
            <div style={{ marginTop:16, display:"flex", flexDirection:"column", gap:10 }}>
              <span style={{ fontSize:12.5, color:"#9c9489", fontWeight:500 }}>📍 India</span>
              <button className="pill" style={{ width:"100%", borderRadius:10, padding:12 }} onClick={() => toast.info("Coming Soon! ")}>Get early access</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <main style={{ flex:1, display:"flex", alignItems:"center" }}>
        <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 20px", width:"100%" }}>
          <div className="hero-pad">

            <div className="hero-grid">

              {/* LEFT */}
              <div style={{ flex:1, minWidth:0 }}>

                <div className="fu d1" style={{ marginBottom:22 }}>
                  <span className="tag">
                    <span className="liveDot"/>
                    We're in dev mode
                  </span>
                </div>

                <h1 className="fu d2 hero-h1" style={{ fontFamily:"'Instrument Serif',Georgia,serif", fontWeight:400, color:"#1a1a1a", lineHeight:1.1, marginBottom:20 }}>
                  Fresh food,<br/>
                  <em style={{ color:"#1a7a3f" }}>honestly</em> made.<br/>
                  Coming soon
                  <span style={{ color:"#1a7a3f", opacity: tick % 2 === 0 ? 1 : 0, transition:"opacity .1s" }}>.</span>
                </h1>

                <p className="fu d3" style={{ fontSize:15.5, color:"#6a6159", lineHeight:1.72, maxWidth:400, marginBottom:30 }}>
                  We're building something we'd actually want to eat — every product{" "}
                  <span className="squiggle">lab tested</span>, sourced straight from farms. No shortcuts.
                </p>

                {/* Email form */}
                <div className="fu d4" style={{ maxWidth:420 }}>
                  {!done ? (
                    <>
                      <div className="email-wrap">
                        <input
                          className="email-in"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          onKeyDown={e => e.key === "Enter" && submit()}
                        />
                        <button className="email-btn" onClick={submit}>Notify me →</button>
                      </div>
                      <p style={{ fontSize:11.5, color:"#b5ada3", marginTop:8 }}>
                        No spam — just a heads up when we launch.
                      </p>
                    </>
                  ) : (
                    <div className="ok-box">
                      <span style={{ fontSize:18, color:"#1a7a3f" }}>✓</span>
                      <div>
                        <p style={{ fontSize:14, fontWeight:600, color:"#14532d" }}>You're on the list.</p>
                        <p style={{ fontSize:12, color:"#4a9c6a", marginTop:2 }}>We'll reach out before we go live.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Avatars */}
                <div className="fu d5" style={{ display:"flex", alignItems:"center", gap:10, marginTop:24 }}>
                  <div style={{ display:"flex" }}>
                    {["🧑🏽","👩🏻","👨🏾"].map((e,i) => (
                      <div key={i} style={{ width:25, height:25, borderRadius:"50%", border:"2px solid #f8f5f0", background:"#daeee4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, marginLeft:i?-7:0 }}>{e}</div>
                    ))}
                  </div>
                  <span style={{ fontSize:12.5, color:"#8a8078" }}>
                    <strong style={{ color:"#1a1a1a", fontWeight:600 }}>2,800+</strong> people waiting
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hero-right">
                <p style={{ fontSize:10.5, fontWeight:700, color:"#b5ada3", letterSpacing:".1em", textTransform:"uppercase", marginBottom:2 }}>
                  What to expect
                </p>
                {[
                  { icon:"🔬", label:"Lab tested",       desc:"Every batch verified by NABL-accredited labs" },
                  { icon:"🚜", label:"Farm direct",      desc:"Handpicked partner farms, zero middlemen"     },
                  { icon:"⚡", label:"3-5 days delivery",  desc:"From our dark store to your door"            },
                  { icon:"💚", label:"0% adulteration",  desc:"Full money back if you find otherwise"       },
                ].map((f,i) => (
                  <div key={i} className="feat">
                    <span style={{ fontSize:17, flexShrink:0, marginTop:1 }}>{f.icon}</span>
                    <div>
                      <p style={{ fontSize:13.5, fontWeight:600, color:"#1a1a1a" }}>{f.label}</p>
                      <p style={{ fontSize:12.5, color:"#8a8078", marginTop:3, lineHeight:1.55 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cert strip */}
            <div className="bottom-bar">
              <div className="cert-row">
                <span style={{ fontSize:11, color:"#b5ada3", fontWeight:500, letterSpacing:".04em" }}>Certified by</span>
                {["FSSAI","ISO 22000","NABL Labs","Organic India"].map(c => (
                  <span key={c} style={{ fontSize:12, fontWeight:600, color:"#6a6159", letterSpacing:".02em" }}>{c}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}