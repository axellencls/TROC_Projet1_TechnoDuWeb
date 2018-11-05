"use strict";
var assert = require('assert');
var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017"
var cors = require("cors");
app.use(cors());
app.listen(8888);

// Fonction de recherche dans Biens d'un bien avec son un id

// function rechercheBienParId(db, id, callback) {
// 	let resBien = [] ;
// 	db.collection("Biens").find({"id":id}).toArray((err, documents)=> {
// 		resBien.push(documents[0]);
// 		//console.log("recherche bien fct :" + JSON.stringify(documents[0]) );
// 		callback(JSON.stringify(resBien));
// 	});
	
// }


// Fonction de recherche dans Competences d'une competence avec son un id

// function rechercheCompetenceParId(db, id, callback) {
// 	let resComp = [] ;
// 	db.collection("Competences").find({"id":id}).toArray((err, documents)=> {
// 		resComp.push(documents[0]);
// 		callback(JSON.stringify(resComp));
// 	});
	
//}

// Fonction de recherche dans Competences de competence(s) par un mots-clés

function rechercheCompetenceParUnMotCle(db, motCle, callback) {
    let resComp=[]
    db.collection("Competences").find({"motsCles":{$in:[motCle]}}).toArray((err, documents)=> {
		resComp.push(documents[0]);
		callback(JSON.stringify(resComp));
    });
}
	
// }

// Fonction de recherche dans Membres d'un membre avec son email

function rechercheMembreParEmail(db, email, callback) {
	let resM = [] ;
    db.collection("Membres").find({"email":email}).toArray((err, documents)=> {
		resM.push(documents[0]);
		callback(JSON.stringify(resM));
	});
	
}

// Fonction de recherche dans Reservations d'une reservation avec email Proprio

function rechercheReservationParId(db, id, callback) {
	let resR = [] ;
	db.collection("Reservations").find({"emailProprio":id}).toArray((err, documents)=> {
		resR.push(documents[0]);
		callback(JSON.stringify(resR));
	});
	
}

//recherche bien(s) par un mot clé
function rechercheBienParMotCle(db, motCle, callback){
    let resBiens=[]
    db.collection("Biens").find({"motsCles":{$in:[motCle]}}).toArray((err, documents)=> {
	resBiens.push(documents[0]);
	callback(JSON.stringify(resBiens));
    });
}


// Recherche d'un service via un mot clé


MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("DB_TROC");
    assert.equal(null, err);
    
    // 	app.get("/biens/:id", (req, res) => {
    // 	    rechercheBienParId(db, req.params.id, (resBien)=> {
    // 	    res.setHeader("Access-Control-Allow-Origin", "*");
    // 	    	res.setHeader("Content-type", "application/json");
    // 	    	//console.log("Deux : " + resBien) ;
    // 	        res.end(resBien) ;
    // 	    });
    // });
    
    // app.get("/competences/:id", (req, res) => {
    // 	    rechercheCompetenceParId(db, req.params.id, (resComp)=> {
    // 	    	res.setHeader("Access-Control-Allow-Origin", "*");						
    // 	    	res.setHeader("Content-type", "application/json");
    // 	        res.end(resComp) ;
    // 	    });
    // });

    app.get("/competences/:motCle", (req, res) => {
	    rechercheCompetenceParUnMotCle(db, req.params.motCle, (resComp)=> {
	    	res.setHeader("Access-Control-Allow-Origin", "*");				
	    	res.setHeader("Content-type", "application/json");
	        res.end(resComp) ;
	    });
    });

     app.get("/biens/:motCle", (req, res) => {
	    rechercheBienParMotCle(db, req.params.motCle, (resComp)=> {
	    	res.setHeader("Access-Control-Allow-Origin", "*");				
	    	res.setHeader("Content-type", "application/json");
	        res.end(resComp) ;
	    });
    });
        
    app.get("/reservations/:id", (req, res) => {
	    rechercheReservationParId(db, req.params.id, (resR)=> {
	    	    res.setHeader("Access-Control-Allow-Origin", "*");
	    	res.setHeader("Content-type", "application/json");
	        res.end(resR) ;
	    });
    });
    //Recherche un membre par son email
    app.get("/membres/:email", (req, res) => {
	    rechercheMembreParEmail(db, req.params.email, (resM)=> {
	    	    res.setHeader("Access-Control-Allow-Origin", "*");
	    	res.setHeader("Content-type", "application/json");
	        res.end(resM) ;
	    });
    });
    
    //Liste tout les membre existant
    app.get('/membres', function(req, res){
    	//affiche tous les prenoms
        db.collection("Membres").find().toArray((err, documents) => {
        	res.setHeader('Access-Control-Allow-Origin', '*');	    
        	res.setHeader('Content-type', 'application/json');
	    res.end(JSON.stringify(documents));
    	});
    });

    //ajout d'un membre dans la BD
    app.get('/membres/add/:membre', (req, res) => {
	console.log("membre a ajouter : "+req.params.membre);
	let m = req.params.membre.split(",")
	//res.setHeader("Access-Control-Allow-Origin", "*");
	//res.setHeader("Content-type", "application/json");
	//console.log("email: "+m[0]+""+m[1]+""+req.params.m[2]+""+req.params.m[3]+""+req.params.m[4]+""+ req.params.m[5]+""+req.params.m[6]+""+req.params.m[7])
	var objetMembre = { email: m[0], mdp: m[1], nom:m[2],prenom:m[3], role:m[4], ville:m[5], adresse:m[6], tel:m[7] };
	db.collection("Membres").insertOne(objetMembre, function(err, res) {
	    console.log("Le membre a bien été ajouté");
	});
	rechercheMembreParEmail(db, m[0], (resM)=> {
	    res.setHeader("Access-Control-Allow-Origin", "*");
	    res.setHeader("Content-type", "application/json");
	    res.end(resM) ;
	});
	
    });

    
    //RECHERCHE SERVICE EN TRAITEMENT
    // app.get("/rechercheService/:motCle", (req, res) => {
    // 	rechercheServiceParMotCle(db, req.params.motCle, (res)=> {
    // 		    res.setHeader("Access-Control-Allow-Origin", "*");
    // 	    res.setHeader("Content-type", "application/json");
    // 	    let resServices=[];
    // 	    //Recherche dans les biens
    // 	    rechercheBienParMotCle(db, req.params.motCle, resServices, (resBiens)=>{
    // 		resServices.push(resBiens);
    // 	    });
    // 	    //Recherche dans les competences
    // 	    res.end(resMotCle);
    // 	});
    // });
    
});
