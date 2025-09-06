import { useWindowWidth } from "../Hooks/useWindowWidth";

const About = () => {
  const width = useWindowWidth();
  if (width < 768) {
    return (
      <div className="h-screen flex items-center justify-center p-6 text-red-600 font-extrabold text-xl">
        Mobile access is not allowed Please use laptop/desktop
      </div>
    );
  }
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-8 sm:p-10 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-600 grid place-items-center">
              <span className="text-xl font-semibold">ℹ️</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                About This Project
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                A{" "}
                <span className="font-medium">serverless task manager API</span>{" "}
                built on AWS to demonstrate a scalable, reliable, and
                cost-efficient architecture without managing servers. Users can
                create, view, and delete tasks through a simple web UI while AWS
                handles the heavy lifting behind the scenes.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tech Stack (AWS)
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <li className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800 p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-slate-700 dark:text-slate-200">
                  <strong>CloudFront + S3</strong> — static web hosting & CDN
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800 p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <span className="text-slate-700 dark:text-slate-200">
                  <strong>API Gateway + Lambda</strong> — serverless backend
                  APIs
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800 p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span className="text-slate-700 dark:text-slate-200">
                  <strong>DynamoDB</strong> — NoSQL data persistence
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800 p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-500"></span>
                <span className="text-slate-700 dark:text-slate-200">
                  <strong>CloudWatch</strong> — logging & monitoring
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              What this demonstrates
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
              <li className="flex gap-3">
                <span className="select-none">✅</span>
                <span>
                  Event-driven serverless design with least-privilege IAM.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="select-none">✅</span>
                <span>
                  Scalable, pay-per-use architecture with global delivery.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
