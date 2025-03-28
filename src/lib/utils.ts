import { type ClassValue, clsx } from 'clsx';
import { format, isSameDay, parseISO, formatDistanceToNow } from "date-fns"
import { Event } from '@/types/event-type';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatTimeAgo(date: Date) {
	return formatDistanceToNow(date, { addSuffix: true });
}

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
	}).format(amount);
}

export const formatDate = (date: string): string => {
	return new Date(date).toLocaleDateString('fr-FR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) return text
	return `${text.slice(0, maxLength)}...`
}

export function generateSKU(
	category: string,
	brand: string,
	attributes: Record<string, string>,
	randomLength = 4,
) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let randomString = '';
	for (let i = 0; i < randomLength; i++) {
		randomString += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Construct SKU
	const attrPart = Object.values(attributes).join('-');
	return `${brand}-${category}-${attrPart}-${randomString}`.toUpperCase();
}

// const sku = generateSKU('SHIRT', 'NIKE', { size: 'M', color: 'RED' });
// console.log(sku); // Output: NIKE-SHIRT-M-RED-XXXX
export async function generateAvatar(seed: string) {
	const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;
	return avatarUrl;
}



export function addToCalendar(event: Event) {
	const startDate = new Date(event.date + "T" + event.time)
	const endDate = new Date(event.date + "T" + event.endTime)

	// Google Calendar URL
	const googleUrl = new URL("https://calendar.google.com/calendar/render")
	googleUrl.searchParams.append("action", "TEMPLATE")
	googleUrl.searchParams.append("text", event.title)
	googleUrl.searchParams.append("details", event.description)
	googleUrl.searchParams.append("location", `${event.location.name}, ${event.location.address}`)
	googleUrl.searchParams.append("dates", `${startDate.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}\/${endDate.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`)

	window.open(googleUrl.toString(), "_blank")
}


export function formatEventDate(date: string): string {
	return format(parseISO(date), "EEEE, MMMM d, yyyy")
}

export function formatEventTime(time: string): string {
	return format(parseISO(`2000-01-01T${time}`), "h:mm a")
}

export function getEventsByDate(events: Event[], date: Date): Event[] {
	return events.filter(event => isSameDay(parseISO(event.date), date))
}

export function groupEventsByDate(events: Event[]): Record<string, Event[]> {
	return events.reduce((acc, event) => {
		const date = format(parseISO(event.date), "yyyy-MM-dd")
		if (!acc[date]) {
			acc[date] = []
		}
		acc[date].push(event)
		return acc
	}, {} as Record<string, Event[]>)
}