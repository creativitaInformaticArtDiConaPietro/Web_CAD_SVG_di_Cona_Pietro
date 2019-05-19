function stile_bottoni_iniz(){
  bott_shadow_oriz = 10;
  bott_shadow_vert = 10;
  bott_shadow_oriz_2 = 0;
  bott_shadow_vert_2 = 0;
  stile_bottoni()
  }

function stile_bottoni(){
  stile_bott="margin-left: "+bott_marg_left+"px; margin-top: "+bott_marg_top+"px; width: "+bott_width+"px; height: "+bott_heigth+"px; box-shadow: "+bott_shadow_oriz+"px "+bott_shadow_vert+"px "+bott_shadow_sfoc+"px #000000; background-color:rgb("+bott_color_R+","+bott_color_G+","+bott_color_B+"); float:left; font-size: "+bott_font_size+"px; text-align:center;";
  stile_bott_2="margin-left: "+bott_marg_left+"px; margin-top: "+bott_marg_top+"px; width: "+bott_width+"px; height: "+bott_heigth+"px; box-shadow: "+bott_shadow_oriz_2+"px "+bott_shadow_vert_2+"px "+bott_shadow_sfoc+"px #000000; background-color:rgb(0,255,255); float:left; font-size: "+bott_font_size+"px; text-align:center;";
  }
	  
function anim_bott(id){
  //alert("anim_bott(id)");
  bott_shadow_oriz = 10;
  bott_shadow_vert = 10;
  id_bott = document.getElementById(id);
  c=0;
  anim_bott_ciclo();
  }
		
function anim_bott_ciclo(){
  c++;
  //for (c = 0; c <=10; c++){
  //alert(bott_shadow_oriz);
  //alert(bott_shadow_oriz);
  bott_shadow_oriz --;
  bott_shadow_vert --;
  stile_bottoni();
  //console.log(stile_bott);
  id_bott.setAttribute("style",stile_bott);
  id = setTimeout("anim_bott_ciclo()", 10);
  if (c>=10){
    clearTimeout(id);
    stile_bottoni_iniz()
    //eval(ritorno)
    if(schermata == "disegno") fin_disegno();
    else if(schermata == "pulsanti") fin_pulsanti()
	}
  }
	  
function anim_bott_2(id){
  //alert("anim_bott(id)");
  bott_shadow_oriz = 0;
  bott_shadow_vert = 0;
  id_bott = document.getElementById(id);
  c=0;
  anim_bott_ciclo_2();
  }
		
function anim_bott_ciclo_2(){
  c++;
  //for (c = 0; c <=10; c++){
  //alert(bott_shadow_oriz);
  //alert(bott_shadow_oriz);
  bott_shadow_oriz ++;
  bott_shadow_vert ++;
  stile_bottoni();
  //console.log(stile_bott);
  id_bott.setAttribute("style",stile_bott);
  id = setTimeout("anim_bott_ciclo_2()", 10);
  if (c>=10){
    clearTimeout(id);
    stile_bottoni_iniz()
    //eval(ritorno)
    if(schermata == "disegno") fin_disegno();
    else if(schermata == "pulsanti") fin_pulsanti()
    }
  }
				
function pre_fin_disegno(){
  schermata = "disegno";
  anim_bott("Disegno");
  }
        
function retta(){
  /*if ("ontouchstart" in document.documentElement){
    p_conferm_annul = 1;}*/
  p_conferm_annul = 1;
  at_retta = 1;
  schermata = "disegno";
  anim_bott("Retta")
  //disegno += '<line id="asse_x" x1="10" y1="10" x2="100" y2="100" stroke="rgb(0,0,0)" stroke-width="1"></line>';
  //alert("retta()");
  //fin_disegno();
  }
        
function scal_puls(){
  nulla=null;
  }

function apri_disegno(){
  nulla=null;
  alert("function apri_disegno()");
  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  prova_storage = localStorage.getItem("prova_storage.svgzip");
  alert("Hai salvato questo: "+prova_storage);
  //localStorage.removeItem("lastname");//rimuove un oggetto
  //localStorage.clear();//canncella tutto lo storagecfg 
  //console.log(localStorage.key(numero_key)); // 'test' Restituisce la chiave corrisondente ad un numero intero
  //console.log(localStorage.length); // 1
  //localStorage.setItem('test', JSON.stringify({name: 'value'})); //per memorizzare oggetti
  //console.log(JSON.parse(localStorage.getItem('test')).name); // 'value' per riottenere l'ogetto memorizato
  }

function lista_disegni(){
  nulla = null;
  //alert("fin_pulsanti()");
  attiv_event_windov = 0;
  list_cod_html_gen = '';
  tot_num_dis = localStorage.length;
  for (num_dis = 0; c <=tot_num_dis; num_dis++){
    nome_dis = localStorage.key(num_dis)
    list_cod_html_gen += 'nome_dis<br>';
	}
  document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  }
	     
function salva_disegno(){
  nulla=null;
  alert("function salva_disegno()");
  // Store
  localStorage.setItem("prova_storage.svgzip", "Prova Storage su Web_CAD");
  alert("Salvataggio eseguito");
  }

function sincronizza_disegno_sul_server(){
  nulla=null; 
  alert("sincronizza_disegno_sul_server()");
  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  //localStorage.removeItem("lastname");
  // Store
  //localStorage.setItem("lastname", "Smith");
  }

function mod_scherm(){
  at_mod_scherm = 1;
  larg_sche = window.innerWidth;
  alt_sche = window.innerHeight;
  schermata = "disegno";
  anim_bott("Modifica_schermo");
  //alert("mod_scherm()");
  //fin_disegno();
  }
         
function dim_schermo(){
  larg_sche = window.innerWidth-30;
  alt_sche = window.innerHeight-50;
  }
         
function ruota(){
  mod_assi =2;
  at_ruota_assi_X_Y = 1;
  schermata = "disegno";
  anim_bott("Ruota_");
  }
        
function stat_inter_ruota_asse_x(){
  if(stat_inter_ruota_asse_X == 0){
    stat_inter_ruota_asse_X = 1;
    schermata = "pulsanti";
	anim_bott("asse_X");
    }
  else if(stat_inter_ruota_asse_X == 1){
    stat_inter_ruota_asse_X = 0;
    schermata = "pulsanti";
	anim_bott_2("asse_X");
    }
  }
        
function stat_inter_ruota_asse_y(){
  if(stat_inter_ruota_asse_Y == 0){
    stat_inter_ruota_asse_Y = 1;
    schermata = "pulsanti";
	anim_bott("asse_Y");
    }
  else if(stat_inter_ruota_asse_Y == 1){
    stat_inter_ruota_asse_Y = 0;
    schermata = "pulsanti";
	anim_bott_2("asse_Y");
    }
  }
        
function stat_inter_ruota_asse_z(){
  if(stat_inter_ruota_asse_Z == 0){
    stat_inter_ruota_asse_Z = 1;
    schermata = "pulsanti";
	anim_bott("asse_Z");
    }
  else if(stat_inter_ruota_asse_Z == 1){
    stat_inter_ruota_asse_Z = 0;
    schermata = "pulsanti";
	anim_bott_2("asse_Z");
    }
  }

