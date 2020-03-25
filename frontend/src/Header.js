import React from 'react' 
/*
*	children -> Recebe todo o conteúdo passado  entre as tags do copoente, Ex: <Header>Hello Word</Header>
*	<h1>{props.children}</h1> --->  Hello Word
*
*/
export default function Header({ children }){
	return(
		<header>
			<h1>Hello </h1>
		</header>
	)
}