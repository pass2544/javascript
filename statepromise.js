const promise = newPromise((resolve,reject)=>{
    const res = true;
    if(res){
        resolve("Resolve!");
    }
    else{
        reject(Error("Fatal Error"));
    }
});