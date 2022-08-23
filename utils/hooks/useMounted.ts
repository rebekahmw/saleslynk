import { useRef, useEffect } from "react";

export const useMounted = () => {
	const mountedRef = useRef(false);
	useEffect(() => {
		mountedRef.current = true;
	}, []);
	return mountedRef.current;
};
