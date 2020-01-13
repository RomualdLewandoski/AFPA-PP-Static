<?php
/**
 * ERROR LANG
 * @uses Controller, Models, View
 */
        /**
        * ERROR MAIN PAGE MESSAGES
        */
            $lang['error_title'] = "OUPS";
            $lang['error_sub'] = "Quelque chose n'a pas marché";
            $lang['error_default'] = "Aucune information sur l'erreur";
            $lang['conf_edit_error'] =" Une erreur interne est survenue lors de la modification de la configuration";

        /**
        * NEWS ERROR
        * @uses News_model, News
        * @description Error for news except unknown
        */
            $lang['news_create_error'] = "Une erreur interne est survenue lors de l'ajout de la news";
            $lang['news_edit_error'] = "Une erreur interne est survenue lors de la modification de la news";
            $lang['news_delete_error'] = "Une erreur interne est survenue lors de la suppression de la news";

        /**
        * TICKET ERROR
        * @uses Ticket, Ticket_model, Admin, Admin_model
        * @description Error for ticket except unknown
        */

            $lang['ticket_cat_create_error'] = "Une erreur interne est survenue lors de la création de la catégorie de ticket";
            $lang['ticket_cat_edit_error'] = "Une erreur interne est survenue lors de la mise a jour de la catégorie de ticket";
            $lang['ticket_cat_not_exist'] = "La catégorie n'existe pas ou a été supprimée";
            $lang['ticket_cat_delete_error'] = "Une erreur interne est survenue lors de la supression de la catégorie de ticket";
            $lang['conf_error_ticket_cat'] = "Une erreur interne est survenue lors du chargement des catégories de ticket assurez vous qu'au moins une catégorie soit existante";
            $lang['ticket_create_error'] = "Une erreur interne est survenue lors de la création du ticket";
            $lang['ticket_reply_create_error'] = "Une erreur interne est survenue lors de la création de la réponse";
            $lang['ticket_not_owner'] = "Vous n'êtes pas l'auteur du ticket, vous ne pouvez donc pas effectuer cette action";
            $lang['ticket_close_error'] = "Une erreur interne est survenue lors de la fermeture du ticket";
            $lang['ticket_priority_update_error'] = "Une erreur interne est survenue lors de la modification de la prioritée du ticket";

        /**
         * FORUM ERROR
         * @uses Forum, Forum_model, Admin_model, Admin
         * @description Error for forum & Forum_cat except unknown
         */

            $lang['cat_forum_create_error'] = "Une erreur interne est survenue lors de la création de la catégorie";
            $lang['cat_forum_edit_error'] = "Une erreur interne est  survenue lors de la modification de la catégorie forum";
            $lang['cat_forum_delete_error'] = "Une erreur interne est survenue lors de la suppression de la catégorie forum";
            $lang['forum_create_error'] = "Une erreur interne est survenue lors de l'ajout du forum";
            $lang['forum_edit_error'] = "Une erreur interne est survenue lors de la modification du forum";
            $lang['forum_delete_error'] = "Une erreur interne est survenue lors de la suppression du forum";

         /**
         * SLIDE ERROR
         * @uses Admin, Admin_model
         * @description Error for slide
         */

            $lang['slide_edit_error'] = "Une erreur interne est survenue lors de la modification du bandeau";
            $lang['slide_conf_error'] = "Impossible de trouver la configuration initiale du bandeau, avez vous lancé le script d'installation ?";

        /**
        * TOPIC ERROR
        * @uses Forum_model, Forum, Topic_model, Topicreply_model, Topicsub_model
        * @description Error for topics & topic's reply & Topic/reply subscribe
        */

            $lang['topic_create_not_logged'] = "Vous devez être connecté pour poster un sujet";
            $lang['topic_forum_locked'] = "Le forum est verrouillé, vous ne pouvez donc pas écrire de sujet dedans";
            $lang['topic_create_error'] = "Une erreur interne est survenue lors de l'ajout du sujet";
            $lang['topic_edit_error'] = "Une erreur interne est survenue lors de la modification du sujet";
            $lang['topic_delete_error'] = "Une erreur interne est survenue lors de la suppression du sujet";
            $lang['topic_lock_error'] = "Une erreur interne est survenue lors du vérouillage/dévérouillage du sujet";
            $lang['topic_pin_error'] = "Une erreur interne est survenue lors du pin/unpin du sujet";
            $lang['topic_moove_error'] ="Une erreur interne est survenue lors du déplacement du sujet";
            $lang['topic_reply_create_lock'] = "Le sujet est actuellement vérouillé, vous ne pouvez donc pas y répondre";
            $lang['topic_reply_create_error'] = "Une erreur interne est survenue lors de l'ajout de votre réponse";
            $lang['topic_reply_edit_error'] = "Une erreur interne est survenue lors de la modification de la réponse";
            $lang['topic_reply_delete_error'] = "Une erreur interne est survenue lors da suppression de la réponse";
            $lang['topic_sub_error'] = "Une erreur interne est survenue lors du suivi du sujet";

        /**
         * REPORT ERROR
         * @uses Topic_model, Topicreply_model, Report_model
         * @description Error message for topics and reply's report
         */
            $lang['report_create_error'] = "Une erreur interne est survenue lors de la création du report";
            $lang['report_edit_error'] = "Une erreur est survenue lors de la modification du report";
            $lang['report_not_found_error'] = "Le report n'existe pas";

        /**
         * SANCTION ERROR
         * @uses Sanction_model
         * @description Error messages for sanctions
         */
            $lang['sanction_already_banned'] = "Cet utilisateur est déja bannis, il ne sert a rien de le bannir de nouveau pour le moment";
            $lang['sanction_ban_history_add_error'] = "Une erreur interne est survenue lors de l'ajout du ban à l'historique, le joueur est quand même banni";
            $lang['sanction_ban_add_error'] = "Une erreur interne est survenue lors de l'ajout du ban, le joueur n'est donc pas banni";
            $lang['sanction_ban_time_error'] = "Impossible de bannir le joueur pour moins de 1 seconde, utiliser -1 pour un ban définitif";
            $lang['sanction_warn_history_add_error'] = "Une erreur interne est survenue lors de l'ajout du warn à l'historique, le joueur est quand même warn";
            $lang['sanction_warn_add_error'] = "Une erreur interne est survenue lors de l'ajout du warn, le joueur n'est donc pas warn";

        /**
         * 2FA ERROR
         * @uses Models
         * @description error messages for 2fa
         */
            $lang['2fa_create_error'] = "Une erreur interne est survenue lors de la création des options de double authentification";
            $lang['2fa_keygen_error'] = "Une erreur interne est survenue lors de la création de la clé privé de votre compte";
            $lang['2fa_activate_error'] = "Une erreur interne est survenue lors de l'activation ou la desactivation de la double authentification";
            $lang['2fa_code_error'] = "le code saisi est incorrect";
            $lang['2fa_ip_error'] = "Une erreur interne est survenue lors de l'ajout de votre IP à la liste des IPs connus, Merci de contacter un administrateur";

        /**
         * USER ERROR
         * @uses Models
         * @description Error messages for Users action
         */
            $lang['login_pass_error'] = "Mauvais mot de passe";
            $lang['register_error'] = "Une erreur interne est survenue lors du processus d'inscription";
            $lang['register_pass_conf_error'] = "Les mots de passes ne correspondent pas";
            $lang['register_email_error'] = "Votre adresse email ne semble pas valide";
            $lang['register_email_used'] = "Cette adresse email est déja utilisée";
            $lang['register_pseudo_used'] = "Ce nom d'utilsateur est déja utilisé";
            $lang['register_robot_error'] = "Le captcha est invalide";
            $lang['activate_email_missing'] = "Le code est introuvable";
            $lang['activate_email_error'] = "Une erreur interne est survenue lors de l'activation de votre adresse email";
            $lang['activate_email_done'] = "L'adresse email est déjà validé";
            $lang['change_mail_error'] = "Une erreur interne est survenue lors de la modification de l'email";
            $lang['change_mail_conf_error'] = "L'email et sa confirmation ne sont pas identique";
            $lang['change_pass_error'] = "Une erreur interne est survenue lors du changement de mot de passe, il n'a donc pas été mis a jour";
            $lang['old_pass_wrong'] = "Votre ancien mot de passe est invalide, le changement n'a donc pas été effectué";
            $lang['change_pass_conf_error'] = "Le nouveau mot de passe et sa confirmation ne correspondent pas.";
            $lang['change_skin_no_img'] = "Aucune image n'a été trouvée";
            $lang['change_skin_error'] = "Une erreur est survenue, assurez vous que l'image est au format png et qu'elle ne fasse pas plus de 5Mo";
            $lang['add_kroms_error'] = "Une erreur interne est survenue lors de l'ajout de krom$";
            $lang['change_mail_error2'] = "Une erreur interne est survenue lors de la modification de l'activation d'email, l'eamil a cependant bien été changé";
            $lang['adm_change_pass_error'] = "Une erreur interne est survenue lors de la remise a zéro du mot de passe";
            $lang['adm_stop_2fa_error'] = "Une erreur interne est survenue lors de la desactivation de la double authentification";
            $lang['adm_change_perms_error'] = "Une erreur interne est survenue lors du changement de permission";
            $lang['adm_del_skin_error'] = "Le skin du joueur n'a pas pu être supprimé, soit parcequ'il n'existe pas soit a cause d'une erreur interne, si le joueur a encore un skin sur le pannel ci dessous une suppression manuelle est requise";
            $lang['adm_del_user_error'] = "Une erreur interne est survenue lors de la suppression de l'utilisateur";
            $lang['adm_no_promo'] =  "Aucun code promo";
            $lang['adm_promo_add_error'] = "Une erreur interne est survenue lors de l'ajout du code promo";
            $lang['adm_promo_edit_error'] = "Une erreur interne est survenue lors de l'édition du code promo";
            $lang['adm_promo_delete_error'] = "Une erreur interne est survenue lors de la suppression du code promo";
            $lang['adm_promo_code_error'] = "Le code est déja existant dans la base de donnée, meri d'en choisir un autre";
            $lang['adm_promo_date_format_error'] = "La date n'est pas dans un format valide merci d'utiliser les abréviations s pour secondes, m pour minutes, h pour heure, d pour jour et mo pour mois ex: 20d le code durera 20 jours a partir de maintenant";
            $lang['add_promo_error'] = "Une erreur interne est survenue lors de l'ajout de kroms, merci de recommencer ou contactez en administrateur";
            $lang['transfert_error'] = "Une erreur interne est sruvenue lors du transfert de Krom$";
            $lang['not_enought_money'] = "Vous n'avez pas assez de Krom$ pour faire cette action";
            $lang['dedipass_payment_error'] = "Le payement par dédipass a rencontré une erreur interne si vous n'avez pas eu vos Krom$ merci d'ouvrir un support ticket en indiquant la date et l'heure du payement";

        /**
         * EMAIL ERROR
         * @uses Models
         * @description Messages error for mail
         */

            $lang['mail_cooldown_error'] = "Un email a déja été envoyer, merci de patienter 1 heure entre chaque demande d'envoi";

        /**
         * PERMS ERROR
         * @uses Models
         * @descripition Messages for perms
         */
            $lang['perms_add_error'] = "Une erreur interne est survenue lors de l'ajout de la permission";
            $lang['perms_edit_error'] = "Une erreur interne est survenue lors de l'édition de la permission";
            $lang['perms_delete_error'] = "Une erreur interne est survenue lors de la suppression de la permission";

        /**
         * OTHER
         */
            $lang['add_server_conf_error'] = "Une erreur interne est survenue lors de l'ajout du serveur à la configuration";
            $lang['edit_server_conf_error'] = "Une erreur interne est survenue lors de la modification de la configuration du serveur";
            $lang['delete_server_conf_error'] = "Une erreur interne est survenue lors de la suppression du serveur";
            $lang['add_shop_cat_error'] = "Une erreur interne est survenue lors de l'ajout de la catégorie";
            $lang['edit_shop_cat_error'] = "Une erreur interne est survenue lors de l'édition de la catégorie";
            $lang['delete_shop_cat_error'] = "Une erreur interne est survenue lors de la suppression de la catégorie";
            $lang['add_shop_item_error'] = "Une erreur interne est survenue lors de l'ajout de l'article";
            $lang['edit_shop_item_error'] = "Une erreur interne est survenue lors de la modification de l'article";
            $lang['delete_shop_item_error'] = "Une erreur interne est survenue lors de la suppression de l'article";
            $lang['shop_no_item'] = "Impossible de trouver l'article dans la base de donnée";
            $lang['shop_buy_error'] = "Une erreur interne est survenue lors de l'achat, vous avez été remboursé, si ce n'est pas le cas merci d'ouvrir un ticket";
            $lang['shop_connect_error'] = "Impossible de se connecter au serveur, votre achat n'a pas été effectué et vous n'avez pas été débiter";
            $lang['shop_money_error'] = "Vous n'avez pas assez d'argent pour acheter sa";
            $lang['edit_dedipass_error'] = "Une erreur interne est survenue lors de la modification de la configuration de dedipass";
            $lang['edit_psc_error'] = "Une erreur interne est survenue lors de la modification de la configuration de paysafecard";
            $lang['validate_psc_error']= "Une erreur interne est survenue lors de la validation dela paysafecard";
            $lang['submit_psc_error']= "Une erreur interne est survenue lors de l'envoie du code paysafecard";
            $lang['submit_psc_num'] = "Le code PaysafeCard n'est pas valide, assurez vous qu'il fasse bien 16 caractères et qu'il soit composé uniquement de chiffre (0 à 9)";
            $lang['adm_no_psc'] = "Aucune paysafecard en attente";
            $lang['reject_psc_error'] = "Une erreur interne est survenue lors du rejet de la paysafecard";
            $lang['edit_paypal_error'] = "Une erreur interne est survenue lors de la modification de la ocnfiguration paypal";
            $lang['add_paypal_item_error'] = "Une erreur interne est survenue lors de l'ajout de l'article paypal";
            $lang['edit_paypal_item_error'] = "Une erreur interne est survenue lors de la modification de l'article paypal";
            $lang['adm_no_paypal_item'] = "Aucun article paypal";


        /**
        * MISSING ERROR
        * @uses Controller & Model
        * @description Called when missing args in method
        * @example form
        */

            $lang['news_create_missing'] = "Des champs sont manquants dans le formulaire d'ajout de news";
            $lang['news_edit_missing'] = "Des champs sont manquants dans le formulaire d'édition de la news";
            $lang['cat_forum_create_missing'] = "Des champs sont manquants dans le formulaire d'ajout de catégorie forum";
            $lang['forum_create_missing'] = "Des champs sont manquanrs dans le formulaire de création du forum";
            $lang['forum_edit_missing'] = "Des champs sont manquants dans le formulaire d'édition du forum";
            $lang['slide_edit_missing'] = "Des champs sont manquants dans le forumaire d'édition du bandeau";
            $lang['ticket_cat_create_missing'] = "Des champs sont manquants dans le formulaire de création de la catégorie de ticket";
            $lang['ticket_cat_edit_missing'] = "Des champs sont manquants dans le formulaire de modification de la catégorie de ticket";
            $lang['ticket_create_missing'] = "Des champs sont manquants dans le formulaire de création de ticket";
            $lang['ticket_reply_missing'] = "Des champs sont manquants dans le formulaire de réponse au ticket";
            $lang['ticket_priority_missing'] = "Des champs sont manquants dans le formulaire de changement de prioritée du ticket";
            $lang['topic_create_missing'] = "Des champs sont manquants dans le formulaire de nouveau sujet";
            $lang['topic_edit_missing'] = "Des champs sont manquants dans le formulaire d'édition du sujet";
            $lang['topic_moove_missing'] = "Aucun forum n'a été spécifié, le sujet n'a donc pas été déplacé";
            $lang['topic_reply_create_missing'] = "Des champs sont manquants dans le formulaire de réponse au sujet";
            $lang['topic_reply_edit_missing'] = "Des champs sont manquants dans le formulaire d'édition de la réponse";
            $lang['login_missing'] = "Des champs sont manquants dans le formulaire de connexion";
            $lang['register_missing'] = "Des champs sont manquants dans le formulaire d'inscription";
            $lang['warn_missing'] = "Des champs sont manquants dans le formulaire d'avertissement du joueur";
            $lang['ban_missing'] = "Des champs sont manquants dans le formulaire de bannissement du joueur";
            $lang['change_mail_missing'] = "Des champs sont manquants dans le formulaire de changement d'email";
            $lang['change_pass_missing'] = "Des champs sont manquants dans le formualaire de changement de mot de passe";
            $lang['active_2fa_missing'] = "Des champs sont manquants dans le formulaire d'activation/desactivation de la double authentification";
            $lang['perms_add_missing'] = "Des champs sont manquants dans le formulaire de création de permission";
            $lang['perms_edit_missing'] = "Des champs sont manquants dans le formulaire d'édition de permission";
            $lang['add_kroms_missing'] = "Des champs sont manquants dans le formulaire d'ajout de Krom$";
            $lang['adm_change_mail_missing'] = "Des champs sont manquants dans le formulaire de changement d'email";
            $lang['adm_change_perms_missing'] = "Des champs sont manquants dans le formulaire de changement de permission";
            $lang['adm_promo_add_missing'] = "Des champs sont manquants dans le formualire d'ajout de code promo";
            $lang['adm_promo_edit_missing'] = "Des chamsp sont manquants dans le formulaire d'édition de code promo";
            $lang['adm_promo_date_missing'] = "Le champs de date est manquant pour ce code promo";
            $lang['promo_missing'] = "Des champs sont manquants dans le formulaire de code promo";
            $lang['transfert_missing'] = "Des champs sont manauts dans le formulaire de transfert de Krom$";
            $lang['conf_missing'] = "Des champs sont manquants dans le formulaire d'édition de la configuration";
            $lang['add_server_conf_missing'] = "Des champs sont manquants dans le formulaire d'ajout de serveur";
            $lang['edit_server_conf_missing'] = "Des champs sont manquants dans le formulaire d'édition du serveur";
            $lang['add_shop_cat_missing'] = "Des champs sont manquants dans le formulaire d'ajout de catégorie";
            $lang['edit_shop_cat_missing'] = "Des champs sont manquants dans le formulaire d'édition de catégorie";
            $lang['add_shop_item_missing'] = "Des champs sont manquants dans le formulaire d'ajout de l'article";
            $lang['edit_shop_item_missing'] = "Des champs sont manquts dans le formulaire d'edition de l'article";
            $lang['edit_dedipass_missing'] = "Des champs sont manquants dans le formulaire d'édition de la configuration dedipass";
            $lang['edit_psc_missing'] = "Des champs sont manquants dans le formulaire d'édition de la configration de paysafecard";
            $lang['validate_psc_missing'] = "Des champs sont manquants dans le formulaire de validation de la PaysafeCard";
            $lang['submit_psc_missing'] = "Des champs sont manquants dans formulaire d'envoie de la paysafecard";
            $lang['edit_paypal_missing'] = "Des champs sont manquants dans le formulaire de modification de la configuration paypal";
            $lang['add_paypal_item_missing'] = "Des champs sont manquants dans le formulaire d'ajout d'article paypal";
            $lang['edit_paypal_item_missing'] = "Des champs sont manquants dna sle formulaire d'édition de l'article paypal";




        /**
        * UNKNOWN ERROR
        * @uses Controller, Model
        * @description Called when query->row() === NULL but need to be != null
        */

            $lang['unknown_ticket'] = "Aucun ticket n'a été trouvé pour cet identifiant";
            $lang['unknown_news'] = "Impossible de trouver la news";
            $lang['unknown_cat_forum'] = "La catégorie n'existe pas";
            $lang['unknown_forum'] = "Impossible de trouver le forum";
            $lang['unknown_topic'] = "Impossible de trouver le sujet";
            $lang['unknown_user'] = "Utilisateur introuvable";
            $lang['unknown_perms'] = "Impossible de trouver la permission";
            $lang['unknown_user'] = "Impossible de trouver l'utilisateur";
            $lang['unknown_promo'] = "Impossible de trouver le code promo, il a peut être déja été utilisé ou sa date d'expiration est passée";
            $lang['unknown_server'] = "Impossible de trouver le serveur";
            $lang['unknown_shop_cat'] = "Impossible de trouver la catégorie de forum";
            $lang['unknown_shop_item'] = "Impossible de trouver l'article boutique";
            $lang['unknown_psc'] = "Impossible de trouver la paysafecard";
            $lang['unknown_paypal_item'] = "Impossible de trouver l'article paypal";



