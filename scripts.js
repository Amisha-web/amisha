
			var numer_planszy = 0;
			var last_wart_in = -1;
			var last_konflikt = -1;
			var last = -1;
			var last_wart_out = -1;
			var last_update = '';
			var plansze = new Array();
			var minuty = 0;

			var undoManager;
					
                
			var btnUndo = document.getElementById('undo');
			var btnRedo = document.getElementById('redo');

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
				n.push(akt_plansza[t]);
			}
			akt_planszaChar = n;


			/**
			* Function changes the current board to the next one.
			*/
			function plansza_dalej(){ //next board
				var r=confirm("Do you really want to change board? \nBy doing it you will loose everything you have done already!");
				if (r==true){
					numer_planszy++;
					if (numer_planszy > 10){
						numer_planszy = 0;
					}
	
					akt_plansza = plansze[numer_planszy];
					document.getElementById('nr_nr').value = numer_planszy;

					for (var t = 0 ; t < akt_plansza.length ; t++){
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

			/**
			* Function changes the current board to the previous one.
			*/
			function plansza_wroc(){ //former board
				var r=confirm("Czy na pewno chcesz zmienic plansze? \nStracisz wszystko, co zrobiles do tej pory");
				if (r==true){
					numer_planszy--;
					if (numer_planszy < 0){
						numer_planszy = 10;
					}
	
					akt_plansza = plansze[numer_planszy];
					document.getElementById('nr_nr').value = numer_planszy;
	
					for (var t = 0 ; t < akt_plansza.length ; t++){
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
				}
				else
				{

				}
			}

			spauzowane = false;
			minuty = 0;
			sek = 0;


			/**
			* Function is used to count down the time and ensure proper time display
			*/
			function odliczaj(o){ 
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

				if(sek==59){
					sek = -1;
					minuty++;
				}
				++sek;
				if (!spauzowane){
					setTimeout(function(){odliczaj(o)},1e3);
				}
			}


			/**
			* Function draws boardes of the board
			*/
			function rysujKrawedzie(){ 
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

			/**
			* Function gives coordinates of i-th square of the board
			*/
			function wspolrzedne(i){ //coordinates of ...
				//if (i < 0 || i > 80) {
					//alert("wspolrzedne: zle dane");
				//}
				return Math.floor(i/9) + 10 * (i % 9) + 11;
			}

			/**
			* Function gives the value of i-th square
			*/
			function wartosc_z_nr(nr){ 
				return $('#i' + nr).val();
			}

			/**
			* Function returns an array of numbers of squares in one raw
			*/
			function wiersz(i){ //row
				//if (i < 1 || i > 9) {
					//alert("wiersz: Zly wiersz");
				//}
				w = new Array();
				for(k = 10; k <= 90; k+=10){
					w.push(k+i);
				}
				return w;
			}

			/**
			* Function returns an array of numbers of squares in one column
			*/
			function kolumna(i){ //column
				//if (i < 1 || i > 9){
					//alert("kolumna: Zly argument");
				//}
				w = new Array();
				for(k = 1; k <= 9; k++){
					w.push(i*10 + k);
				}
				return w;
			}

			/**
			* Function highlights selected block of 9 squares
			*/
			function podswietlTablice(t){
				for(i = 0; i < 9; i++){
					$('#td'+t[i]).css('background-color', '#7cfc00');
				}
			}

			/**
			* Function chceks if there are duplicates in the board
			*/
			function sprawdz_duplikatyTablice(t, a){ 
				var vv = $('#i' + a).val();
				debug +='vv: '+vv+', a: '+a+'<br/>';
				for(i = 0; i < 9; i++){
					var v = $('#i' + t[i]).val();
					debug +='v: '+v+', t[i]: '+t[i]+'<br/>';
					if (t[i] != a && v == vv && v != ''){
						debug+='<span class="czerwony">konflikt: '+'v: '+v+', vv: '+vv+',t[i]: '+t[i]+', a: '+a+'</span><br/>';
						$('#td'+t[i]).css('background-color', 'red');
						$('#td'+a).css('background-color', 'red');
					}
				}
			}

			function podswietlTablice_mycha(t){
				$('#td'+t[0]+t[1]).css('background-color', '#f5deb3');
			}

			function podswietlTablice_mycha_norma(t){
				$('#td'+t[0]+t[1]).css('background-color', 'transparent');
			}

			function podswietl_mycha(i){ //highligh under mouse
				podswietlTablice_mycha(i);
			}

			function podswietl_mycha_norma(i){ //highligh under mouse
				podswietlTablice_mycha_norma(i);
			}


			/**
			* Function is responsible for the hint functionallity
			*/
			function podpowiedz(nr){ 
				var w = new Array();
				debug = 'podpwiedz: <br/>';
	
				wwiersz = new Array();
				kkolumna = new Array();
				kkwadrat = new Array();
	
	
				wwiersz = wiersz(nr % 10);
				kkolumna = kolumna(Math.floor(nr/10));
				kkwadrat = kwadrat(1 + Math.floor((nr-10)/30) + 3 * Math.floor(((nr % 10)-1)/3));

				for (var i = 1; i <= 9; i++){
					var czy_jest = false;
					for (var j = 0; j < 9 && !czy_jest; j++){
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
					alert('System was not able to generate a hint ;-/');
				} else {
					tresc = 'A little hint: \n';
					tresc += w[0];
					for (var i = 1 ; i < w.length ; i++ ){
						tresc += ', '+ w[i];
					}
					alert(tresc);
				}
				$("#debug").html(debug);
			}

			function podswietl(i){ //highlight
				podswietlTablice(wiersz(i % 10));
				podswietlTablice(kolumna(Math.floor(i/10)));

			}

			/**
			* Function checks if selected square number has value that is already on the board
			*/
			function sprawdz_duplikaty(i){ //check for duplicates

				sprawdz_duplikatyTablice(wiersz(i % 10), i);
				sprawdz_duplikatyTablice(kolumna(Math.floor(i/10)), i);
				sprawdz_duplikatyTablice(kwadrat(1 + Math.floor((i-10)/30) + 3 * Math.floor(((i % 10)-1)/3)), i);
				$("#debug").html(debug);
			}

			/**
			* Function hides the whole board
			*/
			function wygas(){ //fade
				$(".field").css('background-color', 'transparent');
			}

			/**
			* Function returns an array of numbers of squares in one raw
			*/
			function kwadrat(i){ //square
				//if (i < 1 || i > 9){
					//alert("kwadrat: Zly argument");
				//}
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

			/**
			* Function checks if the fragment of board is correct
			*/
			function poprawnaTablica(t){ 
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

			/**
			* Function checks if the board is correct
			*/
			function poprawneRozwiazanie(){ //correct answer
				var i;
				for(i = 1; i <= 9; i++){
					if (!poprawnaTablica(wiersz(i))) return false; //correctTable(row)
					if (!poprawnaTablica(kolumna(i))) return false; //correctTable(column)
					if (!poprawnaTablica(kwadrat(i))) return false; //correctTable(square)
				}
				return true;
			}

			/**
			* Function returns a string that represents a board
			*/
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


			/**
			* Function changes the value of selected board
			*/
			function zmien_wartosc_pola(nr, na_co){ //change the value of a square
					$('#i'+nr).val(na_co);
			}

			function wejscie(nr){ //enter
				//TO NIE DZIALA
			}

			function czysc_przeszlosc(){ //clear history
				undoManager.clear();
				updateUI();
			}

			function iwentuj(){
					
				$(".field input").focus(function(){
					last = $(this).parent().attr('id').substr(2,2);
					podswietl(last); //highlight
					last_wart_in = wartosc_z_nr(last);

					if (last_konflikt != -8){
						sprawdz_duplikaty(last_konflikt); //check for duplicates
					}

				});

				$(".field input").blur(function(){
					wygas(); //fade
					last_konflikt = $(this).parent().attr('id').substr(2,2); //last conflict
					last_wart_out = wartosc_z_nr(last_konflikt);
					last_last = $(this).parent().attr('id').substr(2,2);

					if (last_wart_in != last_wart_out && last_wart_out != -1 && last_wart_in != -1){
						var ident = last +''+last_wart_in+''+last_wart_out;
						if (last_update != ident){
							last_update = ident;
							undoManager.register(undefined, zmien_wartosc_pola, [last_last, last_wart_in], 'undo zmiane wartosci', undefined, zmien_wartosc_pola, [last_last, last_wart_out], 'redo zmiane wartosci');
						}
				
						akt_planszaChar[9*((last_last % 10)-1) + Math.floor(last_last/10) -1]=last_wart_out;	
					}


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
						alert("Good! Grats!");
					} else {
						alert("Not good! ;-/");
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
				});

				$("#load").click(function(event){
					if (localStorage.getItem('czy_juz_byl_save') == 'tak'){
						var r=confirm("Do you really want to load board? If you do not save, you will loose everything you made!");
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
					
							akt_plansza = akt_planszaChar.join(""); //actual board char
			
							minuty = localStorage.getItem('minuty');
							sek = localStorage.getItem('sek');
							numer_planszy = localStorage.getItem('numer_planszy'); //board number
			
							document.getElementById('nr_nr').value = numer_planszy;
		
							last = -8;
							last_konflikt = -8; //last conflict

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
					spauzowane = !spauzowane;

					if (spauzowane){
						$("#pauza").html('Wznow'); //pause, resume
						$("#plansza").css('visibility', 'hidden'); //board
					} else {
						$("#pauza").html('Pauza');
						odliczaj(document.getElementById('sekundy')); //countdown(seconds)
						$("#plansza").css('visibility', 'visible'); //board
					}
				});
	
	//----------------------------
	
				//---UNDO-REDO
	
				undoManager = new UndoManager();
					
                
				var btnUndo = document.getElementById('undo');
				var btnRedo = document.getElementById('redo');
                
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
                
				updateUI();
	
				//---UNDO-REDO
	
	
				odliczaj(document.getElementById('sekundy')); //count(seconds);
			});
