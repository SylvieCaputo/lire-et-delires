import Link from "next/link";
import Newsletter from "../components/Newsletter";
import { tousLesArticles } from "../lib/contenu";
import { rubriques } from "../lib/rubriques";
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
  const derniers = tousLesArticles().slice(0, 3);

  return (
    <>
      <div className="cover">
        <div className="ornement-cadre">
          <span className="coin coin-tl"></span>
          <span className="coin coin-tr"></span>
          <span className="coin coin-bl"></span>
          <span className="coin coin-br"></span>
        </div>
        <h1 className="masthead">
          Sous la
          <br />
          couverture
        </h1>
        <p className="masthead-sub">on ne promet pas d&apos;être sage</p>

        <svg
          className="stilllife"
          width="220"
          height="150"
          viewBox="0 0 220 150"
        >
          <ellipse cx="110" cy="138" rx="90" ry="8" fill="#0E0B09" opacity="0.25" />
          <g transform="translate(30,70)">
            <rect x="0" y="30" width="150" height="10" fill="#F4ECDA" />
            <rect x="6" y="18" width="138" height="12" fill="#E8DCC0" />
            <rect x="12" y="4" width="126" height="14" fill="#F4ECDA" />
          </g>
          <g transform="translate(60,10)">
            <path
              d="M0,60 L0,10 Q30,-6 60,10 L60,60 Q30,48 0,60 Z"
              fill="#F4ECDA"
            />
            <path
              d="M60,10 Q90,-6 120,10 L120,60 Q90,48 60,60 Z"
              fill="#EDE0C4"
            />
            <line x1="60" y1="10" x2="60" y2="60" stroke="#C8382E" strokeWidth="2" />
          </g>
          <g transform="translate(150,20)">
            <path
              d="M10,60 C4,40 4,20 10,4 C16,20 16,40 10,60 Z"
              fill="#D9B36C"
            />
            <rect x="8" y="58" width="4" height="30" fill="#7A5A2E" />
          </g>
        </svg>

        <p className="cover-poeme">
          Nuits blanches à caresser des pages du regard.
          <br />
          À l&apos;aube, petites chroniques ébouriffées
          <br />
          de ces rencontres d&apos;un soir.
        </p>
      </div>

      <div className="below">
        <div className="sections">
          <Link href={rubriques.livres.href} className="section-card">
            <div className="icon-wrap">
              <IconeLivres size={64} />
            </div>
            <h2>{rubriques.livres.titre}</h2>
            <p>{rubriques.livres.sousTitre}</p>
          </Link>
          <Link href={rubriques.reflexion.href} className="section-card">
            <div className="icon-wrap">
              <IconeReflexion size={52} />
            </div>
            <h2>{rubriques.reflexion.titre}</h2>
            <p>{rubriques.reflexion.sousTitre}</p>
          </Link>
          <Link href={rubriques.aparte.href} className="section-card">
            <div className="icon-wrap">
              <IconeAparte size={52} />
            </div>
            <h2>{rubriques.aparte.titre}</h2>
            <p>{rubriques.aparte.sousTitre}</p>
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
                <span className="art-title">{article.titre}</span>
              </Link>
            );
          })}
        </div>

        <Newsletter />
      </div>
    </>
  );
}