function fin_pulsanti(){
  //alert("fin_pulsanti()");
  attiv_event_windov = 0;
  list_cod_html_gen = '';
  //list_cod_html_gen += '<button onmousedown="fin_disegno()">Disegno</button><br>';
  //list_cod_html_gen += '<button onmousedown="retta()">Retta</button><br>';
  //list_cod_html_gen += '<button onmousedown="mod_scherm()">Modifica schermo</button><br>';
  //list_cod_html_gen += '<div style="margin-left: 5px; margin-top: 5px;"><img onmousedown="fin_disegno()" src="Pulsante_generico.png" alt="Disegno" width="100" height="100" style=" box-shadow: 5px 5px 5px #000000;"></div>';
  //list_cod_html_gen += '<div style="margin-left: 5px; margin-top: 5px;"><img onmousedown="retta()" src="Pulsante_generico.png" alt="Retta" width="100" height="100" style=" box-shadow: 5px 5px 5px #000000;"></div>';
  //list_cod_html_gen += '<div style="margin-left: 5px; margin-top: 5px;"><img onmousedown="mod_scherm()" src="Pulsante_generico.png" alt="Modifica schermo" width="100" height="100" style=" box-shadow: 5px 5px 5px #000000;"></div>';
  list_cod_html_gen += '<div id="Disegno" onclick="pre_fin_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Disegno</div></div>';
  list_cod_html_gen += '<div id="Apri disegno" onclick="apri_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Apri disegno</div></div>';
  list_cod_html_gen += '<div id="Salva disegno" onclick="salva_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Salva disegno</div></div>';
  list_cod_html_gen += '<div id="Sincronizza disegno sul server" onclick="sincronizza_disegno_sul_server()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Sincro. serv.</div></div>';
  list_cod_html_gen += '<div id="Blocca_asse_X" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Blocca asse X</div></div>';
  list_cod_html_gen += '<div id="Ruota_" onclick="ruota()" style="'+stile_bott+'"><div style="margin-top: 10px; font-size: '+dim_t_p_old+'px;">Ruota:</div></div>';
  if (stat_inter_ruota_asse_X == 0){
    list_cod_html_gen += '<div id="asse_X" onclick="stat_inter_ruota_asse_x()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse X</div></div>';
	}
  else{
	list_cod_html_gen += '<div id="asse_X" onclick="stat_inter_ruota_asse_x()" style="'+stile_bott_2+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse X</div></div>';
	}
  if (stat_inter_ruota_asse_Y == 0){
    list_cod_html_gen += '<div id="asse_Y" onclick="stat_inter_ruota_asse_y()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse Y</div></div>';
    }
  else{
    list_cod_html_gen += '<div id="asse_Y" onclick="stat_inter_ruota_asse_y()" style="'+stile_bott_2+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse Y</div></div>';
	}
  if (stat_inter_ruota_asse_Z == 0){
	list_cod_html_gen += '<div id="asse_Z" onclick="stat_inter_ruota_asse_z()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse Z</div></div>';
	}
  else{
    list_cod_html_gen += '<div id="asse_Z" onclick="stat_inter_ruota_asse_z()" style="'+stile_bott_2+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse Z</div></div>';
    }
  list_cod_html_gen += '<div id="Blocca_asse_Y" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Blocca asse Y</div></div>';
  list_cod_html_gen += '<div id="Ruota_asse_Y" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Ruota asse Y</div></div>';
  list_cod_html_gen += '<div id="Attiva_asse_Z" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Attiva asse Z</div></div>';
  list_cod_html_gen += '<div id="Blocca_asse_Z" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Blocca asse Z</div></div>';
  list_cod_html_gen += '<div id="Ruota_asse_Z" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Ruota asse Z</div></div>';
  list_cod_html_gen += '<div id="Retta" onclick="retta()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Retta</div></div>';
  list_cod_html_gen += '<div id="Scala_pulsanti" onclick="scal_puls()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Scala pulsanti</div></div>';
  list_cod_html_gen += '<div id="Modifica_schermo" onclick="mod_scherm()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Modifica schermo</div></div>';
  list_cod_html_gen += '<div><div><input id="digit_gradi_asse_x" onchange="digit_gradi_asse_x()" name="gradi_asse_x" type="text" value="'+gradi_asse_x+'">Gradi asse X</div></div>';
  list_cod_html_gen += '<div><div><input id="digit_gradi_asse_y" onchange="digit_gradi_asse_y()" name="gradi_asse_y" type="text" value="'+gradi_asse_y+'">Gradi asse Y</div></div>';
  list_cod_html_gen += '<div><div><input id="digit_gradi_asse_z" onchange="digit_gradi_asse_z()" name="gradi_asse_z" type="text" value="'+gradi_asse_z+'">Gradi asse Z</div></div>';
  //list_cod_html_gen += '<br><br>Durata pulsanti in millisecondi<br>'+milisec+' < '+tempo_puls+'<br>';
  document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  }
	  
function digit_gradi_asse_x(){
  gradi_asse_x = document.getElementById("digit_gradi_asse_x").value;
  nuovi_gradi_asse_x = gradi_asse_x;
  }
	  
function digit_gradi_asse_y(){
  gradi_asse_y = document.getElementById("digit_gradi_asse_y").value;
  nuovi_gradi_asse_y = gradi_asse_y;
  }
	  
function digit_gradi_asse_z(){
  gradi_asse_z = document.getElementById("digit_gradi_asse_z").value;
  nuovi_gradi_asse_z = gradi_asse_z;
  }
	  
