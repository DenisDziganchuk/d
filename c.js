let PC = this;
let s = "<div class='divider'>&nbsp;</div><div class='label-checkmark'><span class='icon-checkmark-white-bold'></span></div><span>Item Owned</span>";
let m = "<li ng-repeat='item in assetsListContent.assetItems.data.Data.Items' class='list-item item-card ng-scope' ng-class='{'place-item':currentData.category.name=='Places'}'><div class='item-card-container'><a ng-href='https://web.archive.org/web/20170317154120/https://www.roblox.com/The-Major-s-Helmet-item?id=566779193' class='item-card-link' href='https://web.archive.org/web/20170317154120/https://www.roblox.com/The-Major-s-Helmet-item?id=566779193'><div class='item-card-thumb-container'><div ng-hide='item.Product.SerialNumber==null' class='item-serial-number ng-binding ng-hide'>#</div><img ng-src='https://web.archive.org/web/20170317154120/https://t5.rbxcdn.com/b40f05455b6d53fd5a32dce0e1949415' thumbnail='item.Thumbnail' image-retry='' class='item-card-thumb ng-isolate-scope' src='https://web.archive.org/web/20170317154120/https://t5.rbxcdn.com/b40f05455b6d53fd5a32dce0e1949415'><div class='item-expire-time-label text-overflow ng-binding ng-hide' ng-hide='item.UserItem.RentalExpireTime==null'>Exp: </div><span ng-show='item.AssetRestrictionIcon' ng-class=''icon-'+item.AssetRestrictionIcon.CssTag+'-label'' class='icon-null-label'></span></div><div class='text-overflow item-card-name ng-binding' title='The Major’s Helmet'>The Major’s Helmet</div></a><!-- ngIf: item.Item.AudioUrl --><div class='text-overflow item-card-creator'><span class='xsmall text-label'>By</span> <a class='xsmall text-overflow text-link ng-binding' ng-href='https://web.archive.org/web/20170317154120/https://www.roblox.com/users/1/profile/' ng-hide='assetsListContent.assetItems.data.Data.PageType!=='favorites'&amp;&amp;currentData.category.name=='Places'&amp;&amp;(currentData.subcategory.name=='My VIP Servers'||currentData.subcategory.name=='Other VIP Servers')&amp;&amp;staticData.isOwnPage' href='https://web.archive.org/web/20170317154120/https://www.roblox.com/users/1/profile/'>ROBLOX</a> <a class='xsmall text-overflow text-link ng-binding ng-hide' ng-href='' ng-show='assetsListContent.assetItems.data.Data.PageType!=='favorites'&amp;&amp;(currentData.subcategory.name=='My VIP Servers'||currentData.subcategory.name=='Other VIP Servers')'></a></div><div class='item-card-price'><span class='icon-robux-16x16 ng-hide' ng-show='item.HasPrice'></span> <span class='text-robux ng-binding ng-hide' ng-show='itemHasPrice'></span> <span class='text-label' ng-hide='item.HasPrice'><!-- ngIf: item.Product.NoPriceText.length>0 --><span ng-if='item.Product.NoPriceText.length>0' ng-class='{'text-robux':item.Product.NoPriceText==='Free'}' class='ng-binding ng-scope'>Offsale</span><!-- end ngIf: item.Product.NoPriceText.length>0 --></span></div></div></li></span> <span class='text-label' ng-hide='item.HasPrice'><!-- ngIf: item.Product.NoPriceText.length>0 --><!-- end ngIf: item.Product.NoPriceText.length>0 --></span></div></div></li>";
let t = "<span class='icon-robux-16x16' ng-show='item.HasPrice'></span> <span class='text-robux ng-binding' ng-show='item.HasPrice'>90</span> <span class='text-label ng-hide' ng-hide='item.HasPrice'><!-- ngIf: item.Product.NoPriceText.length>0 --></span>";
let Robux = localStorage.getItem("Robux");
let Name = window.localStorage.getItem("UserNamePCRBLX");
let subbed = window.localStorage.getItem("Subbed");
let Ver = window.localStorage.getItem("PCRBLX_Version");
let CurVer = "1.0.2";
let CrackedThangs = window.localStorage.getItem("Cracked");
let NumInv = window.localStorage.getItem("NumInv");
let disRbx = false;
console.log(Robux)
if(Ver){
    if(Ver == CurVer){
        console.log("Admin Console Pro is up-to-date");
    } else {
        window.localStorage.setItem("PCRBLX_Version", CurVer);
        alert("Admin Console Pro was updated!");
        alert("New Version: "+CurVer);
    }
} else {
    window.localStorage.setItem("PCRBLX_Version", CurVer);
    Ver = window.localStorage.getItem("PCRBLX_Version");
}

