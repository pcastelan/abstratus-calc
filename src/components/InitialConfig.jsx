import React from 'react';

class InitialConfig extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		this.generatePlayersForm = this.generatePlayersForm.bind(this);
		this.state = {playersFormHtml:''};
	}
	
	render(){
		return (
			<>
				<div className="initial__step--1 initial__step">
					<p>Número de jogadores (entre 2 e 6):</p>
					<input type="text" value={this.props.size} onChange={this.props.getSize} /><br/>
					<button onClick={this.generatePlayersForm}>
						Próximo passo
					</button>
				</div>
				<div className="initial__step--2 initial__step" style={{display:'none'}}>{this.state.playersFormHtml}</div>
				
			</>
		)
	}

	selectColors(classesSelect)
	{
		return (
			<select name="" id="" className={classesSelect}>
				<option value="">Selecione:</option>
				<option value="amarelo">Amarelo</option>
				<option value="cinza">Cinza</option>
				<option value="preto">Preto</option>
				<option value="roxo">Roxo</option>
				<option value="verde">Verde</option>
				<option value="vermelho">Vermelho</option>
			</select>
		);
	}
	generatePlayersForm(e){
		let formContent = '';


		for(let i = 0; i < this.props.size; i++)
		{
			let classesName = `initial__player-input initial__player-input--${i+1}`;
			let classesColor = `initial__player-select initial__player-select--${i+1}`;
			formContent =(<>
				{formContent} 
				<div className="initial__player">
					<label>Nome do jogador {i+1}: </label>
					<input type="text" className={classesName}/><br/>
					<label>Cor do jogador {i+1}: </label>
					{this.selectColors(classesColor)}
					<hr />
				</div> 
			</>);
		}

		let box1 = document.querySelector('.initial__step--1');
		box1.style.display='none';
		let box2 = (document.querySelector('.initial__step--2'));
		box2.style.display='block';
		
		this.setState({playersFormHtml:(
			<form onSubmit={this.props.initialEnded} name="playersForm">
				{formContent}
				<button type="submit">Iniciar o jogo</button>
			</form>
		)});
		
	}
	
}

export default InitialConfig;