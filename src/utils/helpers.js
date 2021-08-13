const digitize=(digit)=>digit>9?digit:'0'+digit;

const viewTime=(milliseconds)=>{
    const duration=Math.trunc(milliseconds/1000);
    
    const hours=Math.trunc(duration/3600);
    const minutes=Math.trunc( (duration - (hours*3600) ) / 60);
    const seconds=duration - (hours*3600) - (minutes*60);

    return `${hours?digitize(hours)+':':''}${digitize(minutes)}:${digitize(seconds)}`;
}

export {
    viewTime
}