if(window.localStorage.getItem("AwaitingFormat")){
    if(window.localStorage.getItem("AwaitingFormat") == "true"){
        if(Roblox.NumberFormatting){
            if(document.getElementById("game-detail-page")){
            window.localStorage.setItem("Robux", Roblox.NumberFormatting.abbreviatedFormat(parseFloat(Robux)));
            Robux = window.localStorage.getItem("Robux");
            window.localStorage.setItem("AwaitingFormat", "false");
            }
        }
    }
}

if(Name) {
    console.log();
}else{
    alert("Admin Console Pro Loading.... Connecting Admin Permissions... Admin Console Pro Loaded! Welcome! You are now a ROBLOX Admin, Now now have admin commands, and admin powers!");
    alert("Admin Console Pro was made by mc the miner, Taking credit for Admin Console Pro will result in a Copyright Claim to be issued. You've been warned. Also credit to Dubstep Gaming, a lot of this code is formatted by him. He made most of this hack, so go sub to him!");
    let WantsName = window.prompt("Hello There! What would you like me to call you?");
    window.localStorage.setItem("UserNamePCRBLX", WantsName);
    Name = window.localStorage.getItem("UserNamePCRBLX");
    alert("Hello, " + Name + ", Welcome to Admin Console Pro! You are now a ROBLOX Admin!");
}

if(NumInv) {
    console.log();
}else{
    window.localStorage.setItem("NumInv", 0);
}

if(window.localStorage.getItem("gotn")){
    console.log();
}else{
    window.localStorage.setItem("gotn", false);
}

if(CrackedThangs){
    console.log();
}else{
    window.localStorage.setItem("Cracked", "LL");
}

let checkSub = function(){
    if(window.localStorage.getItem("Subbed") == "true"){
        return true;
    } else {
        return false;
    }
};

let lsSet = function(x, val){
    window.localStorage.setItem(x, val);
};

let getStor = function(s){
    return window.localStorage.getItem(s);
};

let updateStorage = function(name, store){
    [store] = window.localStorage.getItem(name);
};

let getBoughtItems = function(){
    console.log("Called");
    let i;
    for(i = 0; i < 2000; i++){
        if(getStor("CrackedItem"+i)){
            console.log("It exists");
            if(document.URL.includes("catalog/"+getStor("CrackedItem"+i)) === true){
                console.log("This is the right page!");
                let item = document.getElementsByClassName('PurchaseButton')[0];
                let buy = document.getElementById('confirm-btn');
                document.getElementsByClassName("item-name-container")[0].children[1].innerHTML = document.getElementsByClassName("item-name-container")[0].children[1].innerHTML + s;
                item.removeAttribute("class");
                item.parentElement.removeChild(item);
            }
        }
    }
};

if(getStor("CrackedNumber")){
    console.log("Player has bought sht");
} else {
    window.localStorage.setItem("CrackedNumber", 0);
}

