module.exports.greet = (name) => {
    if (name === null) {
        return "Hello, my friend."
    }
    if (typeof (name) === "object") {
        if (name.length > 2) {
            let n = "";
            let j = [];
            for (let i = 0; i < name.length; i++) {
                if (name[i] === name[i].toUpperCase()) {
                    j.push(name[i]);
                    name.splice(i,1);
                } 
                
            }
            if (j.length === 0) {
                for (let i = 0; i < name.length; i++) {
                    if (i == 0) {
                        n = `${name[i]},`;
                    } else if (i == (name.length - 1)) {
                        n += ` and ${name[i]}.`
                    } else {
                        n += ` ${name[i]},`
                    }
                }
                return `Hello, ${n}`
            } else {
                for (let i = 0; i < name.length; i++) {
                    if (i == 0) {
                        n = `${name[i]}`;
                    } else if (i == (name.length - 1)) {
                        n += ` and ${name[i]}.`
                    } else {
                        n += ` ${name[i]},`
                    }
                }
                for (let i = 0; i < name.length; i++) {
                    if (i == 0) {
                        n += ` AND HELLO ${j[i]}!`;
                    } 
                }
                return `Hello, ${n}`
            }
        } else {
            let subNames = name[1].split(",")
            if(subNames.length>1){
                if(subNames[0][0] === '\"'){
                    return `Hello, ${name[0]} and ${subNames[0].slice(1)},${subNames[1].substring(0,subNames[1].length - 1)}.`
                }else{
                    return `Hello, ${name[0]}, ${subNames[0]}, and${subNames[1]}.`

                }
            } else{
                return `Hello, ${name[0]} and ${name[1]}`;
            }
        } 

    }
    if (name.toUpperCase() === name) {
        return `HELLO ${name}!`
    }
    return `Hello, ${name}.`;
}