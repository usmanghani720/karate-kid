import React from "react";
import ReactTooltip from "react-tooltip";
//import { meetList,assistanInstructorsList, officeList } from "./staff-data";
import meetIcon3 from "../../../images/m3.png";
import meetIcon4 from "../../../images/m4.jpg";
import meetIcon5 from "../../../images/m5.jpg";
import meetIcon6 from "../../../images/m6.png";
import meetIcon7 from "../../../images/m7.jpg";
import meetIcon8 from "../../../images/m8.jpg";
import meetIcon9 from "../../../images/pedro-mantis.jpg";
import meetIcon15 from "../../../images/m15.jpg";
import meetIcon14 from "../../../images/m14.jpg";
import meetIcon13 from "../../../images/m13.jpg";
import meetIcon12 from "../../../images/m12.jpg";
import meetIcon11 from "../../../images/m11.jpg";
import meetIcon10 from "../../../images/m10.jpg";
import andresMeetIcon from "../../../images/andres-bustamante-jump-kick.jpg";

const meetList = [
  {
    meetIcon: meetIcon3,
    meetTitle: "MR. Rosen",
    meetDesignation: "Head Instructor, Parkland",
    info: "My name is Steven Rosen, and I am the head instructor at Evolution Martial Arts in Parkland. I have been training in the Mix Martial Arts for over 16 years, and I am currently a fourth-degree black belt. Through the years of experience, I have achieved tournament champion in sparring and forms in South Florida. Specializing in weapons, sparring, self-defense, and various styles such as Taekwondo, Thai boxing, Jiu-jitsu, and Kung fu; I strive to continue the lifelong dedication in the field of martial arts to bring discipline, perseverance, morals, and inspiration to all my students as they continue forward with their journey.",
  },
  {
    meetIcon: meetIcon7,
    meetTitle: "MR. Oscar Washington",
    meetDesignation: "Head Instructor, Sunrise",
    info: "My name is Oscar Washington. I am a 4th degree black belt and the head instructor at the Sunrise location. I have been training at Evolution Martial Arts for 12 years and have been teaching for 5 years.  I started martial arts because I was bullied growing up;  martial arts gave me the confidence and courage to stand up to those bullies.   So the reason I still train and even teach now is to set an example to other students who might be going through the same challenges that I did to show them how much martial arts could impact your life.",
  },
  {
    meetIcon: meetIcon4,
    meetTitle: "MS. Kristy Roth",
    meetDesignation: "Instructor",
  },
  {
    meetIcon: meetIcon14,
    meetTitle: "MR. Marcus Brimage",
    meetDesignation: "Yoga and Kungfu Instructor",
  },
  {
    meetIcon: meetIcon15,
    meetTitle: "MR. Jimenez",
    meetDesignation: "Instructor",
    info: "My name is Nick Jimenez, and I am currently a 2nd Degree Black Belt. I have been training for 13 years which includes my time teaching here. I have done my best the entire time to make sure that I help the students learn everything they need for our classes and the real world. My goal is to make sure that everyone I have taught could use their skills as they continue to grow. My purpose for teaching is not only because I have been doing it for so long, but to also encourage others about everything I have learned and what they can learn from sticking to what they believe in.",
  },
  {
    meetIcon: meetIcon9,
    meetTitle: "MR. Valladares",
    meetDesignation: "Master Instructor",
    info: "I have been on the martial arts journey for what seems all my life. Officially though, it all started around 1989 when I met Grand Master Kerjen Wu. After witnessing his incredible speed, power, coordination and overall martial arts knowledge, I decided I needed to learn his art. Now, it is my turn to try and pass down the knowledge I acquired to the EMA instructors and all our great students, so that the art can continue to live and bring joy, discipline, focus and health to all who practice it."
  },
];

