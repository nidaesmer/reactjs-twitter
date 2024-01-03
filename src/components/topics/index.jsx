import { Link } from "react-router-dom";
import { topics } from "../../utils/consts";
import Topic from "./topic";

export default function Topics() {
  return (
    <section className="bg-[color:var(--background-secondary)] overflow-hidden mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea] ">İlgini çekebilecek gündemler</h5>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
        <Link
          to="/trends"
          className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]"
        >
          Daha fazla göster
        </Link>
      </div>
    </section>
  );
}
