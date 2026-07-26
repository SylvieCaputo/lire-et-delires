// Icônes des trois rubriques, réutilisées sur la page d'accueil (grandes,
// dans les cartes) et dans la liste des derniers articles (petites, comme
// étiquette). La prop `size` contrôle la largeur ; la hauteur suit le
// ratio propre à chaque icône.

export function IconeLivres({ size = 52 }) {
  const height = Math.round((size * 82) / 76);
  return (
    <svg viewBox="-8 -22 76 82" width={size} height={height}>
      <g transform="translate(30,0) scale(1.25,1) translate(-30,0)">
        <path
          d="M5,21 C5,11 12,6 18,9 C23,6 27,9 30,15 C33,9 37,6 42,9 C48,6 55,11 55,21 C55,29 49,33 44,30 C40,34 34,32 30,28 C26,32 20,34 16,30 C11,33 5,29 5,21 Z"
          fill="var(--bg)"
          stroke="#F4ECDA"
          strokeWidth="0.8"
        />
        <path
          d="M6,10 C14,12 22,16 27,22 C29,25 27,28 24,27 C19,26 12,20 6,10 Z"
          fill="#F4ECDA"
          stroke="#F4ECDA"
          strokeWidth="0.8"
        />
        <path
          d="M54,10 C46,12 38,16 33,22 C31,25 33,28 36,27 C41,26 48,20 54,10 Z"
          fill="#F4ECDA"
          stroke="#F4ECDA"
          strokeWidth="0.8"
        />
        <path d="M27,16 Q30,19 33,16" fill="none" stroke="var(--gold)" strokeWidth="1" />
        <path
          d="M8,10 C6,8 6,5 9,5 C11,5 11,8 9,9"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.9"
        />
        <path
          d="M52,10 C54,8 54,5 51,5 C49,5 49,8 51,9"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.9"
        />
      </g>
      <path d="M17,26 L17,52" stroke="var(--bg)" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="17" cy="54.5" r="2.2" fill="none" stroke="var(--bg)" strokeWidth="1.1" />
      <g transform="translate(52,-6) rotate(26)">
        <path
          d="M0,20 C-6,11 -5,-6 0,-22 C5,-6 6,11 0,20 Z"
          fill="none"
          stroke="var(--bg)"
          strokeWidth="1.1"
        />
        <path d="M0,-18 L0,18" stroke="var(--bg)" strokeWidth="0.6" />
        <path
          d="M0,-13 L-3,-9 M0,-8 L-3,-4 M0,-3 L-3,1 M0,2 L-3,6 M0,7 L-3,11"
          stroke="var(--bg)"
          strokeWidth="0.5"
        />
        <path
          d="M0,-13 L3,-9 M0,-8 L3,-4 M0,-3 L3,1 M0,2 L3,6 M0,7 L3,11"
          stroke="var(--bg)"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}

export function IconeReflexion({ size = 52 }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size}>
      <g transform="translate(30,0) scale(1.4,1) translate(-30,0)">
        <path
          d="M25,52 L25,10 C25,4 27,1 30,1 C33,1 35,4 35,10 L35,52 Z"
          fill="var(--bg)"
        />
        <path
          d="M25,36 C18,36 14,33 14,27 C14,22 17,19 21,20 C24,21 25,24 25,28 L25,36 Z"
          fill="var(--bg)"
        />
        <path
          d="M35,36 C42,36 46,33 46,27 C46,22 43,19 39,20 C36,21 35,24 35,28 L35,36 Z"
          fill="var(--bg)"
        />
        <ellipse cx="30" cy="53" rx="13" ry="2.2" fill="var(--gold)" opacity="0.5" />
        <g stroke="#F4ECDA" strokeWidth="0.7" strokeLinecap="round">
          <line x1="27" y1="8" x2="24.5" y2="5.5" />
          <line x1="33" y1="8" x2="35.5" y2="5.5" />
          <line x1="27" y1="16" x2="24.5" y2="13.5" />
          <line x1="33" y1="16" x2="35.5" y2="13.5" />
          <line x1="27" y1="22" x2="24.5" y2="19.5" />
          <line x1="33" y1="22" x2="35.5" y2="19.5" />
          <line x1="27" y1="28" x2="24.5" y2="25.5" />
          <line x1="33" y1="28" x2="35.5" y2="25.5" />
          <line x1="27" y1="34" x2="24.5" y2="31.5" />
          <line x1="33" y1="34" x2="35.5" y2="31.5" />
          <line x1="27" y1="40" x2="24.5" y2="37.5" />
          <line x1="33" y1="40" x2="35.5" y2="37.5" />
          <line x1="27" y1="46" x2="24.5" y2="43.5" />
          <line x1="33" y1="46" x2="35.5" y2="43.5" />
          <line x1="20" y1="22" x2="17.5" y2="20" />
          <line x1="19" y1="28" x2="16.5" y2="26.5" />
          <line x1="21" y1="33" x2="18.5" y2="32" />
          <line x1="15" y1="25" x2="12" y2="24.5" />
          <line x1="16" y1="31" x2="13" y2="31.5" />
          <line x1="40" y1="22" x2="42.5" y2="20" />
          <line x1="41" y1="28" x2="43.5" y2="26.5" />
          <line x1="39" y1="33" x2="41.5" y2="32" />
          <line x1="45" y1="25" x2="48" y2="24.5" />
          <line x1="44" y1="31" x2="47" y2="31.5" />
        </g>
      </g>
    </svg>
  );
}

export function IconeAparte({ size = 52 }) {
  // Le papillon (palette + masque) est une image ; ratio largeur/hauteur ~1.64.
  // On dimensionne par la largeur pour une présence comparable aux autres icônes.
  const width = Math.round(size * 1.5);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/rubriques/papillon-extases.png"
      alt="Extases"
      width={width}
      style={{ height: "auto", display: "block" }}
    />
  );
}
