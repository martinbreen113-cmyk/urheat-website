import React from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, Activity, ThermometerSun, Home, Building2, Wrench, BarChart3, Wifi, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: <ThermometerSun className="h-7 w-7" />,
    title: "Heat Pump Servicing",
    text: "Specialist servicing for air-to-water and geothermal systems. Restore efficiency, reliability and correct operation.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Heating System Support",
    text: "Fault finding, controls troubleshooting and practical engineering support to fix underperforming systems.",
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    title: "Design & Consultancy",
    text: "Independent advice on heat pumps, emitters, hot water and system design before you spend money.",
  },
];

const varixFeatures = [
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Performance dashboards",
    text: "Real data on energy, temperatures and system behaviour — not assumptions.",
  },
  {
    icon: <Activity className="h-7 w-7" />,
    title: "System behaviour analysis",
    text: "Track ΔT, cycling, control response and real operating conditions.",
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: "Comfort & IAQ",
    text: "Temperature, humidity, CO₂ and indoor environment performance.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Multi-site reporting",
    text: "Monthly insights and optimisation recommendations across buildings.",
  },
];

function Button({ children, variant = "solid", className = "", href = "#contact" }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 font-bold transition";
  const styles =
    variant === "outline"
      ? "border border-emerald-800/30 bg-white/60 text-emerald-900 hover:bg-white"
      : "bg-emerald-800 text-white hover:bg-emerald-900";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ea] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f6f3ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-lg font-black text-white">Ú</div>
            <div>
              <div className="text-xl font-black">ÚrHeat</div>
              <div className="text-xs uppercase tracking-[0.22em] text-emerald-800">Engineering performance</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a href="#urheat" className="hover:text-emerald-800">ÚrHeat</a>
            <a href="#varix" className="hover:text-emerald-800">VARIX</a>
            <a href="#packages" className="hover:text-emerald-800">Packages</a>
            <a href="#contact" className="hover:text-emerald-800">Contact</a>
          </nav>
          <Button>Book a call</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-white/70 px-4 py-2 text-sm font-semibold">
            <CheckCircle2 className="h-4 w-4" /> Heat pumps • controls • monitoring
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Heating systems that actually perform.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Design, servicing and real-world performance validation. ÚrHeat delivers the system — VARIX proves and improves it.
          </p>

          <p className="mt-4 text-xl font-black text-emerald-800">
            We don’t measure energy — we prove performance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>Get expert advice <ArrowRight className="ml-2 h-5 w-5" /></Button>
            <Button variant="outline" href="#varix">Explore VARIX</Button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950 p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 p-6 text-white">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-300">Live system</p>
                <h3 className="text-2xl font-black">VARIX Dashboard</h3>
              </div>
              <Wifi className="h-8 w-8 text-emerald-300" />
            </div>
            <div className="space-y-5">
              {["Heat energy", "Electricity", "ΔT response", "CO₂ levels"].map((i, idx) => (
                <div key={i}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{i}</span>
                    <span>{72 + idx * 5}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/20">
                    <div className="h-2 rounded-full bg-emerald-300" style={{ width: `${72 + idx * 5}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-emerald-200">Insight</p>
              <p className="mt-1 text-lg font-bold">Lower temperatures, smarter controls and real monitoring unlock measurable savings.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="urheat" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#f6f3ea] p-8">
            <h2 className="text-4xl font-black">ÚrHeat</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Design, service and fix heating systems so they operate correctly in the real world.
            </p>
            <div className="mt-8 space-y-6">
              {services.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="mt-1 text-emerald-800">{s.icon}</div>
                  <div>
                    <h3 className="text-lg font-black">{s.title}</h3>
                    <p className="mt-1 leading-7 text-slate-600">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="varix" className="rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-4xl font-black">VARIX</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Measure, validate and optimise real building performance using data.
            </p>
            <div className="mt-8 space-y-6">
              {varixFeatures.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="mt-1 text-emerald-300">{s.icon}</div>
                  <div>
                    <h3 className="text-lg font-black">{s.title}</h3>
                    <p className="mt-1 leading-7 text-slate-300">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Most buildings don’t perform as designed.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          VARIX exists to close the gap between design, installation and operation by using real-world data to validate performance and identify inefficiencies.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">The problem</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>• Systems underperform</li>
              <li>• No visibility</li>
              <li>• Decisions based on assumptions</li>
              <li>• Hidden inefficiencies</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">The solution</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>• Monitor real performance</li>
              <li>• Analyse behaviour over time</li>
              <li>• Identify inefficiencies</li>
              <li>• Deliver engineering actions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="packages" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-4xl font-black md:text-5xl">VARIX Packages</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Start with diagnostics, move into monitoring, and progress toward full optimisation and reporting.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Bronze", "Diagnostics & quick wins", "Ideal for identifying obvious issues and first-step improvements."],
              ["Silver", "Monitoring & analysis", "Short-term monitoring, performance breakdown and recommendations."],
              ["Gold", "Full optimisation & reporting", "Ongoing monitoring, reporting, tuning and improvement plan."],
            ].map(([name, desc, text]) => (
              <div key={name} className="rounded-3xl bg-white/10 p-7">
                <h3 className="text-2xl font-black">{name}</h3>
                <p className="mt-2 font-bold text-emerald-300">{desc}</p>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-emerald-800 p-8 text-white md:p-12">
          <h2 className="text-4xl font-black">Start with a heating performance check.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-50">
            Whether you need a heat pump service, technical advice, a retrofit review or VARIX monitoring, ÚrHeat can help you identify, control and improve performance.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-emerald-900" href="tel:0851327413">
              <Phone className="h-5 w-5" /> 085 132 7413
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-black text-white" href="mailto:info@urheat.ie">
              <Mail className="h-5 w-5" /> info@urheat.ie
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black">ÚrHeat</h3>
            <p className="mt-3 text-slate-400">Heating performance engineering powered by real data.</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <p className="mt-3 text-slate-400">085 132 7413</p>
            <p className="text-slate-400">info@urheat.ie</p>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <p className="mt-3 text-slate-400">Heat pumps</p>
            <p className="text-slate-400">Consultancy</p>
            <p className="text-slate-400">VARIX monitoring</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
