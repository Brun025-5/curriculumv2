"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image'
import RefImage1 from '@/assets/images/Alex Otero.jpg'
import RefImage2 from '@/assets/images/Jaren Pazmiño.png'
import RefImage3 from '@/assets/images/David Sandoval.jpg'
import { useState, useRef, useCallback, useEffect } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export const ReferencesSection = () => {

  const [api, setApi] = useState<CarouselApi>();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const startAutoplay = useCallback(() => {
    api?.plugins().autoplay?.play();
  }, [api]);

  const handleInteraction = useCallback(() => {
    api?.plugins().autoplay?.stop();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, 25000);
  }, [api, startAutoplay]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", handleInteraction);
    api.on("pointerDown", handleInteraction);

    return () => {
      api.off("select", handleInteraction);
      api.off("pointerDown", handleInteraction);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [api, handleInteraction]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="references" className="w-full flex flex-col items-center justify-center h-fit py-20 text-center bg-light-100 dark:bg-gray-800">
      <div>
        <h2 className="text-5xl font-bold">References</h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo tempora minus aliquam. Fugit odio voluptate ex. Mollitia porro beatae possimus cupiditate fugiat sed at! Ut praesentium incidunt aliquam molestiae!
        </p>
      </div>
      <Carousel opts={{
        loop: false,
        slidesToScroll: isDesktop ? 2 : 1,
      }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="w-3/4 lg:w-200"
      >
        <CarouselContent className="items-center">
          <CarouselItem className="lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>Alex Otero</CardTitle>
                  <CardDescription>Taws Member - Computer Sciences Student</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className='flex w-80 lg:w-md items-center justify-center'>
                    <Image src={RefImage1} alt="Alex Otero" className='rounded-full' />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">“Bruno es excelente en capacitar e incentivar al aprendizaje al equipo. Es confiable con los trabajos a realizar y los cumple de manera impecable.”</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>Jaren Pazmiño</CardTitle>
                  <CardDescription>CIAP President - Computer Sciences Student</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className='flex w-80 lg:w-md items-center justify-center'>
                    <Image src={RefImage2} alt="Jaren Pazmiño" className='rounded-full' />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">“Siempre cumple con su labor y es un excelente compañero de equipo.”</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>David Sandoval</CardTitle>
                  <CardDescription>CIAP Member - Computer Sciences Student</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className='flex w-80 lg:w-md items-center justify-center'>
                    <Image src={RefImage3} alt="David Sandoval" className='rounded-full' />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">“Bruno es un gran compañero de trabajo. Cumple con su trabajo de manera eficiente y excelente.”</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block" />
        <CarouselNext className="hidden lg:block" />
      </Carousel>
    </section>
  );
};