function fin_disegno(){
  /*
  try{
    anim_bott("Disegno")
	}
  catch(e){
    nulla=null;
	//alert(e.message);
	}
  */
  //alert("fin_disegno()");
  if (attiv_event_windov == 0){
    if ("ontouchstart" in document.documentElement)eventi_touch();
    else eventi_mouse();
    attiv_event_windov = 1;
    }
  //bott_shadow_oriz = 10;
  //bott_shadow_vert = 10;
  stile_bottoni_iniz();
  dim_schermo()
  list_cod_html_gen = '';
  //list_cod_html_gen += '<button onmousedown="fin_pulsanti()">Pulsanti</button>   Larghezza: <button onmousedown="larg_piu()">+</button> <button onmousedown="larg_meno()">-</button>      Altezza: <button onmousedown="alt_piu()">+</button> <button onmousedown="alt_meno()">-</button><br>';
  document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  //list_cod_html_gen += '<div id="currentOrientation"></div>'
  list_cod_html_gen += '<div style="position: fixed;"><svg id="tela" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+larg_sche+
                       '" height="'+alt_sche+'" viewBox="0 0 '+larg_sche+' '+alt_sche+'">';
  document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  if(larg_sche < bott_x || alt_sche < bott_y) pos_ini_bott();
  list_cod_html_gen += ''+
    '<rect id="rettang_schermo" x="0" y="0" width="'+larg_sche+'" height="'+alt_sche+'" stroke="black" stroke-width="1" fill="none"></rect>'+
    '<rect id="pulsantiera" x="'+bott_x+'" y="'+bott_y+'" width="'+bott_width+'" height="'+bott_heigth+'" stroke="black" stroke-width="1" fill="none"></rect>'+
    //'<line id="asse_x" x1="0" y1="150" x2="'+larg_sche+'" y2="150" stroke="rgb(255,0,0)" stroke-width="1"></line>'+
    //'<line id="asse_y" x1="250" y1="0" x2="250" y2="'+alt_sche+'" stroke="rgb(0,255,0)" stroke-width="1"></line>'+
    '<line id="asse_x" x1="'+x1_asse_x+'" y1="'+y1_asse_x+'" x2="'+x2_asse_x+'" y2="'+y2_asse_x+'" stroke="rgb(255,0,0)" stroke-width="1"></line>'+
    '<line id="asse_y" x1="'+x1_asse_y+'" y1="'+y1_asse_y+'" x2="'+x2_asse_y+'" y2="'+y2_asse_y+'" stroke="rgb(0,255,0)" stroke-width="1"></line>'+
    '<line id="asse_z" x1="'+x1_asse_z+'" y1="'+y1_asse_z+'" x2="'+x2_asse_z+'" y2="'+y2_asse_z+'" stroke="rgb(0,0,255)" stroke-width="1"></line>'+
	'<text id="tsto_Coor_X" x="'+pos_x_Coor_X+'" y="'+pos_y_Coor_XY+'" fill="black" font-family="arial" font-size="14" text-anchor="left">'+
    'X:<tspan id="Coor_X">250</tspan>&nbsp;'+
    'Y:<tspan id="Coor_Y">150</tspan>&nbsp;&nbsp;&nbsp;'+
    'GX:<tspan id="Gradi_X">'+number_format(""+gradi_asse_x,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    'GY:<tspan id="Gradi_Y">'+number_format(""+gradi_asse_y,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    'GZ:<tspan id="Gradi_Z">'+number_format(""+gradi_asse_z,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    'Orientamento: <tspan id="currentOrientation"></tspan>&nbsp;'+
    //'absolute:<tspan id="absolute">'+val_absolute+'</tspan>&nbsp;'+
    //'alpha:<tspan id="alpha">'+number_format(""+val_alpha,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    //'beta:<tspan id="beta">'+number_format(""+val_beta,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    //'gamma:<tspan id="gamma">'+number_format(""+val_gamma,"2",",",".")+'</tspan>&ordm;&nbsp;'+
    '</text>'+
	'<text id="tsto_puls_mob" x="'+t_p_mob_x+'" y="'+t_p_mob_y+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">Menu comandi</text>';
    //'<text id="tsto_Coor_X" x="'+pos_x_Coor_X+'" y="'+pos_y_Coor_XY+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">X:<tspan id="Coor_X" dx="10" fill="black">250</tspan></text>'+
	//'<text id="tsto_Coor_Y" x="'+pos_x_Coor_Y+'" y="'+pos_y_Coor_XY+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">Y:<tspan id="Coor_Y" dx="10" fill="black">150</tspan></text>'+
	//'<text id="tsto_gradi_asse_X" x="'+pos_x_Grad_X+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GX:<tspan id="Gradi_X" dx="10" fill="black">'+number_format(""+gradi_asse_x,"2",",",".")+'</tspan></text>'+
	//'<text id="tsto_gradi_asse_Y" x="'+pos_x_Grad_Y+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GY:<tspan id="Gradi_Y" dx="10" fill="black">'+number_format(""+gradi_asse_y,"2",",",".")+'</tspan></text>'+
	//'<text id="tsto_gradi_assed_Z" x="'+pos_x_Grad_Z+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GZ:<tspan id="Gradi_Z" dx="10" fill="black">'+number_format(""+gradi_asse_z,"2",",",".")+'</tspan></text>'+
        
    /*
	'<span id="tsto_Coor_X" x="'+pos_x_Coor_X+'" y="'+pos_y_Coor_XY+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">X:<tspan id="Coor_X" dx:-) xd="10" fill="black">250</tspan></text>'+
	'<text id="tsto_Coor_Y" x="'+pos_x_Coor_Y+'" y="'+pos_y_Coor_XY+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">Y:<tspan id="Coor_Y" dx="10" fill="black">150</tspan></text>'+
	'<text id="tsto_gradi_asse_X" x="'+pos_x_Grad_X+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GX:<tspan id="Gradi_X" dx="10" fill="black">'+number_format(""+gradi_asse_x,"2",",",".")+'</tspan></text>'+
	'<text id="tsto_gradi_asse_Y" x="'+pos_x_Grad_Y+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GY:<tspan id="Gradi_Y" dx="10" fill="black">'+number_format(""+gradi_asse_y,"2",",",".")+'</tspan></text>'+
	'<text id="tsto_gradi_asse_Z" x="'+pos_x_Grad_Z+'" y="'+pos_y_Grad_XYZ+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">GZ:<tspan id="Gradi_Z" dx="10" fill="black">'+number_format(""+gradi_asse_z,"2",",",".")+'</tspan></text>'+
    */
    if(p_conferm_annul == 1){
        list_cod_html_gen += '<rect id="p_conferm" x="'+p_conferm_x+'" y="'+bott_y+'" width="'+bott_width+'" height="'+bott_heigth+'" stroke="black" stroke-width="1" fill="none"></rect>'+
      '<rect id="p_annul" x="'+p_annul_x+'" y="'+bott_y+'" width="'+bott_width+'" height="'+bott_heigth+'" stroke="black" stroke-width="1" fill="none"></rect>'+
	  '<text id="tsto_p_confer" x="'+tsto_p_confer_x+'" y="'+t_p_mob_y+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">Comferma</text>'+
	  '<text id="tsto_p_annul" x="'+tsto_p_annul_x+'" y="'+t_p_mob_y+'" fill="black" font-family="arial" font-size="14" text-anchor="middle">Annulla</text>';
      }
      list_cod_html_gen += 
      '<text id="descrizione" x="'+pos_x_Coor_X+'" y="'+pos_y_descr+'" fill="black" font-family="arial" font-size="14" text-anchor="left">Descrizione: <tspan id="text_descr"></tspan></text>'+
      disegno+
    '</svg></div>';
  //document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  //list_cod_html_gen += '<div id="Pulsanti" onclick="fin_pulsanti()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Pulsanti</div></div>';
  document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  disegno_ogg();
  }

function disegno_ogg(){
console.log("disegno_ogg()");
text_descr = document.getElementById("text_descr");
text_descr.innerHTML = "disegno_ogg()";
if(at_retta == 1){
    nulla = null;
    if (num_conferma == 1){
      text_descr = document.getElementById("text_descr");
      text_descr.innerHTML = "num_conferma == 1";
      id_ogg++;
      text_descr.innerHTML = "Passo 1";
      ogg_dis[id_ogg] = { "id":"ogg_"+id_ogg, "tipo":"line", "x1":0, "y1":0, "x2":0, "y2":0, "colore":[0,0,0], "spessore":1, "tipo_linea":[]};//"tipo_linea":[10,10,1,10]punto tratteggio "tipo_linea":[10,10] tratteggio
      text_descr.innerHTML = "Passo 2";
      disegno += '<line id="'+ogg_dis[id_ogg]["id"]+'" x1="'+ogg_dis[id_ogg]["x1"]+'" y1="'+ogg_dis[id_ogg]["y1"]+'" x2="'+ogg_dis[id_ogg]["x2"]+'" y2="'+ogg_dis[id_ogg]["y2"]+'" stroke="rgb('+ogg_dis[id_ogg]["colore"]+')" stroke-width="'+ogg_dis[id_ogg]["spessore"]+'" stroke-dasharray="'+ogg_dis[id_ogg]["tipo_linea"]+'" stroke-linecap="round"></line>';
      /*
      fin_disegno()
      console.log(disegno);
      console.log(ogg_dis[id_ogg]["id"]);
	  ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
      //console.log(ogg_in_dis);
      text_descr.innerHTML = "Passo 2.5";
      //console.log(ogg_in_dis.getAttribute("x1"))
	  ogg_in_dis.setAttribute("x1",pos_assi_x);
	  ogg_in_dis.setAttribute("y1",pos_assi_y);
      text_descr.innerHTML = "Passo 3";
      text_descr.innerHTML = "Passo 4";
      */
      }
    /*
    else if (num_conferma == 2){
     text_descr = document.getElementById("text_descr");
     text_descr.innerHTML = "num_conferma == 2";
	  //ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
	  ogg_in_dis.setAttribute("x2",pos_assi_x);
	  ogg_in_dis.setAttribute("y2",pos_assi_y);
	  num_conferma = 0;
	  }
	else {
	  num_conferma = 0;
	  }
	  */
    //fin_disegno()
    }
  }
  
function agg_larg_alt(){
		tela=document.getElementById("tela");
		tela.setAttribute("width",larg_sche);
		tela.setAttribute("height",alt_sche);
		viewBox = '0 0 '+larg_sche+' '+alt_sche+'';
        tela.setAttribute("viewBox",viewBox);
		rettang_schermo=document.getElementById("rettang_schermo");
		rettang_schermo.setAttribute("width",larg_sche);
		rettang_schermo.setAttribute("height",alt_sche);
		asse_x=document.getElementById("asse_x");
		asse_x.setAttribute("x2",larg_sche);
		asse_y=document.getElementById("asse_y");
		asse_y.setAttribute("y2",alt_sche);
        }
      /*
      function larg_piu(){
		//alert("larg_piu()");
        larg_sche += 10
		agg_larg_alt()
        }
      function larg_meno(){
        larg_sche -= 10
		agg_larg_alt()
        }
      function alt_piu(){
        alt_sche += 10
		agg_larg_alt()
        }
      function alt_meno(){
        alt_sche -= 10
		agg_larg_alt()
        }
      */

function eventi_touch(){
  //alert("Entrato nella funzione eventi_touch()");
  //window.addEventListener('load', function(){
  //if (attiv_event_windov == 0){
  /*if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event){
      val_absolute = event.absolute;
      val_alpha = event.alpha;
      val_beta = event.beta;
      val_gamma = event.gamma;
	  elem_absolute=document.getElementById("absolute");
	  elem_alpha=document.getElementById("alpha");
	  elem_beta=document.getElementById("beta");
	  elem_gamma=document.getElementById("gamma");
	  elem_absolute.firstChild.nodeValue=elem_absolute;
	  elem_alpha.firstChild.nodeValue=val_alpha;
	  elem_beta.firstChild.nodeValue=val_beta;
	  elem_gamma.firstChild.nodeValue=val_gamma;
	  //Gradi_X.firstChild.nodeValue=number_format(""+nuovi_gradi_asse_x,"2",",",".");
  	  //event.preventDefault()			
	  }, false)
    }*/
   /*
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("orientationchange", detectOrientation, true);
    detectOrientation();                
    }, true);
  /
  */
  //window.addEventListener("orientationchange", function(){detectOrientation()}, true);
  window.addEventListener('touchstart', function(){
  //document.addEventListener("DOMContentLoaded", function(){
    attiv_event_windov = 1;
    //window.addEventListener("orientationchange", detectOrientation, true);
	// window.addEventListener("orientationchange", detectOrientation, true);
    //detectOrientation(); alert("Entrato nella funzione eventi()");
	//if ("ontouchstart" in document.documentElement)
	schermo = document.getElementById('tela');
	schermo.addEventListener('touchstart', function(event){
      //milisec = 0;
  	  touchobj = event.changedTouches[0]
  	  posx = parseInt(touchobj.clientX)
  	  posy = parseInt(touchobj.clientY)
  	  posx_down = posx;					
  	  posy_down = posy;
      lim_x_n = posx-lim;
      lim_x_p = posx+lim;
      lim_y_n = posy-lim;
      lim_y_p = posy+lim;
      /*if (p_conferm_annul == 1){
        mod_assi = 0;
        }*/
        fine_puls_x = bott_x2
      if (posx > bott_x && posx < fine_puls_x && posy > bott_y && posy < bott_y2){
        //data_att_milsec_1=data_att.getTime()
        //milisec = 0;
        //myTimer = setInterval(function() {milisec++;}, 1);
       	at_spost_bott = 1;
       	mod_assi = 0;
        bott_x_rc = posx-corx-bott_x;
        bott_y_rc = posy-cory-bott_y;
        bott_x2_rc = bott_x2-posx-corx;
        bott_y2_rc = bott_y2-posy-cory;
        pos_x_Coor_X_rc = posx-corx-pos_x_Coor_X;
        pos_x_Coor_Y_rc = posx-corx-pos_x_Coor_Y;
        pos_y_Coor_XY_rc = posy-cory-pos_y_Coor_XY;
        t_p_mob_x_rc = posx-corx-t_p_mob_x;
        t_p_mob_y_rc = posy-cory-t_p_mob_y;
		fin_disegno()
       	}
      /*
      '<text id="descrizione" x="'+pos_x_Coor_X+'" y="'+pos_y_descr+'" fill="black" font-family="arial" font-size="14" text-anchor="left">Descrizione: </text>'
       	  p_conferm_x=bott_x+100; 
       	  p_annul_x=bott_x+200;
      */
      if(p_conferm_annul == 1){
        console.log("p_conferm_annul == 1");
        if(posx > p_conferm_x && posx < p_annul_x && posy > bott_y && posy < bott_y2){
          mod_assi = 0;
          //alert("Sei su conferma");
          //console.log("Sei su conferma");
          conferma();
          p_conferm_annul = 0;
          }
        if(posx > p_annul_x && posx < fine_p_annul_x && posy > bott_y && posy < bott_y2){
          mod_assi = 0;
          //alert("Sei su annulla");
          //console.log("Sei su annulla");
          annulla();
          p_conferm_annul = 0;
          }
        }
      if(at_ruota_assi_X_Y == 1){
       	nulla=null;
       	}
      /*if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      else if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }*/
      if(mod_assi==2){
        ruota_assi(posx,posy);
        }
  	  event.preventDefault()
	  }, false)
	schermo.addEventListener('touchmove', function(event){
      if(larg_sche < bott_x || alt_sche < bott_y){
       	bott_x=10;
       	bott_y=35;
        t_p_mob_x = bott_x+50;
        t_p_mob_y = bott_y+50;
	    pos_x_Coor_X=10;
        pos_y_Coor_XY=20;
        }
  	  touchobj = event.changedTouches[0]
  	  posx = parseInt(touchobj.clientX)
  	  posy = parseInt(touchobj.clientY)
      if(at_ruota_assi_X_Y == 1){
        nulla=null;
       	}
      if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      else if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }
      if(mod_assi==2){
        ruota_assi(posx,posy);
        }
  	  event.preventDefault()			
	  }, false)
	schermo.addEventListener('touchend', function(event){
	  //at_spost_bott = 0;
     //mod_assi = 1;
  	  posx = parseInt(touchobj.clientX)
  	  posy = parseInt(touchobj.clientY)
  	  posx_up = posx;					
  	  posy_up = posy;
	  if(at_spost_bott == 1){
	    at_spost_bott = 0;
       mod_assi = 1;
        //data_att_milsec_2=data_att.getTime()
        //milisec = data_att_milsec_2 - data_att_milsec_1
        //console.log("lim_x_p = "+lim_x_p+"; lim_x_n = "+lim_x_n+"; lim_y_p = "+lim_y_p+"; lim_y_n = "+lim_y_n);
        //if (milisec < tempo_puls){
        //  fin_pulsanti()
        //  }
        //clearInterval(myTimer);
        //milisec = 0;
        if (posx_up<lim_x_p && posx_up>lim_x_n && posy_up<lim_y_p && posy_up>lim_y_n){
          fin_pulsanti()
          }
		}
  	  touchobj = event.changedTouches[0]
	  if(at_mod_scherm == 1){
	    at_mod_scherm = 0;
		fin_disegno()
		}
      if(at_ruota_assi_X_Y == 1){
       	nulla=null;
       	gradi_asse_x = nuovi_gradi_asse_x;
       	gradi_asse_y = nuovi_gradi_asse_y;
       	gradi_asse_z = nuovi_gradi_asse_z;
       	mod_assi=1;
       	}
      /*if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      else if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }*/
      if(mod_assi==2){
       	ruota_assi(posx,posy);
       	}
  	  event.preventDefault()
	  }, false)
	}, false)
  }

function eventi_mouse(){
  //alert("Entrato nella funzione eventi_mouse()");
  //window.addEventListener('load', function(){
  //if (attiv_event_windov == 0){
  /*if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event){
      val_absolute = event.absolute;
      val_alpha = event.alpha;
      val_beta = event.beta;
      val_gamma = event.gamma;
	  elem_absolute=document.getElementById("absolute");
	  elem_alpha=document.getElementById("alpha");
	  elem_beta=document.getElementById("beta");
	  elem_gamma=document.getElementById("gamma");
	  elem_absolute.firstChild.nodeValue=elem_absolute;
	  elem_alpha.firstChild.nodeValue=val_alpha;
	  elem_beta.firstChild.nodeValue=val_beta;
	  elem_gamma.firstChild.nodeValue=val_gamma;
	  //Gradi_X.firstChild.nodeValue=number_format(""+nuovi_gradi_asse_x,"2",",",".");
  	  //event.preventDefault()	
	  }, false)
    }*/
  window.addEventListener('mousedown', function(){
    attiv_event_windov = 1;
	//alert("Entrato nella funzione eventi()");
	//if ("ontouchstart" in document.documentElement)
	schermo = document.getElementById('tela');
	schermo.addEventListener('mousedown', function(event){
      //milisec = 0;
  	  posx = event.clientX;					
  	  posy = event.clientY;
  	  posx_down = posx;					
  	  posy_down = posy;
      lim_x_n = posx-lim;
      lim_x_p = posx+lim;
      lim_y_n = posy-lim;
      lim_y_p = posy+lim;
      //bott_width=100;
      //bott_heigth=100;
      //bott_x=10;
      //bott_y=10;
      /*if (p_conferm_annul == 1){
        mod_assi = 0;
        }*/
        fine_puls_x = bott_x2;
      if (posx > bott_x && posx < fine_puls_x && posy > bott_y && posy < bott_y2){
        //data_att_milsec_1=data_att.getTime()
        //milisec = 0;
        //myTimer = setInterval(function() {milisec++;}, 1);
       	at_spost_bott = 1;
       	//mod_assi = 0;
        bott_x_rc = posx-corx-bott_x;
        bott_y_rc = posy-cory-bott_y;
        bott_x2_rc = bott_x2-posx-corx;
        bott_y2_rc = bott_y2-posy-cory;
        pos_x_Coor_X_rc = posx-corx-pos_x_Coor_X;
        pos_x_Coor_Y_rc = posx-corx-pos_x_Coor_Y;
        pos_y_Coor_XY_rc = posy-cory-pos_y_Coor_XY;
        t_p_mob_x_rc = posx-corx-t_p_mob_x;
        t_p_mob_y_rc = posy-cory-t_p_mob_y;
		fin_disegno()
       	}
	  if(at_mod_scherm == 1){
	    at_mod_scherm = 0;
		fin_disegno()
		}
      
      //Disabilitare il menu contestuale del mouse con jQuery
      $(document).ready(function(){
        $(document).bind("contextmenu",function(e){
          return false;
          });
        });

      console.log("p_conferm_annul == "+p_conferm_annul);
      if(p_conferm_annul == 1){
       console.log("p_conferm_annul == 1");
       event.preventDefault();
       switch(event.button){
         case 0:
           console.log("Hai cliccato con il pulsante sinistro");
           conferma();
           break;
         case 1:
           console.log("Hai cliccato con il pulsante centrale");
           //text_descr = document.getElementById("text_descr");
           //text_descr.innerHTML = "Sei su tasto centrale";
           break;
         case 2:
           console.log("Hai cliccato con il pulsante destro");
           annulla();
           break;
         }
      }

      /*
      if(p_conferm_annul == 1){
        console.log("p_conferm_annul == 1");
        if(posx > p_conferm_x && posx < p_annul_x && posy > bott_y && posy < bott_y2){
          mod_assi = 0;
          //alert("Sei su conferma");
          console.log("Sei su conferma");
          conferma();
          }
        if(posx > p_annul_x && posx < fine_p_annul_x && posy > bott_y && posy < bott_y2){
          mod_assi = 0;
          //alert("Sei su annulla");
          console.log("Sei su annulla");
          annulla();
          }
        }
        */
      if(at_ruota_assi_X_Y == 1){
       	nulla=null;
       	}
      /*if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      else if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }*/
      if(mod_assi==2){
        ruota_assi(posx,posy);
        }
      }, false)
	schermo.addEventListener('mousemove', function(event){
      if(larg_sche < bott_x || alt_sche < bott_y){
       	bott_x=10;
       	bott_y=35;
        t_p_mob_x = bott_x+50;
        t_p_mob_y = bott_y+50;
	    pos_x_Coor_X=10;
        pos_y_Coor_XY=20;
        }
  	  posx = event.clientX					
  	  posy = event.clientY
  	  /*if (at_spost_bott == 1){
       sposta_bottoni(posx,posy);
  	    }*/
      if(at_ruota_assi_X_Y == 1){
       	nulla=null;
       	}
      if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }
      if(mod_assi==2){
        ruota_assi(posx,posy);
        }
      }, false)
	schermo.addEventListener('mouseup', function(event){
	  //at_spost_bott = 0;
      //mod_assi = 1;
  	  posx = event.clientX					
  	  posy = event.clientY
  	  posx_up = posx;					
  	  posy_up = posy;
	  if(at_spost_bott == 1) {
	    at_spost_bott = 0;
       //mod_assi = 1;
        //data_att_milsec_2=data_att.getTime()
        //milisec = data_att_milsec_2 - data_att_milsec_1
        //console.log("lim_x_p = "+lim_x_p+"; lim_x_n = "+lim_x_n+"; lim_y_p = "+lim_y_p+"; lim_y_n = "+lim_y_n);
        //if (milisec < tempo_puls){
        //  fin_pulsanti()
        //  }
        //clearInterval(myTimer);
        //milisec = 0;
        if (posx_up<lim_x_p && posx_up>lim_x_n && posy_up<lim_y_p && posy_up>lim_y_n){
          fin_pulsanti()
          }
		}
      if(at_ruota_assi_X_Y == 1){
        nulla=null;
       	gradi_asse_x = nuovi_gradi_asse_x;
       	gradi_asse_y = nuovi_gradi_asse_y;
       	gradi_asse_z = nuovi_gradi_asse_z;
       	mod_assi=1;
       	}
      /*if(mod_assi==1){
        sposta_assi(posx,posy);
        }
      else if(at_spost_bott == 1){
        sposta_bottoni(posx,posy);
        }*/
      if(mod_assi==2){
        //console.log("mouseup mod_assi==2");
        //console.log("gradi_asse_x = " + gradi_asse_x );
        //console.log("nuovi_gradi_asse_x = " + nuovi_gradi_asse_x );
       	ruota_assi(posx,posy);
       	}
      }, false)
	}, false)
  }


function pos_ini_bott(){
        dim_schermo()
       	bott_x=10;
       	bott_y=35;
        t_p_mob_x = bott_x+50;
        t_p_mob_y = bott_y+50;
	    pos_x_Coor_X=10;
        pos_y_Coor_XY=20;
        rettang_schermo = document.getElementById("rettang_schermo");
        pulsantiera = document.getElementById("pulsantiera");
        tsto_Coor_X = document.getElementById("tsto_Coor_X");
        tsto_puls_mob = document.getElementById("tsto_puls_mob");
        pulsantiera.setAttribute("x",""+bott_x);
        pulsantiera.setAttribute("y",""+bott_y);
        tsto_Coor_X.setAttribute("x",""+pos_x_Coor_X);
        tsto_Coor_X.setAttribute("y",""+pos_y_Coor_XY);
        tsto_puls_mob.setAttribute("x",""+t_p_mob_x);
        tsto_puls_mob.setAttribute("y",""+t_p_mob_y);
        rettang_schermo.setAttribute("width",""+larg_sche);
        rettang_schermo.setAttribute("height",""+alt_sche);
        }

function conferma(){
  console.log("function conferma()");
  num_conferma ++;
  text_descr = document.getElementById("text_descr");
  text_descr.innerHTML = "Sei su conferma";
  //fin_disegno()
  /*
  if(at_retta == 1){
    nulla = null;
    if (num_conferma == 1){
      text_descr = document.getElementById("text_descr");
      text_descr.innerHTML = "num_conferma == 1";
      id_ogg++;
      text_descr.innerHTML = "Passo 1";
      ogg_dis[id_ogg] = { "id":"ogg_"+id_ogg, "tipo":"line", "x1":0, "y1":0, "x2":0, "y2":0, "colore":[0,0,0], "spessore":1, "tipo_linea":[]};//"tipo_linea":[10,10,1,10]punto tratteggio "tipo_linea":[10,10] tratteggio
    //'<line id="asse_z" x1="'+x1_asse_z+'" y1="'+y1_asse_z+'" x2="'+x2_asse_z+'" y2="'+y2_asse_z+'" stroke="rgb(0,0,255)" stroke-width="1"></line>'
      text_descr.innerHTML = "Passo 2";
      disegno += '<line id="'+ogg_dis[id_ogg]["id"]+'" x1="'+ogg_dis[id_ogg]["x1"]+'" y1="'+ogg_dis[id_ogg]["y1"]+'" x2="'+ogg_dis[id_ogg]["x2"]+'" y2="'+ogg_dis[id_ogg]["y2"]+'" stroke="rgb('+ogg_dis[id_ogg]["colore"]+')" stroke-width="'+ogg_dis[id_ogg]["spessore"]+'" stroke-dasharray="'+ogg_dis[id_ogg]["tipo_linea"]+'" stroke-linecap="round"></line>';
      fin_disegno()
      console.log(disegno);
      console.log(ogg_dis[id_ogg]["id"]);
	  ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
      //console.log(ogg_in_dis);
      text_descr.innerHTML = "Passo 2.5";
      //console.log(ogg_in_dis.getAttribute("x1"))
	  ogg_in_dis.setAttribute("x1",pos_assi_x);
	  ogg_in_dis.setAttribute("y1",pos_assi_y);
      text_descr.innerHTML = "Passo 3";
      text_descr.innerHTML = "Passo 4";
      }
    else if (num_conferma == 2){
     text_descr = document.getElementById("text_descr");
     text_descr.innerHTML = "num_conferma == 2";
	  //ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
	  ogg_in_dis.setAttribute("x2",pos_assi_x);
	  ogg_in_dis.setAttribute("y2",pos_assi_y);
	  num_conferma = 0;
	  }
	else {
	  num_conferma = 0;
	  }
    //fin_disegno()
    }
  */
  }

function annulla(){
  console.log("function annulla()");
  text_descr = document.getElementById("text_descr");
  text_descr.innerHTML = "Sei su annulla";
  //fin_disegno()
  }

function sposta_bottoni(posx,posy){
             posx -= corx
             posy -= cory
				asse_x=document.getElementById("asse_x");
				asse_y=document.getElementById("asse_y");
				asse_z=document.getElementById("asse_z");
				/*Coor_X=document.getElementById("Coor_X");
				Coor_Y=document.getElementById("Coor_Y");*/
				var coord_x1=posx;
				var coord_x2=coord_x1;
				var coord_y1=posy;
				var coord_y2=coord_y1;
		          m_ris_asse_x = ogg_conver_ang.da_gradi_a_m( gradi_asse_x );
		          m_ris_asse_y = ogg_conver_ang.da_gradi_a_m( gradi_asse_y );
		          m_ris_asse_z = ogg_conver_ang.da_gradi_a_m( gradi_asse_z );
                    assi (pos_assi_x,pos_assi_y,m_ris_asse_x,asse_x,gradi_asse_x);
                    assi (pos_assi_x,pos_assi_y,m_ris_asse_y,asse_y,gradi_asse_y);
                    assi (pos_assi_x,pos_assi_y,m_ris_asse_z,asse_z,gradi_asse_z);
				Coor_X.firstChild.nodeValue=coord_x1;	
				Coor_Y.firstChild.nodeValue=coord_y1;
				if(at_spost_bott == 1){
         		  bott_x = coord_x1-bott_x_rc;
         		  bott_y = coord_y1-bott_y_rc;
         		  bott_x2 = bott_x+bott_width;
         		  bott_y2 = bott_y+bott_heigth;
               pos_x_Coor_X = coord_x1-pos_x_Coor_X_rc;
               pos_x_Coor_Y = coord_x1-pos_x_Coor_Y_rc;
               pos_y_Coor_XY = coord_y1-pos_y_Coor_XY_rc;
               pos_y_descr = pos_y_Coor_XY+130;
               t_p_mob_x = coord_x1-t_p_mob_x_rc;
               t_p_mob_y = coord_y1-t_p_mob_y_rc;
               p_conferm_x = bott_x+bott_width;
               p_annul_x = bott_x+bott_width*2;
       	     fine_p_annul_x=bott_x+bott_width*3;
               tsto_p_confer_x = t_p_mob_x+100;
               tsto_p_annul_x = t_p_mob_x+200;
				  pulsantiera = document.getElementById("pulsantiera");
				  pulsantiera.setAttribute("x",bott_x);
				  pulsantiera.setAttribute("y",bott_y);
				  pulsantiera = document.getElementById("tsto_Coor_X");
				  pulsantiera.setAttribute("x",pos_x_Coor_X);
				  pulsantiera.setAttribute("y",pos_y_Coor_XY);
				  pulsantiera = document.getElementById("tsto_puls_mob");
				  pulsantiera.setAttribute("x",t_p_mob_x);
				  pulsantiera.setAttribute("y",t_p_mob_y);
				  descrizione = document.getElementById("descrizione");
				  descrizione.setAttribute("x",pos_x_Coor_X);
				  descrizione.setAttribute("y",pos_y_descr);
               if(p_conferm_annul == 1){
					  p_conferm = document.getElementById("p_conferm");
					  p_conferm.setAttribute("x",p_conferm_x);
					  p_conferm.setAttribute("y",bott_y);
					  p_annul = document.getElementById("p_annul");
					  p_annul.setAttribute("x",p_annul_x);
					  p_annul.setAttribute("y",bott_y);
					  tsto_p_confer = document.getElementById("tsto_p_confer");
					  tsto_p_confer.setAttribute("x",tsto_p_confer_x);
					  tsto_p_confer.setAttribute("y",t_p_mob_y);
					  tsto_p_annul = document.getElementById("tsto_p_annul");
					  tsto_p_annul.setAttribute("x",tsto_p_annul_x);
					  tsto_p_annul.setAttribute("y",t_p_mob_y);
					  }
					}
				if(at_retta == 1){
					nulla = null;
					}
				}

function sposta_assi(posx,posy){
                    //text_descr = document.getElementById("text_descr");
                    //text_descr.innerHTML = "Test desacrizione su sposta_assi";
                    //text_descr.firstChild.nodeValue = "Test desacrizione su sposta_assi";
                    posx -= corx
                    posy -= cory
				asse_x=document.getElementById("asse_x");
				asse_y=document.getElementById("asse_y");
				asse_z=document.getElementById("asse_z");
				Coor_X=document.getElementById("Coor_X");
				Coor_Y=document.getElementById("Coor_Y");
				var coord_x1=posx;
				var coord_x2=coord_x1;
				var coord_y1=posy;
				var coord_y2=coord_y1;
		          m_ris_asse_x = ogg_conver_ang.da_gradi_a_m( gradi_asse_x );
		          m_ris_asse_y = ogg_conver_ang.da_gradi_a_m( gradi_asse_y );
		          m_ris_asse_z = ogg_conver_ang.da_gradi_a_m( gradi_asse_z );
                    assi (posx,posy,m_ris_asse_x,asse_x,gradi_asse_x);
                    assi (posx,posy,m_ris_asse_y,asse_y,gradi_asse_y);
                    assi (posx,posy,m_ris_asse_z,asse_z,gradi_asse_z);
				//asse_x.setAttribute("y1",coord_y1);
				//asse_x.setAttribute("y2",coord_y2);
				//asse_y.setAttribute("x1",coord_x1);
				//asse_y.setAttribute("x2",coord_x2);
				Coor_X.firstChild.nodeValue=coord_x1;	
				Coor_Y.firstChild.nodeValue=coord_y1;
				pos_assi_x = posx;
				pos_assi_y = posy;
				if(at_mod_scherm == 1){
					rettang_schermo = document.getElementById("rettang_schermo");
					rettang_schermo.setAttribute("width",coord_x1);
					rettang_schermo.setAttribute("height",coord_y1);
         				larg_sche = coord_x1;
         				alt_sche = coord_y1;
					}
			    /*
				if(at_spost_bott == 1){
         			     bott_x = coord_x1-bott_x_rc;
         			     bott_y = coord_y1-bott_y_rc;
         		          bott_x2 = bott_x+bott_width;
         		          bott_y2 = bott_y+bott_heigth;
                         pos_x_Coor_X = coord_x1-pos_x_Coor_X_rc;
                         pos_x_Coor_Y = coord_x1-pos_x_Coor_Y_rc;
                         pos_y_Coor_XY = coord_y1-pos_y_Coor_XY_rc;
                         pos_y_descr = pos_y_Coor_XY+130;
                         t_p_mob_x = coord_x1-t_p_mob_x_rc;
                         t_p_mob_y = coord_y1-t_p_mob_y_rc;
                         p_conferm_x = bott_x+bott_width;
                         p_annul_x = bott_x+bott_width*2;
       	                 fine_p_annul_x=bott_x+bott_width*3;
                         tsto_p_confer_x = t_p_mob_x+100;
                         tsto_p_annul_x = t_p_mob_x+200;
					pulsantiera = document.getElementById("pulsantiera");
					pulsantiera.setAttribute("x",bott_x);
					pulsantiera.setAttribute("y",bott_y);
					pulsantiera = document.getElementById("tsto_Coor_X");
					pulsantiera.setAttribute("x",pos_x_Coor_X);
					pulsantiera.setAttribute("y",pos_y_Coor_XY);
					//pulsantiera = document.getElementById("tsto_Coor_Y");
					//pulsantiera.setAttribute("x",pos_x_Coor_Y);
					//pulsantiera.setAttribute("y",pos_y_Coor_XY);
					pulsantiera = document.getElementById("tsto_puls_mob");
					pulsantiera.setAttribute("x",t_p_mob_x);
					pulsantiera.setAttribute("y",t_p_mob_y);
					//descrizione
					descrizione = document.getElementById("descrizione");
					descrizione.setAttribute("x",pos_x_Coor_X);
					descrizione.setAttribute("y",pos_y_descr);
                         if(p_conferm_annul == 1){
					  p_conferm = document.getElementById("p_conferm");
					  p_conferm.setAttribute("x",p_conferm_x);
					  p_conferm.setAttribute("y",bott_y);
					  p_annul = document.getElementById("p_annul");
					  p_annul.setAttribute("x",p_annul_x);
					  p_annul.setAttribute("y",bott_y);
					  tsto_p_confer = document.getElementById("tsto_p_confer");
					  tsto_p_confer.setAttribute("x",tsto_p_confer_x);
					  tsto_p_confer.setAttribute("y",t_p_mob_y);
					  tsto_p_annul = document.getElementById("tsto_p_annul");
					  tsto_p_annul.setAttribute("x",tsto_p_annul_x);
					  tsto_p_annul.setAttribute("y",t_p_mob_y);
					  }
					}*/
				if(at_retta == 1){
					nulla = null;
                    if (num_conferma == 1){
	                  //ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
					  ogg_in_dis.setAttribute("x1",pos_assi_x);
					  ogg_in_dis.setAttribute("y1",pos_assi_y);
                      //disegno += '<line id="retta_" x1="'+pos_assi_x+'" y1="'+pos_assi_y+'" x2="100" y2="100" stroke="rgb(0,0,0)" stroke-width="1"></line>';
                      //fin_disegno()
                      }
                    else if (num_conferma == 2){
	                  //ogg_in_dis = document.getElementById(ogg_dis[id_ogg]["id"]);
					  ogg_in_dis.setAttribute("x2",pos_assi_x);
					  ogg_in_dis.setAttribute("y2",pos_assi_y);
                      //disegno += '<line id="retta_" x1="'+pos_assi_x+'" y1="'+pos_assi_y+'" x2="100" y2="100" stroke="rgb(0,0,0)" stroke-width="1"></line>';
                      //fin_disegno()
                      }
					}
				}

		function ruota_assi (posx,posy){
		  nulla=null;
		  /*
            ogg_equ_retta = new equ_retta();
            ogg_equ_retta.prova();
            equ_ris = ogg_equ_retta.retta_p1_p2(2,4,6,8);
            equ_ret = ogg_equ_retta.equ_retta_p1_p2(2,4,6,8);
            console.log("Retta: a = "+equ_ris[0]+", b = "+equ_ris[1]+", c = "+equ_ris[2]);
            console.log(equ_ret);

            ogg_equ_ciconf = new equ_ciconf();
            equ_c_ris = ogg_equ_ciconf.ciconf_c_r(2,4,10);
            console.log("Circonferenza: a = "+equ_c_ris[0]+", b = "+equ_c_ris[1]+", c = "+equ_c_ris[2]);

            ogg_intersez = new intersez();
            equ_i_ris = ogg_intersez.p_inter_circ_ret(2,5,3,2,3,4);
            console.log("Intersezione Circonferenza Retta: x1 = "+equ_i_ris[0]+", y1 = "+equ_i_ris[1]+", x2 = "+equ_c_ris[2]+", y2 = "+equ_c_ris[3]+", discr = "+equ_c_ris[4]);
            mod_assi =1;//sposta assi
            //mod_assi =2;//ruota assi
            gradi_asse_x = 0;
            gradi_asse_y = 90;
            gradi_asse_z = 45;
            */
  		    //posx_down = posx;					
  		    //posy_down = posy;
  		    //posx_up = posx;
  		    //posy_up = posy;
		    //'<rect id="rettang_schermo" x="0" y="0" width="'+larg_sche+'" height="'+alt_sche+'" stroke="black" stroke-width="1" fill="none"></rect>'
		    //'<line id="asse_x" x1="0" y1="150" x2="'+larg_sche+'" y2="150" stroke="rgb(255,0,0)" stroke-width="1"></line>'
		  //ogg_conver_ang = new conver_ang();
		  //m_ris_asse_x = ogg_conver_ang.da_p1_p2_a_m(posx_down,posy_down,posx,posy);
		  m_ris_asse_x_da_oriz = ogg_conver_ang.da_p1_p2_a_m(posx_down,posy_down,posx,posy);
		  //m_ris_asse_x += m_ris_asse_x_da_oriz;
		  //m_ris_asse_x = ogg_conver_ang.da_gradi_a_m(gradi_asse_x);
		  nuovi_gradi_asse_x_da_oriz = ogg_conver_ang.da_m_a_gradi(m_ris_asse_x_da_oriz)
            scost_gradi_asse_x = nuovi_gradi_asse_x_da_oriz + gradi_asse_x;
	       asse_x=document.getElementById("asse_x");
	       asse_y=document.getElementById("asse_y");
	       asse_z=document.getElementById("asse_z");
		  if(stat_inter_ruota_asse_X == 1){
              console.log("Coefficente angolare m equazione retta asse_x = " + m_ris_asse_x );
              console.log("nuovi_gradi_asse_x_da_oriz = " + nuovi_gradi_asse_x_da_oriz );
              nuovi_gradi_asse_x =  gradi_asse_x + scost_gradi_asse_x;
		    m_ris_asse_x = ogg_conver_ang.da_gradi_a_m( nuovi_gradi_asse_x );
              console.log("m_ris_asse_x = " + m_ris_asse_x );
	         //asse_x=document.getElementById("asse_x");
		    Gradi_X=document.getElementById("Gradi_X");
		    Gradi_X.firstChild.nodeValue=number_format(""+nuovi_gradi_asse_x,"2",",",".");
              //assi (posx_down,posy_down,m_ris_asse_x,asse_x,nuovi_gradi_asse_x);
              }
		  if(stat_inter_ruota_asse_Y == 1){
              nuovi_gradi_asse_y =  gradi_asse_y + scost_gradi_asse_x;
              console.log("Gradi dell'asse_y = " + nuovi_gradi_asse_y );
		    m_ris_asse_y = ogg_conver_ang.da_gradi_a_m( nuovi_gradi_asse_y );
              console.log("m_ris_asse_y = " + m_ris_asse_y );
	         //asse_y=document.getElementById("asse_y");
		    Gradi_Y=document.getElementById("Gradi_Y");		
		    Gradi_Y.firstChild.nodeValue=number_format(""+nuovi_gradi_asse_y,"2",",",".");
              //assi (posx_down,posy_down,m_ris_asse_y,asse_y,nuovi_gradi_asse_y);
              }
		  if(stat_inter_ruota_asse_Z == 1){
              nuovi_gradi_asse_z = gradi_asse_z + scost_gradi_asse_x;
              console.log("Gradi dell'asse_z = " + nuovi_gradi_asse_z );
		    m_ris_asse_z = ogg_conver_ang.da_gradi_a_m( nuovi_gradi_asse_z );
              console.log("m_ris_asse_z = " + m_ris_asse_z );
	         //asse_z=document.getElementById("asse_z");
		    Gradi_Z=document.getElementById("Gradi_Z");
		    Gradi_Z.firstChild.nodeValue=number_format(""+nuovi_gradi_asse_z,"2",",",".");
              //assi (posx_down,posy_down,m_ris_asse_z,asse_z,nuovi_gradi_asse_z);
              }
            assi (posx_down,posy_down,m_ris_asse_x,asse_x,nuovi_gradi_asse_x);
            assi (posx_down,posy_down,m_ris_asse_y,asse_y,nuovi_gradi_asse_y);
            assi (posx_down,posy_down,m_ris_asse_z,asse_z,nuovi_gradi_asse_z);
            //ogg_equ_retta = new equ_retta();
            //prezzo_format = number_format(""+prezzo,"2",",",".");
		  //Gradi_X.firstChild.nodeValue=parseInt(nuovi_gradi_asse_x);
		  }
		  
function assi (pos_x,pos_y,m_ris_asse,asse,nuovi_gradi_asse){
	      if ( nuovi_gradi_asse == 0 || nuovi_gradi_asse == 180){
	        //Crea un asse orizzontale
		    asse.setAttribute("x1",0);
		    asse.setAttribute("y1",pos_y);
		    asse.setAttribute("x2",larg_sche);
		    asse.setAttribute("y2",pos_y);
		    }
	      else if ( nuovi_gradi_asse == 90 || nuovi_gradi_asse == 270){
	        //Crea un asse verticale
		    asse.setAttribute("x1",pos_x);
		    asse.setAttribute("y1",0);
		    asse.setAttribute("x2",pos_x);
		    asse.setAttribute("y2",alt_sche);
		    }
	       else {
	        //Crea un asse obliqua
            equ_ris = ogg_equ_retta.retta_p1_m( pos_x,pos_y ,m_ris_asse);
            //equ_ris = ogg_equ_retta.retta_p1_p2(posx_down,posy_down,posx,posy);
            //ogg_intersez = new intersez();
            inters_ris_y_1 = ogg_intersez.p_inter_1_ret_1_ret_v(equ_ris[0],equ_ris[1],equ_ris[2],0);//intersezine di una asse con il bordo sinistro
            inters_ris_x_1 = ogg_intersez.p_inter_1_ret_1_ret_o(equ_ris[0],equ_ris[1],equ_ris[2],0);//intersezine di una asse con il bordo superiore
            inters_ris_y_2 = ogg_intersez.p_inter_1_ret_1_ret_v(equ_ris[0],equ_ris[1],equ_ris[2],larg_sche);//intersezine di una asse con il bordo destro
            inters_ris_x_2 = ogg_intersez.p_inter_1_ret_1_ret_o(equ_ris[0],equ_ris[1],equ_ris[2],-alt_sche);//intersezine di una asse con il bordo inferiore
		    asse.setAttribute("x1",0);
		    asse.setAttribute("y1",inters_ris_y_1);
		    asse.setAttribute("x2",larg_sche);
		    asse.setAttribute("y2",inters_ris_y_2);
		    }
		  }
		
	/*
	Coefficente angolare m equazione retta asse_x = 0
	Gradi dell'asse_x = 0
	Gradi dell'asse_y = 90
	Gradi dell'asse_z = 45
	m_ris_asse_x = 0
	m_ris_asse_y = 16331239353195370
	m_ris_asse_z = 0.9999999999999999
	
	Coefficente angolare m equazione retta asse_x = Infinity
	Gradi dell'asse_x = 90
	Gradi dell'asse_y = 180
	Gradi dell'asse_z = 135
	m_ris_asse_x = Infinity
	m_ris_asse_y = -1.2246467991473532e-16
	m_ris_asse_z = -1.0000000000000002
	Error: Invalid value for <line> attribute y1="NaN"
	Error: Invalid value for <line> attribute y2="NaN"
	*/
	
      //alert("L. "+screen.width+" x H. "+screen.height);//altezza e larghezza dello schermo
      // window.innerHeight : altezza della finestra visibile
      // window.innerWidth  : larghezza della finestra visibile
      //alert("L. "+window.innerWidth+" x H. "+window.innerHeight);
      //dim_schermo();
      //larg_sche = 200;
      //alt_sche = 150;
      //coord_y1 = 150;
      
      
           /*
          //equ_ris = prova_Equazioni(2,4,6,8);
          //prova_Equazioni();
          ogg_equ_retta = new equ_retta();
          ogg_equ_retta.prova();
          equ_ris = ogg_equ_retta.retta_p1_p2(2,4,6,8);
          equ_ret = ogg_equ_retta.equ_retta_p1_p2(2,4,6,8);
          console.log("Retta: a = "+equ_ris[0]+", b = "+equ_ris[1]+", c = "+equ_ris[2]);
          console.log(equ_ret);

          ogg_equ_ciconf = new equ_ciconf();
          equ_c_ris = ogg_equ_ciconf.ciconf_c_r(2,4,10);
          console.log("Circonferenza: a = "+equ_c_ris[0]+", b = "+equ_c_ris[1]+", c = "+equ_c_ris[2]);

          ogg_intersez = new intersez();
          equ_i_ris = ogg_intersez.p_inter_circ_ret(2,5,3,2,3,4);
          console.log("Intersezione Circonferenza Retta: x1 = "+equ_i_ris[0]+", y1 = "+equ_i_ris[1]+", x2 = "+equ_c_ris[2]+", y2 = "+equ_c_ris[3]+", discr = "+equ_c_ris[4]);
          */

      document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener("orientationchange", detectOrientation, true);
        detectOrientation();

        function detectOrientation(){
          switch (window.orientation){
            case 0:
            case 180:
              //landscape
              pos_ini_bott();
              document.getElementById("currentOrientation").innerHTML = "1";
              break;
            case 90:
            case -90:
              //portrait
              pos_ini_bott();
              document.getElementById("currentOrientation").innerHTML = "2";
              break;
            default:
              return;
            }                
          }              
        }, true);
                
