const NODES = [
  { x: 60, y: 40, label: 'COMPUTER SCIENCE ENGINEERING' },
  { x: 60, y: 140, label: 'AI / MACHINE LEARNING' },
  { x: 60, y: 240, label: 'E3G · ENGINYERIA I ENERGIA' },
  { x: 60, y: 340, label: 'AUTOMATION' },
]

const HUB = { x: 420, y: 190 }

function pathLen(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1)
}

export default function Schematic() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="w-full h-auto"
      role="img"
      aria-label="Esquema que connecta enginyeria informàtica, IA/ML, E3G i automatització cap al nom d'Abril Tufet Coll"
    >
      {NODES.map((n, i) => {
        const len = pathLen(n.x, n.y, HUB.x, HUB.y)
        return (
          <path
            key={i}
            d={`M ${n.x} ${n.y} L ${HUB.x} ${HUB.y}`}
            stroke="var(--line-strong)"
            strokeWidth="1"
            fill="none"
            className="trace-path"
            style={{ '--len': len, animationDelay: `${i * 0.15}s` }}
          />
        )
      })}

      {NODES.map((n, i) => (
        <g key={i} style={{ opacity: 0 }} className="fade-up" >
          <animate attributeName="opacity" from="0" to="1" begin={`${0.3 + i * 0.15}s`} dur="0.01s" fill="freeze" />
          <circle cx={n.x} cy={n.y} r="4" fill="var(--blueprint-deep)" stroke="var(--accent)" strokeWidth="1.5" />
          <text
            x={n.x + 12}
            y={n.y + 4}
            className="font-mono"
            fontSize="10"
            letterSpacing="0.5"
            fill="var(--white)"
            opacity="0.75"
          >
            {n.label}
          </text>
        </g>
      ))}

      <g>
        <animate attributeName="opacity" from="0" to="1" begin="0.9s" dur="0.01s" fill="freeze" />
        <circle cx={HUB.x} cy={HUB.y} r="7" fill="var(--accent)" opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="0.9s" dur="0.3s" fill="freeze" />
        </circle>
        <text
          x={HUB.x + 18}
          y={HUB.y + 5}
          className="font-display"
          fontSize="20"
          fontWeight="600"
          fill="var(--white)"
          opacity="0"
        >
          AT
          <animate attributeName="opacity" from="0" to="1" begin="1s" dur="0.4s" fill="freeze" />
        </text>
      </g>
    </svg>
  )
}
