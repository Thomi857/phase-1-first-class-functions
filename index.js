function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    function anonimous(){

    }
    return anonimous;
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
};

returnsAnAnonymousFunction("world");