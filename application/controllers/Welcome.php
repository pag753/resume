<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */


  public function english()
  {
    mail('pag753@hotmail.com','Inglés',json_encode($_SERVER));
    $arr = [
      'Resume Pablo de Jesús',
      'Full Stack Developer',
      'Career Summary',
      'Software engineer with a year of experience in the backend part and frontend using PHP technology and its Codeigniter and Yii2 frameworks. Participating in information management projects in databases. I am willing to learn more and use other technologies especially in JavaScript, Python and Ruby.',
      'Work Experience',
      'Full Stack Developer',
      'September 2018 - December 2018',
      "Responsible for full stack development and database of the module 'didactic instrumentation' for use by all teachers of the National Technological Institute of Mexico.",
      "Achievements:",
      'Before the teachers made the didactic instrumentation in programs such as "word", following specific standards and formats, but now:',
      "Filling data is fast, intuitive and effective.",
      "At the end of the capture the teachers obtain the didactic instrumentation in a PDF complying with the norms and formats required and the confidence that everything they wrote and saved is in a database.",
      "The document once generated can be consulted or edited on the platform when and where they want from a web browser and with an internet connection.",
      "Technologies used:",
      "Web Developer",
      "February 2018 - July 2018",
      "Responsible for full stack development and database of platform for the management of laundry process in the company 'Lavados Especiales' from Puebla city.",
      "Description",
      "Platform for automate in efficiently way the control of laundry processes and the company administration with the implementation of the project to obtain a better fastest and internal control.",
      "Skills &amp; Tools",
      "Languajes",
      "Others",
      "Education",
      "Computer Systems Enginer",
      "Awards",
      "State programming competition",
      'In the <a href="http://www.itpuebla.edu.mx" target="_blank">IT of Puebla</a> on April 22, 2016. Winner of the third place in the intermediate category.',
      "Language",
      "Spanish",
      "Native",
      "English",
      "Intermediate",
      "Interests",
      "Reading",
      "Swimming",
      "Watching movies",
      "Volunteer",
      "Full Time Misioner",
      "April 2011 - September 2013",
      "National Student Event of Technological Innovation (ENEIT) 2016",
      'National stage in the IT of Pachuca from 22 to 25 November 2016 by the project "Enerluz".',
      'Certifications',
      'Regional stage in IT of Gustavo A. Madero in Mexico City, from 20 to 23 September 2016 by the projects “Enerluz” and "Autosilla”. Winner with “Enerluz” project.',
    ];
    $this->load->view('welcome_message',['arr' => $arr]);
  }

  public function index()
	{
    mail('pag753@hotmail.com','Español',json_encode($_SERVER));
	  $arr = [
	    'Curriculum Vitae Pablo de Jesús',
	    'Desarrollador Full Stack',
	    'Resúmen',
	    'Ingeniero de software con un año de experiencia en la parte de backend y frontend utilizando la tecnología PHP y sus frameworks Codeigniter y Yii2. Participando en proyectos de gestión de información en bases de datos. Estoy dispuesto a aprender más y usar otras tecnologías sobre todo en JavaScript, Python y Ruby.',
	    'Experiencia Laboral',
	    'Desarrollador Full Stack',
	    'Septiembre de 2018 - Diciembre de 2018',
	    "Responsable del desarrollo full stack y la base de datos del módulo 'Instrumentación didáctica' para uso de todos los docentes del Tecnológico Nacional de México.",
	    "Logros:",
	    'Antes los docentes hacían la instrumentación didáctica en programas como "word", siguiendo normas y formatos específicos, pero ahora:',
	    "El llenado de datos es rápido, intuitivo y eficaz.",
	    "Al final de la captura los docentes obtienen la instrumentación didáctica en un PDF cumpliendo las normas y formatos requeridos y la confianza de que todo lo que escribieron y guardaron se encuentra en una base de datos.",
	    "El documento una vez generado puede ser consultado o editado en la plataforma cuando y donde ellos quieran desde un navegador web y con una conexión a internet.",
	    "Tecnologías usadas:",
	    "Desarrollador Web",
	    "Febero de 2018 - Julio de 2018",
	    "Responsable del desarrollo full stack y de base de datos de la plataforma para la gestión del proceso de lavandería en la empresa 'Lavados Especiales' en la ciudad de Puebla.",
	    "Descripción",
	    "Plataforma para automatizar de manera eficiente el control de los procesos de lavado y la administración de la empresa con la implementación del proyecto para obtener un mejor control interno más rápido y eficaz.",
	    "Habilidades y Herramientas",
	    "Lenguajes",
	    "Otros",
	    "Educación",
	    "Ingeniería en Sistemas Computacionales",
	    "Reconocimientos",
	    "Concurso estatal de programación",
	    'En el <a href="http://www.itpuebla.edu.mx" target="_blank">IT de Puebla</a> el 22 de Abril de 2016. Ganador del tercer lugar en la categoría intermedia.',
	    "Idiomas",
	    "Español",
	    "Nativo",
	    "Inglés",
	    "Intermedio",
	    "Intereses",
	    "Leer",
	    "Nadar",
	    "Ver películas",
	    "Voluntariado",
	    "Misionero de Tiempo Completo",
	    "Abril de 2011 - Septiembre de 2013",
      "Evento Nacional Estudiantil de Innovación Tecnológica (ENEIT) 2016",
      'Etapa nacional en el IT de Pachuca del 22 al 25 de noviembre de 2016 por el proyecto “Enerluz".',
      'Certificaciones',
      'Etapa regional en el IT de Gustavo A. Madero en la Ciudad de México, del 20 al 23 de septiembre de 2016 por los proyectos “Enerluz” y “Autosilla”. Ganador con “Enerluz”.',
	  ];
	  $this->load->view('welcome_message',['arr' => $arr]);
	}
}
