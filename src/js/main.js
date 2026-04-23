import './lib/lib';

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal',
		body: 'orem ipsum dolor sit amet consectetur adipisicing elit. Animi, porro ab earum, itaque, cupiditate aspernatur voluptatum libero rem magni enim officiis tempora obcaecati. Molestias sapiente iure, ad dolorem rem minima?'
	},
	btns: {
		count: 2,
		settings: [
			['Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Data saved')
				}
			]
		]
	}
}))

$().get('https://jsonplaceholder.typicode.com/posts/1')
	.then(res => console.log(res));