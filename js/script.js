<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Layali Café</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --m0:#0a1a0e;
      --m1:#1a3320;
      --m2:#2a5c3a;
      --m3:#4a8c5c;
      --m4:#6abf7c;
      --m5:#a8d8a8;
      --m6:#c8ecc8;
      --m7:#e8f8e8;
      --m8:#f2fbf2;
      --matcha:#7ab648;
      --matcha-light:#b5d99c;
      --matcha-pale:#e0f0d0;
      --white:#ffffff;
      --cream:#f8fdf5;
      --text-dk:#0f1f14;
      --text-md:#2d4a35;
      --text-lt:#6a9470;
      --gold:#c9a84c;
    }
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--text-dk);line-height:1.6;overflow-x:hidden}

    /* ── SCROLLBAR ── */
    ::-webkit-scrollbar{width:6px}
    ::-webkit-scrollbar-track{background:var(--m7)}
    ::-webkit-scrollbar-thumb{background:var(--m3);border-radius:3px}

    /* ── NAV ── */
    nav{
      position:fixed;top:0;left:0;right:0;z-index:200;
      display:flex;align-items:center;justify-content:space-between;
      padding:16px 64px;
      background:rgba(10,26,14,0.94);
      backdrop-filter:blur(12px);
      border-bottom:1px solid rgba(106,191,124,0.15);
      transition:padding .3s;
    }
    .nav-logo{
      font-family:'Cormorant Garamond',serif;
      font-size:1.8rem;color:var(--m6);letter-spacing:0.06em;
    }
    .nav-logo em{color:var(--matcha);font-style:italic}
    .nav-links{display:flex;gap:32px;list-style:none;align-items:center}
    .nav-links a{
      color:var(--m5);text-decoration:none;
      font-size:0.8rem;font-weight:500;letter-spacing:0.1em;
      text-transform:uppercase;transition:color .2s;
    }
    .nav-links a:hover{color:var(--matcha-light)}
    .nav-reserve-btn{
      padding:9px 22px;border-radius:50px;
      background:var(--matcha);color:var(--m0);
      font-size:0.78rem;font-weight:600;letter-spacing:0.08em;
      text-transform:uppercase;text-decoration:none;
      transition:background .2s,transform .15s;
    }
    .nav-reserve-btn:hover{background:var(--matcha-light);transform:translateY(-1px)}

    /* ── HERO ── */
    .hero{
      min-height:100vh;position:relative;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;padding:120px 24px 100px;
      overflow:hidden;
    }
    .hero-bg{
      position:absolute;inset:0;
      background:url('https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=1800&q=85') center/cover no-repeat;
    }
    .hero-overlay{
      position:absolute;inset:0;
      background:linear-gradient(160deg,rgba(10,26,14,0.88) 0%,rgba(26,51,32,0.78) 50%,rgba(74,140,92,0.45) 100%);
    }
    .hero-content{position:relative;z-index:2}
    .hero-eyebrow{
      display:inline-block;
      font-size:0.72rem;letter-spacing:0.24em;text-transform:uppercase;
      color:var(--matcha-light);margin-bottom:24px;
      border:1px solid rgba(180,217,156,0.3);
      padding:6px 18px;border-radius:50px;
    }
    .hero h1{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(4rem,10vw,8rem);
      color:var(--white);line-height:0.95;
      margin-bottom:8px;letter-spacing:-0.01em;
    }
    .hero h1 em{color:var(--matcha-light);font-style:italic}
    .hero-sub{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(1.1rem,2.5vw,1.6rem);
      color:var(--m5);margin-bottom:36px;font-style:italic;font-weight:400;
    }
    .hero-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
    .btn-hero-primary{
      padding:16px 40px;border-radius:50px;
      background:var(--matcha);color:var(--m0);
      font-weight:600;font-size:0.88rem;letter-spacing:0.08em;
      text-transform:uppercase;text-decoration:none;
      transition:all .25s;box-shadow:0 4px 24px rgba(122,182,72,0.35);
    }
    .btn-hero-primary:hover{background:var(--white);transform:translateY(-3px);box-shadow:0 8px 32px rgba(122,182,72,0.4)}
    .btn-hero-ghost{
      padding:16px 40px;border-radius:50px;
      border:1.5px solid rgba(200,236,200,0.5);color:var(--m6);
      font-weight:500;font-size:0.88rem;letter-spacing:0.08em;
      text-transform:uppercase;text-decoration:none;
      transition:all .25s;
    }
    .btn-hero-ghost:hover{border-color:var(--matcha-light);color:var(--matcha-light);transform:translateY(-3px)}
    .hero-scroll{
      position:absolute;bottom:32px;left:50%;transform:translateX(-50%);
      display:flex;flex-direction:column;align-items:center;gap:8px;
      color:var(--m4);font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;
      animation:fadeInUp 2s 1s both;
    }
    .scroll-line{width:1px;height:48px;background:linear-gradient(to bottom,var(--matcha),transparent);animation:grow 1.8s ease-in-out infinite}
    @keyframes grow{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
    @keyframes fadeInUp{from{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%,0)}}

    /* ── SECTIONS ── */
    section{padding:100px 24px}
    .container{max-width:1240px;margin:0 auto}
    .s-label{
      font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;
      color:var(--matcha);margin-bottom:10px;display:block;
    }
    .s-title{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(2.2rem,4.5vw,3.6rem);
      color:var(--m1);line-height:1.1;margin-bottom:16px;
    }
    .s-sub{font-size:1rem;color:var(--text-md);max-width:520px;font-weight:300;line-height:1.75}

    /* ── ABOUT ── */
    .about{background:var(--white)}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
    .about-img-wrap{position:relative}
    .about-img-main{
      width:100%;height:520px;object-fit:cover;
      border-radius:24px;display:block;
      box-shadow:0 24px 64px rgba(26,51,32,.18);
    }
    .about-img-float{
      position:absolute;bottom:-28px;right:-28px;
      width:200px;height:200px;object-fit:cover;
      border-radius:18px;border:5px solid var(--white);
      box-shadow:0 12px 40px rgba(0,0,0,.15);
    }
    .about-text .s-sub{margin-bottom:24px}
    .about-text p{color:var(--text-md);margin-bottom:18px;font-size:1rem;line-height:1.8}
    .pill-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}
    .pill{
      padding:8px 18px;border-radius:50px;
      background:var(--matcha-pale);color:var(--m2);
      font-size:0.8rem;font-weight:500;border:1px solid var(--m6);
    }

    /* ── MENU ── */
    .menu-section{background:var(--m8)}
    .menu-head{text-align:center;margin-bottom:48px}
    .menu-head .s-sub{margin:0 auto}
    .menu-tabs{
      display:flex;justify-content:center;gap:10px;
      flex-wrap:wrap;margin-bottom:52px;
    }
    .tab-btn{
      padding:10px 24px;border-radius:50px;
      border:1.5px solid var(--m3);background:transparent;
      color:var(--m2);font-size:0.82rem;font-weight:500;
      cursor:pointer;transition:all .2s;letter-spacing:0.04em;
    }
    .tab-btn.active,.tab-btn:hover{background:var(--m2);color:var(--white);border-color:var(--m2)}

    .menu-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(270px,1fr));
      gap:28px;
    }

    /* ── CARD + HOVER OVERLAY ── */
    .menu-card{
      background:var(--white);border-radius:20px;
      overflow:hidden;
      box-shadow:0 2px 16px rgba(26,51,32,.07);
      transition:transform .3s cubic-bezier(.22,.61,.36,1),box-shadow .3s;
      position:relative;cursor:pointer;
    }
    .menu-card:hover{
      transform:translateY(-8px);
      box-shadow:0 16px 48px rgba(26,51,32,.16);
    }
    .card-img-wrap{position:relative;overflow:hidden;height:210px}
    .card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}
    .menu-card:hover .card-img{transform:scale(1.07)}

    /* hover overlay */
    .card-hover-overlay{
      position:absolute;inset:0;
      background:linear-gradient(to bottom,rgba(10,26,14,0.0) 0%,rgba(10,26,14,0.88) 100%);
      opacity:0;transition:opacity .3s ease;
      display:flex;flex-direction:column;justify-content:flex-end;
      padding:20px;
    }
    .menu-card:hover .card-hover-overlay{opacity:1}
    .overlay-name{
      font-family:'Cormorant Garamond',serif;
      font-size:1.25rem;color:var(--white);font-weight:600;margin-bottom:6px;
    }
    .overlay-desc{font-size:0.8rem;color:var(--m5);line-height:1.5;margin-bottom:12px}
    .overlay-price{
      font-size:1rem;font-weight:700;color:var(--matcha-light);
    }
    .overlay-badge{
      display:inline-block;margin-top:8px;
      padding:4px 12px;border-radius:50px;
      background:rgba(122,182,72,0.25);border:1px solid rgba(122,182,72,0.5);
      color:var(--matcha-light);font-size:0.7rem;font-weight:500;
    }

    .card-body{padding:18px 20px}
    .card-cat{font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--matcha);margin-bottom:4px}
    .card-name{font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:var(--m1);margin-bottom:4px;font-weight:600}
    .card-footer-row{display:flex;align-items:center;justify-content:space-between;margin-top:10px}
    .card-price{font-weight:700;font-size:1rem;color:var(--m2)}
    .card-tag{
      font-size:0.68rem;padding:3px 10px;border-radius:50px;
      background:var(--matcha-pale);color:var(--m2);font-weight:500;
    }

    /* ── RESERVATIONS ── */
    .reservations{
      background:linear-gradient(135deg,var(--m1) 0%,var(--m2) 60%,var(--m3) 100%);
      position:relative;overflow:hidden;
    }
    .reservations::before{
      content:'';position:absolute;top:-120px;right:-120px;
      width:500px;height:500px;border-radius:50%;
      background:rgba(122,182,72,0.07);
    }
    .reservations::after{
      content:'';position:absolute;bottom:-80px;left:-80px;
      width:340px;height:340px;border-radius:50%;
      background:rgba(122,182,72,0.05);
    }
    .res-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;position:relative;z-index:2}
    .res-text .s-title{color:var(--white)}
    .res-text .s-label{color:var(--matcha-light)}
    .res-text .s-sub{color:var(--m5);margin-bottom:28px}
    .res-feat{display:flex;flex-direction:column;gap:18px;margin-top:32px}
    .res-feat-item{display:flex;align-items:flex-start;gap:16px}
    .res-feat-icon{
      width:42px;height:42px;border-radius:50%;
      background:rgba(122,182,72,0.18);border:1px solid rgba(122,182,72,0.3);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;flex-shrink:0;
    }
    .res-feat-text strong{color:var(--m6);font-size:0.92rem;display:block;margin-bottom:2px}
    .res-feat-text span{color:var(--m4);font-size:0.82rem}

    .res-form{
      background:var(--white);border-radius:28px;
      padding:44px 40px;
      box-shadow:0 24px 80px rgba(0,0,0,0.25);
    }
    .form-title{
      font-family:'Cormorant Garamond',serif;
      font-size:1.8rem;color:var(--m1);margin-bottom:28px;font-weight:600;
    }
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
    .form-group{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
    .form-group label{font-size:0.78rem;font-weight:600;color:var(--text-md);letter-spacing:0.06em;text-transform:uppercase}
    .form-group input,.form-group select,.form-group textarea{
      padding:13px 16px;border-radius:12px;
      border:1.5px solid var(--m6);background:var(--m8);
      font-family:'Inter',sans-serif;font-size:0.92rem;
      color:var(--text-dk);transition:border-color .2s,box-shadow .2s;
      outline:none;
    }
    .form-group input:focus,.form-group select:focus,.form-group textarea:focus{
      border-color:var(--matcha);box-shadow:0 0 0 3px rgba(122,182,72,0.12);
    }
    .form-group textarea{resize:vertical;min-height:80px}
    .btn-submit{
      width:100%;padding:16px;border-radius:50px;
      background:var(--matcha);color:var(--m0);
      font-family:'Inter',sans-serif;font-size:0.9rem;font-weight:700;
      letter-spacing:0.08em;text-transform:uppercase;
      border:none;cursor:pointer;
      transition:all .25s;box-shadow:0 4px 20px rgba(122,182,72,0.3);
    }
    .btn-submit:hover{background:var(--m2);color:var(--white);transform:translateY(-2px);box-shadow:0 8px 32px rgba(26,51,32,0.3)}
    .form-note{text-align:center;font-size:0.76rem;color:var(--text-lt);margin-top:14px}
    .toast-msg{
      display:none;margin-top:16px;padding:14px 20px;
      border-radius:12px;background:var(--matcha-pale);
      border:1px solid var(--m4);color:var(--m2);
      font-size:0.88rem;text-align:center;
    }

    /* ── LOYALTY ── */
    .loyalty{background:var(--white)}
    .loyalty-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:start}
    .tier-cards{display:flex;flex-direction:column;gap:20px}
    .tier-card{
      border-radius:20px;padding:28px 32px;
      border:1.5px solid;position:relative;overflow:hidden;
      transition:transform .25s;
    }
    .tier-card:hover{transform:translateX(6px)}
    .tier-bronze{border-color:#c97a3a;background:linear-gradient(135deg,#fff8f4,#fdeedd)}
    .tier-silver{border-color:#8ca8b4;background:linear-gradient(135deg,#f4f8fa,#e8f2f6)}
    .tier-gold{border-color:var(--gold);background:linear-gradient(135deg,#fdf9ed,#f7f0d0)}
    .tier-matcha{border-color:var(--matcha);background:linear-gradient(135deg,var(--m8),var(--matcha-pale))}
    .tier-badge{
      display:inline-flex;align-items:center;gap:8px;
      font-size:0.8rem;font-weight:700;letter-spacing:0.08em;
      text-transform:uppercase;margin-bottom:10px;
    }
    .tier-badge span{font-size:1.2rem}
    .tier-name{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;margin-bottom:6px}
    .tier-req{font-size:0.78rem;color:var(--text-lt);margin-bottom:14px}
    .tier-perks{list-style:none;display:flex;flex-direction:column;gap:7px}
    .tier-perks li{font-size:0.85rem;color:var(--text-md);display:flex;gap:8px;align-items:flex-start}
    .tier-perks li::before{content:'✦';color:var(--matcha);font-size:0.7rem;margin-top:3px;flex-shrink:0}

    .loyalty-right{}
    .loyalty-right .s-sub{margin-bottom:32px}
    .loyalty-signup{
      background:var(--m8);border-radius:20px;padding:32px;
      border:1.5px solid var(--m6);margin-bottom:28px;
    }
    .loyalty-signup h4{font-family:'Cormorant Garamond',serif;font-size:1.35rem;color:var(--m1);margin-bottom:18px}
    .loyalty-signup .form-group{margin-bottom:14px}
    .points-info{
      background:linear-gradient(135deg,var(--m1),var(--m2));
      border-radius:20px;padding:28px 32px;color:var(--white);
    }
    .points-info h4{font-family:'Cormorant Garamond',serif;font-size:1.3rem;color:var(--matcha-light);margin-bottom:16px}
    .points-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.1);font-size:0.85rem}
    .points-row:last-child{border:none}
    .points-row span:first-child{color:var(--m5)}
    .points-row span:last-child{color:var(--matcha-light);font-weight:600}

    /* ── TESTIMONIALS ── */
    .testimonials{background:var(--m0)}
    .testimonials .s-title{color:var(--white)}
    .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .testi-card{
      background:rgba(255,255,255,.05);border-radius:18px;padding:28px;
      border:1px solid rgba(122,182,72,.15);
      transition:border-color .25s,background .25s;
    }
    .testi-card:hover{background:rgba(122,182,72,.07);border-color:rgba(122,182,72,.3)}
    .stars{color:var(--matcha-light);font-size:0.9rem;margin-bottom:14px;letter-spacing:2px}
    .testi-text{color:var(--m5);font-size:0.92rem;font-style:italic;line-height:1.75;margin-bottom:20px}
    .testi-author{display:flex;align-items:center;gap:12px}
    .testi-av{
      width:40px;height:40px;border-radius:50%;
      background:linear-gradient(135deg,var(--m3),var(--matcha));
      display:flex;align-items:center;justify-content:center;
      font-weight:700;color:var(--white);font-size:0.9rem;
    }
    .testi-name{font-weight:600;color:var(--matcha-light);font-size:0.88rem}
    .testi-role{font-size:0.74rem;color:var(--text-lt)}

    /* ── HOURS ── */
    .hours{background:var(--m8)}
    .hours-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
    .hours-img img{width:100%;height:440px;object-fit:cover;border-radius:24px;box-shadow:0 20px 60px rgba(26,51,32,.15)}
    .hours-content .s-sub{margin-bottom:36px}
    table{width:100%;border-collapse:collapse}
    td{padding:14px 0;border-bottom:1px solid var(--m6);font-size:0.92rem}
    td:first-child{color:var(--m1);font-weight:500}
    td:last-child{text-align:right;color:var(--text-md)}
    .contact-row{display:flex;flex-direction:column;gap:12px;margin-top:32px}
    .contact-item{display:flex;align-items:center;gap:12px;font-size:0.88rem;color:var(--text-md)}
    .contact-icon{font-size:1rem}

    /* ── FOOTER ── */
    footer{
      background:var(--m0);padding:64px 24px 36px;
    }
    .footer-inner{max-width:1240px;margin:0 auto}
    .footer-top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.08)}
    .footer-brand .nav-logo{font-size:2rem;display:block;margin-bottom:12px}
    .footer-brand p{color:var(--m4);font-size:0.85rem;line-height:1.75;max-width:240px;margin-bottom:20px}
    .social-links{display:flex;gap:12px}
    .social-link{
      width:36px;height:36px;border-radius:50%;
      background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
      display:flex;align-items:center;justify-content:center;
      text-decoration:none;font-size:0.9rem;
      transition:background .2s,border-color .2s;
    }
    .social-link:hover{background:rgba(122,182,72,.2);border-color:var(--matcha)}
    .footer-col h5{color:var(--m5);font-size:0.78rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:18px}
    .footer-col ul{list-style:none;display:flex;flex-direction:column;gap:10px}
    .footer-col ul li a{color:var(--m4);text-decoration:none;font-size:0.84rem;transition:color .2s}
    .footer-col ul li a:hover{color:var(--matcha-light)}
    .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:28px;flex-wrap:wrap;gap:12px}
    .footer-copy{color:var(--text-lt);font-size:0.76rem}
    .footer-legal{display:flex;gap:20px}
    .footer-legal a{color:var(--text-lt);font-size:0.76rem;text-decoration:none}
    .footer-legal a:hover{color:var(--m4)}

    /* ── MODAL CONFIRMATION ── */
    .modal-overlay{
      display:none;position:fixed;inset:0;z-index:500;
      background:rgba(0,0,0,.6);backdrop-filter:blur(6px);
      align-items:center;justify-content:center;
    }
    .modal-overlay.open{display:flex}
    .modal{
      background:var(--white);border-radius:28px;
      padding:52px 48px;text-align:center;
      max-width:440px;width:90%;
      animation:popIn .4s cubic-bezier(.22,.61,.36,1) both;
    }
    @keyframes popIn{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}
    .modal-icon{font-size:3rem;margin-bottom:16px}
    .modal h3{font-family:'Cormorant Garamond',serif;font-size:2rem;color:var(--m1);margin-bottom:10px}
    .modal p{color:var(--text-md);font-size:0.92rem;line-height:1.7;margin-bottom:28px}
    .modal-close{
      padding:12px 36px;border-radius:50px;
      background:var(--matcha);color:var(--m0);
      font-weight:600;font-size:0.88rem;border:none;cursor:pointer;
      transition:background .2s;
    }
    .modal-close:hover{background:var(--m2);color:var(--white)}

    /* ── RESPONSIVE ── */
    @media(max-width:1024px){
      .res-grid,.loyalty-grid{grid-template-columns:1fr;gap:48px}
      .footer-top{grid-template-columns:1fr 1fr}
    }
    @media(max-width:768px){
      nav{padding:14px 20px}
      .nav-links{display:none}
      .about-grid,.hours-grid{grid-template-columns:1fr;gap:40px}
      .testi-grid{grid-template-columns:1fr}
      .form-row{grid-template-columns:1fr}
    }
    @media(max-width:540px){
      section{padding:64px 16px}
      .hero h1{font-size:3.2rem}
      .res-form{padding:28px 20px}
      .footer-top{grid-template-columns:1fr}
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">L a y a l i <em>Café</em></div>
  <ul class="nav-links">
    <li><a href="#about">Story</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#loyalty">Rewards</a></li>
    <li><a href="#hours">Visit</a></li>
    <li><a href="#reservations" class="nav-reserve-btn">Reserve a Table</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="hero-eyebrow">🍵 Matcha · Moments · Magic — Nairobi</span>
    <h1>L a y a l i<br><em>Café</em></h1>
    <p class="hero-sub">Where every evening begins with something beautiful.</p>
    <div class="hero-btns">
      <a href="#menu" class="btn-hero-primary">Explore the Menu</a>
      <a href="#reservations" class="btn-hero-ghost">Make a Reservation</a>
    </div>
  </div>
  <div class="hero-scroll">Scroll<div class="scroll-line"></div></div>
</section>

<!-- ABOUT -->
<section class="about" id="about">
  <div class="container about-grid">
    <div class="about-img-wrap">
      <img class="about-img-main" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900&q=85" alt="Inside Layali Café"/>
      <img class="about-img-float" src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=400&q=80" alt="Matcha preparation"/>
    </div>
    <div class="about-text">
      <span class="s-label">Our Story</span>
      <h2 class="s-title">Brewed slow.<br>Felt deeply.</h2>
      <p class="s-sub" style="margin-bottom:20px">Layali — Arabic for "nights" — was born from the idea that a café should feel like a refuge. A place where time slows down, ingredients are honest, and every cup tells a story.</p>
      <p style="color:var(--text-md);margin-bottom:14px;font-size:0.95rem;line-height:1.8">Every matcha is ceremonial grade, sourced from Uji, Japan. Every bean is single-origin East African. Every dish is seasonal and made fresh.</p>
      <p style="color:var(--text-md);font-size:0.95rem;line-height:1.8">We compost, we reuse, and we care — because good food should leave the world a little better than it found it.</p>
      <div class="pill-row">
        <span class="pill">🍵 Ceremonial Matcha</span>
        <span class="pill">🌿 Organic Sourced</span>
        <span class="pill">♻️ Zero Waste</span>
        <span class="pill">🌍 Local First</span>
        <span class="pill">🐄 Free-Range Dairy</span>
      </div>
    </div>
  </div>
</section>

<!-- MENU -->
<section class="menu-section" id="menu">
  <div class="container">
    <div class="menu-head">
      <span class="s-label">What We Serve</span>
      <h2 class="s-title">The Menu</h2>
      <p class="s-sub" style="text-align:center;margin:0 auto 12px">Forty-six reasons to linger a little longer.</p>
      <p style="text-align:center;font-size:0.8rem;color:var(--text-lt);margin-bottom:0">✦ Hover over any item to see details ✦</p>
    </div>
    <div class="menu-tabs">
      <button class="tab-btn active" onclick="filterMenu('all',this)">All</button>
      <button class="tab-btn" onclick="filterMenu('matcha',this)">🍵 Matcha</button>
      <button class="tab-btn" onclick="filterMenu('coffee',this)">Coffee</button>
      <button class="tab-btn" onclick="filterMenu('drinks',this)">Drinks</button>
      <button class="tab-btn" onclick="filterMenu('breakfast',this)">Breakfast</button>
      <button class="tab-btn" onclick="filterMenu('mains',this)">Mains</button>
      <button class="tab-btn" onclick="filterMenu('pastry',this)">Pastries</button>
      <button class="tab-btn" onclick="filterMenu('dessert',this)">Desserts</button>
    </div>
    <div class="menu-grid" id="menuGrid"></div>
  </div>
</section>

<!-- RESERVATIONS -->
<section class="reservations" id="reservations">
  <div class="container res-grid">
    <div class="res-text">
      <span class="s-label">Book a Table</span>
      <h2 class="s-title" style="color:var(--white)">Reserve your<br><em style="color:var(--matcha-light);font-style:italic">perfect evening.</em></h2>
      <p class="s-sub">Whether it's a date night, a birthday, or just a Tuesday you want to remember — we'll set the scene.</p>
      <div class="res-feat">
        <div class="res-feat-item">
          <div class="res-feat-icon">🕯️</div>
          <div class="res-feat-text">
            <strong>Candlelit Table Settings</strong>
            <span>Romantic ambience curated for every reservation</span>
          </div>
        </div>
        <div class="res-feat-item">
          <div class="res-feat-icon">🎂</div>
          <div class="res-feat-text">
            <strong>Special Occasion Add-ons</strong>
            <span>Cakes, flowers, and custom menus on request</span>
          </div>
        </div>
        <div class="res-feat-item">
          <div class="res-feat-icon">🍵</div>
          <div class="res-feat-text">
            <strong>Complimentary Welcome Matcha</strong>
            <span>All reservations receive a matcha on arrival</span>
          </div>
        </div>
        <div class="res-feat-item">
          <div class="res-feat-icon">🔒</div>
          <div class="res-feat-text">
            <strong>Private Dining Room</strong>
            <span>Groups of 8+ can book our exclusive garden room</span>
          </div>
        </div>
      </div>
    </div>
    <div class="res-form">
      <h3 class="form-title">Make a Reservation</h3>
      <div class="form-row">
        <div class="form-group">
          <label>First Name</label>
          <input type="text" id="fname" placeholder="e.g. Amina"/>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" id="lname" placeholder="e.g. Ochieng"/>
        </div>
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="email" placeholder="you@example.com"/>
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" id="phone" placeholder="+254 7XX XXX XXX"/>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Date</label>
          <input type="date" id="resdate"/>
        </div>
        <div class="form-group">
          <label>Time</label>
          <select id="restime">
            <option value="">Select time</option>
            <option>7:00 AM</option><option>7:30 AM</option>
            <option>8:00 AM</option><option>8:30 AM</option>
            <option>9:00 AM</option><option>10:00 AM</option>
            <option>11:00 AM</option><option>12:00 PM</option>
            <option>1:00 PM</option><option>2:00 PM</option>
            <option>3:00 PM</option><option>4:00 PM</option>
            <option>5:00 PM</option><option>6:00 PM</option>
            <option>7:00 PM</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Party Size</label>
          <select id="partysize">
            <option>1 Guest</option><option>2 Guests</option>
            <option>3 Guests</option><option>4 Guests</option>
            <option>5 Guests</option><option>6 Guests</option>
            <option>7 Guests</option><option>8+ Guests</option>
          </select>
        </div>
        <div class="form-group">
          <label>Occasion</label>
          <select id="occasion">
            <option>Just Coffee ☕</option>
            <option>Date Night 🌹</option>
            <option>Birthday 🎂</option>
            <option>Business Meeting 💼</option>
            <option>Anniversary 💍</option>
            <option>Family Brunch 🥞</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Special Requests</label>
        <textarea id="notes" placeholder="Dietary needs, allergies, décor requests…"></textarea>
      </div>
      <button class="btn-submit" onclick="submitReservation()">Confirm Reservation</button>
      <p class="form-note">We'll confirm via WhatsApp or email within 30 minutes. No card required.</p>
    </div>
  </div>
</section>

<!-- LOYALTY -->
<section class="loyalty" id="loyalty">
  <div class="container loyalty-grid">
    <div>
      <span class="s-label">Layali Rewards</span>
      <h2 class="s-title">Love us back.<br>We reward it.</h2>
      <p class="s-sub" style="margin-bottom:40px">Earn points every time you visit. Unlock perks, free drinks, and exclusive offers the more you come.</p>
      <div class="tier-cards">
        <div class="tier-card tier-bronze">
          <div class="tier-badge" style="color:#c97a3a"><span>🥉</span> Bronze Tier</div>
          <div class="tier-name" style="color:#8b4a1a">Seedling</div>
          <div class="tier-req">0 – 499 points</div>
          <ul class="tier-perks">
            <li>Free birthday drink</li>
            <li>10% off every 5th visit</li>
            <li>Early access to seasonal menus</li>
          </ul>
        </div>
        <div class="tier-card tier-silver">
          <div class="tier-badge" style="color:#5a7a8a"><span>🥈</span> Silver Tier</div>
          <div class="tier-name" style="color:#2a4a5a">Bloom</div>
          <div class="tier-req">500 – 1,499 points</div>
          <ul class="tier-perks">
            <li>Everything in Seedling</li>
            <li>Free upgrade on all drinks</li>
            <li>Priority weekend reservations</li>
            <li>Monthly surprise treat delivered</li>
          </ul>
        </div>
        <div class="tier-card tier-gold">
          <div class="tier-badge" style="color:#8a6a00"><span>🥇</span> Gold Tier</div>
          <div class="tier-name" style="color:#5a4000">Harvest</div>
          <div class="tier-req">1,500 – 2,999 points</div>
          <ul class="tier-perks">
            <li>Everything in Bloom</li>
            <li>Complimentary meal once a month</li>
            <li>Exclusive Gold member events</li>
            <li>Named table every visit</li>
          </ul>
        </div>
        <div class="tier-card tier-matcha">
          <div class="tier-badge" style="color:var(--m2)"><span>🍵</span> Matcha Elite</div>
          <div class="tier-name" style="color:var(--m1)">Eternal Bloom</div>
          <div class="tier-req">3,000+ points</div>
          <ul class="tier-perks">
            <li>Everything in Harvest</li>
            <li>Unlimited free matcha all year</li>
            <li>Your name on the loyalty wall</li>
            <li>Personal menu customisation</li>
            <li>Annual VIP dinner with the chef</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loyalty-right">
      <div class="loyalty-signup">
        <h4>Join the Rewards Club</h4>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your name"/>
        </div>
        <div class="form-group">
          <label>Email or Phone</label>
          <input type="text" placeholder="email or +254…"/>
        </div>
        <div class="form-group">
          <label>How often do you visit?</label>
          <select>
            <option>First time / rarely</option>
            <option>Once a month</option>
            <option>A few times a month</option>
            <option>Weekly regular</option>
            <option>I basically live here</option>
          </select>
        </div>
        <button class="btn-submit" onclick="joinLoyalty()" style="margin-top:4px">Join for Free →</button>
      </div>
      <div class="points-info">
        <h4>How Points Work</h4>
        <div class="points-row"><span>Every KSh 100 spent</span><span>= 10 pts</span></div>
        <div class="points-row"><span>Refer a friend</span><span>= 100 pts</span></div>
        <div class="points-row"><span>Share on social media</span><span>= 50 pts</span></div>
        <div class="points-row"><span>Birthday bonus</span><span>= 200 pts</span></div>
        <div class="points-row"><span>Review on Google</span><span>= 75 pts</span></div>
        <div class="points-row"><span>Try a new menu item</span><span>= 25 pts</span></div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials">
  <div class="container">
    <span class="s-label" style="color:var(--matcha-light)">Kind Words</span>
    <h2 class="s-title" style="color:var(--white);margin-bottom:48px">Our guests say it best.</h2>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="stars">★★★★★</div>
        <p class="testi-text">"The ceremonial matcha latte is unlike anything I've had. I've tried matcha across Tokyo and Kyoto — Layali genuinely rivals the best. The atmosphere is everything."</p>
        <div class="testi-author"><div class="testi-av">A</div><div><div class="testi-name">Amina K.</div><div class="testi-role">Food Blogger · Nairobi</div></div></div>
      </div>
      <div class="testi-card">
        <div class="stars">★★★★★</div>
        <p class="testi-text">"I'm a Gold Rewards member and the perks are real. Free monthly meal, priority seating — I feel genuinely valued here. The shakshuka is perfection every single time."</p>
        <div class="testi-author"><div class="testi-av">B</div><div><div class="testi-name">Brian O.</div><div class="testi-role">Architect · Westlands</div></div></div>
      </div>
      <div class="testi-card">
        <div class="stars">★★★★★</div>
        <p class="testi-text">"Booked the private garden room for our anniversary. They had rose petals on the table and a custom matcha cake. I cried. 10/10. We're back every month."</p>
        <div class="testi-author"><div class="testi-av">S</div><div><div class="testi-name">Sara & James M.</div><div class="testi-role">Regular Guests</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- HOURS -->
<section class="hours" id="hours">
  <div class="container hours-grid">
    <div class="hours-img">
      <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85" alt="Layali interior"/>
    </div>
    <div class="hours-content">
      <span class="s-label">Find Us</span>
      <h2 class="s-title">Hours &<br>Location</h2>
      <p class="s-sub" style="margin-bottom:32px">Come as you are. Stay as long as you like.</p>
      <table>
        <tr><td>Monday – Friday</td><td>7:00 AM – 8:00 PM</td></tr>
        <tr><td>Saturday</td><td>8:00 AM – 9:00 PM</td></tr>
        <tr><td>Sunday</td><td>9:00 AM – 6:00 PM</td></tr>
        <tr><td>Public Holidays</td><td>10:00 AM – 5:00 PM</td></tr>
      </table>
      <div class="contact-row">
        <div class="contact-item"><span class="contact-icon">📍</span> 14 Karura Lane, Westlands, Nairobi</div>
        <div class="contact-item"><span class="contact-icon">📞</span> +254 700 000 000</div>
        <div class="contact-item"><span class="contact-icon">📧</span> hello@layalicafe.co.ke</div>
        <div class="contact-item"><span class="contact-icon">💬</span> WhatsApp orders & reservations welcome</div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <span class="nav-logo">Layali <em>Café</em></span>
        <p>Where every evening begins with something beautiful. Organic, seasonal, and made with intention.</p>
        <div class="social-links">
          <a class="social-link" href="#">📸</a>
          <a class="social-link" href="#">📘</a>
          <a class="social-link" href="#">🐦</a>
          <a class="social-link" href="#">💬</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">The Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#loyalty">Layali Rewards</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Menu Highlights</h5>
        <ul>
          <li><a href="#">Matcha Collection</a></li>
          <li><a href="#">Weekend Brunch</a></li>
          <li><a href="#">Seasonal Specials</a></li>
          <li><a href="#">Vegan Options</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Visit Us</h5>
        <ul>
          <li><a href="#">14 Karura Lane, Westlands</a></li>
          <li><a href="#">+254 700 000 000</a></li>
          <li><a href="#">hello@layalicafe.co.ke</a></li>
          <li><a href="#">Catering Enquiries</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Layali Café. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Allergen Info</a>
      </div>
    </div>
  </div>
</footer>

<!-- MODAL -->
<div class="modal-overlay" id="resModal">
  <div class="modal">
    <div class="modal-icon">🍵</div>
    <h3>You're confirmed!</h3>
    <p>Thank you for reserving at Layali Café. We'll send a confirmation to your email and WhatsApp within 30 minutes. A complimentary matcha awaits you on arrival.</p>
    <button class="modal-close" onclick="closeModal()">Perfect, see you soon →</button>
  </div>
</div>

<div class="modal-overlay" id="loyalModal">
  <div class="modal">
    <div class="modal-icon">✨</div>
    <h3>Welcome to the club!</h3>
    <p>You're now a Layali Rewards member! You've been placed in the <strong>Seedling</strong> tier to start. Check your email for your member card and first offer — 10% off your next visit.</p>
    <button class="modal-close" onclick="closeLoyalModal()">Let's go! →</button>
  </div>
</div>

<script>
const menuItems = [
  // MATCHA (10)
  {name:"Ceremonial Matcha Latte",cat:"matcha",label:"Matcha",price:"KSh 480",desc:"Uji ceremonial grade matcha whisked to perfection with steamed oat milk and a touch of raw honey. Smooth, earthy, and deeply calming.",badge:"Signature",img:"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=85"},
  {name:"Iced Matcha Latte",cat:"matcha",label:"Matcha",price:"KSh 480",desc:"Cold-shaken matcha poured over ice, topped with oat milk. Refreshing and energising without the jitters.",badge:"Iced",img:"https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&q=85"},
  {name:"Matcha Espresso Fusion",cat:"matcha",label:"Matcha",price:"KSh 520",desc:"A double shot of espresso meets ceremonial matcha — bold, complex, and surprisingly harmonious.",badge:"Bold",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85"},
  {name:"Matcha Cheesecake",cat:"matcha",label:"Matcha",price:"KSh 560",desc:"No-bake cheesecake with a ceremonial matcha swirl, biscuit base and white chocolate ganache drizzle.",badge:"",img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=85"},
  {name:"Matcha Croissant",cat:"matcha",label:"Matcha",price:"KSh 380",desc:"Buttery laminated croissant with matcha frangipane filling and white chocolate drizzle. Baked fresh at 6 AM.",badge:"Fresh Daily",img:"https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=85"},
  {name:"Matcha Chia Pudding",cat:"matcha",label:"Matcha",price:"KSh 440",desc:"Overnight chia soaked in ceremonial matcha and coconut milk, topped with mango and coconut flakes.",badge:"Vegan",img:"https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&q=85"},
  {name:"Matcha Tiramisu",cat:"matcha",label:"Matcha",price:"KSh 580",desc:"A Japanese-Italian twist — matcha-soaked sponge fingers, mascarpone cream, dusted with ceremonial matcha powder.",badge:"Chef's Special",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85"},
  {name:"Matcha Bubble Tea",cat:"matcha",label:"Matcha",price:"KSh 520",desc:"Ceremonial matcha shaken with brown sugar syrup and tapioca pearls. Chewy, creamy and utterly addictive.",badge:"Trending",img:"https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=85"},
  {name:"Matcha Pancakes",cat:"matcha",label:"Matcha",price:"KSh 680",desc:"Fluffy Japanese-style matcha pancakes served with whipped cream, strawberry compote and matcha honey.",badge:"Weekend Only",img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=85"},
  {name:"Matcha Lemonade",cat:"matcha",label:"Matcha",price:"KSh 400",desc:"Fresh lemon juice, sparkling water and a matcha float. Tart, earthy and incredibly refreshing.",badge:"Vegan",img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=85"},

  // COFFEE (8)
  {name:"Signature Espresso",cat:"coffee",label:"Coffee",price:"KSh 250",desc:"Double shot of our single-origin Ethiopian Yirgacheffe blend. Rich, balanced and bright with a caramel finish.",badge:"Best Seller",img:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=85"},
  {name:"Oat Milk Flat White",cat:"coffee",label:"Coffee",price:"KSh 380",desc:"Silky steamed oat milk poured over two tight ristretto shots. Creamy, smooth, and entirely plant-based.",badge:"Vegan",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85"},
  {name:"Cold Brew",cat:"coffee",label:"Coffee",price:"KSh 420",desc:"Slow-steeped for 18 hours then served over hand-cracked ice. Bold and naturally sweet — never bitter.",badge:"Iced",img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=85"},
  {name:"Caramel Macchiato",cat:"coffee",label:"Coffee",price:"KSh 400",desc:"Layered vanilla syrup, steamed milk, double espresso and house salted caramel drizzle.",badge:"",img:"https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=85"},
  {name:"Dirty Chai Latte",cat:"coffee",label:"Coffee",price:"KSh 420",desc:"House-spiced masala chai spiked with a single shot of espresso. Warmly addictive.",badge:"Spiced",img:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=85"},
  {name:"Affogato",cat:"coffee",label:"Coffee",price:"KSh 460",desc:"Silky vanilla gelato drowned under a hot double espresso. Dessert and coffee in one perfect glass.",badge:"Indulgent",img:"https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&q=85"},
  {name:"Vietnamese Iced Coffee",cat:"coffee",label:"Coffee",price:"KSh 390",desc:"Condensed milk layered beneath slow-drip coffee, poured over crushed ice. Sweet, strong and smoky.",badge:"Iced",img:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=85"},
  {name:"Honey Lavender Latte",cat:"coffee",label:"Coffee",price:"KSh 440",desc:"Espresso with house lavender syrup and wildflower honey, steamed oat milk, dried lavender garnish.",badge:"Floral",img:"https://images.unsplash.com/photo-1561882468-9110d70d0691?w=600&q=85"},

  // DRINKS (5)
  {name:"Hibiscus Ginger Tea",cat:"drinks",label:"Drinks",price:"KSh 300",desc:"Kenyan hibiscus flowers steeped with fresh ginger, honey and a star anise pod. Gorgeous deep crimson.",badge:"Caffeine-Free",img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=85"},
  {name:"Mango Passion Smoothie",cat:"drinks",label:"Drinks",price:"KSh 450",desc:"Kenyan mango, passion fruit, banana and yoghurt blended fresh to order. Sunshine in a glass.",badge:"No Added Sugar",img:"https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=600&q=85"},
  {name:"Sparkling Mint Lemonade",cat:"drinks",label:"Drinks",price:"KSh 350",desc:"House-squeezed lemons, fresh mint bruised to release oils, sparkling water, a pinch of sea salt.",badge:"Refreshing",img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=85"},
  {name:"Turmeric Golden Milk",cat:"drinks",label:"Drinks",price:"KSh 380",desc:"Oat milk warmed with turmeric, cinnamon, black pepper and maple syrup. Anti-inflammatory bliss.",badge:"Vegan",img:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=85"},
  {name:"Avocado Smoothie",cat:"drinks",label:"Drinks",price:"KSh 480",desc:"Creamy Kenyan avocado blended with coconut milk, a squeeze of lime, and raw honey. Rich and dreamy.",badge:"Vegan",img:"https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=600&q=85"},

  // BREAKFAST (7)
  {name:"Smashed Avocado Toast",cat:"breakfast",label:"Breakfast",price:"KSh 650",desc:"Toasted sourdough, smashed Kenyan avocado, chilli flakes, a poached egg, and pea shoots.",badge:"Best Seller",img:"https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=600&q=85"},
  {name:"Acai Bowl",cat:"breakfast",label:"Breakfast",price:"KSh 720",desc:"Frozen acai blended thick, topped with house granola, banana, seasonal berries and local honey drizzle.",badge:"Vegan",img:"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=85"},
  {name:"Shakshuka",cat:"breakfast",label:"Breakfast",price:"KSh 700",desc:"Free-range eggs poached in smoky harissa tomato sauce with peppers, feta crumble and warm pita.",badge:"Vegetarian",img:"https://images.unsplash.com/photo-1590301157284-9c68e84e71f1?w=600&q=85"},
  {name:"French Toast",cat:"breakfast",label:"Breakfast",price:"KSh 620",desc:"Brioche soaked in vanilla cinnamon batter, pan-fried golden, maple syrup, fresh strawberries.",badge:"",img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=85"},
  {name:"Green Omelette",cat:"breakfast",label:"Breakfast",price:"KSh 680",desc:"Free-range eggs folded with wilted spinach, creamy feta, basil and sun-dried tomatoes.",badge:"Vegetarian",img:"https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=85"},
  {name:"Granola & Yoghurt",cat:"breakfast",label:"Breakfast",price:"KSh 480",desc:"House-toasted granola, thick Greek yoghurt, seasonal fruit, chia seeds, a drizzle of honey.",badge:"",img:"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=85"},
  {name:"Eggs Benedict",cat:"breakfast",label:"Breakfast",price:"KSh 750",desc:"Toasted English muffin, smoked salmon, perfectly poached eggs, silky hollandaise and chives.",badge:"Weekend Special",img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=85"},

  // MAINS (6)
  {name:"Verdure Buddha Bowl",cat:"mains",label:"Mains",price:"KSh 820",desc:"Brown rice, roasted sweet potato, crispy chickpeas, avocado, baby spinach and lemon tahini dressing.",badge:"Vegan",img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=85"},
  {name:"Smoked Salmon Bagel",cat:"mains",label:"Mains",price:"KSh 890",desc:"House-cured salmon, whipped cream cheese, capers, pickled red onion, fresh dill on a toasted sesame bagel.",badge:"",img:"https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=600&q=85"},
  {name:"Mushroom Flatbread",cat:"mains",label:"Mains",price:"KSh 780",desc:"Wild mushroom medley, truffle oil, whipped ricotta, fresh thyme on charred house flatbread.",badge:"Vegetarian",img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=85"},
  {name:"Pesto Pasta",cat:"mains",label:"Mains",price:"KSh 800",desc:"Al dente fusilli tossed in vibrant house basil pesto, cherry tomatoes, toasted pine nuts, parmesan.",badge:"Vegetarian",img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=85"},
  {name:"Grilled Chicken Salad",cat:"mains",label:"Mains",price:"KSh 850",desc:"Herb-marinated free-range chicken, peppery arugula, shaved parmesan, cherry tomatoes, lemon dressing.",badge:"",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85"},
  {name:"Tomato Bisque & Sourdough",cat:"mains",label:"Mains",price:"KSh 620",desc:"Slow-roasted tomato soup finished with basil oil and cream, served with house-baked sourdough.",badge:"Vegan",img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85"},

  // PASTRIES (5)
  {name:"Butter Croissant",cat:"pastry",label:"Pastries",price:"KSh 280",desc:"Classic French croissant laminated with 84% European butter. Shatteringly crisp outside, cloud-soft inside.",badge:"Fresh Daily",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85"},
  {name:"Blueberry Muffin",cat:"pastry",label:"Pastries",price:"KSh 240",desc:"Tall dome-top muffin bursting with wild blueberries and a crunchy demerara sugar crust.",badge:"",img:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=85"},
  {name:"Banana Bread",cat:"pastry",label:"Pastries",price:"KSh 260",desc:"Moist, dense banana bread packed with walnuts, lightly toasted and served with cultured butter.",badge:"",img:"https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=600&q=85"},
  {name:"Cinnamon Roll",cat:"pastry",label:"Pastries",price:"KSh 310",desc:"Giant soft roll with cinnamon sugar swirl, glazed with tangy cream cheese icing. Weekend heaven.",badge:"Weekend Special",img:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=85"},
  {name:"Spinach & Feta Scone",cat:"pastry",label:"Pastries",price:"KSh 290",desc:"Savoury flaky scone loaded with wilted spinach, crumbled feta and a hint of nutmeg.",badge:"Vegetarian",img:"https://images.unsplash.com/photo-1617200043013-a53b82ee8f15?w=600&q=85"},

  // DESSERTS (5)
  {name:"Chocolate Lava Cake",cat:"dessert",label:"Desserts",price:"KSh 590",desc:"Warm dark chocolate sponge with a molten centre, served with a quenelle of vanilla bean ice cream.",badge:"Indulgent",img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=85"},
  {name:"Mango Panna Cotta",cat:"dessert",label:"Desserts",price:"KSh 480",desc:"Silky vanilla panna cotta topped with fresh Kenyan mango coulis and a mint sprig.",badge:"",img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=85"},
  {name:"Lemon Tart",cat:"dessert",label:"Desserts",price:"KSh 500",desc:"Buttery shortcrust pastry shell filled with silky lemon curd and finished with torched Italian meringue.",badge:"",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=85"},
  {name:"Coconut Chia Pudding",cat:"dessert",label:"Desserts",price:"KSh 420",desc:"Overnight chia soaked in coconut milk, topped with passion fruit, toasted coconut and mango slices.",badge:"Vegan",img:"https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&q=85"},
  {name:"Tiramisu",cat:"dessert",label:"Desserts",price:"KSh 560",desc:"Classic ladyfingers soaked in espresso, layered with mascarpone and dusted with dark cocoa powder.",badge:"",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85"},
];

let currentFilter = 'all';

function renderCards(filter){
  currentFilter = filter;
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter);
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
        <div class="card-hover-overlay">
          <div class="overlay-name">${item.name}</div>
          <div class="overlay-desc">${item.desc}</div>
          <div class="overlay-price">${item.price}</div>
          ${item.badge ? `<span class="overlay-badge">${item.badge}</span>` : ''}
        </div>
      </div>
      <div class="card-body">
        <p class="card-cat">${item.label}</p>
        <h3 class="card-name">${item.name}</h3>
        <div class="card-footer-row">
          <span class="card-price">${item.price}</span>
          ${item.badge ? `<span class="card-tag">${item.badge}</span>` : ''}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function filterMenu(cat, btn){
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards(cat);
}

function submitReservation(){
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const date  = document.getElementById('resdate').value;
  const time  = document.getElementById('restime').value;
  if(!fname || !email || !date || !time){
    alert('Please fill in your name, email, date and time to confirm.');
    return;
  }
  document.getElementById('resModal').classList.add('open');
}
function closeModal(){
  document.getElementById('resModal').classList.remove('open');
  ['fname','lname','email','phone','resdate','notes'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
}

function joinLoyalty(){
  document.getElementById('loyalModal').classList.add('open');
}
function closeLoyalModal(){
  document.getElementById('loyalModal').classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', function(e){ if(e.target === this) this.classList.remove('open'); });
});

// Set min date for reservation to today
const d = new Date(); 
const minDate = d.toISOString().split('T')[0];
document.getElementById('resdate').setAttribute('min', minDate);

renderCards('all');
</script>
</body>
</html>
