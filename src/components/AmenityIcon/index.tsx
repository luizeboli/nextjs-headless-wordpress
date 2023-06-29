import { AmenitySlug } from '@/types';
import { Dumbbell, LucideIcon, LucideProps, ParkingSquare, Waves } from 'lucide-react';

const amenityIcons: { [key in AmenitySlug]: LucideIcon } = {
	gym: Dumbbell,
	parking: ParkingSquare,
	pool: Waves,
};

type AmenityIconProps = {
	slug: keyof typeof amenityIcons;
} & LucideProps;

const AmenityIcon = ({ slug, ...lucideProps }: AmenityIconProps) => {
	const Component = amenityIcons[slug];

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Component {...lucideProps} />;
};

export default AmenityIcon;