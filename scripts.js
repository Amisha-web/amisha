
			var numer_planszy = 0;
			var last_wart_in = -1;
			var last_konflikt = -1;
			var last = -1;
			var last_wart_out = -1;
			var last_update= '';
			var plansze = new Array();
			var minuty = 0;

			//var undoManager;

				var undoManager = new UndoManager();
					
				//var circleDrawer = new CircleDrawer('view');
				//circleDrawer.setUndoManager(undoManager);
                
				var btnUndo = document.getElementById('undo');
				var btnRedo = document.getElementById('redo');
				//var btnClear = document.getElementById('btnClear');

			var opisPlanszy = //board description
				"020730001" +
				"009010047" +
				"000208900" +
				"000600802" +
				"207853406" +
				"804007000" +
				"003405000" +
				"640080700" +
				"100072090";
			plansze[0] = opisPlanszy; //boards[0]

			var opisPlanszy1 =
				"058007304" +
				"004010065" +
				"106400070" +
				"005008900" +
				"680900130" +
				"070600400" +
				"007040002" +
				"041876000" +
				"800500041";
			plansze[1] = opisPlanszy1;

			var opisPlanszy2 =
				"060037049" +
				"009060003" +
				"000900820" +
				"001000092" +
				"900001600" +
				"630094075" +
				"400076080" +
				"306428000" +
				"007500300";
			plansze[2] = opisPlanszy2;

			var opisPlanszy3 =
				"040965800" +
				"006028107" +
				"030700650" +
				"350010080" +
				"200000904" +
				"004002030" +
				"700000408" +
				"001004270" +
				"000180090";
			plansze[3] = opisPlanszy3;

			var aaa = "aaaa";
			var bbb = new Array(3 , 5, 7);

			var opisPlanszy4 =
				"050037240" +
				"106420000" +
				"200905003" +
				"400009030" +
				"060014050" +
				"002070090" +
				"023000509" +
				"090750300" +
				"600001027";
			plansze[4] = opisPlanszy4;

			var opisPlanszy5 =
				"006407301" +
				"010030005" +
				"800019400" +
				"040000120" +
				"000208007" +
				"507006800" +
				"102064000" +
				"085700090" +
				"000500210";
			plansze[5] = opisPlanszy5;

			var opisPlanszy6 =
				"008900005" +
				"600780000" +
				"090000604" +
				"023000700" +
				"500000902" +
				"000207058" +
				"380005090" +
				"007690040" +
				"400072563";
			plansze[6] = opisPlanszy6;

			var opisPlanszy7 =
				"040200800" +
				"000687040" +
				"096005703" +
				"600004200" +
				"008503090" +
				"725000300" +
				"500098002" +
				"004000908" +
				"083740060";
			plansze[7] = opisPlanszy7;

			var opisPlanszy8 =
				"050009100" +
				"009160002" +
				"280040690" +
				"098020006" +
				"006780020" +
				"400000801" +
				"100600070" +
				"820405300" +
				"060072500";
			plansze[8] = opisPlanszy8;

			var opisPlanszy9 =
				"020080006" +
				"000709500" +
				"605000094" +
				"000350029" +
				"540008100" +
				"010020758" +
				"100030045" +
				"004002037" +
				"203507080";
			plansze[9] = opisPlanszy9;

			var opisPlanszy10 =
				"100890000" +
				"045201908" +
				"080300006" +
				"400580030" +
				"800006200" +
				"090043005" +
				"020075300" +
				"506100090" +
				"004030052";
			plansze[10] = opisPlanszy10;

			akt_plansza = opisPlanszy;
			var n = [];
			for (var t = 0 ; t < akt_plansza.length ; t++){
				//akt_plansza.forEach(function(e) { n.push(e); });
				n.push(akt_plansza[t]);
			}
			akt_planszaChar = n;

			function plansza_dalej(){ //next board
				var r=confirm("Czy na pewno chcesz zmienic plansze? \nStracisz wszystko, co zrobiles do tej pory");
				if (r==true){
					numer_planszy++;
					if (numer_planszy > 10){
						numer_planszy = 0;
					}
	
					akt_plansza = plansze[numer_planszy];
					document.getElementById('nr_nr').value = numer_planszy;

					for (var t = 0 ; t < akt_plansza.length ; t++){
					//akt_plansza.forEach(function(e) { n.push(e); });
						n.push(akt_plansza[t]);
					}
					akt_planszaChar = n;
	
					last = -8;
					last_konflikt = -8; //last conflict
					$("#plansza").html(Plansza(akt_plansza));
					$("table").css('border-spacing', '0');
					rysujKrawedzie();
					sek = 0; //seconds
					minuty = 0; //minutes
					iwentuj();
	
					undoManager.clear();
					updateUI();
					//odliczaj(document.getElementById('sekundy'));
	
					var x = document.getElementsByTagName('link');
					var queryString = '?reload=' + new Date().getTime();
					for(a in x) {
						if(typeof x[a] == 'object' && x[a].getAttribute('rel') == 'stylesheet'){
							qs = x[a].getAttribute('href');
							x[a].setAttribute('href', qs.replace(/\?.*|$/, queryString));
						}
					}
	
				}
				else
				{

				}


			}

			function plansza_wroc(){ //former board
				var r=confirm("Czy na pewno chcesz zmienic plansze? \nStracisz wszystko, co zrobiles do tej pory");
				if (r==true){
					numer_planszy--;
					//alert('-');
					if (numer_planszy < 0){
						numer_planszy = 10;
					}
	
					akt_plansza = plansze[numer_planszy];
					document.getElementById('nr_nr').value = numer_planszy;
	
					for (var t = 0 ; t < akt_plansza.length ; t++){
						//akt_plansza.forEach(function(e) { n.push(e); });
						n.push(akt_plansza[t]);
					}
					akt_planszaChar = n;
	
					last = -8;
					last_konflikt = -8;
					$("#plansza").html(Plansza(akt_plansza));
					$("table").css('border-spacing', '0');
					rysujKrawedzie();
					set = 0;
					minuty = 0;
					iwentuj();
	
					undoManager.clear();
					updateUI();
	
					var x = document.getElementsByTagName('link');
					var queryString = '?reload=' + new Date().getTime();
					for(a in x) {
						if(typeof x[a] == 'object' && x[a].getAttribute('rel') == 'stylesheet'){
							qs = x[a].getAttribute('href');
							x[a].setAttribute('href', qs.replace(/\?.*|$/, queryString));
						}
					}	
					//odliczaj(document.getElementById('sekundy'));
				}
				else
				{

				}
			}

			spauzowane = false;
			minuty = 0;
			sek = 0;
			//o=document.getElementById('sekundy')

			function odliczaj(o){ //countdown
				if (minuty < 10){
					if (sek < 10){
						o.innerHTML='0'+minuty + ':0'+sek;
					} else {
						o.innerHTML='0'+minuty + ':'+sek;
					}
				} else {
					if (sek > 9){
						o.innerHTML=minuty + ':'+sek;
					} else {
						o.innerHTML=minuty + ':0'+sek;	
					}
				}
				//[b]if(sek==5)alert('zostalo 5 sekund')[/b]
				if(sek==59){
					sek = -1;
					minuty++;
				}
				++sek;
				if (!spauzowane){
					setTimeout(function(){odliczaj(o)},1e3);
				}
			}


			function rysujKrawedzie(){ //draw borders
				var i;
				for(i = 0; i < 81; i++){
					if ((i + 1) % 3 == 0){
						$('#td'+wspolrzedne(i)).css('border-right', '3px solid');
					}
					if (i % 9 == 0){
						$('#td'+wspolrzedne(i)).css('border-left', '3px solid');
					}
					if (Math.floor(i / 9) % 3 == 0){
						$('#td'+wspolrzedne(i)).css('border-top', '3px solid');
					}
					if (i > 71){
						$('#td'+wspolrzedne(i)).css('border-bottom', '3px solid');
					}
				}
			}

			function wspolrzedne(i){ //coordinates of ...
				if (i < 0 || i > 80) {
					//alert("wspolrzedne: zle dane");
				}
				return Math.floor(i/9) + 10 * (i % 9) + 11;
			}


			function wartosc_z_nr(nr){ //the value from square number ...
				return $('#i' + nr).val();
			}

			function wiersz(i){ //row
				if (i < 1 || i > 9) {
					//alert("wiersz: Zly wiersz");
				}
				w = new Array();
				for(k = 10; k <= 90; k+=10){
					w.push(k+i);
				}
				return w;
			}

			function kolumna(i){ //column
				if (i < 1 || i > 9){
					//alert("kolumna: Zly argument");
				}
				w = new Array();
				for(k = 1; k <= 9; k++){
					w.push(i*10 + k);
				}
				return w;
			}

			function podswietlTablice(t){
				for(i = 0; i < 9; i++){
					$('#td'+t[i]).css('background-color', '#7cfc00');
				}
			}

			function sprawdz_duplikatyTablice(t, a){ //check for duplicates in table
				//debug += 'sprawdzam<br/>';
				var vv = $('#i' + a).val();
				//alert('wart. wpisana: '+vv);
				debug +='vv: '+vv+', a: '+a+'<br/>';
				for(i = 0; i < 9; i++){
					var v = $('#i' + t[i]).val();
					debug +='v: '+v+', t[i]: '+t[i]+'<br/>';
					//alert('wart. wysw.: '+v);
					//$('#td'+t[i]).css('background-color', '#7cfc00');
					if (t[i] != a && v == vv && v != ''){
						debug+='<span class="czerwony">konflikt: '+'v: '+v+', vv: '+vv+',t[i]: '+t[i]+', a: '+a+'</span><br/>';
						$('#td'+t[i]).css('background-color', 'red');
						$('#td'+a).css('background-color', 'red');
					}
				}
			}

			function podswietlTablice_mycha(t){
				//alert(t[0]);
				$('#td'+t[0]+t[1]).css('background-color', '#f5deb3');
			}

			function podswietlTablice_mycha_norma(t){
				//alert(t[0]);
				$('#td'+t[0]+t[1]).css('background-color', 'transparent');
			}

			function podswietl_mycha(i){ //highligh under mouse
				podswietlTablice_mycha(i);
			}

			function podswietl_mycha_norma(i){ //highligh under mouse
				podswietlTablice_mycha_norma(i);
			}

			function podpowiedz(nr){ //Hint
				//alert('podpowiedz dla pola: '+nr);
				var w = new Array();
				debug = 'podpwiedz: <br/>';
	
				wwiersz = new Array();
				kkolumna = new Array();
				kkwadrat = new Array();
				/*
				podswietlTablice(wiersz(i % 10));
				podswietlTablice(kolumna(Math.floor(i/10)));
				//podswietlTablice(kwadrat(1 + Math.floor((i-10)/30) + 3 * Math.floor(((i % 10)-1)/3)));
				*/
	
				wwiersz = wiersz(nr % 10);
				kkolumna = kolumna(Math.floor(nr/10));
				kkwadrat = kwadrat(1 + Math.floor((nr-10)/30) + 3 * Math.floor(((nr % 10)-1)/3));
				//alert('poza111111?');
				//w.push(i*10 + k);
				for (var i = 1; i <= 9; i++){
					//alert('i in y bed');
					//debug += 'obrabiam: '+i+'<br/>';
					//$("#debug").html(debug);
					var czy_jest = false;
					for (var j = 0; j < 9 && !czy_jest; j++){
						//if (wartosc_z_nr(wiersz[j]) == 2){
							//debug += 'w wierszu mam '+wartosc_z_nr(wwiersz[j])+', obrabiam nr: '+wwiersz[j]+'<br/>';
						//}
						if (i == wartosc_z_nr(wwiersz[j]) && wwiersz[j] != nr){
							czy_jest = true;
							break;
						}
					}
		
					for (var j = 0; j < 9 && !czy_jest; j++){
						if (i == wartosc_z_nr(kkolumna[j]) && kkolumna[j] != nr){
							czy_jest = true;
							break;
						}
					}
			
					for (var j = 0; j < 9 && !czy_jest; j++){
						if (i == wartosc_z_nr(kkwadrat[j]) && kkwadrat[j] != nr){
							czy_jest = true;
							break;
						}
					}
		
					if (!czy_jest){
						w.push(i);
						debug += i + "<br/>";
					}
				
				}
				if (w.length == 0){
					alert('system nie byl w stanie wygenerowac podpowiedzi dla tego pola');
				} else {
					tresc = 'Mala podpowiedz: \n';
					tresc += w[0];
					for (var i = 1 ; i < w.length ; i++ ){
						tresc += ', '+ w[i];
					}
					alert(tresc);
				}
				//alert('poza?');
				$("#debug").html(debug);
			}

			function podswietl(i){ //highlight
				podswietlTablice(wiersz(i % 10));
				podswietlTablice(kolumna(Math.floor(i/10)));

				//alert('22wejscie z nr: '+i)
				//podswietlTablice(kwadrat(1 + Math.floor((i-10)/30) + 3 * Math.floor(((i % 10)-1)/3)));
			}

			function sprawdz_duplikaty(i){ //check for duplicates
				//alert('sprawdzam!');

				debug = 'wiersz<br/>';
				sprawdz_duplikatyTablice(wiersz(i % 10), i);
				debug += 'kolumna<br/>';
				sprawdz_duplikatyTablice(kolumna(Math.floor(i/10)), i);
				debug += 'kwadrat<br/>';
				sprawdz_duplikatyTablice(kwadrat(1 + Math.floor((i-10)/30) + 3 * Math.floor(((i % 10)-1)/3)), i);
				$("#debug").html(debug);
			}

			function wygas(){ //fade
				$(".field").css('background-color', 'transparent');
			}

			function kwadrat(i){ //square
				if (i < 1 || i > 9){
					//alert("kwadrat: Zly argument");
				}
				w = new Array();
				x = ((i - 1) % 3) * 3 + 1;
				y = (Math.floor((i - 1) / 3)) * 3 + 1;
				for(dx = 0; dx <= 2; dx++){
					for(dy = 0; dy <= 2; dy++){
						w.push((x + dx) * 10 + dy + y);
					}
				}
				return w;
			}

			function poprawnaTablica(t){ //correctTable
				var o = "";
				var result = true;
				for(i = 0; i < 9; i++){
					var v = $('#i' + t[i]).val();
					if (!(v >= '1' && v <= '9')){ 
						return false;
					}
					if (o.indexOf(v) != -1){
						result = false;
					}
					o += v;
				}
				return result;
			}

            function updateUI() {
		var btnUndo = document.getElementById('undo');
		var btnRedo = document.getElementById('redo');
		//if (btnUndo){
                	btnUndo.disabled = !undoManager.hasUndo();
		//}
		//if (btnRedo){
                	btnRedo.disabled = !undoManager.hasRedo();
		//}
            }

			function poprawneRozwiazanie(){ //correct answer
				var i;
				for(i = 1; i <= 9; i++){
					if (!poprawnaTablica(wiersz(i))) return false; //correctTable(row)
					if (!poprawnaTablica(kolumna(i))) return false; //correctTable(column)
					if (!poprawnaTablica(kwadrat(i))) return false; //correctTable(square)
				}
				return true;
			}

			function Plansza(opis){ //board(board description)
				var i;
				plansza = "<table class='ttt'>";
				for(i = 0; i < opis.length; i++){
					if (i % 9 == 0){ 
						plansza += "<tr>";
					}
					plansza += "<td class='field' id='td"+ wspolrzedne(i) +"'>";
					if (opis[i] == '0'){
						plansza += "<input class='field2' onclick='wejscie("+i+")' type='text' size='1' maxlength='1' id='i" + wspolrzedne(i) + "'>";
					}
					else
					{
						plansza += "<input class='field2' onclick='wejscie("+i+")' type='text' size='1' maxlength='1' readonly= '' id='i" + wspolrzedne(i) +
							"' value='"+opis[i]+"'>";
					}
					plansza += "</td>";
					if (i % 9 == 8){
						plansza += "</tr>";
					}
				}
				return plansza+"</table>";
			};

