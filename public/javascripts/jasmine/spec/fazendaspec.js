describe("Fazenda", function() {
	var fazenda;
	
	beforeEach(function() {
		var dados = [{
			"__id": "f8c3500f39017602234a031caa64a8b4",
			"timestamp": 1408396531382,
			"name": "Rita Cadillac",
			"description": "Cracrete n&ordm;1",
			"picture": "http://im.r7.com/record/files/2C96/1617/3F6E/32AE/013F/72F9/AD72/3CE1/RitaCadillac1.jpg",
			"positive": 51638022,
			"negative": 18143089
		},{
			"__id": "7b1dd3f58be97715e9e06475bb58fce5",
			"timestamp": 1408396481826,
			"name": "Gominho",
			"description": "Fofoqueiro de Plantão",
			"picture": "http://im.r7.com/record/files/2C96/1618/3F6E/369D/013F/72F7/CF15/5F4B/Gominho1.jpg",
			"positive": "23249923",
			"negative": "39587707"
		},{
			"__id": "70580002438b08c63286d08b7c43fb4c",
			"timestamp": 1408396545027,
			"name": "Yudi Tamashiro",
			"description": "Apresentador e ídolo teen",
			"picture": "http://im.r7.com/record/files/2C96/1617/3F6E/32AE/013F/72FD/87BB/4436/Yudi1.jpg",
			"positive": 59089056,
			"negative": 14772265
		},{
			"__id": "3404c4a70e7704009cd1915a349189f4",
			"timestamp": 1408396555971,
			"name": "Andressa Urach",
			"description": "Personalidade da mídia",
			"picture": "http://im.r7.com/record/files/2C96/1618/3F6E/369D/013F/72EF/C598/41DC/Andressa1.jpg",
			"positive": null,
			"age": 32
		},{
			"__id": "c97686edbeb8df774a567e9884f4d490",
			"timestamp": 1408396562866,
			"name": "Bárbara Evans",
			"description": "Modelo e filha de Monique Evans",
			"picture": "http://im.r7.com/record/files/2C96/1618/3F6E/369D/013F/72F6/B48C/5BBD/B%C3%A1rbaraEvans1.jpg",
			"positive": 69274684,
			"negative": 9446548
		}];
		fazenda = Fazenda(dados);
	});
	
	it("deve calcular as porcentagens de positives e negatives", function() {
		var fazendeiros = fazenda.lista();
		var peao = fazendeiros.people[0];
		
		expect(peao.like + peao.dislike).toEqual(100);
	});
	
	describe("Ordenacao", function() {
		it("deve ordernar os dados de acordo com a pontuacao positiva", function() {
			var fazendeiros = fazenda.ordena();
			var primeiroPeao = fazendeiros[0];
			var segundoPeao = fazendeiros[fazendeiros.length - 1];
			
			expect(segundoPeao.positive).toBeLessThan(primeiroPeao.positive);
		});
		
		it("deve ordernar os items do json a partir da porcentagem calculada", function() {
			var fazendeirosOrdenados = fazenda.ordena();
			var fazendeiros = fazenda.lista();
			var primeiroPeao = fazendeiros.people[0];
			var segundoPeao = fazendeiros.people[fazendeiros.people.length - 1];
			
			expect(segundoPeao.like).toBeLessThan(primeiroPeao.like);
		});
	});
});