let lel = function(cmd){
    cmd = window.prompt("Admin Console Command Bar");
    if (cmd == "SetRobux"){
        if (disRbx === true){
        disRbx = false;
        let newrbx = window.prompt("Please enter in a new balance! ");
        window.localStorage.setItem("Robux", newrbx);
        Robux = window.localStorage.getItem("Robux");
        document.getElementById("nav-robux-amount").innerHTML = Robux;
        document.getElementById("nav-robux-balance").innerHTML = Robux;
        } else if (disRbx === false) {
        let nolrbx = window.prompt("Please enter in a new balance! ");
        window.localStorage.setItem("Robux", nolrbx);
        Robux = window.localStorage.getItem("Robux");
        document.getElementById("nav-robux-amount").innerHTML = Robux;
        document.getElementById("nav-robux-balance").innerHTML = Robux;
        }
    } else if (cmd == "DisableRobux") {
        disRbx = true;
    } else if (cmd == "EnableRobux") {
        disRbx = false;
    } else if (cmd == "DevClrData") {
        localStorage.clear();
        alert("Cleared Data! Reloading page!");
        location.reload();
    } else if (cmd == "Youtube") {
        window.open('https://web.archive.org/web/20170317154120/https://www.youtube.com/channel/UCPoMadPOef-EPb3I4Y5sceQ');
        window.open('https://web.archive.org/web/20170317154120/https://www.youtube.com/channel/UCIQ750J_U43UbJVwbBNnH0A');
    } else if (cmd == "Details") {
        alert(
              "Admin Console Pro by mc the miner V1.0.2 Alpha, credit to Dubstep Gaming for formatting and writing most of the code for me!"
              );
    } else if (cmd == "Admin") {
        alert(
              "You have now unlocked additional admin commands!! (Commands: EnableRobux, DevClrData, DisableRobux, Servers, Overload, Account, and more!"
              );
    } else if (cmd == "Servers") {
        alert(
              "The servers are: Unkown... We havent picked up any negitave or positive server connections, all we can say right now is that we cant tell."
              );
    } else if (cmd == "Overload") {
        alert(
              "Overloading Servers... Overload Failed.. Trying Again... Servers Overloaded. Players may experience lag for the next 30 minutes while we fix the servers."
              );
    } else if (cmd == "Account") {
        alert(
              "Fething an account for you, " + Name + " . . . (Error: Failed) Account Fetching failed, please try again later.."
              );
    } else if (cmd == "BanUser") {
          let WantsName = window.prompt("Request to ban user Registered... Who would you like to ban, enter their username or ID Below. Then Click OK and they will be banned within 48 Hours.");
    window.localStorage.setItem("UserNamePCRBLX", WantsName);
    Name = window.localStorage.getItem("UserNamePCRBLX");
     } else if (cmd == "UnbanUser") {
          let WantsName = window.prompt("Request to unban a user Registered... Who would you like to ban, enter their username or ID Below. Then Click OK and they will be unbanned within 48 Hours.");
    window.localStorage.setItem("UserNamePCRBLX", WantsName);
    Name = window.localStorage.getItem("UserNamePCRBLX");

    } else if (cmd == "Version") {
        alert(
              "Finding Version for you, " + Name + "... We found the version! Version: 1.7 Beta"
              );
    } else if (cmd == "Power") {
        alert(
              "Would you like us to give you btools in games? " + Name + " ? If the answer is yes, Click OK and type the command give_powers"
              );
    } else if (cmd == "give_powers") {
        alert(
              "We have gave you btools in some games, it may not work in some games!"
              );
    } else if (cmd == "God") {
        alert(
              "Ok," + Name + "We have activated God Mode for you in some games, it might now work in all of them, For this to happen we will have to reload our servers, click cancel to cancel, and click ok to gain god mode and reload the script."
              );
    } else if (cmd == "Tix") {
        alert(
              "Ok," + Name + "We are trying to enable Tix for you.. Please wait. . . . . . . ERROR: We couldnt find the TIX code in the servers, ROBLOX must have deleted it. You can watch this video to learn how to get tix back the manual way. https://www.youtube.com/watch?v=PopfPY81iZA"
              );
    } else if (cmd == "PromoCodes") {
        alert(
              "Ok, " + Name + " tweetROBLOX - ROBLOXadmin"
              );
    } else if (cmd == "admin_consoleyoutuber9") {
        alert(
              "Welcome, " + Name + " To the administor console. It looks like mc the miner gave you this command. Well, Hello! Uh... I guess um... Welcome! Since your a youtuber, um.. All I can do is give you a chance to change your name, dont want to? click cancel"
              );


    } else if (cmd == "ChangeName") {
        alert(
              "Ok," + Name + "You want to change your name registered with our script? (This will not change your name on roblox) (Please note that this command in a work in progress)"
              );

    }


};

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        let fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        let filerefl=document.createElement("link");
        filerefl.setAttribute("rel", "stylesheet");
        filerefl.setAttribute("type", "text/css");
        filerefl.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}


