'use client'
import React from "react";

import styles from './styles.module.css';

interface Section {
  section: string;
  title: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  content: Section[];
  selectedTitle: any;
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

const Accordion: React.FC<AccordionProps> = ({
  content,
  selectedTitle,
  dispatch,
}) => {
  const toggleSection = (section: string) => {
    dispatch({ type: "TOGGLE_SECTION", payload: section });
  };

  const isSectionActive = (section: string) =>
    selectedTitle.activeSection === section;

  return (
    <>
      {content.map((section, index) => (
        <main key={index}>
          <section
            className={styles.header}
            onClick={() => toggleSection(section.section)}
          >
           <h1 className={`${styles.title} sm:text-base lg:text-[21px] `}>{section.title}</h1>
            <div className={styles.icon}>
              {isSectionActive(section.section)
                ? section.activeIcon
                : section.icon}
            </div>
          </section>

          <div
            className={
              isSectionActive(section.section)
                ? styles.open_panel
                : styles.close
            }
          >
            {isSectionActive(section.section) && (
              <div className={styles.subcontent}>{section.content}</div>
            )}
          </div>
        </main>
      ))}
    </>
  );
};

export default Accordion;
