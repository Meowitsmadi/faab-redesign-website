import "../../styles/Members.css"; 

const Members = () => {
  const members = [
    {
      section: "Chaplain",
      people: [{ name: "Father Peru Dayag, SVD", initials: "PD", image: "adobo.jpg" }],
    },
    {
      section: "Board of Advisors",
      subtitle: "Former Chairpersons of the Apostolate",
      people: [
        { name: "Johnny Manuel", initials: "JM", image: "afritada.jpg" },
        { name: "Jenny Aying", initials: "JA", image: "bulalo.jpg" },
        { name: "Meynard Gutierrez", initials: "MG", image: "caldereta.jpg" },
        { name: "Gracita Chiefe", initials: "GC", image: "menudo.jpg" },
        { name: "Manuel Paradela", initials: "MP", image: "kbl.jpg" },
      ],
    },
    {
      section: "Finance Committee",
      people: [
        { name: "Priscilla Cruz", initials: "PC", role: "Treasurer", image: "lumpia.jpg" },
        { name: "Gracita Chiefe", initials: "GC", role: "Treasurer", image: "menudo.jpg"},
        { name: "July Afable", initials: "JA", role: "Auditor", image: "palabok.jpg" },
      ],
    },
    {
      section: "Executive Council — North Shore",
      people: [
        { name: "Annie Talaid", initials: "AT", role: "Coordinator", image: "pancit.jpg" },
        { name: "Jeffrey Pagulong", initials: "JP", role: "Asst. Coordinator", image: "pinakbet.jpg" },
        { name: "Meynard Gutierrez", initials: "MG", role: "Secretary", image: "caldereta.jpg" },
        { name: "Crispina Gutierrez", initials: "CG", role: "Finance Team", image: "pritongbangus.jpg" },
        { name: "Kaye Vito", initials: "KV", role: "Head of Liturgy", image: "relyenongbangus.jpg" },
        { name: "Pearl Brault", initials: "PB", role: "Faith Formation", image: "sinigang.jpg" },
        { name: "Jun Cruz", initials: "JC", role: "Outreach", image: "tapsilog.jpg" },
      ],
    },
    {
      section: "Executive Council — South Shore / Central",
      people: [
        { name: "John Manuel", initials: "JM", role: "Coordinator", image: "afritada.jpg" },
        { name: "Loreta Borneo", initials: "LB", role: "Asst. Coordinator", image: "tinola.jpg" },
        { name: "Alpha Cattaneo", initials: "AC", role: "Secretary", image: "tortangtalong.jpg" },
        { name: "Rudy Hermosa", initials: "RH", role: "Finance Team", image: "bibingka.jpg" },
        { name: "Ross Mangilog", initials: "RM", role: "Head of Liturgy", image: "bukopandan.png" },
        { name: "Lisa Paradela", initials: "LP", role: "Faith Formation", image: "halohalo.jpg" },
        { name: "Salome Afable", initials: "SA", role: "Outreach", image: "puto.jpg" },
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
                    <div className="avatar rounded-circle mb-2 overflow-hidden">
                      <img src={`/assets/members/${person.image}`} alt={person.name} className="img-fluid"/>
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