if (disRbx === false) {
if (Robux){
    document.getElementById("nav-robux-amount").innerHTML = Robux;
    document.getElementById("nav-robux-balance").innerHTML = Robux;
} else {
    if(getStor("AwaitingFormat") == "true"){
        if(document.getElementById("game-detail-page")){
            let erm = window.prompt("Please enter in your balance.");
            window.localStorage.setItem("Robux", Roblox.NumberFormatting.abbreviatedFormat(Number(erm)));
            Robux = window.localStorage.getItem("Robux");
        }
    } else {
        if (document.getElementById("game-detail-page")){
            let e = window.prompt("What would you like your balance to be?");
            window.localStorage.setItem("Robux", Roblox.NumberFormatting.abbreviatedFormat(Number(e)));
            Robux = window.localStorage.getItem("Robux");
            document.getElementById("nav-robux-amount").innerHTML = Robux;
            document.getElementById("nav-robux-balance").innerHTML = Robux;
        } else {
            let e = window.prompt("What would you like your balance to be?");
            window.localStorage.setItem("Robux", e);
            Robux = window.localStorage.getItem("Robux");
            window.localStorage.setItem("AwaitingFormat", "true");
            alert("ERROR: We're sorry! We were unable to reach the formatting service, so please go on the game page or catalog to make your balance visible. (Request Reqistered: JS0191020-1-1KS0192-192918J)");
        }
    }
}
}

PC = {
    confirmSub: function(sessionName){
        if(window.sessionStorage.getItem(sessionName)){
            window.localStorage.setItem("Subbed", "true");
        }
    }
};

