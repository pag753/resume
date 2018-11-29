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
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function spanish()
	{
		$array = [
			"Ingeniero de software con un año de experiencia en la parte de backend y un poco de frontend utilizando la tecnología PHP y sus frameworks Codeigniter y Yii2. Participando en proyectos de gestión de información en bases de datos. Estoy abierto a aprender más y usar otras tecnologías sobre todo en JavaScript, Python y Ruby.",
			"Encargado de desarrollo full stack y base de datos del módulo 'instrumentación didáctica' para uso de todos los docentes del Tecnológico Nacional de México.",
		];
	}

	public function english()
	{
		$array = [
			"Software engineer with a year of experience in the backend part and a bit of frontend using PHP technology and its Codeigniter and Yii2 frameworks. Participating in information management projects in databases. I am willing to learn more and use other technologies especially in JavaScript, Python and Ruby.",
			"Responsible for full stack development and database of the module 'didactic instrumentation' for use by all teachers of the National Technological Institute of Mexico."
		];
	}
}

/*
Español:
Antes los docentes hacían la instrumentación didáctica en programas como "word", siguiendo normas y formatos específicos, pero ahora:
-El llenado de datos es rápido, intuitivo y éficaz.
-Al final de la captura los docentes obtienen la instrumentación didáctica en un PDF cumpliendo las normas y formatos requeridos y la confianza de que todo lo que escribieron y guardaron se encuentra en una base de datos.
-El documento una vez generado puede ser consultado o editado en la plataforma cuando y donde ellos quieran desde un navegador web y con una conexión a internet.

Inglés:
Before the teachers made the didactic instrumentation in programs such as "word", following specific standards and formats, but now:
-Filling data is fast, intuitive and effective.
- At the end of the capture the teachers obtain the didactic instrumentation in a PDF complying with the norms and formats required and the confidence that everything they wrote and saved is in a database.
-The document once generated can be consulted or edited on the platform when and where they want from a web browser and with an internet connection.
*/
