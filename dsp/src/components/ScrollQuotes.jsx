import { useRef, useState } from "react";

const quotes = [
	{
		text: `“DSP International School doesn’t just educate students—it nurtures thinkers, dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, capable human beings for a changing world.”`,
		author: '— A. Mehta, Education Columnist, Mumbai Chronicle',
	},
	{
		text: `“The school’s focus on holistic development ensures every child finds their unique strengths and passions  dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, capable human beings for a changing world.”`,
		author: '— Parent of Grade IV Student',
	},
	{
		text: `“A nurturing environment where  dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, capable human beings for a changing world”`,
		author: '— Alumni, Class of 2022',
	},
	{
		text: `“Innovative teaching methods and a caring faculty make learning a joyful experience  dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, capable human beings for a changing world.”`,
		author: '— Parent of Grade II Student',
	},
	{
		text: `“DSP International School is truly a second home  dreamers, and doers. It’s rare to see a place so deeply committed to shaping kind, capable human beings for a changing world so deeply committed to shaping kind,”`,
		author: '— Parent of Grade I Student',
	},
];

export default function ScrollQuotes() {
	const [active, setActive] = useState(0);
	const scrollRef = useRef(null);

	const handleScroll = () => {
		const scrollLeft = scrollRef.current.scrollLeft;
		const width = scrollRef.current.offsetWidth;
		const idx = Math.round(scrollLeft / width);
		setActive(idx);
	};

	const scrollTo = (idx) => {
		const width = scrollRef.current.offsetWidth;
		scrollRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
	};

	return (
		<div className="w-full bg-[#fafafa] py-12 flex flex-col items-center">
			<div
				className="w-full max-w-6xl overflow-x-auto scrollbar-hide"
				ref={scrollRef}
				onScroll={handleScroll}
				style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
			>
				<div className="flex w-full" style={{ minWidth: '100%' }}>
					{quotes.map((q, i) => (
						<div
							key={i}
							className="flex-shrink-0 w-full max-w-5xl px-2"
							style={{ scrollSnapAlign: 'center' }}
						>
							<div className="bg-white rounded-xl p-4 md:p-16 w-full mx-auto text-center border border-green-100 shadow-sm relative min-h-[340px] flex flex-col justify-center"
								style={{
									boxShadow: '0 1px 8px 0 rgba(60, 120, 60, 0.04)'
								}}
							>
								<div className="text-2xl md:text-4xl font-semibold md:font-bold text-[#5d8a44] mb-5 leading-tight">
									{q.text}
								</div>
								<div className="text-sm md:text-lg font-medium text-[#b59a3a] mt-4">
									{q.author}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex space-x-1 mt-6">
				{quotes.map((_, i) => (
					<span
						key={i}
						className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${active === i ? 'bg-[#5d8a44] scale-110' : 'bg-[#b0e57c]'}`}
						onClick={() => scrollTo(i)}
						aria-label={`Go to quote ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
