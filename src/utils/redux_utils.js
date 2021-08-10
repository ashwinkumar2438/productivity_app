const bindTypesToActions=(types={})=>{
    let actions={};
    for(let type in types){
        let key=type.toLowerCase();
        actions[key]=(payload={})=>({type:types[type],payload});
    }
    return actions;
}

export {bindTypesToActions};

