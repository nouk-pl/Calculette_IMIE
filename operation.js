
/**
 * fonction d'addition
 * @param  {number} nb1 [description]
 * @param  {number} nb2 [description]
 * @return {number}     [description]
 */
function addition(nb1, nb2) {
	var result = null;
	if(typeof(nb1) === "number" && typeof(nb2) === "number") {	
		result = nb1 + nb2;
	}
	return result;
}

/**
 * fonction de soustraction
 * @param  {number} nb1 [description]
 * @param  {number} nb2 [description]
 * @return {number}     [description]
 */
function soustraction(nb1, nb2) {
	var result = null;
	if(typeof(nb1) === "number" && typeof(nb2) === "number") {
		result = nb1 - nb2;
	}
	return result;
}
