import { useEffect, useState } from "react";

import { useHasMounted } from "./useHasMounted";

import type { Dispatch, SetStateAction } from "react";

/**
 * Syncs a piece of state to localStorage
 * @param key localStorage key value
 * @param defaultValue default value if localStorage is not present
 * @returns state and setState array that is synced to localStorage
 */
export function useLocalStorage<S>(
	key: string,
	defaultValue: S
): [S, Dispatch<SetStateAction<S>>] {
	const [value, setValue] = useState(() => defaultValue);
	const hasMounted = useHasMounted();

	useEffect(() => {
		const saved = localStorage.getItem(key);
		const parsed = saved !== null ? JSON.parse(saved) : defaultValue;
		setValue(parsed);
	}, [defaultValue, key]);

	useEffect(() => {
		if (hasMounted) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}, [hasMounted, key, value]);

	return [value, setValue];
}