/**
 * SUCCES LANG
 * @uses Controller, Models, Views
 */

        /**
        * SUCCES MAIN PAGE MESSAGES
        */
            $lang['success_title'] = "Bravo !!!";
            $lang['conf_edit_success'] = "La configuration a bien été éditée";

        /**
        * NEWS SUCCESS
        * @uses News, News_model, Admin, Admin_model
        * @description Success message for news
        */

            $lang['news_create_success'] = "La news a bien été ajoutée";
            $lang['news_edit_success'] = "La news a bien été modifiée";
            $lang['news_delete_success'] = "La news a bien été supprimée";

        /**
        * FORUM SUCCESS
        * @uses Forum, Forum_model, Admin_model, Admin
        * @description Success messages for Forum & Forum_cat
        */

            $lang['cat_forum_create_success'] = "La catégorie forum a bien été ajoutée";
            $lang['cat_forum_edit_success'] = "La catégorie forum a bien été modifiée";
            $lang['cat_forum_delete_success'] = "La catégorie forum a bien été supprimée";
            $lang['forum_create_success'] = "Le forum a bien été ajouté";
            $lang['forum_edit_success'] = "Le forum a bien été modifié";
            $lang['forum_delete_success'] = "Le forum a bien été supprimé";

        /**
        * TICKET SUCCESS
        * @uses Ticket_model, Ticket, Admin, Admin_model
        * @description Success messages for ticket & ticket_cat
        */

            $lang['ticket_cat_create_success'] = "La catégorie de ticket a bien été crée";
            $lang['ticket_cat_edit_success'] = "La catégorie de ticket a bien été mise a jour";
            $lang['ticket_cat_delete_success'] = "La catégorie de ticket a bien été supprimée";
            $lang['ticket_create_success'] = "Le ticket a bien été créer il serra traité prochainement par un modérateur";

        /**
        * SLIDE SUCCESS
        * @uses Admin_model
        * @description Success messages for slide
        */

            $lang['slide_edit_success'] = "Le bandeau a bien été modifié";

        /**
         * TOPIC SUCCESS
         * @uses Topic_model, Topicreply_model, Topicsub_model
         * @description Success messages for topic
         */

            $lang['topic_delete_success_pre'] = "Le sujet ainsi que ";//ne pas supprimer l'espace à la fin
            $lang['topic_delete_success_post'] = " réponse(s) ont bien été supprimé";//ne pas supprimer l'espace au debut

        /**
         * REPORT SUCCESS
         * @uses Topic_model, Topicreply_model, Report_model
         * @description Success message for topics and reply's report
         */

            $lang['report_create_success'] = "Votre report a bien été enregistré, il serra étudié prochainement par un modérateur";

        /**
         * 2FA SUCCES
         * @uses Models
         * @desccription Succes messages for 2FA action
         */
            $lang['2fa_on_success'] = "La double authentification a bien été activée";
            $lang['2fa_off_success'] = "La double authentification a bien été désactivée";

        /**
         * USER SUCCESS
         * @uses Models
         * @description Succes mesages for user action
         */
            $lang['activate_email_success'] = "Votre adresse email a bien été validée";
            $lang['change_mail_success'] = "Votre email a bien été mis a jour";
            $lang['change_pass_success'] = "Votre mot de passe a bien été changé";
            $lang['change_skin_success'] = "Votre skin a bien été changé";
            $lang['add_kroms_success'] = "Les krom$ ont bien été ajouté";
            $lang['adm_change_mail_success'] = "L'adresse email a bien été changée";
            $lang['adm_change_pass_success'] = "Le mot de passe a bien été remis a zéro, un mail contenant le nouveau mot de passe a été envoyé à l'adresse email de l'utilisateur";
            $lang['adm_stop_2fa_success'] = "La double authentification a été desactivée";
            $lang['adm_change_perms_success'] = "La permission a bien été changé";
            $lang['adm_del_skin_sucess'] = "Le skin a bien été supprimé";
            $lang['adm_del_user_success'] = "L'utlisateur ainsi que ses sujet / réponses/report forum et ses tickets ont été supprimés";
            $lang['adm_promo_add_success'] = "Le code promo a bien été ajouté";
            $lang['adm_promo_edit_success'] = "Le code promo a bien été modifié";
            $lang['adm_promo_delete_success'] = "Le code promo a bien été supprimé";
            $lang['add_promo_success'] = "Le code promo a bien été utilisé";
            $lang['transfert_success'] = "Le transfert de Krom$ a bien été effectué";
            $lang['dedipass_payment_success'] = "Le payement dedipass a bien été effectué";

        /**
         * SANCTION SUCCESS
         * @uses Sanction_model
         * @description Success messages for sanction
         */
            $lang['sanction_ban_success'] = "L'utilisateur a bien été banni, si il est en jeux il serra banni lors de sa déconnexion (un kick peut faire l'affaire)";
            $lang['sanction_warn_success'] = "L'utilisateur a bien été warn";

        /**
         * PERMS SUCCESS
         * @uses Models
         * @description Success messages fo perms
         */
            $lang['perms_add_success'] = "La permission a bien été créé";
            $lang['perms_edit_success'] = "La permission a bien été modifée";
            $lang['perms_delete_success'] = "La permission a bien été supprimée ";//laisser le espace a la fin
            $lang['perms_delete_end_success'] = " utilisateurs ont été remis au rang par defaut";//laiser le espace au début

        /**
         * OTHER
         */
            $lang['add_server_conf_success'] = "Le serveur a bien été ajouté";
            $lang['edit_server_conf_success'] = "Le serveur a bien été modifié";
            $lang['delete_server_conf_success'] = "Le serveur a bien été supprimé";
            $lang['add_shop_cat_success'] = "La catégorie a bien été ajoutée";
            $lang['edit_shop_cat_success'] = "La catégorie a bien été modifiée";
            $lang['delete_shop_cat_success'] = "La catégorie a bien été supprimée";
            $lang['add_shop_item_success'] = "L'article a bien été ajouté à la boutique";
            $lang['edit_shop_item_success'] = "L'artivle a bien été modifié";
            $lang['delete_shop_item_success'] = "L'article a bien été supprimé";
            $lang['shop_buy_success'] = "Votre achat a été effectué avec succès";
            $lang['edit_dedipass_success'] = "La configuration dedipass a bien été modifiée";
            $lang['edit_psc_success'] = "La configuration PaysafeCard a bien été modifiée";
            $lang['validate_psc_success'] = "La PaySafeCard a bien été calidée";
            $lang['submit_psc_success'] = "Votre PaySafeCard a bien été envoyée, elle est en attente de validation par un administrateur";
            $lang['reject_psc_success'] = "La paysafecard a bien été refusée";
            $lang['edit_paypal_success'] = "La configuration de paypal a bien été modifiée";
            $lang['add_paypal_item_success']= "L'article paypal a bien été ajouté";
            $lang['edit_paypal_item_success'] = "L'article paypal a bien été modifié";
            $lang['delete_paypal_item_success'] = "L'article paypal a bien été supprimé";

