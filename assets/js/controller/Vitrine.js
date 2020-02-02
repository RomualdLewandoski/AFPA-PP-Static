import nav from "../template/front/nav.js";
import masthead from "../template/front/masthead.js";
import features from "../template/front/features.js";
import price from "../template/front/price.js";
import talking from "../template/front/talking.js";
import about from "../template/front/about.js";
import foot from "../template/front/foot.js";
import end from "../template/front/end.js";
import login from "../template/front/login.js";

export default function (app, page) {
    return{
        generate : index(app, page)
    }
}

function index(app, page) {
    switch (page.toLowerCase()) {
        case "accueil":
            mainPage(app);
            break;
        case "login":
            loginPage(app);
            break;
        default :
            console.log("T'es perdu ??");
            break;
    }
}
function mainPage(app) {
    app.append(nav().view);
    app.append(masthead().view);
    app.append(features().view);
    app.append(price().view);
    app.append(talking().view);
    app.append(about().view);
    app.append(foot().view);
    app.append(end().view);
}
function loginPage(app){
    app.append(nav(true).view);
    app.append(login().view);
    app.append(end().view)
}