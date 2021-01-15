const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',
];

// Use the countries array to change every element to an array of like this:

// [ ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], …… ]

const countriesList = (arr) => {
	return arr.map((country) => [
		country,
		country.slice(0, 3).toUpperCase(),
		country.length,
	]);
};

console.log(countriesList(countries));

//=========================================================================

// Write a script which generates “-“ after every even numbers in a string. Use array methods.

const evenFinder = (str) => {
	let res = str.split('').map((item) => {
		if (parseFloat(item) % 2 == 0) {
			item += '-';
		}
		return item;
	});

	return res.join('');
};

console.log(evenFinder('670av1245d00fsd2'));

//===========================================================================

/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.
  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".
*/
const voyagers = [
	'Adam family',
	'Potter family',
	'Eric',
	'Aldous',
	'Button family',
	'Jude',
	'Carmichael',
	'Bunny',
	'Asimov',
	'Oscar family',
	'Avery family',
	'Archer family',
];

const alphaFamilies = (arr) => {
	return arr.filter(
		(item) => item.includes('family') && item[0].toLowerCase() == 'a',
	);
};

console.log(alphaFamilies(voyagers));
