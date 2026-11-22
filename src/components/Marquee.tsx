import { stack } from "@/lib/data";

const skills = stack.flatMap((group) => group.items);
const marqueeItems = [...skills, ...skills];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {marqueeItems.map((item, index) => (
          <span key={index}>
            {item}
            <i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}
