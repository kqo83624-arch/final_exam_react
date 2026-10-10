import styles from "./CV.module.css";

    {/*left*/}
const contacts = [
  {
    id: 1,
    name: "Phone",
    value: "0988777666",
  },
  {
    id: 2,
    name: "Email",
    value: "example@gmail.com",
  },
  {
    id: 3,
    name: "Address",
    value: "123 City",
  },
];
const personal_skill = [
    {
        id:1,
        name: "Public Speaking",
    },
    {
        id:2,
        name:"Financial Management",
    },
    {
        id:3,
        name:"Creative Idea",
    },
    {
        id:4,
        name:"Project Manager",
    },
    {
        id:5,
        name:"Directer",
    },
]
const expertise = [
  {
        id:1,
        name: "Ms Word",
  },
  {
        id:2,
        name:"Ms Excel",
  },
  {
        id:3,
        name:"Photoshop",
  },
  {
        id:4,
        name:"Illustrator",
  },
  {
        id:5,
        name:"Corel Draw",
  },
]
    {/*right*/}
const about_me = [
  {
      id:1,
      name:"Write your profile, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore quis magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
  }
]

const education = [
  {
    id:1,
    name:"BACHELOR OF DESIGN",
    value:"University/Collage/Institute",
  },
  {
    id:2,
    name:"BACHELOR OF DESIGN",
    value:"University/Collage/Institute",
  }
    
]

const work_experience = [
  {
    id:1,
    title:"Job Title",
    name:"Company Name",
    conten:"Definition about your job. Lorem ipsum dolor sit amet, de consectetuer set adipiscing elit, sed dolore magna."
  },
  {
    id:2,
    title:"Job Title",
    name:"Company Name",
    conten:"Definition about your job. Lorem ipsum dolor sit amet, de consectetuer set adipiscing elit, sed dolore magna."
  }
    
]
    {/*left*/}

export const CV_contact = () => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li>
              <div>{contact.name}</div>
              <p>{contact.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const CV_expertise = () => {
  return (
      <div>
        <ul>
          {expertise.map((expertise) => {
            return (
              <li>
                <div style={{paddingTop:"5px",paddingBottom:"5px"}}>{expertise.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export const CV_personal_skill = () => {
    return (
    <div>
      <ul>
        {personal_skill.map((personal_skill) => {
          return (
            <li>
              <div style={{paddingTop:"5px",paddingBottom:"5px"}}>{personal_skill.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
    )
}
    {/*left*/}

    {/*right*/}

export const CV_about_me = () => {
  return (
    <div>
        {about_me.map((about_me) => {
          return (
            <p>{about_me.name}</p>
          );
        })}
    </div>
  );
}

export const CV_education = () => {
  return (
    <div>
        {education.map((education) => {
          return (
          <>
            <h4>{education.name}</h4>
            <p>{education.value}</p>
          </>
          );
        })}
    </div>
  );
}

export const CV_work_experience = () => {
  return (
    <div>
        {work_experience.map((work_experience) => {
          return (
            <>
            <h4>{work_experience.title}</h4>
            <h4>{work_experience.name}</h4>
            <p>{work_experience.conten}</p>
            </>
            
          );
        })}
    </div>
  );
}