"use strict"

$(document).ready( function () {
	$.fn.fullpage.reBuild();
	var elementsToHide = document.getElementsByClassName("answers");

	for(var i = 0; i < elementsToHide.length; i++) {
		document.getElementById(elementsToHide[i].id).style.display = "none";
	}

	// Animation de la slide d'intro
	animIntro();

	document.getElementById("bouton_2008_data1").style.pointerEvents = "none";

	//document.getElementById("sectionQ").style.display = "none";
})

function animIntro() {
	var nuage1 = document.getElementById("nuage1");
	var nuage2 = document.getElementById("nuage2");
	var nuage3 = document.getElementById("nuage3");
	var tracteur = document.getElementById("tracteur_intro");
	var bateau = document.getElementById("bateau_intro");
	var panneau1 = document.getElementById("panneau_intro_1");
	var panneau2 = document.getElementById("panneau_intro_2");
	var panneau3 = document.getElementById("panneau_intro_3");
	var pale1 = document.getElementById("pale_intro_1");
	var pale2 = document.getElementById("pale_intro_2");
	var pale3 = document.getElementById("pale_intro_3");

	$(nuage1)
		.transition({
					opacity: 1,
					left: '13.5%',
					delay: 500 }, 1000, 'linear');
	$(nuage2)
		.transition({
					opacity: 1,
					left: '47.5%',
					delay: 500 }, 1000, 'linear');
	$(nuage3)
		.transition({
					opacity: 1,
					left: '65%',
					delay: 500 }, 1000, 'linear');

	$(tracteur)
		.transition({
					left: '-15%',
					delay: 1100 }, 10000, 'linear');

	$(bateau)
		.transition({
					left: '110%',
					delay: 1100 }, 10000, 'linear');

	$(pale1)
		.transition({
					rotate: '360deg',
					delay: 1100 }, 20000, 'linear');

	$(pale2)
		.transition({
					rotate: '360deg',
					delay: 920 }, 14300, 'linear');

	$(pale3)
		.transition({
					rotate: '360deg',
					delay: 1280 }, 10000, 'linear');
}

function startQ () {
	//document.getElementById("sectionQ").style.display = "block";
	$.fn.fullpage.moveSectionDown();
}

/* Fonction passant à la slide suivante (scroll horizontal) */
function moveNextQ (button) {
	$.fn.fullpage.moveSlideRight();
	var idQ = button[0]+button[1];
	resetSlide(idQ);
}

/* Fonction passant à la section suivante (scroll vertical) */
function moveNextS (button) {
	$.fn.fullpage.moveSectionDown();
	var idQ = button[0]+button[1];
	resetSlide(idQ);
}

function resetSlide (idQ) {	
	// Cacher les blocs réponses
	var bad_block = document.getElementById(idQ+"_ab");
	var good_block = document.getElementById(idQ+"_ag");

	bad_block.style.display = "none";
	good_block.style.display = "none";

	// Background des propositions à #E1F1F3 et onclick
	var props = document.getElementById(idQ).children;

	for(var i = 0; i < props.length; i++) {
		if(props[i].nodeName == "LI") {
			document.getElementById(props[i].id).style.backgroundColor = "#E1F1F3";
			document.getElementById(props[i].id).style.pointerEvents = "auto";
		}
	}

	document.getElementById(idQ+"_b").style.pointerEvents = "auto";

	switch(idQ) {
		case "q1":
			var france = document.getElementById("france");
			var paysdelaloire = document.getElementById("pays_de_la_loire");
			$(france).transition({
				left: '6.5%'
			})
			$(paysdelaloire).transition({
				scale: 1,
				left: '9.05%'
			})
			break;

		case "q2":
			var ampoule = document.getElementById("ampoule_q2");
			var batiment = document.getElementById("batiment_q2");
			var euro = document.getElementById("euro_q2");

			$(ampoule).transition({
				scale: 1,
				left: '29.5%'
			})
			$(batiment).transition({
				scale: 1,
				left: '35.5%'
			})
			$(euro).transition({
				scale: 1,
				left: '42%'
			})
			break;

		case "q3":
			var elements = document.getElementById("elements_q3");
			var panneau1 = document.getElementById("panneau_1_q3");
			var panneau2 = document.getElementById("panneau_2_q3");
			var panneau3 = document.getElementById("panneau_3_q3");
			var tracteur = document.getElementById("tracteur_q3");
			var pale1 = document.getElementById("pale_1_q3");
			var pale2 = document.getElementById("pale_2_q3");
			var pale3 = document.getElementById("pale_3_q3");

			$(elements_q3).transition({
				scale: 1,
				left: '50%'
			})
			$(panneau1).transition({
				scale: 1,
				left: '64%'
			})
			$(panneau2).transition({
				scale: 1,
				left: '65%'
			})
			$(panneau3).transition({
				scale: 1,
				left: '63%'
			})
			$(tracteur).transition({
				scale: 1,
				left: '56.5%'
			})
			$(pale1).transition({
				scale: 1,
				left: '63.6%',
				top: '31.5%'
			})
			$(pale2).transition({
				scale: 1,
				left: '64.94%',
				top: '34.4%'
			})
			$(pale3).transition({
				scale: 1,
				left: '66.4%',
				top: '31.5%'
			})
			break;

		case "q4":
			var elements = document.getElementById("elements_q4");

			$(elements_q4).transition({
				scale: 1,
				left: '82.5%'
			})
			break;
	}

}

