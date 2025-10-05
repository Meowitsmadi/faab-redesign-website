import React from "react";
import "./Members.css"; 

const Members = () => {
  const members = [
    {
      section: "Chaplain",
      people: [{ name: "Father Peru Dayag, SVD", initials: "PD" }],
    },
    {
      section: "Board of Advisors",
      subtitle: "Former Chairpersons of the Apostolate",
      people: [
        { name: "Johnny Manuel", initials: "JM" },
        { name: "Jenny Aying", initials: "JA" },
        { name: "Meynard Gutierrez", initials: "MG" },
        { name: "Gracita Chiefe", initials: "GC" },
        { name: "Manuel Paradela", initials: "MP" },
      ],
    },
    {
      section: "Finance Committee",
      people: [
        { name: "Priscilla Cruz", initials: "PC", role: "Treasurer" },
        { name: "Gracita Chiefe", initials: "GC", role: "Treasurer" },
        { name: "July Afable", initials: "JA", role: "Auditor" },
      ],
    },
    {
      section: "Executive Council — North Shore",
      people: [
        { name: "Annie Talaid", initials: "AT", role: "Coordinator" },
        { name: "Jeffrey Pagulong", initials: "JP", role: "Asst. Coordinator" },
        { name: "Meynard Gutierrez", initials: "MG", role: "Secretary" },
        { name: "Crispina Gutierrez", initials: "CG", role: "Finance Team" },
        { name: "Kaye Vito", initials: "KV", role: "Head of Liturgy" },
        { name: "Pearl Brault", initials: "PB", role: "Faith Formation" },
        { name: "Jun Cruz", initials: "JC", role: "Outreach" },
      ],
    },
    {
      section: "Executive Council — South Shore / Central",
      people: [
        { name: "John Manuel", initials: "JM", role: "Coordinator" },
        { name: "Loreta Borneo", initials: "LB", role: "Asst. Coordinator" },
        { name: "Alpha Cattaneo", initials: "AC", role: "Secretary" },
        { name: "Rudy Hermosa", initials: "RH", role: "Finance Team" },
        { name: "Ross Mangilog", initials: "RM", role: "Head of Liturgy" },
        { name: "Lisa Paradela", initials: "LP", role: "Faith Formation" },
        { name: "Salome Afable", initials: "SA", role: "Outreach" },
      ],
    },
  ];

  return (
    <div className="container py-5 members-page">
      <header className="text-center mb-4">
        <h1 className="display-6 fw-semibold mb-1">FAAB — 2018 Officers & Members</h1>
        <p className="text-muted mb-0">Official Roster</p>
      </header>

      {members.map((group, index) => (
        <section key={index} className="mb-5">
          <h2 className="h4 text-center fw-bold mb-2">{group.section}</h2>
          {group.subtitle && (
            <p className="text-muted text-center small mt-n1 mb-3">{group.subtitle}</p>
          )}

          <div className="row g-3 g-md-4 justify-content-center">
            {group.people.map((person, i) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex" key={i}>
                <div className="card text-center shadow-sm w-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="avatar placeholder rounded-circle mb-2">
                      {/* If you add photos later, replace this span with an <img> */}
                      <span className="initials">{person.initials}</span>
                    </div>
                    <div className="fw-semibold small name">{person.name}</div>
                    {person.role && (
                      <div className="text-muted small">{person.role}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Members;