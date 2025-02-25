import type { ReactNode } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react";

const UserPersona = () => {
    const { theme, toggleTheme } = useDarkMode();
    const darkMode = theme === "dark";
    return (
        <div className={`${darkMode ? "bg-bodybg-dark text-white" : "bg-bodybg text-gray-900"} min-h-screen flex justify-center p-6`}>
            <div className={`${darkMode ? "bg-bodybg-dark" : "bg-bodybg"} p-6 w-6xl h-full`}>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">User Persona</h1>
                    {/* Botón para cambiar el tema */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-buttonbg dark:bg-buttonbg-dark text-buttontext dark:text-buttontext-dark rounded-lg flex items-center gap-2"
                    >
                      {/* Icono de sol, luna o monitor según el tema */}
                        {theme === "light" ? (
                            <>
                                <Sun className="w-5 h-5" />
                            </>
                        ) : theme === "dark" ? (
                            <>
                                <Moon className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                <Monitor className="w-5 h-5" />
                            </>
                        )}
                    </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Información del usuario */}
          <div className={`${darkMode ? "bg-cardbg-dark" : "bg-cardbg"} p-4 rounded-lg flex flex-col items-center row-span-2`}>
            <img
              src="public/foto.jpg"
              alt="User"
              className="w-6xl h-56 object-cover mb-4"
            />
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">NAME:</p>
              <p className="absolute start-1/2">35</p>
            </div>
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">AGE:</p>
              <p className="absolute start-1/2">Married, 2 Kids</p>
            </div>
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">EDUCATION:</p>
              <p className="absolute start-1/2">Calgary, Alberta</p>
            </div>
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">JOB:</p>
              <p className="absolute start-1/2">University of Calgary</p>
            </div>
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">LOCATION:</p>
              <p className="absolute start-1/2">Family Physician</p>
            </div>
            <div className="flex w-full relative my-3">
              <p className="font-bold ms-0">HOBBIES:</p>
              <p className="absolute start-1/2">Hiking and dancing</p>
            </div>
          </div>
          {/* Información de Bio */}
          <InfoCard title="Bio" darkMode={darkMode}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            mauris enim, vel condimentum risus eget rhoncus, vitae. Vivamus
            pulvinar cras ac sed nunc dui.
          </InfoCard>
          {/* Información de Personality */}
          <InfoCard title="Personality" darkMode={darkMode}>
            <ul>
              <li className="before:content-['-'] before:mr-2"> Hardworking</li>
              <li className="before:content-['-'] before:mr-2"> Smart</li>
              <li className="before:content-['-'] before:mr-2"> Expressive</li>
              <li className="before:content-['-'] before:mr-2"> Thoughtful</li>
            </ul>
          </InfoCard>
          {/* Información de Pain points */}
          <InfoCard title="Pain points" darkMode={darkMode}>
            <ul className=""> 
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue</li>
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue</li>
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet, fgefw consectetur adipiscing elit. Euchue</li>
            </ul>
          </InfoCard>
          {/* Información de Goals */}
          <InfoCard title="Goals" darkMode={darkMode}>
            <ul>
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet</li>
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet</li>
              <li className="before:content-['-'] before:mr-2"> Lorem ipsum dolor sit amet</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};
//función para mostrar la información de cada tarjeta   
const InfoCard = ({ title, children, darkMode }: { title: string; children: ReactNode; darkMode: boolean }) => {
  return (
    <div className={`${darkMode ? "bg-cardbg-dark" : "bg-cardbg"} p-4 rounded-lg shadow-md`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default UserPersona;