/**
 * PAGE LANG
 * @uses Views
 * @description All message statically displayed on the site
 */

        /**
        * TABLE LANG
        * @uses Views
        * @description Lang for all TABLES, used for sorting or add information, also used as title
        * @example Id, title, cat etc...
        */

            $lang['table_id'] = "ID";
            $lang['table_name'] = "Nom";
            $lang['table_date'] = "Date";
            $lang['table_titre'] = "Titre";
            $lang['table_cat'] = "Catégorie";
            $lang['table_priority'] = "Prioritée";
            $lang['table_state'] = "Statut";
            $lang['table_action'] = "Action";
            $lang['table_order'] = "Ordre";
            $lang['table_author'] = "Auteur";
            $lang['table_img'] = "Image";
            $lang['table_date_init'] = "Date de création";
            $lang['table_date_edit'] = "Date de modification";
            $lang['table_author_report'] = "Auteur du report";
            $lang['table_author_topic'] = "Auteur du sujet";
            $lang['table_author_reply'] = "Auteur de la réponse";
            $lang['table_report'] = "Report";
            $lang['table_type'] = "Type";
            $lang['table_rank'] = "Rang";
            $lang['table_faction'] = "Faction";
            $lang['table_claim'] = "Claim";
            $lang['table_member'] = "Membre";
            $lang['table_point'] = "Points";
            $lang['table_pseudo'] = "Pseudo";
            $lang['table_win'] = "victoires";
            $lang['table_lose'] = "Défaites";
            $lang['table_ratio'] = "ratio";
            $lang['table_ip'] = "Adresse IP";
            $lang['table_message'] = "Message";
            $lang['table_amount'] = "Montant";
            $lang['table_kroms'] = "Nombre de Krom$";
            $lang['table_code'] = "Code promo";
            $lang['table_end_date'] = "Date de fin (non obligatoire pour type unique)";
            $lang['table_end_date2'] = "Date de fin";
            $lang['table_port'] = "Port";
            $lang['table_pass'] = "Mot de passe";
            $lang['table_server'] = "Serveur";
            $lang['table_cmd'] = "Commande";
            $lang['table_prix'] = "Prix";
            $lang['table_desc'] = "Description";
            $lang['table_public'] = "Clé publique";
            $lang['table_private'] = "Clé privée";
            $lang['table_change'] = "Taux de change";
            $lang['table_code'] = "Code";
            $lang['table_mail'] = "Adresse email";
            $lang['table_label'] = "Label";
            $lang['table_url'] = "URL";
            $lang['table_api'] = "Api";
            $lang['table_params'] = "Paramètres";
            $lang['table_delay'] = "Délais";


        /**
         * ACTION LANG
         * @uses Views
         * @description lang for all actions
         * @example Button
         */

            $lang['action_edit'] = "Editer";
            $lang['action_delete'] = "Supprimer";
            $lang['action_create'] = "Créer";
            $lang['action_create_ticket'] = "Créer le ticket";
            $lang['action_create_cat'] = "Créer la catégorie";
            $lang['action_create_forum'] = "Créer le forum";
            $lang['action_create_news'] = "Créer la news";
            $lang['action_create_bug'] = "Créer le rapport de bug";
            $lang['action_edit_news'] = "Editer la news";
            $lang['action_edit_slide'] = "Editer le bandeau";
            $lang['action_reply'] = "Répondre";
            $lang['action_reply_bug'] = "Répondre au report";
            $lang['action_view'] = "voir";
            $lang['action_close'] = "Fermer";
            $lang['action_cat_chose'] = "Choisir une catégorie";
            $lang['action_img_chose'] = "Choisir une image";
            $lang['action_topic_edit'] = "Editer le sujet";
            $lang['action_topic_reply_edit'] = "Editer la réponse";
            $lang['action_topic_new'] = "Nouveau sujet";
            $lang['action_topic_create'] = "Créer le sujet";
            $lang['action_main_login'] = "Se connecter";
            $lang['action_main_register'] = "S'inscrire";
            $lang['action_report_view'] = "Voir le report";
            $lang['action_sanction_author'] = "Sanctionner le joueur";
            $lang['action_sanction_report'] = "Sanctionner l'auteur du report";
            $lang['action_warn'] = "Avertir le joueur";
            $lang['action_ban'] = "Bannir le joueur";
            $lang['action_validate'] = "Valider";
            $lang['action_create_perms'] = "Créer la permission";
            $lang['action_create_promo'] = "Créer le code promo";
            $lang['action_add_server'] = "Ajouter un serveur";
            $lang['action_reject'] = "Refuser";
            $lang['action_validate'] = "Valider";

        /**
         * TICKET LANG
         * @uses Views
         * @description lang for ticket messages
         */

            /** TICKET TITLE & FORM TITLE */
            $lang['ticket_title'] = "Mes tickets d'assistance";
            $lang['new_ticket_title'] = "Créer un nouveau ticket";
            $lang['new_ticket_form_title'] = "Titre du ticket";
            $lang['ticket_read_title'] = "Lecture du ticket";
            $lang['ticket_reply_title'] = "Répondre au ticket";
            $lang['new_ticket_form_cat'] = "Catégorie du ticket";
            $lang['new_ticket_form_text'] = "Contenu du ticket";
            $lang['ticket_change_priority'] = "Changer la prioritée du ticket";

            /** TICKET BUTTON */
            $lang['new_ticket_btn'] = "Nouveau ticket";

            /** TICKET NOTHING  */
            $lang['no_ticket_found'] = "Aucun ticket n'a été trouvé";

            /** TICKET PRIORITY */
            $lang['ticket_priority_0'] = "Très basse";
            $lang['ticket_priority_1'] = "Basse";
            $lang['ticket_priority_2'] = "Normal";
            $lang['ticket_priority_3'] = "Haute";
            $lang['ticket_priority_4'] = "Urgente";

            /** TICKET STATE */
            $lang['ticket_state_0'] = "En attente";
            $lang['ticket_state_1'] = "Réponse du support";
            $lang['ticket_state_2'] = "Fermé";

            /** TICKET CARD INFO */
            $lang['ticket_reply_me'] = "Votre réponse";
            $lang['ticket_reply_team'] = "Réponse du support";
            $lang['ticket_author'] = "Réponse du joueur";


        /**
         * MOD LANG
         * @uses Views
         * @description lang for mod messages
         */

            /** MOD TITLE */
            $lang['mod_title'] = "Espace modérateur";
            $lang['mod_report_sub'] = "Report forum";
            $lang['mod_topic_report'] = "Report de sujets";
            $lang['mod_reply_report'] = "Report de réponses";
            $lang['mod_topic_no_report'] = "Aucun report de sujet";
            $lang['mod_reply_no_report'] = "Aucun report de réponse";
            $lang['mod_report_read_sub'] = "Lecture du report";
            $lang['mod_report_state_0'] = "Non traité";
            $lang['mod_report_state_1'] = "Traité";
            $lang['mod_report_type_0'] = "Sujet";
            $lang['mod_report_type_1'] = "Réponse";

            $lang['mod_ticket_prio'] = "Changer la prioritée";
            $lang['mod_ticket_close'] = "Fermer le ticket";

        /**
         * ADMIN MENU
         * @uses Views
         * @description Main menu for admin's leftbar
         */

            $lang['adm_title'] = "Panel admin";
            $lang['adm_menu_main'] = "Accueil";
            $lang['adm_menu_user'] = "Utilisateurs";
            $lang['adm_menu_news'] = "News";
            $lang['adm_menu_forum'] = "Forum";
            $lang['adm_menu_slide'] = "Slide";
            $lang['adm_menu_ticket_cat'] = "Ticket cat";
            $lang['adm_menu_perms'] = "Permissions";
            $lang['adm_menu_promo'] = "Codes promo";
            $lang['adm_menu_site_conf'] = "Configuration site";
            $lang['adm_menu_shop'] = "Configuration du shop";
            $lang['adm_menu_money'] = "Configuration des payements";


        /**
        * ADMIN SUBMENU
        * @uses Views
        * @description Sub menu for admin's leftbar
        */

            /** USER */
            $lang['adm_sub_user_list'] = "Liste des utilisateurs";
            $lang['adm_sub_user_add'] = "Ajouter un utilisateur";

            /** NEWS */
            $lang['adm_sub_news_list'] = "Liste des news";
            $lang['adm_sub_news_add'] = "Ajouter une news";

            /** FORUM CAT */
            $lang['adm_sub_cat'] = "Catégories";
            $lang['adm_sub_cat_add'] = "Ajouter une catégorie";
            $lang['adm_sub_cat_list'] = "Liste des catégories";

            /** FORUM */
            $lang['adm_sub_forum'] = "Forums";
            $lang['adm_sub_forum_add'] = "Ajouter un forum";
            $lang['adm_sub_forum_list'] = "Liste des forums";

            /** PERMS */
            $lang['adm_sub_perms_list'] = "Liste des permissions";
            $lang['adm_sub_perms_add'] = "Ajouter une permission";

            /** PROMO */
            $lang['adm_sub_promo_list'] = "Liste des promos";
            $lang['adm_sub_promo_add'] = "Ajouter un code promo";

            /** CONF */
            $lang['adm_sub_conf_cgu'] = "CGU";
            $lang['adm_sub_conf_cgv'] = "CGV";
            $lang['adm_sub_conf_rgpd'] = "RGPD";
            $lang['adm_sub_conf_partenaire'] = "Partenaire";
            $lang['adm_sub_conf_contact'] = "contact";
            $lang['adm_sub_server_conf_add'] = "Ajouter un serveur";
            $lang['adm_sub_server_conf_list'] = "Liste des serveurs";
            $lang['adm_sub_shop_cat_add'] = "Ajouter une catégorie";
            $lang['adm_sub_shop_cat_list'] = "Liste des catégories";
            $lang['adm_sub_shop_item_add'] = "Ajouter un article";
            $lang['adm_sub_shop_item_list'] = "Liste des articles";

            $lang['adm_sub_dedipass_edit'] = "Configuration dedipass";
            $lang['adm_sub_paysafecard_edit'] = "Configuration de paysafecard";
            $lang['adm_sub_paysafecard_pending'] = "Paysafecard en attente";
            $lang['adm_sub_paypal_edit'] = "Configuration paypal";
            $lang['adm_sub_paypal_item_add'] = "Ajouter un article paypal";
            $lang['adm_sub_paypal_item_list'] = "Liste des articles paypal";
            $lang['adm_sub_paypal_error'] = "Erreur paypal";
            $lang['adm_sub_paypal_log'] = "Logs d'achat OK paypal";



        /**
         * ADMIN PAGE NAME
         * @uses Views
         * @description used to translate URL of the page to text
         */

            $lang['adm_page_dashboard'] = "Accueil";
            $lang['adm_page_catforum_add'] = "Ajouter une catégorie forum";
            $lang['adm_page_catforum_list'] = "Liste des catégories forum";
            $lang['adm_page_forum_add'] = "Ajouter un forum";
            $lang['adm_page_forum_list'] = "Liste des forums";
            $lang['adm_page_news_add'] = "Aujouter une news";
            $lang['adm_page_news_list'] = "Liste des news";
            $lang['adm_page_news_edit'] = "Edition de news";
            $lang['adm_page_slide'] = "Gestion du slide";
            $lang['adm_page_ticket_cat_add'] = "Ajouter une catégorie de ticket";
            $lang['adm_page_ticket_cat_list'] = "Liste des catégories de ticket";
            $lang['adm_page_perms_add'] = "Ajouter une permission";
            $lang['adm_page_perms_list'] = "Liste des permissions";
            $lang['adm_page_user_list'] = "Liste des utilisateurs";
            $lang['adm_page_user_edit'] = "Edition de l'utilisateur";
            $lang['adm_page_promo_list'] = "Liste des codes promo";
            $lang['adm_page_promo_add'] = "Ajouter un code promo";

            $lang['adm_page_conf_cgu'] = "Edition de la page cgu";
            $lang['adm_page_conf_cgu'] = "Edition de la page cgu";
            $lang['adm_page_conf_cgv'] = "Edition de la page cgv";
            $lang['adm_page_conf_rgpd'] = "Edition de la page rgpd";
            $lang['adm_page_conf_partenaire'] = "Edition de la page partenaire";
            $lang['adm_page_conf_contact'] = "Edition de la page contact";

            $lang['adm_page_server_list'] = "Liste des serveurs (WebSend)";
            $lang['adm_page_server_add'] = "Ajouter un serveur (WebSend)";
            $lang['adm_page_shop_cat_add'] = "Ajouter une catégorie Boutique";
            $lang['adm_page_shop_cat_list'] = "Liste des catégories boutique";

            $lang['adm_page_shop_item_add'] = "Ajouter un article boutique";
            $lang['adm_page_shop_item_list'] = "Liste des articles boutique";
            $lang['adm_page_shop_item_edit'] = "Edition de l'article boutique";

            $lang['adm_page_dedipass_conf'] = "Configuration de dedipass";
            $lang['adm_page_paysafecard_edit'] = "Configuration de PaySafeCard";
            $lang['adm_page_paysafecard_pending'] = "Liste des PaySafeCard en attente";

            $lang['adm_page_paypal_edit'] = "Configuration de paypal";
            $lang['adm_page_paypal_item_add'] = "Ajouter un article paypal";
            $lang['adm_page_paypal_item_list'] = "Liste des articles paypal";

            $lang['adm_page_vote_add'] = "Ajouter un site de vote";
            $lang['adm_page_vote_list'] = "Liste des sites de vote";

            $lang['adm_page_newsletter'] = "Envoyer une newsletter";

        /**
         * ADMIN OTHER
         * @uses Views
         * @description Other messages for admin panel
         */

            /** DASHBOARD */
            $lang['adm_nb_user'] = "Utilisateurs Inscrits";
            $lang['adm_nb_paysafecard'] = "PaysafeCard en attente";
            $lang['adm_nb_shop'] = "Achats boutiques";
            $lang['adm_nb_topic'] = "Sujets forum";
            $lang['adm_nb_ticket'] = "Tickets en attente";

            /** FORUM CAT */
            $lang['adm_cat_forum_order'] = "Ordre de la catégorie";
            $lang['adm_no_cat_forum'] = "Pas de catégorie a afficher";

            /**FORUM */
            $lang['adm_forum_name'] = "Nom du forum";
            $lang['adm_forum_cat'] = "Catégorie du forum";
            $lang['adm_forum_no_cat'] = "Impossible d'ajouter un forum car il n'y a pas de catégorie";
            $lang['adm_forum_order'] = "Ordre du forum";
            $lang['adm_forum_state'] = "Statut du forum";
            $lang['adm_forum_chose_state'] = "Choisir un statut";
            $lang['adm_forum_open'] = "Ouvert";
            $lang['adm_forum_close'] = "Fermé";
            $lang['adm_no_forum'] = "Pas de forum a afficher";

            /** NEWS */
            $lang['adm_news_titre'] = "Titre de la news";
            $lang['adm_news_img'] = "Image de la news";
            $lang['adm_img_none'] = "Aucune";
            $lang['adm_news_texte'] = "Contenu de la news";
            $lang['adm_no_news'] = "Pas de news a afficher";

            /** SLIDE */
            $lang['adm_slide_title'] = "titre du bandeau";
            $lang['adm_slide_img'] = "Image du bandeau";
            $lang['adm_slide_texte'] = "Contenu du bandeau";

            /** TICKET CAT */
            $lang['adm_no_ticket_cat'] = "Pas de catégorie a afficher, avez vous lancer le script d'installation ?";

            /** MULTIPLE USES */
            $lang['adm_cat_name'] = "Nom de la catégorie";

            /** PERMS */
            $lang['adm_perms_name'] = "Nom";
            $lang['adm_perms_admin'] = "Admin";
            $lang['adm_perms_forum'] = "Forum";
            $lang['adm_perms_news'] = "News";
            $lang['adm_perms_report'] = "Report";
            $lang['adm_perms_ticket'] = "Ticket";
            $lang['adm_no_perms'] = "Aucune permission trouvée dans la base de donnée";

            /** USER  */
            $lang['adm_no_user'] = "Aucun utilisateur dans la base de donnée";
            $lang['adm_add_kroms'] = "Ajouter des Krom$";
            $lang['adm_kroms_history'] = "Historique d'achat";
            $lang['adm_delete_skin'] = "Supprimer le skin";
            $lang['adm_user_kroms'] = "Krom$ du joueur";
            $lang['adm_user_mail'] = "Adresse email";
            $lang['adm_user_2fa'] = "Double auth";
            $lang['adm_nb_kroms'] = "Nombre de Krom$";
            $lang['adm_change_mail'] = "Changer l'email";
            $lang['adm_reset_pass'] = "Reset mot de passe";
            $lang['adm_stop_2fa'] = "Desactiver 2FA";
            $lang['adm_change_perms'] = "Changer la permission";
            $lang['adm_no_shoplog'] = "Aucun historique de Krom$";
            $lang['adm_no_server'] = "Aucun serveur trouvé dans la base de donnée";
            $lang['adm_no_shop_cat'] = "Aucune catégorie de shop trouvée";
            $lang['adm_no_shop_item'] = "Aucun article boutique trouvé";


        /**
         * USER MENU
         * @uses Views
         * @description Messages for user's panel
         */

            /**USER TITLE */
            $lang['user_title'] = "Espace membre";


        /**
         * NAVBAR LANG
         * @uses navbar
         * @description Messages for navbar
         */

            $lang['nav_join'] = "Rejoindre";
            $lang['nav_shop'] = "Boutique";
            $lang['nav_community'] = "Communauté";
            $lang['nav_forum'] = "Forum";
            $lang['nav_server'] = "Nos serveurs";
            $lang['nav_faction'] = "Classement faction";
            $lang['nav_jcj'] = "Classement JcJ";
            $lang['nav_minigames'] = "Nos mini-jeux";
            $lang['nav_news'] = "News";
            $lang['nav_more'] = "Plus";
            $lang['nav_bug'] = "BugReport";
            $lang['nav_devnews'] = "DevNews";
            $lang['nav_faq'] = "Aide/FAQ";
            $lang['nav_my_account'] = "Mon compte";
            $lang['nav_pseudo'] = "Pseudo";
            $lang['nav_passwd'] = "Mot de passe";
            $lang['nav_lost'] = "Mot de passe oublié ?";
            $lang['nav_login'] = "Connexion";
            $lang['nav_no_account'] = "Pas encore de compte ?";
            $lang['nav_create_account'] = "Créer un compte";
            $lang['nav_user'] = "Espace membre";
            $lang['nav_admin'] = "Panel admin";
            $lang['nav_buy'] = "Mes achats";
            $lang['nav_login_hist'] = "Historique de connexion";
            $lang['nav_forum_notif'] = "Notifiaction forum";
            $lang['nav_report'] = "Report forum";
            $lang['nav_mod_ticket'] = "Gestion des tickets";
            $lang['nav_ticket'] = "Mes tickets";
            $lang['nav_logout'] = "Déconnexion";

        /**
         * BOUTIQUE LANG
         * @uses Views
         * @description Messages for shop
         */

            $lang['shop_title'] = "Boutique";
            $lang['shop_server_chose'] = "Choisissez un serveur";
            $lang['shop_faction_access'] = "Boutique Faction";
            $lang['shop_game_access'] = "Boutique Mini-Jeux";
            $lang['shop_survie_access'] = "Boutique Survie";
            $lang['shop_inter_access'] = "Boutique Inter-Serveur";
            $lang['shop_sub'] = "Boutique du serveur : "; //ne pas supprimer l'espace à la fin car qqch viens après /!\ /!\
            $lang['shop_buy'] = "Acheter";
            $lang['shop_info'] = "En savoir plus";
            $lang['shop_price'] = "Prix: ";//ne pas supprimer l'espace
            $lang['shop_currency'] = "K$";
            $lang['shop_inter_name'] = "Inter-Serveur";

        /**
         * BUGREPORT LANG
         * @uses Views
         * @description Messages for BugReport
         */

            $lang['bug_title'] = "BugReport";
            $lang['bug_sub_main'] = "Suivez l'avancement de la résolution des bugs";
            $lang['bug_btn_new'] = "Nouveau bug";
            $lang['bug_form_title'] = "Titre du bug";
            $lang['bug_form_cat'] = "Catégorie du bug";
            $lang['bug_form_texte'] = "Description du bug";

        /**
         * SERVER LANG
         * @uses Views
         * @description Messages for servers
         */

            $lang['server_hub'] = "Hub";
            $lang['server_faction'] = "Faction";
            $lang['server_game'] = "Mini-Jeux";
            $lang['server_survie'] = "Survie";

        /**
         * FORUM LANG
         * @uses Views
         * @description Messages for forum
         */

            /** TITLE & SUB_TITLE */
            $lang['forum_title'] = "Forum";
            $lang['topic_edit_sub'] = "Editer un sujet";
            $lang['topic_reply_edit_sub'] = "Editer une réponse";
            $lang['topic_create_sub'] = "Créer un nouveau sujet";

            /** FORM TITLE */
            $lang['topic_form_title'] = "Titre du sujet";
            $lang['topic_form_texte'] = "Contenu du sujet";
            $lang['topic_reply_form_texte'] = "Contenu de la réponse";

            /** NOTHING MESSAGES */
            $lang['no_topic_inside'] = "Aucun sujet dans le forum";
            $lang['no_cat_forum'] = "Aucune catégorie de forum n'a été trouvée";
            $lang['no_forum_in_cat'] = "Aucun forum dans cette catégorie";
            $lang['no_topic'] = "Aucun sujet";

            /** FORUM MAIN PAGE */
            $lang['forum_stats'] = "Statistiques forum";
            $lang['forum_last_topics'] = "Derniers sujets";

            
        /**
         * MAIN LANG
         * @uses Main & Views
         * @description Messages for Main controller and main view (register, login, server etc.
         */

            $lang['main_join'] = "Rejoindre Kromium";
            $lang['main_sub'] = "Une aventure sans limite";
            $lang['main_read_news'] = "Lire plus";
            $lang['main_tweets_title'] = "Tweets de Kromium-Network";
            $lang['main_online_players'] = "Joueur(s) en ligne";
            $lang['main_rank'] = "Classement";

        /**
         * FOOT LANG
         * @uses Views
         * @description Messages for Footer
         */

            $lang['foot_name'] = "Kromium-Network";
            $lang['foot_copy'] = "<a href='/'>Kromium-Network</a> n'est en aucun cas affilié à <a href='https://mojang.com'>MOJANG</a> Reproduction totale ou partielle interdite.";
            $lang['foot_cgu'] = "CGU";
            $lang['foot_cgv'] = "CGV";
            $lang['foot_help'] = "Aide";
            $lang['foot_contact'] = "Contact";
            $lang['foot_partenaire'] = "Partenaires";
            $lang['foot_rgpd'] = "RGPD";
            $lang['foot_join'] = "Nous rejoindre";

         /**
         * LOGIN PAGE
         * @uses view
         * @description Messages for login page
         */

            $lang['login_title'] = "Mon compte";
            $lang['login_sub'] = "Connexion a votre espace joueur";
            $lang['login_no_account'] = "Pas encore de compte ?";
            $lang['login_lost'] = "J'ai oublier mon mot de passe";
            $lang['lost_title'] = "Mot de passe oublié ?";
            $lang['lost_sub'] = "Un trou de mémoire? sa arrive";
            $lang['lost_send'] = "Envoyer un mail";

        /**
         * JOIN PAGE
         * @uses Views
         * @description Messages for join page
         */

            $lang['join_title'] = "téléchargez le launcher";
            $lang['join_chose'] = "Vous ne savez pas quelle version choisir ?";
            $lang['join_explain'] = "Nous vous conseillons de choisir la version Linux (JAR) qui est compatible avec la majoritée des systèmes d'exploiitations (Windows, MacOS, Debian, manjaro, Ubuntu, Etc.)";

        /**
         * FAQ LANG
         * @uses Views
         * @description Messages for FAQ page
         */

            $lang['faq_title'] = "Foire Aux Questions / Aide";
            /** FAQ CAT */
            $lang['faq_frequently'] = "Questions fréquentes";
            $lang['faq_profil'] = "Mon profil (site)";
            $lang['faq_account'] = "Mon compte (Kromium)";
            $lang['faq_shop'] = "Boutique";
            $lang['faq_launcher'] = "Launcher";
            $lang['faq_game'] = "En jeu";

            /** FAQ Q/R CAT1 */

            $lang['faq_cat1_Q1'] = "Comment rejoindre Kromium-Network ? ";
            $lang['faq_cat1_R1'] = " <p>Vous devez être inscrit et avoir téléchargé le launcher sur la page
                                            <a href='/join'>\"Rejoindre\"</a>, une fois celui-ci téléchargé et lancé vous
                                            pourrez alors vous
                                            connecter à nos serveurs. (vous pourrez vous créer un compte sur le site ou
                                            directement en jeu) </p>";
            $lang['faq_cat1_Q2'] = "J'ai oublié mon mot de passe";
            $lang['faq_cat1_R2'] = "<p>Un formulaire envoyant un mail pour réinitialiser votre mot de passe est disponible <a href='/lost'>ICI</a>. </p>";
            $lang['faq_cat1_Q3'] = "J'ai oublié mon adresse mail";
            $lang['faq_cat1_R3'] = "<p>Nous vous invitons à prendre contact avec un administrateur afin de procéder à une procédure personnalisée.
                                    L'adresse mail étant une donnée sensible, aucun moyen n'est mis en place pour la récupérer automatiquement</p>";

            /** FAQ Q/R CAT2 */

            $lang['faq_cat2_Q1'] = "Comment ajouter un skin ?";
            $lang['faq_cat2_R1'] = "<p>Depuis votre espace membre vous avez la possibilité d'envoyer un skin afin que celui-ci soit visible en jeu (après redémarrage du launcher).</p>";
            $lang['faq_cat2_Q2'] = "mon compte a été banni, que faire ?";
            $lang['faq_cat2_R2'] = "<p>Dans le cas où vous avez encore accès à votre espace membre et si vous
                                            souhaitez contester l'opération merci de créer un ticket afin que votre
                                            demande soit traitée. <br>
                                            Si le bannissement porte aussi sur la connexion à l'espace membre merci de
                                            vous rapprocher d'un administrateur sur discord ou teamspeak. <br> Dans le
                                            cas où vous êtes aussi banni de ces plateformes vous pouvez envoyer un mail
                                            à l'adresse contact@kromium.fr en précisant votre pseudo, la date du
                                            bannissement, la raison etc. <br>
                                            Notez aussi qu'un blocage machine peut être effectué et rendre ainsi l'accès
                                            à toute la structure de kromium impossible. Cette sanction nommée
                                            \"Ban-Machine\" n'est utilisée qu'en cas extrême, ne peut être contestée et
                                            est
                                            effectuée uniquement par les administrateurs. </p>";

            /** FAQ Q/R CAT3 */

            $lang['faq_cat3_Q1'] = "Comment et pourquoi validé mon adresse email ?";
            $lang['faq_cat3_R1'] = " <p>La validation d'email est recommandée bien que non obligatoire. Elle permet
                                            de
                                            lier votre compte kromium à votre adresse mail, cette fonction est
                                            nécessaire
                                            afin d'utiliser d'autres fonctions telles que la perte de mot de passe ou
                                            les
                                            achats de points boutiques.<br> Dès votre inscription un mail vous est
                                            envoyé avec un lien pour valider votre adresse email. Si vous n'avez pas
                                            reçu le message ou si vous l'avez supprimé, alors vous pouvez à tout moment
                                            depuis votre
                                            espace membre demander l'envoie d'un nouvel email d'activation.</p>";
            $lang['faq_cat3_Q2'] = "Commen changer mon mot de passe ?";
            $lang['faq_cat3_R2'] = "<p>Directement depuis votre espace membre vous avez la possibilité de modifier
                                            votre mot de passe (cette fonction ne requiert pas la validation de l'email,
                                            notez toutefois qu'un email d'avertissement sera envoyé notifiant du
                                            changement de mot de passe).</p>";
            $lang['faq_cat3_Q3'] = "Comment changer d'adresse mail?";
            $lang['faq_cat3_R3'] = "<p>Directement depuis votre espace membre vous avez la possibilité de modifier
                                            votre adresse mail.<br>
                                            <strong>Attention</strong>, cette fonction n'est disponible que si votre
                                            email a déjà été validé. <br> Notez qu'une fois le changement fait vous
                                            devrez a nouveau valider le nouvel email.</p>";
            $lang['faq_cat3_Q4'] = "Comment supprimer mon compte ?";
            $lang['faq_cat3_R4'] = "<p>Directement depuis votre espace membre vous avez la possibilité de supprimer
                                            votre compte Kromium.<br>
                                            <strong>Attention</strong>, cette fonction est irréversible et instantanée,
                                            vous n'avez pas l'obligation de confirmer votre email pour l'utiliser. Notez
                                            qu'un email d'alerte sera envoyé confirmant la suppression du compte. <br>
                                            Il n'y a aucun moyen de restaurer son compte, aussi l'équipe de Kromium ne
                                            traitera pas les demandes concernant une erreur. Sachez que pour valider la
                                            suppression de compte une confirmation sera nécessaire ainsi aucune erreur
                                            d'inattention ne pourra être commise. <br> La suppression du compte est un
                                            acte volontaire.</p>";

            /** FAQ Q/R Cat4 */

            $lang['faq_cat4_Q1'] = "Quelles sont les conditions pour obtenir un remboursement ?";
            $lang['faq_cat4_R1'] = "<p>Sauf cas particulier Kromium-Network n'effectue pas de remboursement. <br>
                                            Voici une liste non exhaustive des cas où un remboursement peut avoir lieu :
                                            <br>
                                        <div class=\"mt-4\"></div>
                                        <ul>
                                            <li>Erreur dans l'ajout de points boutiques (payement fait mais aucun point
                                                reçu)
                                            </li>
                                            <li>Compte piraté</li>
                                        </ul>
                                        <div class=\"mt-4\"></div>
                                        <strong>Attention</strong>, afin de procéder à un remboursement des pièces
                                        justificatives vous seront demandées, de ce fait vous devez impérativement
                                        contacter un administrateur afin de procéder a cette démarche.
                                        </p>";
            $lang['faq_cat4_Q2'] = "Je n'ai pas reçu mes items en jeu";
            $lang['faq_cat4_R2'] = "<p>Tous les items achetés depuis la boutique se trouvent dans un inventaire
                                            individuel et qui est séparé de votre inventaire en jeu afin d'éviter une
                                            perte de
                                            stuff par manque de place. Vous pouvez accéder à cet inventaire en tapant la
                                            commande \"/réserve\".<br>
                                            Si vous pensez avoir acheté un item et que celui-ci ne se trouve pas dans
                                            votre réserve merci de contacter un administrateur de kromium.
                                        </p>";
            $lang['faq_cat4_Q3'] = "Je n'ai pas reèu mes points boutiques";
            $lang['faq_cat4_R3'] = "<p>Suivant le moyen de payement utilisé un certains temps peut être nécessaire
                                            avant le crédit des points boutiques.<br>
                                            En moyenne, un payement prend 5 minutes à être traité par paypal. <br>
                                            Il n'y a aucun délai pour dedipass.<br>
                                            Le payement par paysafecard étant manuel il peut prendre jusqu'à 48 heures
                                            pour être effectué.<br>
                                            Si dans un délai raisonnable vous n'avez pas reçu vos points boutiques, vous
                                            pouvez contacter un administrateur afin de résoudre le problème.<br>
                                        </p>";
            $lang['faq_cat4_Q4'] = "Queles sont les sanctions en cas de litige injustifié ?";
            $lang['faq_cat4_R4'] = "<p>Un achat équivaut à un contrat aussi en faisant un litige injustifié vous
                                            rompez le contrat passé avec kromium-network (cf <a href=\"/cgv\">Condition
                                                générales de vente</a>).<br>
                                            Dans le cas d'une procédure de litige, quel qu'en soit le résultat, votre
                                            accès aux serveurs de kromium-network sera automatiquement suspendu le
                                            temps d'une explication.<br>
                                            Si cette explication est recevable nous débloquerons votre compte et nous
                                            vous
                                            rembourserons à condition que le litige soit annulé. Notez qu'un litige
                                            entraîne des frais pour Kromium comme pour vous suivant l'issue du litige
                                            <br>
                                            <strong>Aussi est-il préférable d'utiliser un recours à l'amiable !</strong><br>
                                            Dans le cas où vous avez effectué un litige après avoir dépensé ou échangé
                                            les points boutiques sachez que les achats faits avec ces points seront
                                            supprimés et que les points boutiques transférés seront aussi débités. <br>
                                        <div class=\"mt-4\"></div>
                                        Dans le cas d'un litige régulier, un Ban-manchine pourra être appliqué afin
                                        de bloquer définitivement l'accès a toute l'infrastructure de kromium.
                                        </p>";

            /** FAQ Q/R Cat5 */

                $lang['faq_cat5_Q1'] = "Je rencontre une erreur avec le launcher ou Minecraft ne se lance pas";
                $lang['faq_cat5_R1'] = "<p>Dans un premier temps, vérifiez que vous avez Java8 d'installé, ensuite
                                            vérifiez que la version du launcher est compatible avec votre système
                                            d'exploitation : nous vous conseillons d'utiliser la version JAR qui est
                                            compatible pour
                                            tous les systèmes. <br>
                                            Si vous n'arrivez toujours pas à lancer le launcher depuis la version JAR
                                            ouvrez l'invite de commande depuis windows ou un terminal depuis linux/mac
                                            et
                                            glissez le launcher au format JAR dedans puis faites un copier/coller des
                                            logs dans un ticket.</p>";
                $lang['faq_cat5_Q2'] = "J'ai trouvé des bugs";
                $lang['faq_cat5_R2'] = "<p>Nous vous invitons à répertorier les bugs dans le <a
                                                    href=\"/bug\">BugReport</a> afin que ceux-ci soient connus et corrigés
                                            au
                                            plus vite (des récompenses seront peut-être envisagées selon la teneur du
                                            bug).</p>";

            /** FAQ Q/R Cat6 */

                $lang['faq_cat6_Q1'] = "Je rencontre une erreur en jeu";
                $lang['faq_cat6_R1'] = "<p>Si cette erreur est récurrente nous vous invitons à ouvrir un ticket depuis
                                            votre espace membre en joignant le fichier log, il se trouve dans
                                            %appdata%/.kromium/log sur windows et dans ~/.Kromium/log sur mac linux ~
                                            étant votre répertoire utilisateur. Vous ne trouvez pas le fichier .Kromium
                                            sous linux/mac ? Activez l'option pour voir les fichiers cachés (ctrl + h)
                                            sous linux. </p>";
                $lang['faq_cat6_Q2'] = "Je rencontre un bug en jeu";
                $lang['faq_cat6_R2'] = "<p>Nous vous invitons à répertorier les bugs dans le <a
                                                    href=\"/bug\">BugReport</a> afin que ceux-ci soient connus et corrigés
                                            au
                                            plus vite (des récompenses seront peut-être envisagées selon la teneur du
                                            bug).</p>";
                $lang['faq_cat6_Q3'] = "un joueur a un comportement déplacé";
                $lang['faq_cat6_R3'] = " <p>Depuis le jeu vous avez accès à un panel pour effectuer des reports (touche
                                            J)
                                            il vous suffit de détailler ensuite dans la zone de texte l'incident.</p>";

            /**
             * SERVER LANG
             * @uses Views
             * @description Message for server page
             */

                $lang['server_title'] = "Nos serveurs";
                $lang['server_sub'] = "Liste de nos serveurs et de leur status";

            /**
             * GAME LANG
             * @uses Views
             * @description Messages for Games page
             */

                $lang['game_title'] = "Nos mini-jeux";
                $lang['game_sub'] = "Découvrez nos mini-jeux";
                $lang['game_more'] = "En savoir plus";//utilisé dans le panel utilisateur

            /**
             * NEWS LANG
             * @uses Views
             * @description Messages for News page
             */

                $lang['news_title'] = "Nos actualités";
                $lang['news_sub'] = "Restez au courant des dernières nouveautés";
                $lang['news_back'] = "Retour à la liste des news";
                $lang['news_dev_title'] = "Actualités techniques";
                $lang['news_dev_sub'] = "Retrouvez ici toutes nos informations sur les mises à jours et autres correctifs";

            /**
             * RANKING LANG
             * @uses Views
             * @description Messages for ranking page
             */

                $lang['rank_title'] = "Classement";
                $lang['rank_faction'] = "Faction";
                $lang['rank_jcj'] = "Joueur Contre Joueur";

            /**
             * USER LANG
             * @uses Controller, Models, Views
             * @description Messages for user pages
             */

                $lang['user_title'] = "Espace membre";
                $lang['user_sub'] = "Bon retour parmis nous";
                $lang['user_change_skin'] = "Changer de skin";
                $lang['user_member_since'] = "Membre depuis le ";//ne pas supprimer l'espace à la fin
                $lang['user_warn'] = "Avertissements";
                $lang['user_kick'] = "Kicks";
                $lang['user_mute'] = "Mutes";
                $lang['user_ban'] = "Bans";
                $lang['user_balance_title'] = "Mes Krom$";
                $lang['user_kroms_buy'] = "Acheter des Krom$";
                $lang['user_kroms_history'] = "Historique de mes Krom$";
                $lang['user_kroms_give'] = "Transférer des Krom$";
                $lang['user_ip_history'] = "Historique IP";
                $lang['user_last_game_log'] = "Dernière connexion en jeu";
                $lang['user_last_site_log'] = "Dernière connexion au site";
                $lang['user_mail_alert'] = "Vous n'avez pas encore validé votre email, cette action n'est pas obligatoire mais certaines
                    fonctionnalitées ne serront pas disponible. <br>
                    Lors de votre inscription un email de confirmation, vous a été envoyé.<br>
                    Vous ne l'avez pas reçu ou l'avez perdu ? Pas de panique cliquez simplement sur ce message pour
                    renvoyer
                    cet email (veuillez regarder dans les spams si l'email n'apparait pas) l'envoi peut prendre entre 1
                    et 5
                    minutes";
                $lang['user_identity'] = "Mes identifiants";
                $lang['user_change_mail'] = "Changer mon email";
                $lang['user_change_pass'] = "Changer mon mot de passe";
                $lang['user_security'] = "Securité";
                $lang['user_promo'] = "Code promo";
                $lang['user_current_mail'] = "Mon adresse email";
                $lang['user_new_mail'] = "Mon nouvel email";
                $lang['user_new_mail_conf'] = "Confirmer mon email";
                $lang['user_current_password'] = "Mon mot de passe";
                $lang['user_new_pass'] = "Nouveau mot de passe";
                $lang['user_new_pass_conf'] = "Confirmation du mot de passe";
                $lang['user_skin_desc'] = "Vous pouvez ici ajouter un skin depuis votre ordinateur au format 1.7.10 (64x32 pixels). Cette action n'influe pas sur votre skin sur d'autre serveurs.";
                $lang['user_site_history_sub'] = "Historique de connexion au site";
                $lang['user_game_history_sub'] = "Historique de connexion au jeu";
                $lang['user_no_ip'] = "Aucun IP n'est enregistré";
                $lang['user_log_success'] = "Connexion réussie"; //use in history table
                $lang['user_log_error'] = "Identifiants invalides"; //use in history table
                $lang['user_notif_sub'] = "Notifications forum";
                $lang['user_notif_clear'] = "Effecer toutes les notifications";
                $lang['user_no_notif'] = "Aucune notification";
                $lang['user_notif_delete_topic'] = "Sujet supprimé";
                $lang['user_shop_history_sub'] = "Historique d'achat";
                $lang['user_buy_sub'] = "Acheter des Krom$";
                $lang['user_buy_step_1'] = "1. Je choisis un moyen de payement:";
                $lang['user_buy_step_2'] = "2. Je choisis une offre";
                $lang['user_buy'] = "Acheter";
                $lang['user_currency'] = "krom$";
                $lang['user_paypal_offer'] = "Offres Paypal:";
                $lang['user_paysafecard_offer'] = "Offres PaySafeCard";
                $lang['user_dedipass_offer'] = "Offres Dedipass";
                $lang['user_transfert_sub'] = "Transéfer des Krom$";
                $lang['user_transfert_chose'] = "Choisissez un joueur et le montant a transférer";
                $lang['user_transfert'] = "Transférer mes Krom$";
                $lang['user_2fa_desc'] = " <b>Comment utiliser la double authentification ?</b>
                <br><br>
                Vous devez utiliser une application OTP (google authentificator par exemple) et scanner le QRCode.<br>
                Ensuite dans le formulaire ci dessous vous devez entrer le code donné sur l'application pour activer ou
                desactiver ce procéder d'authentification.

                <br><br>
                <b>Comment marche la double authentification ? </b><br><br>
                Lors de votre connexion, nous vérifions si vous avez déja accédé a nos services depuis cet IP, si oui
                alors vous n'avez pas a confirmer votre identité. Dans le cas ou votre IP est inconnu, il vous serra
                demander de saisir un code donné par cette application.
                <br><br>
                <b>Comment la double authentification peut protéger mon compte du piratage ?</b><br><br>
                Dans l'hypothèse ou un pirate réussi a dérober votre mot de passe il lui est impossible sans avoir votre
                téléphone d'obtenir un code de validation correct, en effet les codes d'authentification fonctionne
                gràce a un mécanisme de cryptage contenant une clé privée unique a chaque utilisateur et l'heure du
                serveur, tous les codes ont une durée de vie de 30 secondes et ne peuvent être réutilisés au bout de ce temps.";
                $lang['user_2fa_state'] = "Etat de la double authentification :";
                $lang['user_2fa_on'] = "Actif";
                $lang['user_2fa_off'] = "Inactif";
                $lang['user_2fa_code'] = "Mon code d'authentification";
                $lang['user_activate_2fa'] = "Activer / desactiver l'authentification";
                $lang['user_need_2fa'] = "Ce compte requiert la double authentification, merci de saisir le code disponible depuis votre téléphone.";


                $lang['user_shop_log_done'] = "Complet";
                $lang['user_shop_log_pening'] = "En attente";
                $lang['user_shop_log_failed'] = "Action administrative en cours";
                $lang['user_shop_log_code'] = "Code promo";
                $lang['user_shop_log_paypal'] = "Paypal";
                $lang['user_shop_log_paysafecard'] = "Paysafecard";
                $lang['user_shop_log_dedipass'] = "Dedipass";
                $lang['user_shop_log_transfert'] = "Transfert";
                $lang['user_shop_log_gift'] = "Cadeau admin";

                /**
                 * CART UPDATE
                 * @description Contain all lang for cart messages
                 */

                $lang['add_cart_success'] = "L'article a bien été ajouté au panier";
                $lang['add_cart_error'] = "Une erreur interne est survenue pendant l'ajout de l'article au panier";
                $lang['add_cart_unknown'] = "L'article spécifié est introuvable";

                $lang['remove_cart_success'] = "L'article a bien été supprimé du panier";
                $lang['remove_cart_error'] = "Une erreur interne est survenue lors de la suppression de l'article de votre panier";
                $lang['remove_cart_missing'] = "L'article n'est pas dans votre panier";

                $lang['clear_cart_success'] = "Votre panier a bien été effacé";
                $lang['clear_cart_error'] = "Une erreur interne est survenue lors de la suppression de votre panier, un ou plusieurs articles peuvent encore etre dedans";
                $lang['clear_cart_empty'] = "Impossible d'effacer votre panier car il est vide";

                $lang['shop_add_to_cart'] = "Ajouter au panier";
                $lang['nav_cart'] = "Mon panier";

                $lang['cart_promo_expire'] = "Le code promo a expiré";
                $lang['cart_promo_used'] = "Vous avez déja utiliser le code promo";
                $lang['cart_promo_pending'] = "Le code promo est déja dans votre panier";
                $lang['cart_promo_unknown'] = "Le code promo est introuvable ou a été utilisé";
                $lang['cart_promo_missing'] = "Des champs sont manquants dans le formulaire d'ajout du code promo";
                $lang['cart_promo_error'] = "Une erreur est survenue pendant l'ajout du code promo";
                $lang['cart_promo_success'] = "Le code promo a bien été ajouté";

                $lang['cart_promo_remove_success'] = "Vos codes promos ont bien été retiré du panier";
                $lang['cart_promo_remove_error'] = "Une erreur interne est survenue lors de la suppression des codes promos, il est possible qu'un ou plusieurs codes soit encore présent";
                $lang['cart_promo_remove_empty'] = "Votre panier ne contient pas de code promo";


                $lang['cart_checkout_not_enought_money'] = "Vous n'avez pas assez d'argent pour valider votre panier";
                $lang['cart_checkout_error'] = "Une erreur est survenue, votre achat a été remboursé, votre panier n'a pas été vidé";
                $lang['cart_checkout_success'] = "Votre achat a bien été effectué";
                $lang['cart_checkout_empty'] = "Votre panier est vide";
                $lang['cart_checkout_error_partial'] = "Une erreur interne est survenue une partie de votre panier n'a pas été validé, vous avez été rembourser de la partie non livré";

                $lang['user_vote_step_1'] = "1. Je choisis un site de vote:";
                $lang['user_vote_step_2'] = "2. Je vote et je récupère ensuite ma récompense";