dim_schermo();       
ogg_equ_retta = new equ_retta();
ogg_intersez = new intersez();
ogg_conver_ang = new conver_ang();
          schermata = "disegno";
          //schermata = "pulsanti";
          mod_assi =1;//sposta assi
          //mod_assi =2;//ruota assi
          x1_asse_x = 0; y1_asse_x = 100; x2_asse_x = larg_sche; y2_asse_x = 100;
          x1_asse_y = 100; y1_asse_y = 0; x2_asse_y = 100; y2_asse_y = alt_sche;
          x1_asse_z = 100; y1_asse_z = 100; x2_asse_z = 100; y2_asse_z = 100;
          gradi_asse_x = 0;
          gradi_asse_y = 90;
          gradi_asse_z = 45;
          nuovi_gradi_asse_x = gradi_asse_x;
          nuovi_gradi_asse_y = gradi_asse_y;
          nuovi_gradi_asse_z = gradi_asse_z;
          lim = 10;
          //tempo_puls = 71 //tempo pulsanti in millisecondi
          //milisec = 0
          corx = 7;
          //cory = 7+25;
          cory = 7;
	  pos_x_Coor_X=10;
	  pos_x_Coor_Y=90;
          pos_y_Coor_XY=20;
       pos_y_descr= pos_y_Coor_XY+130;
	  pos_x_Grad_X=30;
	  pos_x_Grad_Y=90;
	  pos_x_Grad_Z=150;
          pos_y_Grad_XYZ=35;
       	  bott_marg_left=10;
       	  bott_marg_top=10;
       	  bott_width=100;
       	  bott_heigth=100;
       	  bott_x=10;
       	  bott_y=35;
       	  p_conferm_x=bott_x+bott_width; 
       	  p_annul_x=bott_x+bott_width*2;
       	  fine_p_annul_x=bott_x+bott_width*3;
          t_p_mob_x = bott_x+50;
          t_p_mob_y = bott_y+50;
          tsto_p_confer_x=t_p_mob_x+100;
          tsto_p_annul_x=t_p_mob_x+200;
          bott_x2 = bott_width;
          bott_y2 = bott_heigth;
       	  //bott_shadow_oriz=10;
       	  //bott_shadow_vert=10;
       	  bott_shadow_sfoc=10;
       	  bott_color_R=50;
       	  bott_color_G=0;
       	  bott_color_B=255;
       	  bott_font_size=50;
          dim_t_p_old = 25;
          //Variabili riguardanti l'orientamento del dispositivo
          val_absolute = null;
          val_alpha = null;
          val_beta = null;
          val_gamma = null;
          orient_scherm = "";
          data_att = new Date()
          data_att_milsec=data_att.getTime()
	  stile_bottoni_iniz();
	  stat_inter_ruota_asse_X = 0;
	  stat_inter_ruota_asse_Y = 0;
	  stat_inter_ruota_asse_Z = 0;
	  //stile_bott_prem="margin-left: 10px; margin-top: 10px; width: 200px; height: 200px; box-shadow: -10px -10px -10px #000000; background-color:rgb(50,0,255); float:left; font-size: 50px; text-align:center;";
	  at_spost_bott = 0;
	  at_ruota_assi_X_Y = 0;
	  at_mod_scherm = 0;
	  at_retta = 0;
	  p_conferm_annul = 0;
	  attiv_event_windov = 0;
	  id_cod_html_gen = "cod_html_gen";
	  list_cod_html_gen = "";
          document.write('<span id=\"cod_html_gen\"></span>');
       disegno = "";
       num_conferma = 0;
       id_ogg = 0;
       ogg_dis = new Array();
	  fin_disegno()
          //<a href="javascript:print();" >stampa</a>//invia la pagina corrente alla stampante/anteprima di stampa