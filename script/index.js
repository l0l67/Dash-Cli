window.onload=function(){
    globalThis.drawing = false;
    after_btn();
    load_config();
    //drawtext(document.getElementById('headline').innerHTML);
}



function load_config() {
    globalThis.config_apps = {};
    for(var key in config) {
        for(app in config[key]) {
            config_apps[config[key][app]["name"].toString().toLowerCase()] = config[key][app]["url"] + ";" + config[key][app]["description"];
        }
    }
    var childs = document.getElementsByClassName('text_output');
    for (var i = 0; i < childs.length; i++) {
        childs[i].style.color = color;
    } 

}


function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

async function drawtext(text_to_draw) {
    globalThis.drawing = true;
    text_to_draw.split(/(?!$)/);
    //let sounds = [1, 2, 3];
    //var audio1 = new Audio("assets/sounds/printing.mp3");
    //var audio2 = new Audio("assets/sounds/printing1.mp3")
    var already_drawn = "";
    
    for(i = 0; i < text_to_draw.length; i++) {
        already_drawn += text_to_draw[i];
        document.getElementById('headline').innerText = already_drawn;
        /*
        if(text_to_draw[i] != " ") {
            switch(randomChoice(sounds)) {
                case 1:
                    audio1.play();
                case 2:
                    audio2.play();
                case 3:
                    
            }
        }
        */
        await delay(10);
    }
    drawing = false;
}

async function drawcmd(txt) {
    txt.split(/(?!$)/);
    document.getElementById('cmd').innerText = txt;
}

String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 


async function after_btn() {
    if(!drawing) {
        document.getElementById('btn').style.visibility = "hidden"; //for space \xa0
        globalThis.syntax = `Welcome to Dash-cli...
                    Loading....
                                        
                    C:\\>`;
        drawtext(syntax);
        globalThis.first_time_start = true;
    }
}

var cmd_list = {
    help: "prints this menu",
    clear: "clears the screen",
    info: "prints the about page",
    dir: "displays files in the current directory(only this one right now)",
    cat: '"cat filename" Simple text viewer',
    ls: "lists all your configured apps",
    start: '"start appname" starts an app -newtab -> start in a new tab',
    man: '"man appname" print info about app or all apps(with * as appname)'
}

var dir_list = {
    C: ["veryimportanttext", "passwords"]
}

window["veryimportanttext"] = `private videos:
                         https://www.youtube.com/watch?v=Lrj2Hq7xqQ8`;
window["passwords"] = `abcdefghijklmnopqrstuvwxyz0123456789`;