function chooseAnswer (prop_id) {
	var idQ = document.getElementById(prop_id).parentElement.id;
	var childs = document.getElementById(prop_id).parentElement.children;

	for(var i = 0; i < childs.length; i++) {
		if(childs[i].id != prop_id && childs[i].nodeName == "LI") {
			document.getElementById(childs[i].id).style.backgroundColor = "#E1F1F3";
			document.getElementById(childs[i].id).className = "";
		} else if(childs[i].id == prop_id && childs[i].nodeName == "LI") {
			document.getElementById(childs[i].id).style.backgroundColor = "#AFDCDF";
			document.getElementById(childs[i].id).className = "tmp_answer";
		}
	}

	var valid_button = document.getElementById(idQ+"_b");

	for(i = 0; i < 3; i++) {
		$(valid_button).transition({ scale: 1.25 }, 700);
		$(valid_button).transition({ scale: 1 }, 700);
	}
}

function answerQuestions(prop_id) {

	// Récupère l'id de l'élément <ul> contenant les propositions
	var idQ = document.getElementById(prop_id).parentElement.id;

	var valid_button = document.getElementById(idQ+"_b");
	$(valid_button).stop(true);

	var question = prop_id[0]+prop_id[1];
	var childs = document.getElementById(question).children;

	for(var i = 0; i < childs.length; i++) {
		if(document.getElementById(childs[i].id).className == "tmp_answer")
		{
			var answer = childs[i].id;
			answer = answer[3]+answer[4];
		}
		document.getElementById(childs[i].id).style.pointerEvents = "none";
	}

	var bad_bloc = document.getElementById(question+"_ab");
	var good_bloc = document.getElementById(question+"_ag");
	var good_arrow = document.getElementById(question+"_ag_button");
	var bad_arrow = document.getElementById(question+"_ab_button");

	function appear(bloc) {
		bloc.style.opacity = 0;
		$(bloc).transition({
			opacity: 1,
			x: 20
		});
	}

	function disappear(bloc) {
		$(bloc).transition({
			opacity: 0,
			x: -20
		});
	}

	function animContinue (arrow) {
		for(var i = 0; i < 5; i++) {
			$(arrow).transition({ scale: 1.5 }, 650);
			$(arrow).transition({ scale: 1 }, 650);
		}
	}

	function animFrance() {
		var france = document.getElementById("france");
		var paysdelaloire = document.getElementById("pays_de_la_loire");

		$(paysdelaloire).stop(true, true);

		$(france).transition({
			left: '1%'
		})
		$(paysdelaloire).transition({
			left: '3.55%'
		})
	}

	function animEuro() {
		var ampoule = document.getElementById("ampoule_q2");
		var batiment = document.getElementById("batiment_q2");
		var euro = document.getElementById("euro_q2");

		$(ampoule).transition({
			scale: 0.6,
			left: '26.5%'
		})
		$(batiment).transition({
			scale: 0.5,
			left: '29%'
		})
		$(euro).transition({
			scale: 0.5,
			left: '32%'
		})
	}

	function animElementsQ3 () {
		var elements = document.getElementById("elements_q3");
		var panneau1 = document.getElementById("panneau_1_q3");
		var panneau2 = document.getElementById("panneau_2_q3");
		var panneau3 = document.getElementById("panneau_3_q3");
		var tracteur = document.getElementById("tracteur_q3");
		var pale1 = document.getElementById("pale_1_q3");
		var pale2 = document.getElementById("pale_2_q3");
		var pale3 = document.getElementById("pale_3_q3");

		$(elements_q3).transition({
			scale: 0.8,
			left: '44%'
		})
		$(panneau1).transition({
			scale: 0.8,
			left: '58%'
		})
		$(panneau2).transition({
			scale: 0.8,
			left: '59%'
		})
		$(panneau3).transition({
			scale: 0.8,
			left: '57%'
		})
		$(tracteur).transition({
			scale: 0.8,
			left: '50.5%',
			top: '54%'
		})
		$(pale1).transition({
			scale: 0.8,
			left: '57.2%',
			top: '34.8%'
		})
		$(pale2).transition({
			scale: 0.8,
			left: '58.29%',
			top: '37.2%'
		})
		$(pale3).transition({
			scale: 0.8,
			left: '59.42%',
			top: '34.8%'
		})
	}

	function animElementsQ4 () {
		var elements = document.getElementById("elements_q4");

		$(elements_q4).transition({
			scale: 0.8,
			left: '77%'
		})

		var maison3 = document.getElementById("maison3_q4");
		var maison1 = document.getElementById("maison1_q4");
		var maison4 = document.getElementById("maison4_q4");
		var maison2 = document.getElementById("maison2_q4");
		var maison5 = document.getElementById("maison5_q4");
		var maison6 = document.getElementById("maison6_q4");

		$(maison1).transition({
			opacity: 0
		}, 500)
		$(maison2).transition({
			opacity: 0
		}, 500)
		$(maison3).transition({
			opacity: 0
		}, 500)
		$(maison4).transition({
			opacity: 0
		}, 500)
		$(maison5).transition({
			opacity: 0
		}, 500)
		$(maison6).transition({
			opacity: 0
		}, 500)
	}
	
	switch(question) {
		case "q1":
			switch(answer) {
				// Bonne réponse
				case "p3":
					disappear(bad_bloc);
					bad_bloc.style.display = "none";
					good_bloc.style.display = "table";
					good_bloc.style.visibility = "visible";
					appear(good_bloc);
					animContinue(good_arrow);
					animFrance();
					break;

				// Mauvaises réponses
				case "p1":
				case "p2":
					bad_bloc.style.display = "table";
					bad_bloc.style.visibility = "visible";
					appear(bad_bloc);
					disappear(good_bloc);
					good_bloc.style.display = "none";
					animContinue(bad_arrow);
					animFrance();
					break;
			}
			break;

		case "q2":
			switch(answer) {
				// Bonne réponse
				case "p2":
					disappear(bad_bloc);
					bad_bloc.style.display = "none";
					good_bloc.style.display = "table";
					good_bloc.style.visibility = "visible";
					appear(good_bloc);
					animContinue(good_arrow);
					animEuro();
					break;

				// Mauvaises réponses
				case "p1":
				case "p3":
					bad_bloc.style.display = "table";
					bad_bloc.style.visibility = "visible";
					appear(bad_bloc);
					disappear(good_bloc);
					good_bloc.style.display = "none";
					animContinue(bad_arrow);
					animEuro();
					break;
			}
			break;

		case "q3":
			switch(answer) {
				// Bonne réponse
				case "p1":
					disappear(bad_bloc);
					bad_bloc.style.display = "none";
					good_bloc.style.display = "table";
					good_bloc.style.visibility = "visible";
					appear(good_bloc);
					animContinue(good_arrow);
					animElementsQ3();
					break;

				// Mauvaises réponses
				case "p2":				
				case "p3":
					bad_bloc.style.display = "table";
					bad_bloc.style.visibility = "visible";
					appear(bad_bloc);
					disappear(good_bloc);
					good_bloc.style.display = "none";
					animContinue(bad_arrow);
					animElementsQ3();
					break;
			}
			break;

		case "q4":
			switch(answer) {
				// Bonne réponse
				case "p3":
					bad_bloc.style.display = "none";
					disappear(bad_bloc);
					good_bloc.style.display = "table";
					good_bloc.style.visibility = "visible";
					appear(good_bloc);
					animContinue(good_arrow);
					animElementsQ4();
					break;

				// Mauvaises réponses
				case "p1":				
				case "p2":
					bad_bloc.style.display = "table";
					bad_bloc.style.visibility = "visible";
					appear(bad_bloc);
					good_bloc.style.display = "none";
					disappear(good_bloc);
					animContinue(bad_arrow);
					animElementsQ4();
					break;
			}
			break;
	}
}

