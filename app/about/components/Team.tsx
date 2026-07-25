import Image from "next/image";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    photo: string;
}

const TEAM: TeamMember[] = [
    { id: "1", name: "Michael O.", role: "Role", photo: "/headshot.png" },
    { id: "2", name: "Michael O.", role: "Role", photo: "/headshot.png" },
    { id: "3", name: "Michael O.", role: "Role", photo: "/headshot.png" },
    { id: "4", name: "Michael O.", role: "Role", photo: "/headshot.png" },
    { id: "5", name: "Michael O.", role: "Role", photo: "/headshot.png" },
];

export default function Team() {
    return (
        <section className="px-6 py-20 lg:px-10">

            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold leading-tight text-[#191919] sm:text-4xl">
                    Meet the <span className="text-[#4F46E5]">Team</span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#191919]">
                    Our team combines expertise in business intelligence, data analytics, and technology to help organizations transform data into confident decisions. Together, we&apos;re committed to delivering innovative solutions that create measurable business value.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-17.5 sm:grid-cols-3 lg:grid-cols-5 ">
                    {TEAM.map((member) => (
                        <div key={member.id} className="text-center">
                            <div className="h-60 relative aspect-square w-full overflow-hidden bg-[#EDEDFC] rounded-3xl rounded-bl-3xl rounded-b-[60px]">
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-[#191919]">
                                {member.name}
                            </p>
                            <p className="text-xs text-[#191919]">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}