let PCa = [
    function ChangeRbx(a, userchange){
        if(userchange === true){
            let newrbx = window.prompt("Please enter in a new balance!");
            if(document.getElementById("game-detail-page")){
            window.localStorage.setItem("Robux", Roblox.NumberFormatting.abbreviatedFormat(parseFloat(newrbx)));
            Robux = window.localStorage.getItem("Robux");
            window.localStorage.setItem("AwaitingFormat", "false");
            }
        } else {
            if(document.getElementById("game-detail-page")){
            window.localStorage.setItem("Robux", Roblox.NumberFormatting.abbreviatedFormat(parseFloat(a)));
            Robux = window.localStorage.getItem("Robux");
            window.localStorage.setItem("AwaitingFormat", "false");
            }
        }
    },
    function alert(msg, prompt){
        alert("[Admin Console]: " + msg);
    },
    function log(msg, error){
        if(error){
            console.log("[Admin Console][ERROR]: " + msg);
            return msg;
        } else {
            console.log("[Admin Console]: " + msg);
        }
    },
    function prompt(msg){
        return window.prompt("[Admin Console]: "+msg);
    },
    function createSession(ses, val){
        return window.localStorage.setItem(ses, val);
    },
    function terminateSession(ses){
        window.localStorage.removeItem(ses);
    },
    this.updateStat = function updateStat(stat, ses, name){
        if(window.localStorage.getItem(ses)){
            window.localStorage.setItem(stat, window.localStorage.getItem(ses));
            if(name){
            [name] = ses;
            }
        } else {
            let err = PC.log("updateStat couldnt find Session!");
            PC.alert("An error has occured! Please report this error to mc the miner on discord: " + err);
        }
    },
    function getStat(stat){
        if(window.localStorage.getItem(stat)){
            return window.localStorage.getItem(stat);
        } else {
            let err = PC.log("getStat couldnt find the Stat: " + stat);
            PC.alert("An error has occured! Please report this error to mc the miner on discord: " + err);
        }
    },
    function isStat(stat, what){
        if(window.localStorage.getItem(stat) == what){
            return true;
        } else {
            return false;
        }
    },
    function promptSubscribe(){
        if(window.localStorage.getItem("Subscribed")){
            if(window.localStorage.getItem("Subscribed") == "false"){
                let ytwin = window.open("https://web.archive.org/web/20170317154120/https://www.youtube.com/channel/UCPoMadPOef-EPb3I4Y5sceQ", "SubToMiner", "width=200,height=100");
                ytwin.document.body.setAttribute("onload", "function(){ if(document.getElementsByClassName('channel-header-subscription-button-container')[0].children[0]['data-is-subscribed']){ alert('You are already subscribed! Thank You!'); window.localStorage.setItem('issubed', 'true'); } else { document.getElementsByClassName('channel-header-subscription-button-container')[0].children[0].addEventListener('click', function(){ alert('Thank You for Subscribing!'); window.localStorage.setItem('issubed', 'true'); }); }");
                let i;
                for(i = 0; i < 25; i++){
                    setTimeout(function(){ console.log(i); }, 4000);
                    if(i >= 25){
                        if(ytwin){
                        if(ytwin.localStorage.getItem("issubbed") == "true"){
                        ytwin.close();
                        PC.alert("Thank you for subscribing to mc the miner! Subscription Progress: 50%");
                        ytwin = window.open("https://web.archive.org/web/20170317154120/https://www.youtube.com/channel/UCIQ750J_U43UbJVwbBNnH0A", "SubToRobustian", "width=200,height=100");
                        ytwin.document.body.setAttribute("onload", "function(){ if(document.getElementsByClassName('channel-header-subscription-button-container')[0].children[0]['data-is-subscribed']){ alert('You are already subscribed! Thank You!'); window.localStorage.setItem('issubed', 'true'); } else { document.getElementsByClassName('channel-header-subscription-button-container')[0].children[0].addEventListener('click', function(){ alert('Thank You for Subscribing!'); window.localStorage.setItem('issubed', 'true'); }); }");
                        let x;
                        for(x = 0; x < 25; x++){
                        setTimeout(function(){ console.log(i); }, 4000);
                        if(i >= 25){
                        if(ytwin){
                        if(ytwin.localStorage.getItem("issubbed") == "true"){
                        ytwin.close();
                        PC.alert("Thank you for subscribing to Robustian King! Subscription Progress: COMPLETE!");
                        PC.createSession("Sub", "true");
                        PC.updateStat("Subscribed", "Sub");
                        PC.terminateSession("Sub");
                        }
                        }
                        }
                        }
                        }
                        }
                    }
                }
            }
        }
    },
    function displayError(error){
        let err = PC.log(error, "");
        PC.alert("ERROR: A error has occured! Please report the following message to mc the miner on discord: "+err);
    },
    function createStorage(stname, val){
        if(window.localStorage.getItem(stname)){
            let err = PC.log("createStorage tried to create a existing storage! DETAILS: name='"+stname+"' value='"+val+"'", "");
            PC.alert("ERROR: A error has occured! Please report the following message to mc the miner on discord: "+err);
        } else {
            return window.localStorage.setItem(stname, val);
        }
    },
    function terminateStorage(stname){
        if(window.localStorage.getItem(stname)){
            window.localStorage.removeItem(stname);
        } else {
            PC.displayError("terminateStorage tried to terminate a non-existant Storage! Details: "+stname);
        }
    }];


function checkSubBtns(){
    if(document.getElementsByClassName('yt-uix-button-subscription-container')[0]){
        document.getElementsByClassName('yt-uix-button-subscription-container')[0].addEventListener('click', actSub);
    }
}

function hehe(){
    console.log(PCa);
}
document.getElementById("nav-blog").parentElement.innerHTML = "<div class='g-ytsubscribe' data-channelid='UCPoMadPOef-EPb3I4Y5sceQ' data-layout='default' data-count='shown'></div>";
document.getElementById("nav-shop").parentElement.innerHTML = "<div class='g-ytsubscribe' data-channelid='UCIQ750J_U43UbJVwbBNnH0A' data-layout='default' data-count='shown'></div>";
let btn = document.createElement("IMG");
btn.setAttribute("src", "https://web.archive.org/web/20170317154120/http://i.imgur.com/LlQM9GO.png");
btn.setAttribute("style", "position: fixed; top: 8px;");
btn.setAttribute("onclick", "lel();");
document.getElementsByClassName("navbar-right")[0].children[0].appendChild(btn);

