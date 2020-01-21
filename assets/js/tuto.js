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
            'loc': '/app/view',
            'timer': '6000'
        },
        {
            'title': 'Page du projet',
            'content': 'Voici la page principale de votre projet',
            'loc': '/app/view/tuto',
            'target': '#viewProject',
            'timer': '6000'
        },
        {
            'title': 'Informations',
            'content': 'Cette section regroupes différentes informations a propos de votre projet , le nombre de participants, les dates , le budget et le nombre d\'activitées et d\'hôtels',
            'target': '#infopanel',
            'loc': '/app/view/tuto',
            'timer': '6000'
        },
        {
            'title': 'Vote Activité',
            'content': "Cette section affiche les activitées soumises au vote vous pouvez cliquer sur le bouton 'VOIR' pour afficher la description et voter",
            'target': '#activity',
            'loc': '/app/view/tuto',
            'timer': '6000'
        },
        {
            'title': 'Vote Hôtel',
            'content': "Cette section affiche les hôtels soumis au vote vous pouvez cliquer sur le bouton 'VOIR' pour afficher la description et voter",
            'target': '#hotel',
            'loc': '/app/view/tuto',
            'timer': '6000'
        }, {
            'title': "Gestion des participants",
            'content': "Cette section permet de gérer les participants, les inviter, leur ajouter des droits et les retirer du projet",
            'target': '#participants',
            'loc': "/app/users/tuto",
            'timer': '6000'
        }, {
            'title': 'Liste des participants',
            'content': "Depuis ce tableau vous pouvez gérer les droits de chaque participant",
            'target': "#participantsTable",
            'loc': "/app/users/tuto",
            'timer': '6000'
        }, {
            'title': "Droits des participants",
            "content": "Vous pouvez définir 2 types de droits <br><" +
                "ul>" +
                "<li>Administrateur: Ils peuvent inviter des membres, supprimer des membres et valider les activitées/hôtels</li>" +
                "<li>Membres du projet: Ils peuvent soumettre les activitées/hôtels</li>" +
                "</ul>",
            'target': "#selectPerms",
            'loc': "/app/users/tuto",
            'timer': '6000'
        }, {
            'title': "N'oubliez pas de valider",
            "content": "Vous devez valider les changement pour qu'ils prennent effet, pour cela il suffit de cliquer sur le bouton Editer",
            'target': "#edit",
            'loc': "/app/users/tuto",
            'timer': '6000'
        }, {
            'title': "Inviter des participants",
            "content": "Depuis ce bouton vous pourrez récupérer un lien d'invitation ou envoyer des emails d'invitation ",
            'target': "#addUser",
            'loc': "/app/users/tuto",
            'timer': '6000'
        }, {
            'title': "Gestion des activitées",
            "content": "Depuis cette page vous pouvez gérer les activitées en proposition et retenues",
            'target': "#myActivity",
            'loc': "/app/activity/tuto",
            'timer': '6000'
        }, {
            'title': "Activités en attente",
            'content': "Vous trouverez ici les activités en cours de vote",
            'target': '#activityPending',
            'loc': "/app/activity/tuto",
            'timer': '6000'
        }, {
            'title': "Activités approuvées",
            "content": "Ici ce trouve les activités votées et approuvées, vous pouvez consulter la fiche d'activité et remettre au vote <strong>ATTENTION cela supprimera les votes sur cette activité</strong>",
            'target': "#choosenActivity",
            'loc': "/app/activity/tuto",
            'timer': '6000'
        }, {
            'title': "Gestion des hotels",
            'content': "Depuis cette page vous pouvez gérer les hotels en proposition et retenus",
            'target': '#myHotel',
            'loc': '/app/hotel/tuto',
            'timer': "6000"
        }, {
            'title': "Hotels en attente",
            'content': "Vous trouverez ici les hotels en attente de vote",
            'target': "#hotelPending",
            'loc': '/app/hotel/tuto',
            'timer': "6000"
        }, {
            'title': "Hotels approuvés",
            'content': "Ici ce trouve les hotels votés et approuvés, vous pouvez consulter la fiche d'activité et remettre au vote <strong>ATTENTION cela supprimera les votes sur cet hotel</strong>",
            'target': '#hotelFinal',
            'loc': '/app/hotel/tuto',
            'timer': "6000"
        },
        /*TODO BUDGET GOES HERE*/
        {
            'title': "Paramètres du projet",
            'content': "Depuis cette page vous pouvez mettre a jour votre projet, ou le supprimer",
            'target': '#projectSettings',
            'loc': '/app/settings/tuto',
            'timer': "6000"
        }, {
            'title' : "Modifiez vos informations",
            'content': "Depuis cette partie vous pouvez gérer le nom de votre projet sa description et copier le lien d'invitation",
            'target' : "#settings",
            'loc' : '/app/settings/tuto',
            'timer' : "6000"
        }, {
            'title' : "Nouveau lien",
            'content': "En cliquant sur ce obuton vous allez générer un nouveau lien d'invitation cependant les liens déjà envoyé ne serront plus valide",
            'target' : "#newKeyProject",
            'loc' : '/app/settings/tuto',
            'timer' : "6000"
        }, {
            'title' : "Terminer un projet",
            'content': "En cliquant ici le projet serra effacé définitivement) nous n'aurons aucun moyen de restaurer les informations le concernant, utilisez ce bouton avec précaution",
            'target': "#deleteProject",
            'loc' : "/app/settings/tuto",
            'timer' : "6000"
        }


    ]
};

$(window).on('load', function () {
    iGuider('button', opt);
});