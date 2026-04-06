<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESEARCH DESK | PRECEDENT SYNTHESIS</title>
    <style>
        :root { --accent: #ff6b00; --nav-h: 70px; }
        body, html { margin: 0; padding: 0; font-family: 'Inter', sans-serif; background: #fff; scroll-behavior: smooth; }

        /* NAVIGATION */
        nav { background: #000; color: white; display: flex; align-items: center; padding: 0 30px; height: var(--nav-h); z-index: 3000; position: fixed; top: 0; width: 100%; box-sizing: border-box; }
        .logo { font-weight: 900; cursor: pointer; font-size: 1.3rem; text-transform: uppercase; }
        .logo span { color: var(--accent); }
        .nav-tabs { display: flex; gap: 20px; margin-left: 40px; }
        .nav-btn { color: #666; font-size: 10px; font-weight: 800; text-transform: uppercase; background: none; border: none; cursor: pointer; }
        .nav-btn.active { color: white; border-bottom: 3px solid var(--accent); padding-bottom: 5px; }

        /* LANDING PAGE (Scrollable) */
        .landing-container { padding-top: var(--nav-h); min-height: 200vh; background: #fff; }
        .hero { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .hero h1 { font-size: 80px; letter-spacing: -4px; margin: 0; line-height: 0.9; }
        .hero p { color: #666; font-size: 20px; max-width: 600px; margin: 20px 0 40px; }
        .start-btn { background: var(--accent); color: white; border: none; padding: 25px 60px; font-weight: 900; text-transform: uppercase; cursor: pointer; }

        /* COMPARISON PAGE */
        .page-view { display: none; padding: 120px 40px 60px; min-height: 100vh; box-sizing: border-box; }
        .comparison-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; margin-top: 40px; }
        .comp-card { border: 1px solid #eee; padding: 20px; background: #fdfdfd; }
        .comp-card img { width: 100%; height: 300px; object-fit: contain; background: #fff; border: 1px solid #eee; margin-bottom: 20px; }
        .comp-card h3 { margin: 0 0 10px; font-size: 20px; border-bottom: 3px solid var(--accent); display: inline-block; }
        .meta-label { font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; margin-top: 15px; }
        .meta-val { font-size: 14px; font-weight: 600; color: #333; margin-bottom: 10px; }

        /* FOOTER */
        footer { background: #000; color: #666; padding: 60px 40px; text-align: left; border-top: 1px solid #222; }
        .footer-grid { display: flex; justify-content: space-between; align-items: flex-start; }
        .copy { font-size: 12px; }
    </style>
</head>
<body>

    <nav>
        <div class="logo" onclick="showPage('landing')">RESEARCH<span>DESK</span></div>
        <div class="nav-tabs">
            <button class="nav-btn active" id="tab-landing" onclick="showPage('landing')">01. Home</button>
            <button class="nav-btn" id="tab-comp" onclick="showPage('comp')">02. Precedent Comparison</button>
        </div>
    </nav>

    <div id="view-landing" class="landing-container">
        <div class="hero">
            <h1>Architectural <br>Synthesis <span>Desk</span></h1>
            <p>A computational tool for comparing historical plan typologies and environmental site data.</p>
            <button class="start-btn" onclick="showPage('comp')">Start Comparison</button>
        </div>
        
        <div style="padding: 100px 40px; background: #f9f9f9; text-align: center;">
            <h2 style="font-size: 32px; letter-spacing: -1px;">Project Scope</h2>
            <p style="max-width: 800px; margin: 0 auto; color: #666; line-height: 1.8;">
                This desk integrates disparate datasets—ranging from 12th-century Cistercian abbey layouts to 21st-century adaptive reuse projects—into a single comparative framework.
            </p>
        </div>

        <footer>
            <div class="footer-grid">
                <div>
                    <div class="logo" style="color:white; margin-bottom: 20px;">RESEARCH<span>DESK</span></div>
                    <div class="copy">&copy; 2026 ARCHITECTURAL RESEARCH DESK. <br>All rights reserved.</div>
                </div>
                <div style="text-align: right;">
                    <div class="meta-label" style="color:white;">Contact</div>
                    <div style="color: #bbb; font-size: 14px;">research@desk.ie</div>
                    <div style="color: #bbb; font-size: 14px; margin-top: 5px;">Dublin, Ireland</div>
                </div>
            </div>
        </footer>
    </div>

    <div id="view-comp" class="page-view">
        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
                <div class="ws-label" style="color: var(--accent); font-weight: 900; font-size: 11px; letter-spacing: 2px;">TYPOLOGICAL STUDY</div>
                <h1 style="margin: 5px 0; font-size: 42px; letter-spacing: -2px;">Precedent Matrix</h1>
            </div>
            <div style="color: #999; font-size: 12px; font-weight: 800;">TOTAL SITES: <span id="site-count" style="color: black;">0</span></div>
        </div>

        <div class="comparison-grid" id="comp-grid">
            </div>
    </div>

    <script src="database.js"></script>
    <script>
        function showPage(p) {
            // Toggle Display
            document.getElementById('view-landing').style.display = (p === 'landing') ? 'block' : 'none';
            document.getElementById('view-comp').style.display = (p === 'comp') ? 'block' : 'none';

            // Toggle Tabs
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            if(document.getElementById('tab-' + p)) document.getElementById('tab-' + p).classList.add('active');

            if(p === 'comp') renderComparison();
            window.scrollTo(0,0);
        }

        function renderComparison() {
            const grid = document.getElementById('comp-grid');
            document.getElementById('site-count').innerText = siteData.length;
            
            grid.innerHTML = siteData.map(s => `
                <div class="comp-card">
                    <img src="${s.plan_url}" alt="${s.name} Plan" onerror="this.src='https://via.placeholder.com/400x300?text=No+Plan+Found'">
                    <h3>${s.name}</h3>
                    
                    <div class="meta-label">Typology</div>
                    <div class="meta-val">${s.bucket}</div>
                    
                    <div class="meta-label">Plan Logic</div>
                    <div class="meta-val">${s.plan_type}</div>
                    
                    <div class="meta-label">Historical Style</div>
                    <div class="meta-val">${s.style}</div>
                    
                    <p style="font-size: 13px; color: #666; margin-top: 15px; line-height: 1.5;">${s.notes}</p>
                </div>
            `).join('');
        }

        // Initialize
        window.onload = () => {
            if (typeof siteData === 'undefined') {
                console.error("database.js failed to load.");
            }
        };
    </script>
</body>
</html>