//-------------------------------------------------------------------

			function zmien_wartosc_pola(nr, na_co){ //change the value of a square
				//$('#i' + nr).val() = 7;
				//-----------------alert('pole: '+nr+' na: '+na_co);
				//if (na_co == ''){
					//	alert('ten przyp');
					//	$('#i'+nr).attr('value', ' ');
				//} else {
					//$('#i'+nr).attr('value', na_co);
					$('#i'+nr).val(na_co);
				//}
	
				//alert('cos');
				//$('#i' + nr).val() = na_co;
			}

			function wejscie(nr){ //enter
				//TO NIE DZIALA
				//alert('wejscie z nr: '+nr);
			}

			function czysc_przeszlosc(){ //clear history
				undoManager.clear();
				updateUI();
			}

			function iwentuj(){
	
				//zmien_wartosc_pola(11,888);

				/*$(".field2 input").click(function(event){
					alert('adsfadsfads');
					last_wart_in = wartosc_z_nr(last);
					alert('in: '+last_wart_in);
				});*/

				/*$(".field2 input").click(function(event){
					alert("sdklfjsdkfljsd");
				});*/
					
				$(".field input").focus(function(){
					//llll = last;
					last = $(this).parent().attr('id').substr(2,2);
					//last_wart_in = wartosc_z_nr(last);
					//alert('in: '+last_wart_in);
					podswietl(last); //highlight
					last_wart_in = wartosc_z_nr(last);
					//last_wart_in = 7;
					//last_wart_in = wartosc_z_nr(last);
					//alert('in: '+last_wart_in);

					if (last_konflikt != -8){
						sprawdz_duplikaty(last_konflikt); //check for duplicates
						//undoManager.register(undefined, removeCircle, [id], 'Remove circle', undefined, createCircle, [id, x, y, color], 'Create circle');
					}

				});

				$(".field input").blur(function(){
					wygas(); //fade
					last_konflikt = $(this).parent().attr('id').substr(2,2); //last conflict
					last_wart_out = wartosc_z_nr(last_konflikt);
					last_last = $(this).parent().attr('id').substr(2,2);

					//alert('out: '+last_wart_out+'\nin: '+last_wart_in);

					if (last_wart_in != last_wart_out && last_wart_out != -1 && last_wart_in != -1){
						//alert('manager-register');
						var ident = last +''+last_wart_in+''+last_wart_out;
						if (last_update != ident){
							last_update = ident;
							undoManager.register(undefined, zmien_wartosc_pola, [last_last, last_wart_in], 'undo zmiane wartosci', undefined, zmien_wartosc_pola, [last_last, last_wart_out], 'redo zmiane wartosci');
							//alert('manager-register\nin: '+last_wart_in+'\nout: '+last_wart_out+'\nlast: '+last+'\nlast_last: '+last_last);
							//zmien_wartosc_pola(last_last, last_wart_in);
						}
						/*
						kkolumna = kolumna(Math.floor(nr/10));
						kkwadrat = kwadrat(1 + Math.floor((nr-10)/30) + 3 * Math.floor(((nr % 10)-1)/3));
						*/
						//alert('zmieniam z: '+akt_plansza[9*(last_last % 10) + Math.floor(last_last/10)]);
				
				
						/*cos = '';
						for (var k = 0 ; k < 3 ; k++){
							for (var z = 1 ; z <= 3 ; z++){
								cos += akt_planszaChar[k*9 + z -1];
								//akt_planszaChar[k*9 + z -1] = 7;
							}
							cos += '\n';
						}
						alert(cos);*/
						//alert('last_last: '+last_last+'\n'+((last_last % 10)-1) + '\n'+ Math.floor(last_last/10));
						//alert(akt_planszaChar[9*((last_last % 10)-1) + Math.floor(last_last/10) -1]);
						akt_planszaChar[9*((last_last % 10)-1) + Math.floor(last_last/10) -1]=last_wart_out;
						//akt_planszaChar[0]=8;
						//alert(akt_planszaChar[9*((last_last % 10)-1) + Math.floor(last_last/10) -1]);
						/*cos = '';
						for (var k = 0 ; k < 3 ; k++){
							for (var z = 1 ; z <= 3 ; z++){
								cos += akt_planszaChar[k*9 + z -1]
							}
							cos += '\n';
						}
						alert(cos);*/
					
						/*cos = '';
						for (var i = 0 ; i < 81 ; i++){
							cos += akt_planszaChar[i];
							if ((i+1) % 3 == 0){
								cos += '|';
							}
							if ((i+1) % 9 == 0){
									cos += '\n';
							}	
						}
						alert(cos);*/
	
					}
	
					//alert('out: '+last_wart_out+'\nin: '+last_wart_in);

				});

				$(".field").mouseover(function(){
					podswietl_mycha($(this).attr('id').substr(2,2));
				});

				$(".field").mouseout(function(){
					wygas(); //fade
					podswietl_mycha_norma($(this).attr('id').substr(2,2)); //highligh under mouse
					if (last != -8){
						podswietl(last); //highlight
					}
					if (last_konflikt != -8){
						sprawdz_duplikaty(last_konflikt); //check for duplicates
					}
				});
		
			}

