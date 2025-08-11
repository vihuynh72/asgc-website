"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
	className?: string;
	placeholder?: string;
	onSearch?: (query: string) => void;
}

export function SearchBar({ className = '', placeholder = 'Search ASGC...', onSearch }: SearchBarProps) {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const q = query.trim();
		if (q) {
			if (onSearch) onSearch(q);
			else router.push(`/search?q=${encodeURIComponent(q)}`);
			setQuery('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`relative ${className}`} role="search">
			<div className={`relative flex items-center transition-all duration-200 ${isFocused ? 'ring-2 ring-[var(--color-accent)] ring-offset-2' : ''}`}>
				<input
					type="search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={placeholder}
					className="w-full pl-10 pr-8 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
					aria-label="Search ASGC website"
				/>
				<button type="submit" className="absolute left-3 p-1 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Submit search">
					<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
				{query && (
					<button type="button" onClick={() => setQuery('')} className="absolute right-2 p-1 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors" aria-label="Clear search">
						<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				)}
			</div>
		</form>
	);
}