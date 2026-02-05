export default function DoorVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 400 600"
        className="w-[300px] sm:w-[400px] md:w-[500px] h-auto opacity-[0.08]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Door Frame */}
        <rect
          x="60"
          y="40"
          width="280"
          height="520"
          rx="4"
          stroke="#22C55E"
          strokeWidth="8"
          fill="none"
        />
        
        {/* Inner Door Panel */}
        <rect
          x="80"
          y="60"
          width="240"
          height="480"
          rx="2"
          fill="#0F1F17"
          stroke="#22C55E"
          strokeWidth="2"
        />
        
        {/* Top Panel */}
        <rect
          x="100"
          y="80"
          width="200"
          height="180"
          rx="2"
          stroke="#22C55E"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Bottom Panel */}
        <rect
          x="100"
          y="300"
          width="200"
          height="220"
          rx="2"
          stroke="#22C55E"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Door Handle */}
        <circle
          cx="290"
          cy="300"
          r="12"
          stroke="#22C55E"
          strokeWidth="2"
          fill="#0F1F17"
        />
        <circle
          cx="290"
          cy="300"
          r="6"
          fill="#22C55E"
          opacity="0.5"
        />
        
        {/* Keyhole */}
        <path
          d="M290 330 L290 350 M285 340 L295 340"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Lock icon above handle */}
        <g transform="translate(278, 250)">
          <rect
            x="2"
            y="8"
            width="20"
            height="16"
            rx="2"
            stroke="#22C55E"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M6 8 V5 C6 2 9 0 12 0 C15 0 18 2 18 5 V8"
            stroke="#22C55E"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="16" r="2" fill="#22C55E" />
        </g>
      </svg>
    </div>
  );
}
