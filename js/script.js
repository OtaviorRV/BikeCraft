if(window.SimpleSlide){
new SimpleSlide({
	slide: 'quote', // nome do atributo data-slide="principal"
	auto: true, // se o slide deve passar automaticamente
	time: 5000, // tempo de transição dos slides
	pauseOnHover: true, // pausa a transição automática
 });
 new SimpleSlide({
	 slide:'portifolio',
	 time: 5000,
	nav: true
 });}
 if(window.SimpleAnime){
	new SimpleAnime();}
	
	if(window.SimpleForm){
	new SimpleForm({
		form:".formphp", 
		button:"#enviar",
		erro:"<div id='form-erro'> <h3>Erro ao enviar!</h3><p> Um erro ocorreu, tente enviar um email para contato@bikecraft.com </p></div>",
		sucesso:"<div id='form-sucesso'> <h2> Sucesso ao Enviar!</h2> <p> Em breve entraemos em contato.</p></div>",
	});
	}