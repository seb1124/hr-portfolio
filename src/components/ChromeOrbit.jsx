export default function ChromeOrbit() {
  return <svg className="chrome-orbit" viewBox="0 0 600 600" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="metal" x1="130" y1="120" x2="460" y2="490" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset=".16" stopColor="#a8acb4" /><stop offset=".31" stopColor="#f5f7fa" /><stop offset=".43" stopColor="#51545e" /><stop offset=".48" stopColor="#0b0c11" /><stop offset=".52" stopColor="#e9edf6" /><stop offset=".66" stopColor="#727680" /><stop offset=".82" stopColor="#f4f5f9" /><stop offset="1" stopColor="#3d404a" /></linearGradient>
      <radialGradient id="sphere" cx=".3" cy=".22" r=".8"><stop stopColor="white" /><stop offset=".16" stopColor="#e0e3eb" /><stop offset=".35" stopColor="#727784" /><stop offset=".49" stopColor="#171922" /><stop offset=".57" stopColor="#050608" /><stop offset=".65" stopColor="#6f7482" /><stop offset=".7" stopColor="#e9edf8" /><stop offset=".8" stopColor="#555b68" /><stop offset="1" stopColor="#10121b" /></radialGradient>
      <radialGradient id="halo"><stop stopColor="#898caa" stopOpacity=".14" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
      <filter id="glint"><feGaussianBlur stdDeviation="1.2" /></filter>
    </defs>
    <circle cx="300" cy="300" r="285" fill="url(#halo)" />
    <g className="orbit-guides" stroke="#4c4e57" strokeWidth=".7"><circle cx="300" cy="300" r="245" strokeDasharray="2 8" /><path d="M30 300H570M300 30V570" strokeDasharray="2 9" /></g>
    <g className="orbit-object">
      <ellipse cx="300" cy="300" rx="237" ry="83" transform="rotate(-36 300 300)" stroke="url(#metal)" strokeWidth="22" />
      <ellipse cx="300" cy="300" rx="210" ry="86" transform="rotate(49 300 300)" stroke="url(#metal)" strokeWidth="29" />
      <circle cx="300" cy="300" r="104" fill="url(#sphere)" stroke="#aeb1bf" strokeWidth=".6" />
      <path d="M63 300A237 83 0 0 0 537 300" transform="rotate(-36 300 300)" stroke="url(#metal)" strokeWidth="22" />
      <path d="M90 300A210 86 0 0 0 510 300" transform="rotate(49 300 300)" stroke="url(#metal)" strokeWidth="29" />
    </g>
    <g fill="#b6a0ff"><path d="M469 103l3 14 14 3-14 3-3 14-3-14-14-3 14-3z" /><circle cx="109" cy="392" r="3" /></g>
    <g fill="white"><path d="M159 143l3 20 20 3-20 3-3 20-3-20-20-3 20-3z" /><path d="M440 411l2 12 12 2-12 2-2 12-2-12-12-2 12-2z" filter="url(#glint)" /></g>
  </svg>;
}
