

'use client';

import { Baby, HeartHandshake, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[]; 
  price: number;
  unit: string;
  image: string;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'baby care': <Baby className="h-5 w-5" />,
  'elderly care': <HeartHandshake className="h-5 w-5" />,
  'sick care': <User className="h-5 w-5" />,
};

export default function ServiceCard({
  id,
  title,
  category,
  description,
  price,
  unit,
  image,
}: ServiceCardProps) {
  const icon = categoryIcons[category.toLowerCase()] || <HeartHandshake className="h-5 w-5" />;

  return (
    <Card className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg border border-gray-200 flex flex-col h-full">
      {/* Image */}
      <div className="relative">
        <img
          src={image || '/placeholder-service.jpg'}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700 capitalize">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
              {icon}
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>

          <div className="flex justify-between items-baseline mb-6">
            <span className="text-sm text-gray-600">From</span>
            <span className="text-xl font-bold text-pink-600">
              ${price} <span className="text-sm font-normal text-gray-600">{unit}</span>
            </span>
          </div>
        </div>

        <Link
          href={`/services/${id}`}
          className="w-full block text-center rounded-lg bg-pink-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-pink-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
}