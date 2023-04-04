export function toggleTheme(): void {
	const white = getCssVarValue('--white');
	const black = getCssVarValue('--black');
	const lightGray = getCssVarValue('--light-gray');
	const darkGray = getCssVarValue('--dark-gray');

	setCssVar('--white', black);
	setCssVar('--black', white);
	setCssVar('--light-gray', darkGray);
	setCssVar('--dark-gray', lightGray);
}

function getCssVarValue(varName: string): string {
	return getComputedStyle(document.documentElement).getPropertyValue(varName);
}

function setCssVar(varName: string, value: string) {
	document.documentElement.style.setProperty(varName, value);
}
