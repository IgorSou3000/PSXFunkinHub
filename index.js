const ports = [
	{
		name: 'VS Zardy',
		link: 'https://gamebanana.com/mods/326248',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS Djentbot',
		link: 'https://gamebanana.com/mods/327595',
		creator: 'Unstop4ble',
	},
	{
		name: 'Friday Night Funkin Neo',
		link: 'https://gamebanana.com/mods/329221',
		creator: 'Unstop4ble',
	},
	{
		name: 'Friday Night Drownin',
		link: 'https://gamebanana.com/mods/333032',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS Matt',
		link: 'https://gamebanana.com/mods/335393',
		creator: 'Unstop4ble',
	},
	{
		name: 'Tails Gets Trolled',
		link: 'https://gamebanana.com/mods/336197',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS KAPI - Arcade Showdown',
		link: 'https://gamebanana.com/mods/331076',
		creator: 'Unstop4ble',
	},
	{
		name: 'Cyber Sensation',
		link: 'https://gamebanana.com/mods/345700',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS QT',
		link: 'https://gamebanana.com/mods/349732',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS Tails.EXE',
		link: 'https://gamebanana.com/mods/351008',
		creator: 'Unstop4ble',
	},
	{
		name: 'Boogie-Man',
		link: 'https://gamebanana.com/mods/355297',
		creator: 'Unstop4ble',
	},
	{
		name: 'Among us over Week 1',
		link: 'https://gamebanana.com/mods/356578',
		creator: 'Unstop4ble',
	},
	{
		name: 'Confronting Yourself',
		link: 'https://gamebanana.com/mods/364874',
		creator: 'Unstop4ble',
	},
	{
		name: 'Skeleton Bros',
		link: 'https://gamebanana.com/mods/372077',
		creator: 'Unstop4ble',
	},
	{
		name: 'Pibby Corrupted',
		link: 'https://gamebanana.com/mods/388045',
		creator: 'Unstop4ble',
	},
	{
		name: 'Funktime Bunzo',
		link: 'https://gamebanana.com/mods/391158',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS Walter',
		link: 'https://gamebanana.com/mods/403045',
		creator: 'Unstop4ble',
	},
	{
		name: 'CN Takeover',
		link: 'https://gamebanana.com/mods/450427',
		creator: 'Unstop4ble',
	},
	{
		name: 'VS Garcello',
		link: 'https://gamebanana.com/mods/325140',
		creator: 'IgorSou3000',
	},
	{
		name: 'Friday Night Funkin D Side',
		link: 'https://gamebanana.com/mods/338743',
		creator: 'IgorSou3000',
	},
	{
		name: 'Red Version - VS Red',
		link: 'https://gamebanana.com/mods/345716',
		creator: 'IgorSou3000',
	},
	{
		name: 'Chaos Nightmare',
		link: 'https://gamebanana.com/mods/382595',
		creator: 'IgorSou3000',
	},
	{
		name: 'GF.hx',
		link: 'https://gamebanana.com/mods/398460',
		creator: 'IgorSou3000',
	},
	{
		name: 'VS Sonic Says',
		link: 'https://gamebanana.com/mods/500545',
		creator: 'IgorSou3000',
	},
	{
		name: 'Duo Pack',
		link: 'https://gamebanana.com/mods/317068',
		creator: 'Lord Scout',
	},
	{
		name: 'Around The Fire',
		link: 'https://gamebanana.com/mods/318502',
		creator: 'Lord Scout',
	},
	{
		name: 'Sonic.EXE 1.5',
		link: 'https://gamebanana.com/mods/3194168',
		creator: 'Lord Scout',
	},
	{
		name: 'Friday Night Wumpin',
		link: 'https://gamebanana.com/mods/321100',
		creator: 'Lord Scout',
	},
	{
		name: 'VS Impostor V3',
		link: 'https://gamebanana.com/mods/323240',
		creator: 'Lord Scout',
	},
	{
		name: 'Friday Night Funkin With Parappa',
		link: 'https://gamebanana.com/mods/329625',
		creator: 'Lord Scout',
	},
	{
		name: 'VS Mickey Mouse',
		link: 'https://gamebanana.com/mods/339042',
		creator: 'Lord Scout',
	},
	{
		name: 'VS Tricky',
		link: 'https://gamebanana.com/mods/385882',
		creator: 'Lord Scout',
	},
	{
		name: 'VS Tan',
		link: 'https://gamebanana.com/mods/330204',
		creator: 'BiliousData',
	},
	{
		name: 'VS Eteled',
		link: 'https://gamebanana.com/mods/351910',
		creator: 'BiliousData',
	},
	{
		name: 'VS Bob',
		link: 'https://gamebanana.com/mods/325016',
		creator: 'g3yt',
	},
	{
		name: 'VS Shaggy 2.5',
		link: 'https://gamebanana.com/mods/333528',
		creator: 'DreamCastNick',
	},
	{
		name: 'Hypno Lullaby',
		link: 'https://gamebanana.com/mods/334300',
		creator: 'DreamCastNick',
	},
	{
		name: 'VS Baldi s Basics In Funkin',
		link: 'https://gamebanana.com/mods/334697',
		creator: 'DreamCastNick',
	},
];

const container = document.getElementById('mainContainer');

/* Find the ports that matches the search*/
function searchPort() {
	let input = document.getElementById('searchbar');
	let filter = input.value.toUpperCase();
	let mainContainer = document.getElementById('mainContainer');
	let ports = mainContainer.getElementsByClassName('port');

	for (let i = 0; i < ports.length; i++) {
		let txtValue = ports[i].textContent || ports[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			ports[i].style.display = '';
		}
		else {
			ports[i].style.display = 'none';
		}
	}
}

/* Compare the object names in the array to sort them in alphabetical order. */
function compareByName(a, b) {
	if (a.name < b.name)
		return -1;

	if (a.name > b.name)
		return 1;

	return 0;
};

function createPortsHTML(container, ports) {
	ports.forEach(port => {
		const portImage = 'img/' + port.name + '.png';
		const portHTML = `
		<figure class="port">
			<img src="${portImage}" alt="${port.name} image">
			<figcaption><a href="${port.link}" target="_blank">${port.name}</a></figcaption>
		</figure>`;
		
		container.insertAdjacentHTML('beforeend', portHTML);
	});
};

ports.sort(compareByName);
createPortsHTML(container, ports);
