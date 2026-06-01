export default function ProblemSolving() {
  const profiles = [
    {
      platform: "LeetCode",
      stat: "190+ Problems Solved",
      description: "100 Easy • 82 Medium • 5 Hard",
      link: "https://leetcode.com/u/witty_kitty_11/",
    },
    {
      platform: "CodeChef",
      stat: "2★ Competitive Programmer",
      description: "Regular Contest Participant",
      link: "https://www.codechef.com/users/witty_kitty_11",
    },
    {
      platform: "CSES",
      stat: "Problem Set Practice",
      description: "Strengthening Algorithms and DSA",
      link: "#",
    },
  ];

  return (
    <section id="problem-solving" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Problem Solving
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.platform}
              className="border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {profile.platform}
              </h3>

              <p className="text-lg font-medium mb-2">
                {profile.stat}
              </p>

              <p className="text-gray-400">
                {profile.description}
              </p>

               {profile.link !== "#" && (
                <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-400 hover:underline"
                >
                    View Profile →
                </a>
                )}
            </div>

        ))}
        </div>
      </div>
    </section>
  );
} 