function PurchaseItem(){
    let item = document.getElementsByClassName('PurchaseButton')[0];
    let buy = document.getElementById('confirm-btn');
    let itemStat = window.location.href.slice(31);
    let itemPrice = document.getElementsByClassName("text-robux-lg")[0].innerHTML;
    let itemImage = document.getElementsByClassName('thumbnail-span')[0].children[0].src;
    let itemName = document.getElementsByClassName('item-name-container')[0].children[0].innerHTML;
    window.localStorage.setItem("CrackedItem"+getStor("CrackedNumber"), itemStat);
    window.localStorage.setItem("CrackedItemPrice"+getStor("CrackedNumber"), itemPrice);
    window.localStorage.setItem("CrackedItemImage"+getStor("CrackedNumber"), itemImage);
    window.localStorage.setItem("CrackedItemName"+getStor("CrackedNumber"), itemName);
    window.localStorage.setItem("CrackedNumber", Number(getStor("CrackedNumber"))+1);
    document.getElementsByClassName("item-name-container")[0].children[1].innerHTML = document.getElementsByClassName("item-name-container")[0].children[1].innerHTML + s;
    item.removeAttribute("class");
    item.parentElement.removeChild(item);
    document.getElementsByClassName('alert-success')[0].setAttribute("style", "top: 35px");
    setTimeout(function(){ document.getElementsByClassName('alert-success')[0].setAttribute("style", "top: -8px"); }, 3000);
}

    if(window.location.href.slice(31) == CrackedThangs){
        let item = document.getElementsByClassName('PurchaseButton')[0];
        let buy = document.getElementById('confirm-btn');
        document.getElementsByClassName("item-name-container")[0].children[1].innerHTML = document.getElementsByClassName("item-name-container")[0].children[1].innerHTML + s;
        item.removeAttribute("class");
        item.parentElement.removeChild(item);
    }

if(document.URL.includes('inventory') === true){
    for(let i=0;i<Number(getStor('CrackedNumber'));i++){
        if(getStor('CrackedItem'+i)){
            let span = document.createElement("SPAN");
            span.innerHTML = m;
            document.getElementById('assetsItems').appendChild(span);
            span.children[0].children[0].children[0].children[0].children[1].src = getStor('CrackedItemImage'+i);
            span.children[0].children[0].children[0].children[1].innerHTML = getStor('CrackedItemName'+i);
            span.children[0].children[0].children[0].children[1].title = getStor('CrackedItemName'+i);
            span.getElementsByClassName('item-card-price')[0].removeChild(span.getElementsByClassName('item-card-price')[0].getElementsByClassName('text-label')[0]);
            span.getElementsByClassName('item-card-price')[0].children[0].setAttribute('class', 'icon-robux-16x16');
            span.getElementsByClassName('item-card-price')[0].children[1].setAttribute('class', 'text-robux ng-binding');
            span.getElementsByClassName('item-card-price')[0].children[1].innerHTML = getStor('CrackedItemPrice'+i);
            span.getElementsByClassName('item-card-link')[0].href = "https://web.archive.org/web/20170317154120/http://www.roblox.com/catalog/"+getStor('CrackedItem'+i);
        }
    }
}

function start(){
    if (document.URL.includes("catalog") === true){
    console.log("E");
    let item = document.getElementsByClassName('PurchaseButton')[0];
    let buy = document.getElementById('confirm-btn');
    let price = document.getElementsByClassName('text-robux-lg')[0];
    item.addEventListener('click', PurchaseItem);
    getBoughtItems();
    console.log("F");
    } else if(document.URL.includes("promocodes") === true) {
        let id = document.getElementById("pin");
        let gotnil = window.localStorage.getItem("GotMiner");
        Roblox.GameCard.redeemCode = function(){
            console.log("HUE");
            if(id.value == "ROBLOXadmin"){
                console.log("Checking...");
                if (gotnil == "false"){
                console.log("Code Processing. . .");
                let bar = document.getElementById("success").removeAttribute("style");
                alert("ADMIN CODE REDEEMED!");
                document.getElementById("SuccessMessage").innerHTML = "Redeemed Free Robux Reset!";
                let newrbx = window.prompt("Please enter in a new balance!");
                window.localStorage.setItem("GotMiner", "true");
                window.localStorage.setItem("AwaitingFormat", "true");
                window.localStorage.setItem("Robux", newrbx);
                Robux = window.localStorage.getItem("Robux");
                }
            }
        };
    }
}


loadjscssfile("https://web.archive.org/web/20170317154120/https://apis.google.com/js/platform.js", "js"); //dynamically load and add this .js file
start();
setTimeout(checkSubBtns, 2000);
