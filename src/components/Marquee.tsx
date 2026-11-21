const marqueeItems = [
  "TypeScript", "Node.js", "NestJS", "React", "Next.js", "RabbitMQ", "Socket.IO", "Redis", "MongoDB", "PostgreSQL",
  "Docker", "AWS", "FIX Protocol", "Web3", "Privy", "WalletConnect", "OpenAI", "DeepSeek", "Claude Code",
  "Pronostyx", "Viacation", "Travel Deals", "Strike A Pose", "Peanut Butter", "Slido Clone",
  "TypeScript", "Node.js", "NestJS", "React", "Next.js", "RabbitMQ", "Socket.IO", "Redis", "MongoDB", "PostgreSQL",
  "Docker", "AWS", "FIX Protocol", "Web3", "Privy", "WalletConnect", "OpenAI", "DeepSeek", "Claude Code",
  "Pronostyx", "Viacation", "Travel Deals", "Strike A Pose", "Peanut Butter", "Slido Clone",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {marqueeItems.map((item, index) => (
          <span key={index}>
            {item}
            <i>▸</i>
          </span>
        ))}
      </div>
    </div>
  );
}
