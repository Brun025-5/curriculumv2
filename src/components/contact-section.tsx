import { GithubIcon, LinkedinIcon } from "@/components/icons/Icons";
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';

export const ContactSection = () => {

  const subject = 'Contacto desde tu Página Personal';
  const body = 'Hola, vi tu página personal y me gustaría contactarte para...';

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center h-screen bg-gray-200 dark:bg-gray-900">

      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="grid grid-cols-3">
        <form className="grid grid-rows-4 col-span-2">
          <div className="grid grid-cols-2">
            <div>
              <p>Your name *</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Your email *</p>
              <input type="text"></input>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p>Phone *</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Motive *</p>
              <input type="text"></input>
            </div>
          </div>

          <div>
            <p>Message *</p>
            <textarea defaultValue="Enter here" />
          </div>

          <button type="submit">Send Message</button>
        </form>

        <section className="grid grid-rows-3">
          <div>
            <h3>Address</h3>
            <div className="flex">
              <p>Campus ESPOL, FIEC</p>
              <a
                href="https://www.google.com/maps/place/Facultad+de+Ingenier%C3%ADa+en+Electricidad+y+Computaci%C3%B3n+(FIEC)/@-2.1467001,-79.9650002,17z"
                aria-label="Ver ubicación de FIEC ESPOL en Google Maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h3>Direct contact</h3>
            <div className="flex">
              <p>brurrome@espol.edu.ec</p>
              <a
                href={`mailto:brurrome@espol.edu.ec?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>

            <div className="flex">
              <p>bromeroy@fiec.espol.edu.ec</p>
              <a
                href={`mailto:bromeroy@fiec.espol.edu.ec?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="bg-gray-950">
            <h3>Follow me!</h3>
            <div className="flex flex-columns">
              <a href="https://github.com/Brun025-5" aria-label="GitHub">
                <GithubIcon className="w-8 h-8 fill-current" />
              </a>

              <a href="https://www.linkedin.com/in/bruno-romero-yagual" aria-label="Linkedin">
                <LinkedinIcon className="w-8 h-8 fill-current" />
              </a>

            </div>
          </div>
        </section>
      </div>

    </section>
  );
};