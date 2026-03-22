import Container from "../ui/container";
import Image from "next/image";

const BOE = [
  {
    name: "Cakrayudha Adhi Phalagama",
    position: "Project Officer",
    image: "/committee/po.jpg",
  },
  {
    name: "Syifa Alifah Nuraini",
    position: "Vice Project Officer",
    image: "/committee/vpo.jpg",
  },
  {
    name: "Carissa Sijabat",
    position: "Secretary 1",
    name2: "Marsya Salsabila",
    position2: "Secretary 2",
    image: "/committee/secretary.jpg",
  },
  {
    name: "Shafiya Iman",
    position: "Treasurer 1",
    name2: "Frieti Josefa Purba",
    position2: "Treasurer 2",
    image: "/committee/treasurer.jpg",
  }
]

const DIVISION = [
  {
    division: "Event",
    image: "/committee/event.jpg",
    members: [
      {
        name: "Agatha Aniela Candraningtyas",
        position: "Head of Event",
      },
      {
        name: "Arinal Orthopa Wibowo",
        position: "Sub-coordinator of Exhibition",
      },
      {
        name: "Rosita Susanti Lestari Ayu",
        position: "Sub-coordinator of Social",
      },
      {
        name: "Fauzan Resky Abdulloh",
        position: "Sub-coordinator of Technical",
      },
    ]
  },
  {
    division: "Competition",
    image: "/committee/competition.jpg",
    members: [
      {
        name: "Chessa Audreynanta",
        position: "Head of Competition",
      },
      {
        name: "Catur Putra Eka Pratama",
        position: "Sub-coordinator of BCC",
      },
      {
        name: "Stella Scorpiona Holy Jasmine",
        position: "Sub-coordinator of Petrosmart",
      },
      {
        name: "Salwa Anindhyta Aristy",
        position: "Sub-coordinator of PPC",
      },
      {
        name: "Taraka Shaka Danendra",
        position: "Sub-coordinator of SCML",
      },
      {
        name: "Lailum Lutvi Sahrudin",
        position: "Sub-coordinator of PoD",
      },
    ]
  },
  {
    division: "External",
    image: "/committee/external.jpg",
    members: [
      {
        name: "Ana Chadizahra",
        position: "Head of External",
      },
      {
        name: "Jemima Nurla Adiasti",
        position: "Sub-coordinator of Publication",
      },
      {
        name: "Nyayu Revina Nur Aziza",
        position: "Sub-coordinator of Public Relation",
      },
      {
        name: "Aulia Farizqi Radyandra",
        position: "Sub-coordinator of Liaison Officer",
      },
    ]
  },
  {
    division: "Finance",
    image: "/committee/finance.jpg",
    members: [
      {
        name: "Arib Razaq Wibowo",
        position: "Head of Finance",
      },
      {
        name: "Muhammad Danish Aulia",
        position: "Sub-coordinator of Sponsorship",
      },
      {
        name: "Jilliant Aufa Excel",
        position: "Sub-coordinator of Fundraising",
      },
    ]
  },
  {
    division: "Creative Media",
    image: "/committee/creative-media.jpg",
    members: [
      {
        name: "Shinosuke Alexander Swandjaya",
        position: "Head of Creative Media",
      },
      {
        name: "Aflah Hisyam Darussalam",
        position: "Sub-coordinator of Design",
      },
      {
        name: "Flavian Vindraya",
        position: "Sub-coordinator of Documentation",
      },
      {
        name: "Ayasha Rahmadinni",
        position: "Sub-coordinator of Web Development",
      },
    ]
  },
  {
    division: "Operation",
    image: "/committee/operation.jpg",
    members: [
      {
        name: "Guliver Van Gultom",
        position: "Head of Operation",
      },
      {
        name: "Albin Joses Christhoper Tambak",
        position: "Sub-coordinator of Equipment and Accomodation",
      },
      {
        name: "Kefas Dipatya Alexander Girsang",
        position: "Sub-coordinator of Logistic and Consumption",
      },
    ]
  },
]

const Committee = () => {
  return (
    <section id="committee" className="relative items-center justify-center bg-[#FCEFFB]">
      <Container className="items-start py-18 md:py-25">
        <h3 className=" font-bold text-black">
          Meet the people behind APECX 2026
        </h3>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h4 className="text-black">Board of Events</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start gap-6">
              {BOE.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-3 md:gap-6">
                  <Image src={member.image} alt={member.name} width={300} height={295} className="w-full md:w-75 h-[295px] object-cover bg-neutral-200" />
                  <div className="grid md:grid-cols-1 grid-cols-2 gap-3 text-left">
                    <div className="text-left">
                      <p className="text-lg font-semibold text-neutral-1000">{member.name}</p>
                      <div className="h-[1px] w-33 bg-black my-[6px]"></div>
                      <p className="text-sm">{member.position}</p>
                    </div>
                    {member.name2 && (
                      <div className="md:my-5">
                        <p className="text-lg font-semibold text-neutral-1000">{member.name2}</p>
                        <div className="h-[1px] w-33 bg-black my-[6px]"></div>
                        <p className="text-sm">{member.position2}</p>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
          {DIVISION.map((division, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h4 className="text-black">{division.division}</h4>
              <div className="flex flex-col md:flex-row justify-start gap-6">
                <Image src={division.image} alt={division.division} width={900} height={420} className="w-full md:w-225 h-auto md:h-105 object-cover bg-neutral-200" />
                <div className={`grid md:grid-cols-1 grid-cols-2 gap-3 items-start justify-start ${division.members.length > 5 ? 'gap-3' : 'gap-6'}`}>
                  {division.members.map((member, index) => (
                    <div key={index} className=" text-left">
                      <p className="text-lg font-semibold text-neutral-1000">{member.name}</p>
                      <div className="h-[1px] w-33 bg-black my-[6px]"></div>
                      <p className="text-sm">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Committee;