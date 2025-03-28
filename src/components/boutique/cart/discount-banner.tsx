'use client';

import {cn} from '@/lib/utils';
import {Discount} from '@/types/product-type';
import {Tag} from 'lucide-react';
import {useEffect, useState} from 'react';

interface DiscountBannerProps {
	discount: Discount;
	subtotal: number;
}

export function DiscountBanner({discount, subtotal}: DiscountBannerProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [timeLeft, setTimeLeft] = useState<string>('');

	useEffect(() => {
		if (discount.expiryDate) {
			const timer = setInterval(() => {
				const now = new Date();
				const expiry = new Date(discount.expiryDate!);
				const diff = expiry.getTime() - now.getTime();

				if (diff <= 0) {
					clearInterval(timer);
					setTimeLeft('Expired');
					return;
				}

				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				setTimeLeft(`${days}d ${hours}h left`);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [discount.expiryDate]);

	if (!isVisible) return null;

	const isEligible = !discount.minAmount || subtotal >= discount.minAmount;
	const amountToQualify = discount.minAmount ? discount.minAmount - subtotal : 0;

	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-lg p-4 mb-4',
				isEligible ? 'bg-green-500/10 text-green-700' : 'bg-yellow-500/10 text-yellow-700',
				'animate-[fade-in-up_0.3s_ease-out]',
			)}
		>
			<button
				onClick={() => setIsVisible(false)}
				className="absolute right-2 top-2 text-current opacity-50 hover:opacity-100"
			>
				×
			</button>
			<div className="flex items-start space-x-3">
				<Tag className="h-5 w-5 flex-shrink-0" />
				<div className="space-y-1">
					<p className="font-medium">
						{isEligible ? (
							<>
								Use code <span className="font-bold">{discount.code}</span> to save
								{discount.type === 'percentage' ? ` ${discount.value}%` : ` $${discount.value}`}
							</>
						) : (
							<>
								Add ${amountToQualify.toFixed(2)} more to save
								{discount.type === 'percentage' ? ` ${discount.value}%` : ` $${discount.value}`}
							</>
						)}
					</p>
					<p className="text-sm opacity-90">
						{discount.description}
						{timeLeft && <span className="ml-2 font-medium">• {timeLeft}</span>}
					</p>
				</div>
			</div>
		</div>
	);
}
