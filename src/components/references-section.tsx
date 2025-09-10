import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"

export const ReferencesSection = () => {
  return (
    <section id="references" className="w-full flex flex-col items-center justify-center h-screen text-center bg-light-100 dark:bg-gray-800">
      <div>
        <h2 className="text-5xl font-bold">References</h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo tempora minus aliquam. Fugit odio voluptate ex. Mollitia porro beatae possimus cupiditate fugiat sed at! Ut praesentium incidunt aliquam molestiae!
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};