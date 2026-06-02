export default function ProblemSolving() {
  const profiles = [
    {
      platform: "LeetCode",
      stat: "190+ Problems Solved",
      description: "Consistent Problem Practice",
      link: "https://leetcode.com/u/witty_kitty_11/",
      icon: "/icons/leetcode.png",
    },
    {
      platform: "CodeChef",
      stat: "2★ Competitive Programmer",
      description: "Regular Contest Participant",
      link: "https://www.codechef.com/users/witty_kitty_11",
      icon: "/icons/codechef.png",
    },
    {
      platform: "CSES",
      stat: "Problem Set Practice",
      description: "Strengthening Algorithms",
      link: "#",
      icon: "🧠", // optional
    },
  ];

  return (
    <section id="problem-solving" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Problem Solving
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile) => {
            const Card = (
              <div
                className="
                  border border-gray-700
                  rounded-xl p-6
                  bg-zinc-900/50
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-lg
                  hover:border-white
                  cursor-pointer
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  {profile.icon.startsWith("/") ? (
                    <img
                      src={profile.icon}
                      alt={profile.platform}
                      className="w-7 h-7 object-contain"
                    />
                  ) : (
                    <span className="text-2xl">{profile.icon}</span>
                  )}

                  <h3 className="text-2xl font-semibold">
                    {profile.platform}
                  </h3>
                </div>

                <div className="mb-3">
                  <span
                    className="
                      inline-block
                      px-3 py-1
                      text-sm
                      font-medium
                      rounded-full
                      bg-gray-800
                      border border-gray-700
                    "
                  >
                    {profile.stat}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">
                  {profile.description}
                </p>

                {profile.link !== "#" && (
                  <p className="text-blue-400 text-sm">
                    Click to view profile →
                  </p>
                )}
              </div>
            );

            return profile.link !== "#" ? (
              <a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={profile.platform}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}