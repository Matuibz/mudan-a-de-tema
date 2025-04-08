function MudaTema(tema) {
    if (tema==='claro') {
        document.body.classlist.remove('escuro');
        document.body.classlist.add('claro');
        
    }
    else{
        document.body.classlist.remove('claro');
        document.body.classlist.add('escuro');   
    }
}