const assistanInstructorsList = [  {
  meetIcon: meetIcon5,
  meetTitle: "MR. Eli Roth",
  meetDesignation: "BBLP Assistant Instructor",
  info: "My name is Eli Roth, I have been training for about 7 years I am 11 years old and I’m in sixth grade and I am in the demonstration team and a junior instructor.",
},
{
  meetIcon: andresMeetIcon,
  meetTitle: "Mr. Andres Bustamante",
  meetDesignation: "BBLP Assistant Instructor",
  info: "“My name is Andres Bustamante, I am a student and instructor’s assistant at Evolution Martial Arts. At the time of writing this I have been training at EMA for about three and a half years. I use martial arts to further the harmony between my mind, body and nature. I choose to live a balanced, flourishing, and complete life. The myriad of styles I train in are: Korean Taekwondo, Chinese Kung Fu, Brazilian Jiu Jitsu, Japanese Karate, Israeli Krav Maga, Muay Thai, as well as various weapons & weapons styles. Finally as I’m penning this, I am currently a brown belt, and am training to reach my blackbelt within less than one year.",
},
/* {
  meetIcon: meetIcon6,
  meetTitle: "MR. Victor Patino",
  meetDesignation: "BBLP Assistant Instructor",
  info: "My name is Victor Patino, I am 15 years old and in the 10th grade. I have been training at Evolution Martial Arts for approximately 5 years. I am a brown belt. I am a member of the demonstration team, and a junior instructor.",
}, */
{
  meetIcon: meetIcon13,
  meetTitle: "MS. Arielle",
  meetDesignation: "BBLP Assistant Instructor",
  info: "Hi my name is Arielle Hernandez and I have been training at EMA for 6 years. I am currently a Red Belt and based on my experience, I have not only learned how to defend myself but I was also taught some valuable life lessons along the way that I will never forget. My goals are to help others like my instructors have helped me and to always put my everything in to what I do. I decided to take on the roles of being both an assistant instructor and the office lady because I wanted to give back to the school because it has given me so much. EMA has always been a second home for me so I wanted to do everything I could to pay back all the kindness and growth that was shown to me. The reason I teach is because I want to help other by not only teaching them martial arts but also giving them important life lessons like I was given that will stick with them for a life time to come.",
},
/* {
  meetIcon: meetIcon12,
  meetTitle: "MS. Alyssa Robins",
  meetDesignation: "BBLP Assistant Instructor",
  info: "My name is Alyssa Robin, and I have been training at Evolution Martial Arts for nine years. I am currently a brown belt. My experience at Evolution Martial Arts has been phenomenal, as everyone at the school is welcoming and encouraging. Evolution Martial Arts teaches much more than just mixed martial arts. They have made me a better person by helping me improve my self discipline, motivation, respect, focus, and perseverance. My goal is to continue to grow and become the best person I can possibly be as well as achieving my black belt. I teach others the fundamentals of martial arts in hopes of helping them achieve their goals and dreams. If I set a good example for them, they will learn to set a good example for others and always be their best self.",
}, */
/* {
  meetIcon: meetIcon11,
  meetTitle: "MR. Austin Fritz",
  meetDesignation: "BBLP Assistant Instructor",
  info: "My name is Austin Fritz, and I have been practicing mixed martial arts at Evolution Martial Arts for the past nine years. Martial arts and physical fitness helped enhance my life in a variety of ways. It opened a wealth of opportunities that I would never have such as, gaining self-confidence, focus, discipline, lifelong friendships, and motivation and inspiration to be the best person I can be in my life. Mixed martial arts has helped shape me into the person I am today, which is my inspiration to helping others through physical fitness and martial arts. My goal is get my black belt and teach others the benefits of Mixed Martial Arts so I can inspire them to live the best lives that they possibly can.",
}, */
{
  meetIcon: meetIcon10,
  meetTitle: "MR. Enzo Aguiar",
  meetDesignation: "BBLP Assistant Instructor",
  info: "My name is Enzo Aguiar, and I am currently a brown belt. I have been training in Mixed Martial Arts for three years, and my dream is to achieve my black belt within the next two years. My goal is to become an instructor at Evolution Martial Arts and share my skills with the students so that if they get into any harmful situation, they will know how to defend themselves and their loved ones.",
},

];

const officeList = [
  {
    meetIcon: meetIcon8,
    meetTitle: "MRS. Monica",
    meetDesignation: "Office Master, Sunrise/Parkland",
    info: "Originally from New York. I have lived in Florida for the past 27 yrs. Mother of 4 wonderful children. My son had trained at Evolution Martial Arts for about 6 years and that's how I ended up here. I've been with them for the past 6 yrs.",
  },
  {
    meetIcon: meetIcon13,
    meetTitle: "MS. Arielle",
    meetDesignation: "Office Master, Parkland",
    info: "Hi my name is Arielle Hernandez and I have been training at EMA for 6 years. I am currently a Red Belt and based on my experience, I have not only learned how to defend myself but I was also taught some valuable life lessons along the way that I will never forget. My goals are to help others like my instructors have helped me and to always put my everything in to what I do. I decided to take on the roles of being both an assistant instructor and the office lady because I wanted to give back to the school because it has given me so much. EMA has always been a second home for me so I wanted to do everything I could to pay back all the kindness and growth that was shown to me. The reason I teach is because I want to help other by not only teaching them martial arts but also giving them important life lessons like I was given that will stick with them for a life time to come.",
  },
];
class MeetSection extends React.Component {
  render() {
    return (
      <section id="meet-section" className="meet-section">
        <ReactTooltip className="tooltip" />
        <div className="meet-text">
          <h2>Meet Our Instructors</h2>
          <article>
            <p>
              Our staff is dedicated to excellence and to serving each student's
              individual goals. Evolution Martial Arts' instructors believe in
              being their best so that our students can be their best.
            </p>
          </article>
        </div>
        <div className="container">
          <ul>
            {meetList.map((meetItem) => (
              <li
                key={meetItem.meetTitle}
                data-tip={meetItem.info}
                id={meetItem.meetTitle}
              >
                <div className="meet-box instructor-image">
                  <img src={meetItem.meetIcon} alt={meetItem.meetTitle} />
                  <div className="meet-box-details">
                    <h3>{meetItem.meetTitle}</h3>
                    <p>{meetItem.meetDesignation}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="meet-text">
          <h2>Our Assistant Instructors</h2>
        </div>
        <div className="container">
          <ul>
            {assistanInstructorsList.map((meetItem) => (
              <li
                key={meetItem.meetTitle}
                data-tip={meetItem.info}
                id={meetItem.meetTitle}
              >
                <div className="meet-box">
                  <img src={meetItem.meetIcon} alt={meetItem.meetTitle} />
                  <div className="meet-box-details">
                    <h3>{meetItem.meetTitle}</h3>
                    <p>{meetItem.meetDesignation}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="meet-text">
          <h2>Meet Our Office Staff</h2>
        </div>
        <div className="container">
          <ul>
            {officeList.map((meetItem) => (
              <li
                key={meetItem.meetTitle}
                data-tip={meetItem.info}
                id={meetItem.meetTitle}
              >
                <div className="meet-box">
                  <img src={meetItem.meetIcon} alt={meetItem.meetTitle} />
                  <div className="meet-box-details">
                    <h3>{meetItem.meetTitle}</h3>
                    <p>{meetItem.meetDesignation}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
export default MeetSection;
