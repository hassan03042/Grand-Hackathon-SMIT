"use client";

import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCss3,
} from "react-icons/fa";

const journey = [
  // Main Contacts
  {
    type: "experience",
    company: "Acconts & Audit Headed By Mr. Saad Hasan (FCA)",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "Jul 2021 - Present",
    description: "Saad Hassan is a commerce graduate from University of Karachi. He became member of the institute of Chartered Accountants of Pakistan (ICAP) in 1998 from FORD, RHODES, ROBSON, MORROW, Chartered Accountants (Member firm of Ernst & Young International), Karachi. He became the member as Fellow Institute of Corporate Secretaries of Pakistan (FCIS), in 1994 and is also the member of Income Tax Bar Association, Karachi. He has over 20 years of rich experience in the field of Accounting, Statutory Audits, Internal Audits, Information Systems Audits, Management & Financial Consultancy, Direct Taxation, VAT/Sales tax, Service tax, Company Law matters, Approvals from government agencies, Services relating to financial operations and Software implementation."
    
  },
  {
    type: "experience",
    company: "Mr. M Hydrie  (FCA)",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2019 - Jun 2021",
    description: `
  Mr. Hydrie is the member of the institute of Chartered Accountants of England and wales &(ICAP) since 1960;  He has more than 40 years of experience in national and multinational companies both in Pakistan and abroad.
`},
  {
    type: "experience",
    company: "Mr. Sharjeel Hasan",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "Sharjeel Hasan is a commerce graduate from University of Karachi. He became member of the institute of Chartered Accountants of Pakistan (ICAP) in 1992 from A.F. Ferguson & Co. Chartered Accountants (Member firm of Price Waterhouse Coopers)."
,
  },
  {
    type: "experience",
    company: "Mr. Rafiquddin ( Hyderabad office)",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "(FCMA) Institute of Cost and Management Accountants of Pakistan. Mr. Rafiq is practicing cost and management accountant and has more than 15 years of experience.",
  },
  {
    type: "experience",
    company: "Mr. Tanveer Shahadat",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "(FCMA) Institute of Cost and Management Accountants of Pakistan. He is also qualified Mechanical Engineer from NED University of Science and Technology having more than 30 years of experience. He has worked in Karachi Shipyard and Engineering works for 10 years.",
  },
  {
    type: "experience",
    company: "Mr. Rao Anees ur Rehman ( Multan & Sadiqabad office)",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "(FCMA) Institute of Cost and Management Accountants of Pakistan. Mr. Anees is practicing cost and management accountant and has more than 25 years of experience.",
  },
  {
    type: "experience",
    company: "Mr. Shahab Abdani",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "Mr. Shahab is a ACCA qualified and having more than 5 years of experience in taxation and Audit.",
  },
  {
    type: "experience",
    company: "Mr.Amin Malirwala",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "March 2017 - Jun 2019",
    description:
      "Mr. Amin is a Lawyer (LLB)and having more than 5 years of experience in Civil and criminal cases & taxation and Audit.",
  },



  // education
  {
    type: "education",
    company: "Muhammad Younus (D.A.I.B.P)",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Muhammad Younus (D.A.I.B.P)",
    duration: "March 2017 - Jun 2019",
    description:
      "Mr. Younus has more than 30 years of experience in banking sector specially in audits, foreign exchange and commercial banking. Has been associated with UBL, Riyadh Bank- Saudi Arabia and other organization in Middle east and United states of America.",
  },
  {
    type: "education",
    company: "Muhammad Younus (D.A.I.B.P)",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Muhammad Younus (D.A.I.B.P)",
    duration: "March 2017 - Jun 2019",
    description:
      "Mr. Younus has more than 30 years of experience in banking sector specially in audits, foreign exchange and commercial banking. Has been associated with UBL, Riyadh Bank- Saudi Arabia and other organization in Middle east and United states of America.",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Ahmed Raza",
    duration: "March 2017 - Jun 2019",
    description:
      "He has over 5 years of rich experience field of Accounting, Statutory Audits, Internal Audits, Management Consultancy etc.",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Abid Sagheer(CA- Intermediate)",
    duration: "March 2017 - Jun 2019",
    description:
      "Abid Sagheer is a commerce graduate from University of Karachi. He has passed the Intermediate examination of the ICAP in 1993. He has completed Article-ship, as required by Chartered Accountants’ Bye-Laws, 1983 with M/s. Muniff Ziauddin & Co., Chartered Accountants, Karachi, on July 1993. Mr. Abid has more than 25 year of audit specially in the field of financial institution in the internal audit departments.",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Tanveer Ahmed",
    duration: "March 2017 - Jun 2019",
    description:
      "Tanveer Ahmed is a commerce graduate from University of Karachi. He has completed Article-ship, as required by Chartered Accountants’ Bye-Laws, 1983 with M/s. Faruq Ali & Co., Chartered Accountants, Karachi, on July 1995. He has over 16 years of rich experience in the field of Statutory Audits, Internal Audits, Income Tax, Sales Tax, SECP matters.",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Ikram Afzal- ACMA",
    duration: "March 2017 - Jun 2019",
    description:
      "Mr. Ikram is a cost and management accountant from ICMAP. He has more than 15 year of experience of corporate taxation, business financial accounting and audits, external audits, MIS, corporate matters and NGO’s. ",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Abdul Waheed",
    duration: "March 2017 - Jun 2019",
    description:
      "Mr. Waheed is a pursuing his ACCA and has cleared 9 papers. He is with company since last 2 years ",
  },
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/hs.svg",
    qualification: "Choudhry Kashif",
    duration: "March 2017 - Jun 2019",
    description:
      "He has over 12 years of experience in the field of Accounting, Statutory Audits, Internal Audits, Management Consultancy etc. He is CA intermediate from ICAP.",
  },

  //skills

  {
    type: "skill",
    company: "HTML",
    logoUrl: "/assets/journey/education/badge.svg",
    duration: "EXCELLENCE",
    description:
      "At MD Law Associates, we never compromise on excellence or settle for anything less. We set high standards for each matter, and work tirelessly, with a highly qualified team and advanced toolkit to achieve favourable outcomes for our clients.",
  },
  {
    type: "skill",
    company: "CSS",
    logoUrl: "/assets/journey/education/badge.svg",
    duration: "DILIGENCE",
    description:
      "Being the leading full-service law firm in Pakistan, we assess all matters within our multidisciplinary team to ensure that every problem is diligently analysed for risks across all legal practice areas.",
  },
  {
    type: "skill",
    company: "JavaScript",
    logoUrl: "/assets/journey/education/badge.svg",
    duration: "INTEGRITY",
    description:
      "We are steadfast in our adherence to core professional ethics of fearlessly representing our clients’ best interests while never misleading the Hon’ble Courts and regulatory agencies. We love our work, and value our clients with whom we strive to build long term fruitful relationships.",
  },
  {
    type: "skill",
    company: "Wordpress",
    logoUrl: "/assets/journey/education/badge.svg",
    duration: "RELIABILITY",
    description:
      "We have strong and trusting relationships with our clients, who know they can rely on us to handle their most challenging and pressing matters. At M.D. Law Associates, we strive to remain available and move fast.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">FINANCIAL ASSOCIATES</TabsTrigger>
          {/* real value instead of sector was experience */}
          <TabsTrigger value="education">STAFF STRENGTH</TabsTrigger>
          <TabsTrigger value="skills">CAREERS</TabsTrigger>
          {/* real value instead of career was my skills */}
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
