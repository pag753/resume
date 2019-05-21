<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * http://example.com/index.php/welcome
     * - or -
     * http://example.com/index.php/welcome/index
     * - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     *
     * @see https://codeigniter.com/user_guide/general/urls.html
     */

    /**
     * Método para consumir la API de IP.
     *
     * @return string
     */
    private function location()
    {
        error_reporting(0);
        $ip = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ip = getenv('HTTP_CLIENT_IP');
        else if (getenv('HTTP_X_FORWARDED_FOR'))
            $ip = getenv('HTTP_X_FORWARDED_FOR');
        else if (getenv('HTTP_X_FORWARDED'))
            $ip = getenv('HTTP_X_FORWARDED');
        else if (getenv('HTTP_FORWARDED_FOR'))
            $ip = getenv('HTTP_FORWARDED_FOR');
        else if (getenv('HTTP_FORWARDED'))
            $ip = getenv('HTTP_FORWARDED');
        else if (getenv('REMOTE_ADDR'))
            $ip = getenv('REMOTE_ADDR');
        else
            $ip = '127.0.0.1';
        // return "IP = $ip " . file_get_contents("http://ip-api.com/json/$ip");
        // return "IP = $ip " . file_get_contents("https://ipapi.co/$ip/json");
        return "IP = $ip " . file_get_contents("https://ipinfo.io/$ip/json");
        /*
         * $ch = curl_init();
         * curl_setopt($ch, CURLOPT_URL, "http://ip-api.com/json/$ip");
         * //curl_setopt($ch, CURLOPT_URL, "https://ipapi.co/$ip/json/");
         * curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         * $result = curl_exec($ch);
         * if (curl_errno($ch)) {
         * return "IP: $ip, Error:" . curl_error($ch);
         * }
         * curl_close ($ch);
         * return "IP : $ip, " . $result;
         */
    }

    /**
     * CV en inglés
     */
    public function index()
    {
        mail('pag753@hotmail.com', utf8_decode('Inglés'), $this->location());
        $arr = [
          0 => 'Resume Pablo de Jesús',
          1 => 'Full Stack Developer',
          2 => 'Career Summary',
          3 => 'Software engineer with a year of experience in the backend part and frontend using PHP technology and its Codeigniter and Yii2 frameworks. Participating in information management projects in databases. I am willing to learn more and use other technologies especially in JavaScript, Python and Ruby.',
          4 => 'Work Experience',
          5 => 'Full Stack Developer',
          6 => 'September 2018 - December 2018',
          7 => "Responsible for full stack development and database of the module 'didactic instrumentation' for use by all teachers of the National Technological Institute  of Mexico.",
          8 => "Achievements:",
          9 => 'Before the teachers made the didactic instrumentation in programs such as "word", following specific standards and formats, but now:',
          10 => "Filling data is fast, intuitive and effective.",
          11 => "At the end of the capture the teachers obtain the didactic instrumentation in a PDF complying with the norms and formats required and the confidence that everything they wrote and saved is in a database.",
          12 => "The document once generated can be consulted or edited on the platform when and where they want from a web browser and with an internet connection.",
          13 => "Technologies used:",
          14 => "Web Developer",
          15 => "February 2018 - July 2018",
          16 => "Responsible for full stack development and database of platform for the management of laundry process in the company 'Lavados Especiales' from Puebla city.",
          17 => "Description",
          18 => "Platform for automate in efficiently way the control of laundry processes and the company administration with the implementation of the project to obtain a better fastest and internal control.",
          19 => "Skills &amp; Tools",
          20 => "Languajes",
          21 => "Others",
          22 => "Education",
          23 => "Computer Systems Enginer",
          24 => "Awards",
          25 => "State programming competition",
          26 => 'In the <a href="http://www.itpuebla.edu.mx" target="_blank">IT of Puebla</a> on April 22, 2016. Winner of the third place in the intermediate category.',
          27 => "Language",
          28 => "Spanish",
          29 => "Native",
          30 => "English",
          31 => "Intermediate",
          32 => "Interests",
          33 => "Reading",
          34 => "Swimming",
          35 => "Watching movies",
          36 => "Volunteer",
          37 => "Full Time Missioner",
          38 => "April 2011 - September 2013",
          39 => "National Student Event of Technological Innovation (ENEIT) 2016",
          40 => 'National stage in the IT of Pachuca from 22 to 25 November 2016 by the project "Enerluz".',
          41 => 'Certifications',
          42 => 'Regional stage in IT of Gustavo A. Madero in Mexico City, from 20 to 23 September 2016 by the projects “Enerluz” and "Autosilla”. Winner with “Enerluz” project.',

          43 => 'Full Stack Developer',
          44 => 'Grupo Salinas',
          45 => 'March 2019 - At present',
          46 => 'Java full stack developer in the company.',
          47 => 'Responsible for developing REST services and web portals for the management of the company.',
        ];
        $this->load->view('welcome_message', [
            'arr' => $arr
        ]);
    }

    /**
     * CV en español
     */
    public function spanish()
    {
        mail('pag753@hotmail.com', utf8_decode('Español'), $this->location());
        $arr = [
          0 =>  'Curriculum Vitae Pablo de Jesús',
          1 =>  'Desarrollador Full Stack',
          2 =>  'Resúmen',
          3 =>  'Ingeniero de software con un año de experiencia en la parte de backend y frontend utilizando la tecnología PHP y sus frameworks Codeigniter y Yii2. Participando en proyectos de gestión de información en bases de datos. Estoy dispuesto a aprender más y usar otras tecnologías sobre todo en JavaScript, Python y Ruby.',
          4 =>  'Experiencia Laboral',
          5 =>  'Desarrollador Full Stack',
          6 =>  'Septiembre de 2018 - Diciembre de 2018',
          7 =>  "Responsable del desarrollo full stack y la base de datos del módulo 'Instrumentación didáctica' para uso de todos los docentes del Tecnológico Nacional de México.",
          8 =>  "Logros:",
          9 =>  'Antes los docentes hacían la instrumentación didáctica en programas como "word", siguiendo normas y formatos específicos, pero ahora:',
          10 => "El llenado de datos es rápido, intuitivo y eficaz.",
          11 => "Al final de la captura los docentes obtienen la instrumentación didáctica en un PDF cumpliendo las normas y formatos requeridos y la confianza de que todo lo que escribieron y guardaron se encuentra en una base de datos.",
          12 => "El documento una vez generado puede ser consultado o editado en la plataforma cuando y donde ellos quieran desde un navegador web y con una conexión a internet.",
          13 => "Tecnologías usadas:",
          14 => "Desarrollador Web",
          15 => "Febero de 2018 - Julio de 2018",
          16 => "Responsable del desarrollo full stack y de base de datos de la plataforma para la gestión del proceso de lavandería en la empresa 'Lavados Especiales' en la ciudad de Puebla.",
          17 => "Descripción",
          18 => "Plataforma para automatizar de manera eficiente el control de los procesos de lavado y la administración de la empresa con la implementación del proyecto para obtener un mejor control interno más rápido y eficaz.",
          19 => "Habilidades y Herramientas",
          20 => "Lenguajes",
          21 => "Otros",
          22 => "Educación",
          23 => "Ingeniería en Sistemas Computacionales",
          24 => "Reconocimientos",
          25 => "Concurso estatal de programación",
          26 => 'En el <a href="http://www.itpuebla.edu.mx" target="_blank">IT de Puebla</a> el 22 de Abril de 2016. Ganador del tercer lugar en la categoría intermedia.',
          27 => "Idiomas",
          28 => "Español",
          29 => "Nativo",
          30 => "Inglés",
          31 => "Intermedio",
          32 => "Intereses",
          33 => "Leer",
          34 => "Nadar",
          35 => "Ver películas",
          36 => "Voluntariado",
          37 => "Misionero de Tiempo Completo",
          38 => "Abril de 2011 - Septiembre de 2013",
          39 => "Evento Nacional Estudiantil de Innovación Tecnológica (ENEIT) 2016",
          40 => 'Etapa nacional en el IT de Pachuca del 22 al 25 de noviembre de 2016 por el proyecto “Enerluz".',
          41 => 'Certificaciones',
          42 => 'Etapa regional en el IT de Gustavo A. Madero en la Ciudad de México, del 20 al 23 de septiembre de 2016 por los proyectos “Enerluz” y “Autosilla”. Ganador con “Enerluz”.',

          43 => 'Desarrollador Full Stack',
          44 => 'Grupo Salinas',
          45 => 'Marzo 2019 - actualmente',
          46 => 'Desarrollador full stack en Java en la empresa.',
          47 => 'Responsable de desarrollar servicios REST y portales web para la gestión de la empresa.',
        ];
        $this->load->view('welcome_message', [
            'arr' => $arr
        ]);
    }

    /**
     * CV PDF en inglés
     */
    public function pdf_english()
    {
        mail('pag753@hotmail.com', utf8_decode('PDF Inglés'), $this->location());
        $file = BASEPATH . "files/resume.pdf";
        ob_clean();
        header("Cache-Control: no-store");
        header("Expires: 0");
        header("Content-Type: application/pdf");
        header("Cache-Control: public");
        header('Content-Disposition: inline; filename="' . "cv.pdf" . '"');
        header("Content-Transfer-Encoding: binary");
        header('Accept-Ranges: bytes');
        readfile($file);
    }

    /**
     * CV PDF en español
     */
    public function pdf_spanish()
    {
        mail('pag753@hotmail.com', utf8_decode('PDF Español'), $this->location());
        $file = BASEPATH . "files/cv.pdf";
        ob_clean();
        header("Cache-Control: no-store");
        header("Expires: 0");
        header("Content-Type: application/pdf");
        header("Cache-Control: public");
        header('Content-Disposition: inline; filename="' . "cv.pdf" . '"');
        header("Content-Transfer-Encoding: binary");
        header('Accept-Ranges: bytes');
        readfile($file);
    }
}
