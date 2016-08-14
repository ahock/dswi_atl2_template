/* global $ */
function praesenzen( callback ) {
    // Version 4, 14.08.2016
    //  Autosave
    //
    // Version 2, 24.10.2014
    console.log("Presenzen Neu");
    this.fachliste = [];
    this.fachid = 0;
    this.eventid = 0;
    this.autosave = true;
    this.timerrun = false;
    this.timeoutID;
    
    // Daten vom Server laden
    var request = $.ajax({
        url: "dataset.json",
        context: this});
        
    request.done(function(response) {
        console.log("dataset.json");
        for( var i=0; i<response.Fach.length; i++) {
            this.fachliste.push(response.Fach[i]);
        }
        console.log(this.fachliste);
        callback();
    });
    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
    });

    this.Save = function(callback) {
        var payload = JSON.stringify(this.fachliste);
        console.log('Save', payload);
        $.ajax({
            url: "write",
            type: "POST",
            data: {fachliste : payload},
            context: this,
            success: function(returnstring, status) {
                console.log('ajax', status, returnstring);
                //callback();
            }
        }); 
    };
    this.getFachListe = function() {
        return this.fachliste;
    };
    this.setFachById = function(id) {
        console.log(this.fachid);
        this.fachid = id;
        console.log(this.fachid);
        this.eventid = 0;
        return this.fachid;
    };
    this.setFachByName = function(name) {
        console.log(name);
        console.log(this.fachid);
        for( var i=0; i<this.fachliste.length; i++) {
            if( this.fachliste.Name == name) {
                this.fachid = i;
            }
        }   
        console.log(this.fachid);
        return this.fachid;
    };
    this.getEventListe = function() {
        return this.fachliste[ this.fachid ].Event;    
    };
    this.setEventById = function(id) {
        console.log(this.eventid);
        this.eventid = id;
        console.log(this.eventid);
        return this.eventid;
    };
    this.getTeilnehmerListe = function() {
        return this.fachliste[ this.fachid ].Event[ this.eventid ].Teilnehmer;
    };
    this.setPraesenzById = function( id, part, prae) {
        switch(part) {
            case "H1":
                this.fachliste[this.fachid].Event[this.eventid].Teilnehmer[id].H1 = prae;
                break;
            case "H2":
                this.fachliste[this.fachid].Event[this.eventid].Teilnehmer[id].H2 = prae;
                break;
        }
        console.log("Auto Save", this.autosave, this.timerrun);
        if(this.autosave){
            // Save Funktion aufrufen
            if(this.timerrun){
                //Reset Timer
                console.log("Reset Timer");
                window.clearTimeout(this.timeoutID);
                var that = this;
                this.timeoutID = window.setTimeout(function(){
                    console.log("Save Now",that);
                    //Timer Elapsed
                    this.timerrun = false;
                    that.Save();
                }, 5000, that);
                console.log("TimeoutID", this.timeoutID);
            }
            else {
                //Start Timer
                console.log("Start Timer");
                var that = this;
                this.timeoutID = window.setTimeout(function(){
                    console.log("Save Now",that);
                    //Timer Elapsed
                    this.timerrun = false;
                    that.Save();
                }, 5000, that);
                console.log("TimeoutID", this.timeoutID);
                this.timerrun = true;
            }
        }
    };
    this.save_state = function(event){
        
        
    };
    this.setAllPraesenz = function(){
        for(var i=0; i<this.fachliste[this.fachid].Event[this.eventid].Teilnehmer.length; i++){
            this.setPraesenzById( i, "H1", true);
            this.setPraesenzById( i, "H2", true);
        }  
    };
}