function goTo2008 () {
	var elements = document.getElementsByClassName("elem_14");
	var num_rand;

	console.debug("Go To 2008");

	for(var i = 0; i < elements.length; i++)
	{
		num_rand = Math.random();

		// Application d'une animation
		$(elements[i]).transition({
				left: '+=5%',
				top: '+=6%',
				opacity: 0,
				delay: num_rand*100
			}, 500)
	}

	var bouton_2008 = document.getElementById("bouton_2008_data1");
	var bouton_2014 = document.getElementById("bouton_2014_data1");
	$(bouton_2014).transition({
		scale: 0.8,
		opacity: 0.5
	})
	$(bouton_2008_data1).transition({
		scale: 1.3,
		opacity: 1
	})

	document.getElementById("bouton_2008_data1").style.pointerEvents = "none";
	document.getElementById("bouton_2014_data1").style.pointerEvents = "auto";
}

function goTo2014 () {
	var elements = document.getElementsByClassName("elem_14");
	var num_rand;

	for(var i = 0; i < elements.length; i++)
	{
		console.debug($(elements[i]));
		num_rand = Math.random();

		// Application de l'animation inverse
		$(elements[i]).transition({
				left: '-=5%',
				top: '-=6%',
				opacity: 1,
				delay: num_rand*100
			}, 500)
	}

	var bouton_2008 = document.getElementById("bouton_2008_data1");
	var bouton_2014 = document.getElementById("bouton_2014_data1");
	$(bouton_2014).transition({
		scale: 1.3,
		opacity: 1
	})
	$(bouton_2008_data1).transition({
		scale: 0.8,
		opacity: 0.5
	})

	document.getElementById("bouton_2008_data1").style.pointerEvents = "auto";
	document.getElementById("bouton_2014_data1").style.pointerEvents = "none";
}

