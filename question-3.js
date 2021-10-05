//Sania Juddha 101280650
const fs = require('fs');
const path = require('path');

const logDir = 'logs';

//deleting logs
const remove = () => {
    fs.readdir(logDir, (e, files) => {
        if(e) throw err;
        for(const logFile of files){
            console.log('delete files..... ' + logFile);
            fs.unlink(path.join(logDir, logFile), e => {
                if(e) throw err;
            });
        }
        fs.rmdirSync(logDir);
    });
};

//creating the logs
const create = async () => {
    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir);
    }
    try{
        process.chdir(logDir);
        for(let i=0; i<10; i++){
            const fileName = 'log' + i + '.txt';
            const fileData = i.toString();
            fs.writeFileSync(`${fileName}`, fileData);
            console.log('creating files..... ' + fileName)
        }
    }catch(e){
        return console.log(e);
    }
}

//run create() first and then remove()

//create()
remove()
