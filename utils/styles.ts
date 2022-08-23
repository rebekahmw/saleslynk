const style = (styleArray: string[]): string => {
	return styleArray.filter((styleItem: string | null) => styleItem).join(" ");
};

export default style;
