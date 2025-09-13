import { GraduationCap, Briefcase } from "lucide-react";

export const EducationExperienceSection = () => {
  return (
    <section id="education-experience" className="w-full grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 items-center justify-center h-fit py-20 bg-light-100 dark:bg-gray-800">

      <section>

        <div className="flex flex-column">
          <div className="rounded-full dark:bg-black h-fit p-2">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-bold">Education</h2>
        </div>

        <section>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p>ESPOL</p>
              <p>Computer Science Engineering</p>
            </div>

            <div>
              <p>2023 - Present</p>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p>José Domingo de Santistevan</p>
              <p>Technical High School Diploma in Informatics</p>
            </div>

            <div>
              <p>2020 - 2022</p>
            </div>
          </div>

        </section>
        
      </section>

      <section>

        <div className="flex flex-column">
          <div className="rounded-full dark:bg-black h-fit p-2">
            <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="text-5xl font-bold">Work Experience</h2>
        </div>

        <section>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p>FIEC - ESPOL</p>
              <p>Object-Oriented Programming Teaching Assistant</p>
            </div>

            <div>
              <p>2025 - 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p>FIEC - ESPOL</p>
              <p>Object-Oriented Programming Teaching Assistant</p>
            </div>

            <div>
              <p>2024 - 2025</p>
            </div>
          </div>

        </section>

      </section>

    </section>
  );
};