var opt = {
    'tourTitle': 'Tour Title Default',
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
            'target': '#side-menu'
        },
        {
            'title': 'Accueil',
            'content': 'Vous trouverez ici un aperçu de vos projets et des dernières activitées les concernants',
            'target': '#menu-home'
        },
        {
            'title': 'Aperçu',
            'loc': '/app/board',
            'content': 'Cette emplacement contiens vos projets ',
            'target': '#myProject'
        },
        {
            'title': 'Aperçu',
            'loc': '/app/board',
            'content': 'Cette emplacement contiens vos récentes activités ',
            'target': '#myActivity'
        }, {
            'title': "Créer un projet",
            'loc': '/app/new',
            'target': "#createProject",
            'content': "Depuis cette page vous pouvez créer un projet, vous n'êtes pas obliger de le faire maintenant, <strong>un faux projet est disponible pour la suite du tutoriel</strong>"
        },
        {
            'title': 'Liste des projet',
            'content': 'Depuis cette page vous pouvez voir tout vos projets',
            'target': "#listProject",
            'loc' : '/app/view',
        },
        {
            'title': 'Page du projet',
            'content': 'Voici la page principale de votre projet',
            'position': 'center',
            'loc' : '/app/view/tuto',
            'target': ''
        },
        {
            'title': 'Informations',
            'content': 'Cette section regroupes différentes informations a propos de votre projet , le nombre de participants, les dates , le budget et le nombre d\'activitées et d\'hôtels',
            'target': '#infopanel',
            'loc' : '/app/view/tuto'
        }


    ]
};

$(window).on('load', function () {
    iGuider('button', opt);
});