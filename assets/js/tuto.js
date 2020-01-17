var opt = {
    'tourTitle': 'Prise en main',
    'intro': {
        'title': 'Bienvenue dans la visite guidée',
        'content': 'Ce tutoriel vous apprendra les fonctionnalités de bases',
        'overlayOpacity': '0.6'
    },
    'continue': {
        'title': 'Reprendre le tutoriel ? ',
        'content': 'Cliquez sur Continuer pour reprendre a votre dernière étape'
    },
    'tourMap': {
        'enable': false
    },
    'lang': {
        'contDialogBtnBegin': 'Recommencer',
        'contDialogBtnContinue': 'Continuer',
        'introDialogBtnStart': 'Démarer',
        'introDialogBtnCancel': 'Fermer'
    },
    'steps': [
        {
            'title': 'Menu',
            'content': 'Depuis cette barre vous pouvez accédez aux différents éléments de votre projet',
            'target': '#side-menu',
            'timer': '6000'
        },
        {
            'title': 'Accueil',
            'content': 'Vous trouverez ici un aperçu de vos projets et des dernières activitées les concernants',
            'target': '#menu-home',
            'timer': '6000'
        },
        {
            'title': 'Aperçu',
            'loc': '/app/board',
            'content': 'Cette emplacement contiens vos projets ',
            'target': '#myProject',
            'timer': '6000'
        },
        {
            'title': 'Aperçu',
            'loc': '/app/board',
            'content': 'Cette emplacement contiens vos récentes activités ',
            'target': '#myActivity',
            'timer': '6000'
        }, {
            'title': "Créer un projet",
            'loc': '/app/new',
            'target': "#createProject",
            'content': "Depuis cette page vous pouvez créer un projet, vous n'êtes pas obliger de le faire maintenant, <strong>un faux projet est disponible pour la suite du tutoriel</strong>",
            'timer': '6000'
        },
        {
            'title': 'Liste des projet',
            'content': 'Depuis cette page vous pouvez voir tout vos projets',
            'target': "#listProject",
            'loc' : '/app/view',
            'timer': '6000'
        },
        {
            'title': 'Page du projet',
            'content': 'Voici la page principale de votre projet',
            'loc' : '/app/view/tuto',
            'target': '#viewProject',
            'timer': '6000'
        },
        {
            'title': 'Informations',
            'content': 'Cette section regroupes différentes informations a propos de votre projet , le nombre de participants, les dates , le budget et le nombre d\'activitées et d\'hôtels',
            'target': '#infopanel',
            'loc' : '/app/view/tuto',
            'timer': '6000'
        },
        {
            'title': 'Vote Activité',
            'content': "Cette section affiche les activitées soumises au vote vous pouvez cliquer sur le bouton 'VOIR' pour afficher la description et voter",
            'target': '#activity',
            'loc' : '/app/view/tuto',
            'timer': '6000'
        },
        {
            'title': 'Vote Hôtel',
            'content': "Cette section affiche les hôtels soumis au vote vous pouvez cliquer sur le bouton 'VOIR' pour afficher la description et voter",
            'target': '#hotel',
            'loc' : '/app/view/tuto',
            'timer': '6000'
        }


    ]
};

$(window).on('load', function () {
    iGuider('button', opt);
});