function setPDLSize (grosseur) {
	var paysdelaloire = document.getElementById("pays_de_la_loire");
	console.debug("setPDLSize : "+grosseur);
	switch(grosseur) {
		case 1:
			$(paysdelaloire).transition({
				scale: 1
			})
			break;
		case 2:
			$(paysdelaloire).transition({
				scale: 1.3
			})
			break;
		case 3:
			$(paysdelaloire).transition({
				scale: 1.6
			})
			break;
	}
}

function animQ3 (element) {
	switch(element) {
		case 1:
			var pale1 = document.getElementById("pale_1_q3");
			var pale2 = document.getElementById("pale_2_q3");
			var pale3 = document.getElementById("pale_3_q3");

			$(pale1).transition({
					rotate: '1480deg',
					delay: 920 }, 18100, 'linear');
			$(pale2).transition({
					rotate: '1480deg',
					delay: 710 }, 9800, 'linear');
			$(pale3).transition({
					rotate: '1480deg',
					delay: 1154 }, 12540, 'linear');

			var panneau1 = document.getElementById("panneau_1_q3");
			var panneau2 = document.getElementById("panneau_2_q3");
			var panneau3 = document.getElementById("panneau_3_q3");

			$(panneau1).stop(true, true);
			$(panneau2).stop(true, true);
			$(panneau3).stop(true, true);

			$(panneau1).transition({
				scale: 1
			});
			$(panneau2).transition({
				scale: 1
			});
			$(panneau3).transition({
				scale: 1
			});

			var tracteur = document.getElementById("tracteur_q3");

			$(tracteur).stop(true, true);
			$(tracteur).transition({
				left: '56.5%'
			});
			break;

		case 2:
			var panneau1 = document.getElementById("panneau_1_q3");
			var panneau2 = document.getElementById("panneau_2_q3");
			var panneau3 = document.getElementById("panneau_3_q3");

			for(var i = 0; i < 5; i++) {
				$(panneau1).transition({
						scale: 1.2,
						delay: 920
				});
				$(panneau2).transition({
						scale: 1.4,
						delay: 710
				});
				$(panneau3).transition({
						scale: 1.1,
						delay: 1154
				});

				$(panneau1).transition({
						scale: 1
				});
				$(panneau2).transition({
						scale: 1
				});
				$(panneau3).transition({
						scale: 1
				});
			}

			var pale1 = document.getElementById("pale_1_q3");
			var pale2 = document.getElementById("pale_2_q3");
			var pale3 = document.getElementById("pale_3_q3");

			$(pale1).stop(true, true);
			$(pale2).stop(true, true);
			$(pale3).stop(true, true);

			$(pale1).transition({
				rotate: '0deg'
			});
			$(pale2).transition({
				rotate: '0deg'
			});
			$(pale3).transition({
				rotate: '0deg'
			});

			var tracteur = document.getElementById("tracteur_q3");

			$(tracteur).stop(true, true);
			$(tracteur).transition({
				left: '56.5%'
			});
			break;

		case 3:
			var tracteur = document.getElementById("tracteur_q3");

			$(tracteur).transition({
				left: '47.5%'
			}, 10000, 'linear');

			var panneau1 = document.getElementById("panneau_1_q3");
			var panneau2 = document.getElementById("panneau_2_q3");
			var panneau3 = document.getElementById("panneau_3_q3");

			$(panneau1).stop(true, true);
			$(panneau2).stop(true, true);
			$(panneau3).stop(true, true);

			$(panneau1).transition({
				scale: 1
			});
			$(panneau2).transition({
				scale: 1
			});
			$(panneau3).transition({
				scale: 1
			});

			var pale1 = document.getElementById("pale_1_q3");
			var pale2 = document.getElementById("pale_2_q3");
			var pale3 = document.getElementById("pale_3_q3");

			$(pale1).stop(true, true);
			$(pale2).stop(true, true);
			$(pale3).stop(true, true);

			$(pale1).transition({
				rotate: '0deg'
			});
			$(pale2).transition({
				rotate: '0deg'
			});
			$(pale3).transition({
				rotate: '0deg'
			});
			break;
	}
}

