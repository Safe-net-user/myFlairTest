import Image from 'next/image';
import Link from 'next/link';



import { HeaderSection } from '@/components/shop/layout';

import { Button } from '@/components/ui/button';

export default async function BusinessBoostersPage() {
  

  return (
    <main>
      <HeaderSection title="Business Boosters" />
      <div className="grid grid-cols-1 gap-8 px-6 py-16 lg:px-24">
       
          <div
            className="flex w-full flex-col md:flex-row"
           
          >
            <Image
              className="w-1/2"
              src={'d'}
              alt={}
              width={1000}
              height={1000}
            />
            <div className="w-1/2 bg-gray-100 p-4">
              <h4 className="text-[20px] font-bold">{}</h4>
              <h3 className="text-[24px]">
                {Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format()}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: businessBooster.description,
                }}
              ></p>

              <div className="space-y-2">
                <div className="align-end flex w-full justify-end">
                  <Button className="w-[200px]">Choisir une date</Button>
                </div>
                <div className="flex w-full justify-end">
                  <Button className="w-[200px]">Réserver</Button>
                </div>
              </div>
            </div>
          </div>
      
      </div>
    </main>
  );
}
