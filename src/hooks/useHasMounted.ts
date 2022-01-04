import { useEffect, useState } from "react";

/**
 * Returns boolean if component has mounted
 * @returns false on first render, otherwise true
 */
export function useHasMounted(): boolean {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
}