function displayHouses (nombre) {
	switch(nombre) {
		case 1:
			var maison3 = document.getElementById("maison3_q4");

			$(maison3).transition({
				opacity: 1
			}, 500)

			var maison1 = document.getElementById("maison1_q4");
			var maison4 = document.getElementById("maison4_q4");
			var maison2 = document.getElementById("maison2_q4");
			var maison5 = document.getElementById("maison5_q4");
			var maison6 = document.getElementById("maison6_q4");

			$(maison1).transition({
				opacity: 0
			}, 500)
			$(maison4).transition({
				opacity: 0
			}, 500)
			$(maison2).transition({
				opacity: 0
			}, 500)
			$(maison5).transition({
				opacity: 0
			}, 500)
			$(maison6).transition({
				opacity: 0
			}, 500)
			break;

		case 2:
			displayHouses(1);
			var maison1 = document.getElementById("maison1_q4");
			var maison4 = document.getElementById("maison4_q4");

			$(maison1).transition({
				opacity: 1
			}, 500)
			$(maison4).transition({
				opacity: 1
			}, 500)
			break;

		case 3:
			displayHouses(2);
			var maison2 = document.getElementById("maison2_q4");
			var maison5 = document.getElementById("maison5_q4");
			var maison6 = document.getElementById("maison6_q4");

			$(maison2).transition({
				opacity: 1
			}, 500)
			$(maison5).transition({
				opacity: 1
			}, 500)
			$(maison6).transition({
				opacity: 1
			}, 500)
			break;
	}
}