document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    try{
        //console.log(syntax);
    } catch(ReferenceError) {
        globalThis.syntax = "C:\\>";
    }
    if(!drawing) {
        if(first_time_start) {
            drawtext(" ");
        }

        globalThis.typing = true;
        document.getElementById('cmd').style.visibility = "visible";
        //var audio1 = new Audio("assets/sounds/tipping.mp3");
        //audio1.play();
        switch(event.keyCode) {
            //letters:
            case 65:
                syntax += "a";
                drawcmd(syntax);
                break;
            case 66:
                syntax += "b";
                drawcmd(syntax);
                break;
            case 67:
                syntax += "c";
                drawcmd(syntax);
                break;
            case 68:
                syntax += "d";
                drawcmd(syntax);
                break;
            case 69:
                syntax += "e";
                drawcmd(syntax);
                break;
            case 70:
                syntax += "f";
                drawcmd(syntax);
                break;
            case 71:
                syntax += "g";
                drawcmd(syntax);
                break;
            case 72:
                syntax += "h";
                drawcmd(syntax);
                break;
            case 73:
                syntax += "i";
                drawcmd(syntax);
                break;
            case 74:
                syntax += "j";
                drawcmd(syntax);
                break;
            case 75:
                syntax += "k";
                drawcmd(syntax);
                break;
            case 76:
                syntax += "l";
                drawcmd(syntax);
                break;
            case 77:
                syntax += "m";
                drawcmd(syntax);
                break;
            case 78:
                syntax += "n";
                drawcmd(syntax);
                break;
            case 79:
                syntax += "o";
                drawcmd(syntax);
                break;
            case 80:
                syntax += "p";
                drawcmd(syntax);
                break;
            case 81:
                syntax += "q";
                drawcmd(syntax);
                break;
            case 82:
                syntax += "r";
                drawcmd(syntax);
                break;
            case 83:
                syntax += "s";
                drawcmd(syntax);
                break;
            case 84:
                syntax += "t";
                drawcmd(syntax);
                break;
            case 85:
                syntax += "u";
                drawcmd(syntax);
                break;
            case 86:
                syntax += "v";
                drawcmd(syntax);
                break;
            case 87:
                syntax += "w";
                drawcmd(syntax);
                break;
            case 88:
                syntax += "x";
                drawcmd(syntax);
                break;
            case 89:
                syntax += "y";
                drawcmd(syntax);
                break;
            case 90:
                syntax += "z";
                drawcmd(syntax);
                break;

            //numbers:
            case 48:
            case 96:
                syntax += "0";
                drawcmd(syntax);
                break;
            case 49:
            case 97:
                syntax += "1";
                drawcmd(syntax);
                break;
            case 50:
            case 98:
                syntax += "2";
                drawcmd(syntax);
                break;
            case 51:
            case 99:
                syntax += "3";
                drawcmd(syntax);
                break;
            case 52:
            case 100:
                syntax += "4";
                drawcmd(syntax);
                break;
            case 53:
            case 101:
                syntax += "5";
                drawcmd(syntax);
                break;
            case 54:
            case 102:
                syntax += "6";
                drawcmd(syntax);
                break;
            case 55:
            case 103:
                syntax += "7";
                drawcmd(syntax);
                break;
            case 56:
            case 104:
                syntax += "8";
                drawcmd(syntax);
                break;
            case 57:
            case 105:
                syntax += "9";
                drawcmd(syntax);
                break;
            //signs
            case 190:
                syntax += ".";
                drawcmd(syntax);
                break;

            case 106:
            case 171:
                syntax += "*";
                drawcmd(syntax);
                break;
            case 173:
                syntax += "-";
                drawcmd(syntax);
                break;
            

            //special keys like enter, ...
            case 32: //space
                syntax += " ";
                drawcmd(syntax);
                break;
            case 8: //backspace
                let tmp = [];
                
                //if(first_time_start) {
                tmp = syntax.split("C:");
                if(tmp[1].length > 2) {
                    try{
                        tmp[1] = tmp[1].toString().slice(0, -1);
                    } catch {
                        tmp.pop();
                    }
                        
                    globalThis.syntax = tmp[0] + "C:" + tmp[1];
                }
                first_time_start = false;

                drawcmd(syntax);
                break;
            case 13: //enter
                command = syntax.split("C:\\>");
                command = command[1].split(" ");
                if(command[0] in cmd_list) {
                    switch(command[0]){ //command[1] is the entered command after pressing enter
                        case "help":
                            let out = [];
                            for(var key in cmd_list) {
                                out.push(key + ": " + cmd_list[key] + "\n");
                            }
                            var res = out.toString().replaceAll(",", "");
                            drawtext(res);
                            break;
                        case "clear":
                            drawtext(" ");
                            break;
                        case "dir":
                            let tmp_list = [];
                            tmp_list.push("Files in C:\n");
                            for(directory in dir_list) {
                                for(i = 0; i < dir_list[directory].length; i++) {
                                    tmp_list.push("\xa0\xa0" + dir_list[directory[0]][i] + " \n");
                                }
                            }
                            var res = tmp_list.toString().replaceAll(",","");
                            drawtext(res);
                            break;

                        case "cat":
                            var file_name = command[1].toString();
                            console.log(file_name);

                            for(var key in dir_list) {
                                if(dir_list[key].indexOf(file_name) > -1) {
                                    console.log(file_name + ":" + window[file_name]);
                                    drawtext(window[file_name])
                                }
                            }

                            break;

                        case "ls":
                            let app_names = [];
                            for(app in config_apps) {
                                app_names.push(app + "\n");
                            }
                            drawtext(app_names.toString().replaceAll(",",""));
                            break;

                            



                        case "start":
                            console.log(command[1])
                            var tmp_val = config_apps[command[1]];
                            tmp_val = tmp_val.split(";");
                            var url = tmp_val[0];

                            var opts = command[2];
                            console.log(opts);
                            switch(command[2]) {
                                case "-newtab":
                                    window.open(url, "_blank");
                                    break;
                                case "-here":
                                    window.open(url, "_self");
                                    break;
                                default:
                                    window.open(url, "_self");
                                    break;
                            }
                            


                            
                            break;

                        case "man":
                            
                            if(command[1] != "*") {
                                var desc_tmp = config_apps[command[1]];
                                desc_tmp = desc_tmp.split(";");
                                var desc = desc_tmp[1];
                                drawtext(command[1] + ": " + desc);
                            } else {
                                let app_names = [];
                                for(app in config_apps) {
                                    var tmpp = config_apps[app].split(";");
                                    tmpp = tmpp[1];
                                    app_names.push(app + ": " + tmpp + "\n");
                                }
                                drawtext(app_names.toString().replaceAll(",",""));
                            }
                            
                            break;




                        case "exit":
                            //window.location.reload(true);
                            break;
                        case "info":
                            drawtext(`
                                This Website is just a test, some commands will be added in the future.
                                Dont expect anything from this lol


                                \xa0\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\
                                \xa0/X/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\X\\
                                |XX\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_____\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/XX|
                                |XXX\\\xa0\xa0\xa0\xa0\xa0_/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\_\xa0\xa0\xa0\xa0\xa0/XXX|___________
                                \xa0\\XXXXXXX\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XXXXXXX/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\\\\
                                \xa0\xa0\xa0\\XXXX\xa0\xa0\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0XXXXX/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\\\\
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa00\xa0\xa0\xa0\xa0\xa00\xa0\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \\
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|______//
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0O_O\xa0|\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0_\xa0/\xa0\xa0\xa0\\________________\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0|\xa0\xa0|\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/
                                No\xa0Bullshit,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|\xa0\xa0/\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\______/
                                Please...\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0|\xa0\xa0\\\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0|\xa0\xa0\\\xa0|
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0__|\xa0|__|\xa0|\xa0\xa0\xa0\xa0\xa0\xa0__|\xa0|__|\xa0|
                                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|___||___|\xa0\xa0\xa0\xa0\xa0\xa0|___||___|



                                Ascii art from: https://www.asciiart.eu/


                            `);
                            break;
                    }
                } else {
                    drawtext("Command not found.");
                }


                globalThis.syntax = "C:\\>";
                drawcmd(syntax);
                break;
        }
        first_time_start = false;
    } else {
        //document.getElementById('cmd').style.visibility = "hidden";
    }
    typing = false;
});