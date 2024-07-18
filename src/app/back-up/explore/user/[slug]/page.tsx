import ProfessionalDiscoverCard from '@/components/back-up/Explorer/professional';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProfessionalPage({
  params: { slug },
}: Readonly<{ params: { slug: string } }>) {
  return (
    <main>
      <Carousel className="ml-52 w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <ProfessionalDiscoverCard/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
