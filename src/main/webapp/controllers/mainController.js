'use strict';

var app =angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/home', {templateUrl: '/views/logowanie/logowanie.html', controller: 'logowanieController'});
    $routeProvider.when('/ankietowany', {templateUrl: '/views/ankietowany/ANKIETOWANY_main.html', controller: 'ankietowanyController'});
    $routeProvider.when('/audytor', {templateUrl: '/views/audytor/AUDYTOR_main.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.when('/nowySzablon/:id', {templateUrl: '/views/audytor/definiowanie_szablonu_ankiety.html', controller: 'audytorController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
app.filter('xlat', ['$rootScope', function($rootScope) {
	  // The code here executes only once, during initialization.
	  // We'll return the actual filter function that's executed
	  // many times.
	  var tables = {
		//main view
	    'en': { 'HELLO': 'Hello ' },
	    'pl': { 'HELLO': 'Witaj ' },
	    'en': { 'LOGOUT': 'Log out' },
	    'pl': { 'LOGOUT': 'Wyloguj' },
	    'en': { 'SETTINGS': 'Settings' },
	    'pl': { 'SETTINGS': 'Ustawienia' },

	    //Ankietowany view
	    'en': { 'QUESTIONNAIRELIST': 'List of avaiable questionnaires:' },
	    'pl': { 'QUESTIONNAIRELIST': 'Lista dostępnych ankiet:' },
	    'en': { 'COURSENAME': 'Name of course' },
	    'pl': { 'COURSENAME': 'Nazwa kursu' },
	    'en': { 'TEACHER': 'Teacher' },
	    'pl': { 'TEACHER': 'Prowadzący' },
	    'en': { 'STARTDATE': 'Start date' },
	    'pl': { 'STARTDATE': 'Data rozpoczęcia' },
	    'en': { 'ENDDATE': 'End date' },
	    'pl': { 'ENDDATE': 'Data zakończenia' },
	    'en': { 'STATUS': 'Status' },
	    'pl': { 'STATUS': 'Status' },

	    //Wypelnianie_ankiety view
	    'en': { 'QUESTIONNAIRE': 'QUESTIONNAIRE' },
	    'pl': { 'QUESTIONNAIRE': 'ANKIETA' },
	    //COURSENAME defined in Ankietowany view section
	    //TEACHER defined in Ankietowany view section
	    'en': { 'QUESTION': 'Question' },
	    'pl': { 'QUESTION': 'Pytanie' },
	    'en': { 'PREVIOUSQUESTION': 'Previous question' },
	    'pl': { 'PREVIOUSQUESTION': 'Poprzednie pytanie' },
	    'en': { 'NEXTQUESTION': 'Next question' },
	    'pl': { 'NEXTQUESTION': 'Następne pytanie' },
	    'en': { 'ANSWER': 'Answer' },
	    'pl': { 'ANSWER': 'Odpowiedź' },
	    'en': { 'CANCEL': 'Cancel' },
	    'pl': { 'CANCEL': 'Anuluj' },
	    'en': { 'SAVEQUESTIONNAIRE': 'Save questionnaire' },
	    'pl': { 'SAVEQUESTIONNAIRE': 'Zapisz ankietę' },
	    'en': { 'SENDQUESTIONNAIRE': 'Send questionnaire' },
	    'pl': { 'SENDQUESTIONNAIRE': 'Wyślij ankietę' },

	    //Audytor_MAIN view
	    'en': { 'NEWQUESTIONNAIRE': 'Create new questionnaire template' },
	    'pl': { 'NEWQUESTIONNAIRE': 'Utwórz nowy szablon ankiety' },

	    //Nowy szablon view
	    'en': { 'NEWQUESTIONNAIREDEF': 'Definition of new questionnaire template' },
	    'pl': { 'NEWQUESTIONNAIREDEF': 'Definiowanie szablonu ankiety' },
	    'en': { 'QUESTIONNAIRENAME': 'Name of questionnaire' },
	    'pl': { 'QUESTIONNAIRENAME': 'Nazwa szablonu' },
	    'en': { 'NEWQUESTION': 'Add new question' },
	    'pl': { 'NEWQUESTION': 'Dodaj nowe pytanie' },
	    'en': { 'QUESTIONTYPE': 'Question type' },
	    'pl': { 'QUESTIONTYPE': 'Typ pytania' },
	    'en': { 'QUESTIONTYPEOPEN': 'Open' },
	    'pl': { 'QUESTIONTYPEOPEN': 'Otwarte' },
	    'en': { 'QUESTIONTYPESCALE': 'Open' },
	    'pl': { 'QUESTIONTYPESCALE': 'Otwarte' },
	    'en': { 'QUESTIONTYPETF': 'True/False' },
	    'pl': { 'QUESTIONTYPETF': 'TAK/NIE' },
	    'en': { 'QUESTIONLIST': 'List of questions' },
	    'pl': { 'QUESTIONLIST': 'Lista pytań' },
	    'en': { 'QUESTIONORDER': 'Change question order' },
	    'pl': { 'QUESTIONORDER': 'Zmień kolejność pytania' },
	    'en': { 'QUESTIONORDERUP': 'Up' },
	    'pl': { 'QUESTIONORDERUP': 'W górę' },
	    'en': { 'QUESTIONORDERDOWN': 'Down' },
	    'pl': { 'QUESTIONORDERDOWN': 'W dół' },
	    'en': { 'QUESTIONTITLE': 'Question title' },
	    'pl': { 'QUESTIONTITLE': 'Tytuł pytania' },
	    'en': { 'QUESTIONCONTENT': 'Question content' },
	    'pl': { 'QUESTIONCONTENT': 'Treść pytania' },
	    'en': { 'QUESTIONSAVE': 'Save question' },
	    'pl': { 'QUESTIONSAVE': 'Zapisz pytanie' },
	    'en': { 'QUESTIONDELETE': 'Delete question' },
	    'pl': { 'QUESTIONDELETE': 'Usuń pytanie' },
	    //CANCEL defined in Wypelnianie_ankiety view section
	    'en': { 'QUESTIONNAIRESAVE': 'Save questionnaire' },
	    'pl': { 'QUESTIONNAIRESAVE': 'Zapisz szablon ankiety' },
};
	  $rootScope.currentLanguage = 'pl';
	  return function(label) {
	    // tables is a nested map; by first selecting the
	    // current language (kept in the $rootScope as a
	    // global variable), and selecting the label,
	    // we get the correct value.
	    return tables[$rootScope.currentLanguage][label];
	  };
	}]);