//-------------------------------------------------------------------

			$(document).ready(function(){
				$("#plansza").html(Plansza(akt_plansza));
				$("table").css('border-spacing', '0');
				rysujKrawedzie(); //draw borders
				iwentuj();
				//----------------------------
	
				$("#sprawdz").click(function(event){
					if (poprawneRozwiazanie()){
						alert("Dobrze");
					} else {
						alert("Niedobrze");
					}
				});



				$("#hint").click(function(event){
					if (last !=  -8){
						podpowiedz(last);
					}
				});

				$("#save").click(function(event){

					localStorage.setItem('czy_juz_byl_save', 'tak'); //have we saved yet?
					localStorage.setItem('save_planszy', ''); 
					localStorage.setItem('save_planszy', akt_planszaChar);
					localStorage.setItem('rozmiar_save_planszy', akt_plansza.length); //board size
					localStorage.setItem('minuty', minuty); //minutes
					localStorage.setItem('sek', sek); //seconds
					localStorage.setItem('numer_planszy', numer_planszy); //board number
	
					//alert('cos pisze');
				});

				$("#load").click(function(event){
					if (localStorage.getItem('czy_juz_byl_save') == 'tak'){
						var r=confirm("Czy na pewno chcesz wczytac plansze? Stracisz wszysto, co teraz ugrales, jesli nie zapiszesz");
						if (r==true){
							akt_planszaChar2 = localStorage.getItem('save_planszy');
							length = localStorage.getItem('rozmiar_save_planszy');
							var n = [];
							for (var i = 0 ; i < 2*length ; i++){
								if (i % 2 == 0){
									n.push(akt_planszaChar2[i]);
								}
							}
							akt_planszaChar = n;
				
							/*cos = '';
							for (var i = 0 ; i < 20 ; i ++){
								cos += akt_planszaChar[i];
							}
							alert(cos);*/
							//alert(length);
							//akt_planszaChar = 
							/*var n = [];
							for (var i = 0 ; i < 2*length ; i++){
								if (i % 2 == 0){
									n.push(akt_planszaChar2[i]);
								}
							}
							akt_planszaChar = n;*/
					
							//akt_plansza = akt_planszaChar.toString();
							akt_plansza = akt_planszaChar.join(""); //actual board char
			
							/*	cos = '';
							for (var i = 0 ; i < 81 ; i++){
								cos += akt_planszaChar[i];
								if ((i+1) % 3 == 0){
									cos += '|';
								}
								if ((i+1) % 9 == 0){
									cos += '\n';
								}
							}
							alert(cos);*/
			
			
							//akt_plansza=akt_plansza.replace(",","");
							//alert(akt_plansza.length);
							//abc = akt_planszaChar.toString();
							minuty = localStorage.getItem('minuty');
							sek = localStorage.getItem('sek');
							numer_planszy = localStorage.getItem('numer_planszy'); //board number
			
							document.getElementById('nr_nr').value = numer_planszy;
		
							last = -8;
							last_konflikt = -8; //last conflict
							//alert(abc.length);
							$("#plansza").html(Plansza(akt_plansza));
							$("table").css('border-spacing', '0');
							rysujKrawedzie(); //draw boarders

							iwentuj();
		
							undoManager.clear();
							updateUI();
			
						} else {
		
						}	
					}
				});

				if (localStorage.getItem('czy_juz_byl_save') == 'tak'){ //have we saved yet?
					$('#load').css('visibility', 'visible');	
				}

				$("#pauza").click(function(event){
					//podpowiedz(last);
					//alert('adsfasdfsa');
					spauzowane = !spauzowane;

					if (spauzowane){
						$("#pauza").html('Wznow'); //pause, resume
						$("#plansza").css('visibility', 'hidden'); //board
					} else {
						$("#pauza").html('Pauza');
						//alert('ognia!');
						//setTimeout(function(){odliczaj(document.getElementById('sekundy'),++sek)},1e3);
						//++sek;
						odliczaj(document.getElementById('sekundy')); //countdown(seconds)
						$("#plansza").css('visibility', 'visible'); //board
					}
				});
	
	//----------------------------
	
				//---UNDO-REDO
	
		
				undoManager = new UndoManager();
					
				//var circleDrawer = new CircleDrawer('view');
				//circleDrawer.setUndoManager(undoManager);
                
				var btnUndo = document.getElementById('undo');
				var btnRedo = document.getElementById('redo');
				//var btnClear = document.getElementById('btnClear');
                
				function updateUI() {
					btnUndo.disabled = !undoManager.hasUndo();
					btnRedo.disabled = !undoManager.hasRedo();
				}
				undoManager.setCallback(updateUI);

				btnUndo.onclick = function() {
					undoManager.undo();
					updateUI();
				};
				btnRedo.onclick = function() {
					undoManager.redo();
					updateUI();
				};
				/*btnClear.onclick = function() {
					undoManager.clear();
					updateUI();
				};*/
                
				updateUI();
	
				//---UNDO-REDO
	
	
				odliczaj(document.getElementById('sekundy')); //count(seconds);
			});