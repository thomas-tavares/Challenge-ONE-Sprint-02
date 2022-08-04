		const letrasErradas = [];
		const letrasCorretas = [];	
		const palavras=['transplant','love','jacket','radio','house','subway','revolution','horse','mountain','journal','dictionary','airplane','democracy','dictatorship','alligator','awkward','nightclub','pneumonia','syndrome'];
		const palavraSecreta = geraPalavra();
		console.log(palavraSecreta);
			
		document.addEventListener('keydown', (event) =>{
		const codigo = event.keyCode;
				if (verificaLetra(codigo)){
					const letra = event.key;
					console.log(letra);
				if(letrasErradas.includes(letra)){
					mostrarAvisoLetraRepetida();
				} else{
						if (palavraSecreta.includes(letra)){
							letrasCorretas.push(letra);
						}else {
							letrasErradas.push(letra);
					}	}
						atualizarJogo();
				} 
		});
		
		atualizarJogo();

		function geraPalavra (){
			const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
			return palavraSecreta;
		}
		
		function verificaLetra (codigo){
			if (codigo >= 65 && codigo <= 90){
				return codigo;
			}
		}

		function mostrarAvisoLetraRepetida() {
	 		const aviso = document.querySelector(".aviso-palavra-repetida");
  			aviso.classList.add("show");
  			setTimeout(() => {
    		aviso.classList.remove("show");
  			}, 2000);
		}
		
		function mostrarLetrasErradas(){
			const div = document.querySelector(".letrasErradasContainer");
  			div.innerHTML = "<h3>Wrong Words</h3>"
 		 	letrasErradas.forEach((letra) => {
   			div.innerHTML += `<span>${letra}</span>`;
  			}); 
		}

		function mostrarLetrasCertas(){
			const container = document.querySelector(".palavraSecretaContainer");
			container.innerHTML = "";
			palavraSecreta.split("").forEach((letra) =>{
				if(letrasCorretas.includes(letra)){
					container.innerHTML += `<span>${letra}</span>`;
				}else{
					container.innerHTML += `<span>_</span>`;
				}
			});
		}
		
		function desenharForca (){
			const body = document.getElementsByClassName("corpo");
			for (let i=0; i<letrasErradas.length; i++) {
				body[i].style.display='block';
			}
		}

		function checarJogo(){
			let mensagem = "";
			const container = document.querySelector(".palavraSecretaContainer");
			const body = document.getElementsByClassName("corpo");
			if (letrasErradas.length == body.length){
				mensagem = `You lose! The secret word was ${palavraSecreta}`;
			}
			if (palavraSecreta == container.innerText){
				mensagem = "You won! Congratulation.";
			}
			if (mensagem){
				document.querySelector("#mensagem").innerHTML = mensagem;
				document.querySelector(".popup-container").style.display = "flex";
			}
		}	

		function atualizarJogo() {
			mostrarLetrasErradas();
			mostrarLetrasCertas();
			desenharForca();
			checarJogo();
		}

		function reiniciarJogo() {
 		 window.location.reload();
		}