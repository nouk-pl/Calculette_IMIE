
/**
 * Fonction d'addition
 */
function add() {
	
	if(typeof(nbTotal) === "number" && typeof(nb2) === "number") {	
		nbTotal += nb2;
	}
	return nbTotal;
}

/**
 * Fonction de soustraction
 * @return {[type]} [description]
 */
function sub() {
	
	if(typeof(nbTotal) === "number" && typeof(nb2) === "number") {
		nbTotal -= nb2;
	}
	return nbTotal;
}
