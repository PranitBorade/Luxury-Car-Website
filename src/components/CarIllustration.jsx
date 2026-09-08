// SVG-based car silhouette illustrations for each car
// These are stylized side-profile shapes unique to each vehicle segment

const CarIllustration = ({ car, className = '' }) => {
  const illustrations = {
    1: ( // Velmora Prestige — Full-Size Sedan
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2e" />
            <stop offset="60%" stopColor="#1e1e22" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A22720" />
            <stop offset="100%" stopColor="#C9A22705" />
          </linearGradient>
        </defs>
        {/* Body */}
        <path d="M35,72 L55,45 Q80,28 130,24 Q175,20 200,22 Q235,20 268,24 Q310,28 350,45 L375,72 L385,85 L35,85 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(201,162,39,0.2)" strokeWidth="0.8"/>
        {/* Cabin glass */}
        <path d="M110,24 Q138,10 185,8 Q225,6 262,8 Q295,10 320,24 L340,42 Q295,38 200,38 Q115,38 85,42 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(201,162,39,0.15)" strokeWidth="0.5"/>
        {/* A-pillar */}
        <line x1="110" y1="24" x2="87" y2="42" stroke="rgba(201,162,39,0.25)" strokeWidth="1.5"/>
        {/* C-pillar */}
        <line x1="320" y1="24" x2="343" y2="42" stroke="rgba(201,162,39,0.25)" strokeWidth="1.5"/>
        {/* Hood line */}
        <path d="M350,45 Q365,55 375,72" fill="none" stroke="rgba(201,162,39,0.2)" strokeWidth="1"/>
        {/* Front bumper */}
        <path d="M373,72 Q382,78 385,85" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1.2"/>
        {/* Rear bumper */}
        <path d="M42,72 Q35,78 33,85" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1.2"/>
        {/* Belt line */}
        <path d="M62,46 Q140,40 200,40 Q268,40 348,46" fill="none" stroke="rgba(245,245,240,0.08)" strokeWidth="1"/>
        {/* Front wheel */}
        <circle cx="105" cy="85" r="24" fill="#0d0d0f" stroke="rgba(201,162,39,0.3)" strokeWidth="1.5"/>
        <circle cx="105" cy="85" r="16" fill="#141416" stroke="rgba(201,162,39,0.15)" strokeWidth="0.8"/>
        <circle cx="105" cy="85" r="5" fill="#C9A227" opacity="0.5"/>
        {/* Rear wheel */}
        <circle cx="315" cy="85" r="24" fill="#0d0d0f" stroke="rgba(201,162,39,0.3)" strokeWidth="1.5"/>
        <circle cx="315" cy="85" r="16" fill="#141416" stroke="rgba(201,162,39,0.15)" strokeWidth="0.8"/>
        <circle cx="315" cy="85" r="5" fill="#C9A227" opacity="0.5"/>
        {/* Headlight */}
        <path d="M360,55 Q370,60 374,68" fill="none" stroke="#C9A227" strokeWidth="2" opacity="0.6"/>
        {/* Taillight */}
        <rect x="37" y="55" width="3" height="18" rx="1" fill="#C9A22760"/>
        {/* Door line */}
        <path d="M155,42 L152,78" fill="none" stroke="rgba(245,245,240,0.06)" strokeWidth="0.8"/>
        <path d="M247,42 L250,78" fill="none" stroke="rgba(245,245,240,0.06)" strokeWidth="0.8"/>
        {/* Ground shadow */}
        <ellipse cx="200" cy="111" rx="165" ry="8" fill="rgba(0,0,0,0.4)"/>
      </svg>
    ),
    2: ( // Sterling Aeon GT — Grand Touring Coupé
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e2e32" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8A8A020" />
            <stop offset="100%" stopColor="#A8A8A005" />
          </linearGradient>
        </defs>
        {/* Low-slung body */}
        <path d="M30,78 L60,48 Q90,28 145,20 Q185,15 215,16 Q250,15 300,22 Q350,32 378,62 L392,78 L392,90 L30,90 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(168,168,160,0.2)" strokeWidth="0.8"/>
        {/* Long sweeping hood */}
        <path d="M290,22 Q350,32 375,60" fill="none" stroke="rgba(168,168,160,0.2)" strokeWidth="1"/>
        {/* Fastback roofline */}
        <path d="M145,20 Q110,26 85,44" fill="none" stroke="rgba(168,168,160,0.2)" strokeWidth="1"/>
        {/* Cabin glass (very low) */}
        <path d="M152,20 Q185,8 225,7 Q265,8 298,18 L310,36 Q265,32 210,32 Q158,32 140,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(168,168,160,0.15)" strokeWidth="0.5"/>
        {/* Rear fastback */}
        <path d="M310,18 L320,36 Q330,52 350,76" fill="none" stroke="rgba(168,168,160,0.2)" strokeWidth="1.2"/>
        {/* Belt line — dramatic */}
        <path d="M70,50 Q190,42 380,70" fill="none" stroke="rgba(245,245,240,0.1)" strokeWidth="1.2"/>
        {/* Front wheel */}
        <circle cx="110" cy="90" r="26" fill="#0d0d0f" stroke="rgba(168,168,160,0.35)" strokeWidth="1.5"/>
        <circle cx="110" cy="90" r="18" fill="#141416" stroke="rgba(168,168,160,0.15)" strokeWidth="0.8"/>
        <circle cx="110" cy="90" r="6" fill="#A8A8A0" opacity="0.4"/>
        {/* Rear wheel */}
        <circle cx="330" cy="90" r="26" fill="#0d0d0f" stroke="rgba(168,168,160,0.35)" strokeWidth="1.5"/>
        <circle cx="330" cy="90" r="18" fill="#141416" stroke="rgba(168,168,160,0.15)" strokeWidth="0.8"/>
        <circle cx="330" cy="90" r="6" fill="#A8A8A0" opacity="0.4"/>
        {/* Sharp headlight */}
        <path d="M375,62 L392,68 L388,78" fill="none" stroke="#C9A227" strokeWidth="2.5" opacity="0.7"/>
        {/* Taillight strip */}
        <rect x="33" y="58" width="2.5" height="22" rx="1" fill="#C9A22750"/>
        {/* Diffuser */}
        <path d="M35,85 Q40,92 100,90" fill="none" stroke="rgba(168,168,160,0.2)" strokeWidth="1"/>
        {/* Ground shadow */}
        <ellipse cx="210" cy="118" rx="170" ry="7" fill="rgba(0,0,0,0.45)"/>
      </svg>
    ),
    3: ( // Halcyon Apex — Luxury SUV
      <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#303035" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B8B8B20" />
            <stop offset="100%" stopColor="#8B8B8B05" />
          </linearGradient>
        </defs>
        {/* Tall SUV body */}
        <path d="M28,85 L42,42 Q62,22 110,16 Q165,12 210,13 Q255,12 310,16 Q355,22 375,42 L390,85 L390,100 L28,100 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(139,139,139,0.2)" strokeWidth="0.8"/>
        {/* Flat roofline */}
        <path d="M110,16 Q210,13 310,16 L310,14 Q210,11 110,14 Z" fill="rgba(139,139,139,0.08)"/>
        {/* Cabin glass */}
        <path d="M115,16 Q175,9 213,8 Q255,9 305,15 L295,36 Q245,32 210,32 Q178,32 128,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(139,139,139,0.15)" strokeWidth="0.5"/>
        {/* B-pillar */}
        <line x1="208" y1="9" x2="208" y2="36" stroke="rgba(245,245,240,0.1)" strokeWidth="2"/>
        {/* Front wheel */}
        <circle cx="108" cy="100" r="28" fill="#0d0d0f" stroke="rgba(139,139,139,0.35)" strokeWidth="1.5"/>
        <circle cx="108" cy="100" r="19" fill="#141416" stroke="rgba(139,139,139,0.15)" strokeWidth="0.8"/>
        <circle cx="108" cy="100" r="6" fill="#8B8B8B" opacity="0.4"/>
        {/* Rear wheel */}
        <circle cx="312" cy="100" r="28" fill="#0d0d0f" stroke="rgba(139,139,139,0.35)" strokeWidth="1.5"/>
        <circle cx="312" cy="100" r="19" fill="#141416" stroke="rgba(139,139,139,0.15)" strokeWidth="0.8"/>
        <circle cx="312" cy="100" r="6" fill="#8B8B8B" opacity="0.4"/>
        {/* Roof rails */}
        <line x1="110" y1="13" x2="310" y2="13" stroke="rgba(201,162,39,0.3)" strokeWidth="2"/>
        {/* Belt line */}
        <path d="M50,46 Q200,40 370,46" fill="none" stroke="rgba(245,245,240,0.08)" strokeWidth="1"/>
        {/* Headlight (large, angular) */}
        <path d="M365,44 L388,52 L386,62" fill="none" stroke="#C9A227" strokeWidth="2.5" opacity="0.65"/>
        {/* Taillight */}
        <rect x="32" y="48" width="3" height="28" rx="1" fill="#C9A22760"/>
        {/* DRL strip */}
        <path d="M364,36 L388,44" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.35"/>
        {/* Running board */}
        <rect x="55" y="96" width="310" height="4" rx="2" fill="rgba(139,139,139,0.15)"/>
        {/* Ground shadow */}
        <ellipse cx="210" cy="127" rx="175" ry="9" fill="rgba(0,0,0,0.5)"/>
      </svg>
    ),
    4: ( // Orionis Volt — Electric Flagship
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e2e32" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E825" />
            <stop offset="100%" stopColor="#E8E8E808" />
          </linearGradient>
        </defs>
        {/* Aerodynamic body */}
        <path d="M38,74 L62,44 Q95,24 155,18 Q195,15 215,16 Q248,15 285,20 Q335,28 370,52 L385,74 L385,88 L38,88 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(232,232,232,0.15)" strokeWidth="0.8"/>
        {/* Full-glass roof */}
        <path d="M155,18 Q215,12 278,19 L295,36 Q248,32 215,32 Q182,32 140,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(232,232,232,0.2)" strokeWidth="0.5"/>
        {/* Panoramic glass continuation */}
        <path d="M140,36 L155,18" fill="none" stroke="rgba(232,232,232,0.15)" strokeWidth="1"/>
        <path d="M295,36 L278,19" fill="none" stroke="rgba(232,232,232,0.15)" strokeWidth="1"/>
        {/* Charging port glow */}
        <circle cx="70" cy="52" r="4" fill="rgba(201,162,39,0.8)" opacity="0.6"/>
        <circle cx="70" cy="52" r="7" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1"/>
        {/* Belt line — flush */}
        <path d="M68,48 Q215,40 372,58" fill="none" stroke="rgba(232,232,232,0.08)" strokeWidth="0.8"/>
        {/* Front wheel */}
        <circle cx="112" cy="88" r="24" fill="#0d0d0f" stroke="rgba(232,232,232,0.3)" strokeWidth="1.5"/>
        <circle cx="112" cy="88" r="16" fill="#141416" stroke="rgba(232,232,232,0.12)" strokeWidth="0.8"/>
        <circle cx="112" cy="88" r="5" fill="#E8E8E8" opacity="0.3"/>
        {/* Rear wheel */}
        <circle cx="320" cy="88" r="24" fill="#0d0d0f" stroke="rgba(232,232,232,0.3)" strokeWidth="1.5"/>
        <circle cx="320" cy="88" r="16" fill="#141416" stroke="rgba(232,232,232,0.12)" strokeWidth="0.8"/>
        <circle cx="320" cy="88" r="5" fill="#E8E8E8" opacity="0.3"/>
        {/* Frameless door handle */}
        <rect x="165" y="50" width="20" height="3" rx="1.5" fill="rgba(232,232,232,0.2)"/>
        <rect x="250" y="50" width="20" height="3" rx="1.5" fill="rgba(232,232,232,0.2)"/>
        {/* Headlight (thin DRL bar) */}
        <path d="M360,52 L384,60" fill="none" stroke="#fff" strokeWidth="2" opacity="0.6"/>
        <path d="M356,58 L384,68" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.5"/>
        {/* Taillight (full-width) */}
        <rect x="40" y="52" width="3" height="24" rx="1" fill="#C9A22780"/>
        {/* Underbody glow (EV) */}
        <path d="M80,88 Q210,95 340,88" fill="none" stroke="rgba(201,162,39,0.1)" strokeWidth="3"/>
        {/* Ground shadow */}
        <ellipse cx="210" cy="113" rx="168" ry="8" fill="rgba(0,0,0,0.4)"/>
      </svg>
    ),
    5: ( // Creston Meridian — Executive Estate
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e263a" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7FA525" />
            <stop offset="100%" stopColor="#4A7FA508" />
          </linearGradient>
        </defs>
        {/* Estate/wagon body (longer roof, squared-off rear) */}
        <path d="M32,76 L56,44 Q80,26 130,20 Q175,16 200,17 Q250,16 330,20 L360,26 L370,40 L380,76 L380,90 L32,90 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(74,127,165,0.2)" strokeWidth="0.8"/>
        {/* Long, flat roofline */}
        <path d="M130,20 Q200,17 330,20 L360,26" fill="none" stroke="rgba(74,127,165,0.2)" strokeWidth="1.5"/>
        {/* Cabin glass (extends far back) */}
        <path d="M138,20 Q200,13 258,14 Q285,14 320,19 L318,36 Q265,32 200,32 Q148,32 136,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(74,127,165,0.15)" strokeWidth="0.5"/>
        {/* Rear quarter glass */}
        <path d="M318,19 L348,24 L355,38 L318,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(74,127,165,0.15)" strokeWidth="0.5"/>
        {/* Roof rails */}
        <line x1="130" y1="18" x2="358" y2="24" stroke="rgba(74,127,165,0.35)" strokeWidth="1.5"/>
        {/* Belt line */}
        <path d="M60,46 Q200,40 372,48" fill="none" stroke="rgba(245,245,240,0.07)" strokeWidth="1"/>
        {/* Front wheel */}
        <circle cx="108" cy="90" r="24" fill="#0d0d0f" stroke="rgba(74,127,165,0.35)" strokeWidth="1.5"/>
        <circle cx="108" cy="90" r="16" fill="#141416" stroke="rgba(74,127,165,0.15)" strokeWidth="0.8"/>
        <circle cx="108" cy="90" r="5" fill="#4A7FA5" opacity="0.45"/>
        {/* Rear wheel */}
        <circle cx="318" cy="90" r="24" fill="#0d0d0f" stroke="rgba(74,127,165,0.35)" strokeWidth="1.5"/>
        <circle cx="318" cy="90" r="16" fill="#141416" stroke="rgba(74,127,165,0.15)" strokeWidth="0.8"/>
        <circle cx="318" cy="90" r="5" fill="#4A7FA5" opacity="0.45"/>
        {/* Headlight */}
        <path d="M362,42 L380,52 L378,64" fill="none" stroke="#C9A227" strokeWidth="2" opacity="0.6"/>
        {/* Taillight (squared) */}
        <rect x="34" y="50" width="4" height="26" rx="1" fill="#C9A22770"/>
        {/* Ground shadow */}
        <ellipse cx="210" cy="114" rx="168" ry="8" fill="rgba(0,0,0,0.4)"/>
      </svg>
    ),
    6: ( // Aurelian Phantom X — Ultra Luxury Limo
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#28282c" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF3720" />
            <stop offset="100%" stopColor="#D4AF3705" />
          </linearGradient>
        </defs>
        {/* Long limo body */}
        <path d="M20,78 L40,50 Q62,30 115,22 Q175,16 210,17 Q270,16 340,22 Q375,30 396,52 L405,78 L405,92 L20,92 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(212,175,55,0.2)" strokeWidth="0.8"/>
        {/* Upright cabin glass */}
        <path d="M118,22 Q175,14 213,13 Q258,14 338,21 L330,40 Q265,35 213,35 Q165,35 125,40 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(212,175,55,0.18)" strokeWidth="0.5"/>
        {/* Chrome waistline */}
        <path d="M55,54 Q213,46 390,56" fill="none" stroke="rgba(212,175,55,0.35)" strokeWidth="1.5"/>
        {/* Chrome lower sill */}
        <path d="M45,78 Q213,74 398,78" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1"/>
        {/* B-pillar (thick, formal) */}
        <line x1="200" y1="13" x2="197" y2="40" stroke="rgba(212,175,55,0.25)" strokeWidth="3.5"/>
        {/* C-pillar */}
        <line x1="318" y1="20" x2="322" y2="40" stroke="rgba(212,175,55,0.2)" strokeWidth="2"/>
        {/* Front wheel */}
        <circle cx="102" cy="92" r="25" fill="#0d0d0f" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5"/>
        <circle cx="102" cy="92" r="17" fill="#141416" stroke="rgba(212,175,55,0.2)" strokeWidth="1"/>
        <circle cx="102" cy="92" r="6" fill="#D4AF37" opacity="0.5"/>
        {/* Rear wheel */}
        <circle cx="330" cy="92" r="25" fill="#0d0d0f" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5"/>
        <circle cx="330" cy="92" r="17" fill="#141416" stroke="rgba(212,175,55,0.2)" strokeWidth="1"/>
        <circle cx="330" cy="92" r="6" fill="#D4AF37" opacity="0.5"/>
        {/* Upright headlight */}
        <path d="M390,54 L406,62 L404,76" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.7"/>
        {/* Spirit of Ecstasy-style bonnet ornament */}
        <line x1="360" y1="22" x2="360" y2="14" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5"/>
        <circle cx="360" cy="13" r="2" fill="#D4AF37" opacity="0.6"/>
        {/* Taillight */}
        <rect x="22" y="54" width="3.5" height="26" rx="1" fill="#D4AF3770"/>
        {/* Ground shadow */}
        <ellipse cx="215" cy="118" rx="185" ry="8" fill="rgba(0,0,0,0.5)"/>
      </svg>
    ),
    7: ( // Nexara Drifton — Performance Crossover
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id={`bodyGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a1a1a" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id={`glassGrad${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B1A1A20" />
            <stop offset="100%" stopColor="#8B1A1A05" />
          </linearGradient>
        </defs>
        {/* Sport crossover body */}
        <path d="M30,80 L52,46 Q75,26 128,18 Q175,13 210,14 Q248,13 295,18 Q345,24 370,46 L385,80 L385,95 L30,95 Z"
          fill={`url(#bodyGrad${car.id})`} stroke="rgba(139,26,26,0.2)" strokeWidth="0.8"/>
        {/* Raked roofline */}
        <path d="M128,18 Q210,12 295,18 L320,36 Q265,30 210,30 Q158,30 110,36 Z"
          fill={`url(#glassGrad${car.id})`} stroke="rgba(139,26,26,0.18)" strokeWidth="0.5"/>
        {/* Sport roof scoop */}
        <path d="M190,12 Q210,10 230,12" fill="none" stroke="rgba(201,162,39,0.2)" strokeWidth="1.5"/>
        {/* Belt line — sharply creased */}
        <path d="M55,48 Q210,40 372,52" fill="none" stroke="rgba(245,245,240,0.1)" strokeWidth="1.2"/>
        {/* Lower cladding */}
        <path d="M38,85 Q210,82 382,85 L386,95 L30,95 Z" fill="rgba(139,26,26,0.1)"/>
        {/* Front wheel */}
        <circle cx="112" cy="95" r="26" fill="#0d0d0f" stroke="rgba(139,26,26,0.4)" strokeWidth="1.5"/>
        <circle cx="112" cy="95" r="18" fill="#141416" stroke="rgba(139,26,26,0.18)" strokeWidth="0.8"/>
        <circle cx="112" cy="95" r="6" fill="#8B1A1A" opacity="0.55"/>
        {/* Rear wheel */}
        <circle cx="322" cy="95" r="26" fill="#0d0d0f" stroke="rgba(139,26,26,0.4)" strokeWidth="1.5"/>
        <circle cx="322" cy="95" r="18" fill="#141416" stroke="rgba(139,26,26,0.18)" strokeWidth="0.8"/>
        <circle cx="322" cy="95" r="6" fill="#8B1A1A" opacity="0.55"/>
        {/* Aggressive headlight */}
        <path d="M358,46 L384,56 L381,68" fill="none" stroke="#C9A227" strokeWidth="2.5" opacity="0.7"/>
        <path d="M354,38 L384,48" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.35"/>
        {/* Taillight (angular) */}
        <path d="M36,50 L32,76" fill="none" stroke="#C9A22770" strokeWidth="4"/>
        {/* Ground shadow */}
        <ellipse cx="210" cy="118" rx="172" ry="8" fill="rgba(0,0,0,0.45)"/>
      </svg>
    ),
  };

  return illustrations[car.id] || illustrations[1];
};

export default CarIllustration;
