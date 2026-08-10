import Link from "next/link";
import Newsletter from "../components/Newsletter";
import { tousLesArticles, champ } from "../lib/contenu";
import { T } from "../lib/traductions";
import { getLangue } from "../lib/langueServeur";
import {
  IconeLivres,
  IconeReflexion,
  IconeAparte,
} from "../components/IconesRubriques";

const iconesParRubrique = {
  livres: IconeLivres,
  reflexion: IconeReflexion,
  aparte: IconeAparte,
};

export const dynamic = "force-dynamic";

export default function Accueil() {
  const langue = getLangue();
  const tr = T[langue];
  const derniers = tousLesArticles().slice(0, 3);

  return (
    <>
      <div className="cover">
      <div className="ornement-cadre"></div>
      <span className="coin coin-tl"></span>
      <span className="coin coin-tr"></span>
      <span className="coin coin-bl"></span>
      <span className="coin coin-br"></span>

      <div className="cover-clip">

      <svg className="aquarelle aquarelle-1" viewBox="0 0 440 230" preserveAspectRatio="none">
      <defs>
      <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves="3" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="3"/>
      </filter>
      <radialGradient id="washgrad" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stopColor="#C8382E" stopOpacity="0.30"/>
      <stop offset="55%" stopColor="#C8382E" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#C8382E" stopOpacity="0"/>
      </radialGradient>
      </defs>
      <ellipse cx="220" cy="112" rx="180" ry="88" fill="url(#washgrad)" filter="url(#watercolor)"/>
      <ellipse cx="220" cy="112" rx="120" ry="60" fill="#C8382E" opacity="0.10" filter="url(#watercolor)"/>
      </svg>

      <svg className="bulles" viewBox="0 0 760 430" preserveAspectRatio="xMidYMid slice">
      <g fill="#C8382E">
      <circle cx="565" cy="120" r="3" opacity="0.5"/>
      <circle cx="590" cy="150" r="2" opacity="0.4"/>
      <circle cx="545" cy="165" r="2.5" opacity="0.45"/>
      <circle cx="610" cy="185" r="1.6" opacity="0.35"/>
      <circle cx="575" cy="205" r="2.2" opacity="0.3"/>
      <circle cx="628" cy="140" r="1.4" opacity="0.4"/>
      <circle cx="600" cy="95" r="2.3" opacity="0.45"/>
      <circle cx="655" cy="175" r="1.8" opacity="0.32"/>
      <circle cx="540" cy="110" r="1.5" opacity="0.4"/>
      <circle cx="670" cy="120" r="2" opacity="0.3"/>
      <circle cx="120" cy="120" r="2.4" opacity="0.42"/>
      <circle cx="95" cy="95" r="1.6" opacity="0.35"/>
      <circle cx="135" cy="165" r="2" opacity="0.4"/>
      <circle cx="105" cy="200" r="1.5" opacity="0.3"/>
      <circle cx="75" cy="150" r="1.8" opacity="0.32"/>
      <circle cx="160" cy="100" r="1.4" opacity="0.38"/>
      <circle cx="370" cy="40" r="1.8" opacity="0.35"/>
      <circle cx="410" cy="55" r="1.4" opacity="0.3"/>
      <circle cx="330" cy="52" r="1.5" opacity="0.32"/>
      <circle cx="620" cy="215" r="1.7" opacity="0.3"/>
      <circle cx="510" cy="140" r="1.4" opacity="0.35"/>
      <circle cx="685" cy="150" r="1.5" opacity="0.28"/>
      <circle cx="640" cy="70" r="1.6" opacity="0.35"/>
      <circle cx="560" cy="75" r="1.3" opacity="0.32"/>
      <circle cx="90" cy="175" r="1.5" opacity="0.3"/>
      <circle cx="140" cy="230" r="1.6" opacity="0.28"/>
      <circle cx="175" cy="130" r="1.4" opacity="0.34"/>
      <circle cx="60" cy="120" r="1.3" opacity="0.3"/>
      <circle cx="450" cy="42" r="1.3" opacity="0.28"/>
      <circle cx="300" cy="44" r="1.4" opacity="0.3"/>
      <circle cx="255" cy="52" r="1.2" opacity="0.26"/>
      <circle cx="480" cy="60" r="1.5" opacity="0.3"/>
      </g>
      <g fill="#C79A54">
      <circle cx="185" cy="150" r="2.6" opacity="0.55"/>
      <circle cx="160" cy="180" r="1.8" opacity="0.4"/>
      <circle cx="205" cy="200" r="2.1" opacity="0.45"/>
      <circle cx="150" cy="215" r="1.4" opacity="0.35"/>
      <circle cx="110" cy="135" r="1.6" opacity="0.5"/>
      <circle cx="585" cy="130" r="2" opacity="0.5"/>
      <circle cx="620" cy="165" r="1.5" opacity="0.42"/>
      <circle cx="558" cy="185" r="1.8" opacity="0.4"/>
      <circle cx="640" cy="105" r="1.5" opacity="0.45"/>
      <circle cx="390" cy="30" r="1.3" opacity="0.45"/>
      <circle cx="350" cy="38" r="1.5" opacity="0.4"/>
      <circle cx="605" cy="200" r="1.4" opacity="0.4"/>
      <circle cx="125" cy="185" r="1.5" opacity="0.42"/>
      <circle cx="660" cy="135" r="1.3" opacity="0.4"/>
      <circle cx="85" cy="165" r="1.4" opacity="0.4"/>
      <circle cx="430" cy="34" r="1.2" opacity="0.4"/>
      </g>
      </svg>
      </div>

      <div className="cover-inner">
      <h1 className="masthead">{tr.masthead[0]}<br />{tr.masthead[1]}</h1>
      <p className="masthead-sub">{tr.sousTitreCouverture}</p>
      <div className="filet"><span className="trait"></span><span className="diamant"></span><span className="trait right"></span></div>
      </div>

      <svg className="stilllife" width="238" height="198" viewBox="0 0 180 150" fill="none">

      <g stroke="#C8382E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none">

      <path d="M90,58 C68,45 42,47 26,58 L26,110 C42,101 68,105 90,118"/>

      <path d="M90,58 C112,45 138,47 154,58 L154,110 C138,101 112,105 90,118"/>

      <path d="M90,58 L90,118"/>

      <path d="M26,110 C42,104 68,108 90,121" opacity="0.55"/>
      <path d="M154,110 C138,104 112,108 90,121" opacity="0.55"/>
      </g>

      <g stroke="#C79A54" strokeWidth="1.1" strokeLinecap="round" opacity="0.8">
      <line x1="38" y1="70" x2="74" y2="74"/>
      <line x1="36" y1="79" x2="74" y2="83"/>
      <line x1="35" y1="88" x2="72" y2="92"/>
      <line x1="106" y1="74" x2="142" y2="70"/>
      <line x1="106" y1="83" x2="144" y2="79"/>
      <line x1="108" y1="92" x2="145" y2="88"/>
      </g>

      <g fill="#C8382E">
      <circle cx="90" cy="40" r="2" opacity="0.55"/>
      <circle cx="102" cy="30" r="1.5" opacity="0.45"/>
      <circle cx="78" cy="28" r="1.6" opacity="0.5"/>
      <circle cx="95" cy="18" r="1.2" opacity="0.4"/>
      </g>
      <g fill="#C79A54">
      <circle cx="83" cy="34" r="1.4" opacity="0.7"/>
      <circle cx="110" cy="42" r="1.6" opacity="0.6"/>
      <circle cx="70" cy="40" r="1.3" opacity="0.6"/>
      </g>

      <g fill="#C8382E" opacity="0.7">
      <path d="M118,22 L119.2,25.8 L123,27 L119.2,28.2 L118,32 L116.8,28.2 L113,27 L116.8,25.8 Z"/>
      <path d="M64,20 L64.9,22.8 L67.7,23.7 L64.9,24.6 L64,27.4 L63.1,24.6 L60.3,23.7 L63.1,22.8 Z"/>
      </g>
      </svg>

      <div className="poeme-wrap">
      <svg className="poeme-bulles" viewBox="0 0 500 150" preserveAspectRatio="xMidYMid meet">

      <g fill="#C8382E">
      <circle cx="250" cy="8" r="1.6" opacity="0.38"/>
      <circle cx="200" cy="10" r="1.3" opacity="0.32"/>
      <circle cx="300" cy="8" r="1.4" opacity="0.34"/>
      <circle cx="150" cy="10" r="1.3" opacity="0.3"/>
      <circle cx="350" cy="10" r="1.3" opacity="0.3"/>
      <circle cx="40" cy="26" r="2.2" opacity="0.48"/>
      <circle cx="28" cy="50" r="1.8" opacity="0.4"/>
      <circle cx="20" cy="72" r="1.4" opacity="0.32"/>
      <circle cx="34" cy="90" r="1.5" opacity="0.3"/>
      <circle cx="460" cy="26" r="2.2" opacity="0.48"/>
      <circle cx="472" cy="50" r="1.8" opacity="0.4"/>
      <circle cx="482" cy="72" r="1.4" opacity="0.32"/>
      <circle cx="464" cy="90" r="1.5" opacity="0.3"/>
      <circle cx="120" cy="38" r="1.5" opacity="0.34"/>
      <circle cx="380" cy="40" r="1.4" opacity="0.32"/>
      <circle cx="100" cy="62" r="1.4" opacity="0.3"/>
      <circle cx="400" cy="60" r="1.4" opacity="0.3"/>
      <circle cx="232" cy="94" r="1.5" opacity="0.3"/>
      <circle cx="300" cy="92" r="1.3" opacity="0.28"/>
      <circle cx="270" cy="96" r="1.2" opacity="0.26"/>
      </g>

      <g fill="#C79A54">
      <circle cx="220" cy="8" r="1.2" opacity="0.4"/>
      <circle cx="280" cy="10" r="1.2" opacity="0.4"/>
      <circle cx="72" cy="40" r="1.7" opacity="0.5"/>
      <circle cx="62" cy="80" r="1.4" opacity="0.42"/>
      <circle cx="96" cy="58" r="1.4" opacity="0.42"/>
      <circle cx="430" cy="40" r="1.7" opacity="0.5"/>
      <circle cx="440" cy="80" r="1.4" opacity="0.42"/>
      <circle cx="406" cy="58" r="1.4" opacity="0.42"/>
      <circle cx="182" cy="94" r="1.3" opacity="0.4"/>
      <circle cx="330" cy="94" r="1.3" opacity="0.38"/>
      </g>

      <g fill="#C8382E">
      <path d="M60,40 L61.1,42.9 L64,44 L61.1,45.1 L60,48 L58.9,45.1 L56,44 L58.9,42.9 Z" opacity="0.55"/>
      <path d="M452,42 L453.1,44.9 L456,46 L453.1,47.1 L452,50 L450.9,47.1 L448,46 L450.9,44.9 Z" opacity="0.55"/>
      <path d="M34,70 L35.1,72.9 L38,74 L35.1,75.1 L34,78 L32.9,75.1 L30,74 L32.9,72.9 Z" opacity="0.5"/>
      <path d="M468,70 L469.1,72.9 L472,74 L469.1,75.1 L468,78 L466.9,75.1 L464,74 L466.9,72.9 Z" opacity="0.5"/>
      <path d="M250,86 L251.1,88.9 L254,90 L251.1,91.1 L250,94 L248.9,91.1 L246,90 L248.9,88.9 Z" opacity="0.5"/>
      </g>

      <g fill="#C79A54">
      <path d="M120,86 L121.1,88.9 L124,90 L121.1,91.1 L120,94 L118.9,91.1 L116,90 L118.9,88.9 Z" opacity="0.55"/>
      <path d="M380,86 L381.1,88.9 L384,90 L381.1,91.1 L380,94 L378.9,91.1 L376,90 L378.9,88.9 Z" opacity="0.55"/>
      <path d="M250,40 L251.1,42.9 L254,44 L251.1,45.1 L250,48 L248.9,45.1 L246,44 L248.9,42.9 Z" opacity="0.5"/>
      </g>
      </svg>
      <p className="cover-poeme">{tr.poeme[0]}<br />{tr.poeme[1]}<br />{tr.poeme[2]}</p>
      </div>
      </div>


      <div className="below">
        <div className="sections">
          <Link href="/livres" className="section-card">
            <div className="icon-wrap">
              <IconeLivres size={72} />
            </div>
            <h2>{tr.rubriques.livres.titre}</h2>
            <p>{tr.rubriques.livres.sousTitre}</p>
          </Link>
          <Link href="/reflexion" className="section-card">
            <div className="icon-wrap">
              <IconeReflexion size={60} />
            </div>
            <h2>{tr.rubriques.reflexion.titre}</h2>
            <p>{tr.rubriques.reflexion.sousTitre}</p>
          </Link>
          <Link href="/aparte" className="section-card">
            <div className="icon-wrap">
              <IconeAparte size={43} />
            </div>
            <h2>{tr.rubriques.aparte.titre}</h2>
            <p>{tr.rubriques.aparte.sousTitre}</p>
          </Link>
        </div>

        <div className="articles">
          {derniers.map((article) => {
            const Icone = iconesParRubrique[article.rubrique];
            return (
              <Link
                key={article.slug}
                href={`/${article.rubrique}/${article.slug}`}
                className="article-row"
              >
                <span className="tag-icon">
                  <Icone size={26} />
                </span>
                <span className="art-title">{champ(article.titre, langue)}</span>
              </Link>
            );
          })}
        </div>

        <Newsletter langue={langue} />
      </div>
    </>
  );
}
