"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image'
import { useState, useRef, useCallback, useEffect } from "react";
import { references } from "@/data/references";

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
        className="w-3/4 md:w-1/2 lg:w-200"
      >
        <CarouselContent className="items-center">
          {references.map((reference, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>{reference.name}</CardTitle>
                  <CardDescription>{reference.position}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className='flex w-80 lg:w-md items-center justify-center'>
                    <Image src={reference.image} alt="Alex Otero" className='rounded-full' />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">{reference.quote}</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block" />
        <CarouselNext className="hidden lg:block" />
      </Carousel>
    </section>
  );
};