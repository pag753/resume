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
        $device = $_GET['device'];
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
        return "IP=$ip, device=$device" . file_get_contents("https://ipinfo.io/$ip/json");
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
        //mail('pag753@hotmail.com', utf8_decode('Inglés'), $this->location());
        $this->load->view('welcome_message');
    }

    public function telegram() {
        $tipo = $_GET['tipo'];
        switch ($tipo) {
            case 1:
                $this->sendMessage(('Compa, vieron tu CV: Inglés'. "    " . $this->location()), $device);
                //mail('pag753@hotmail.com', utf8_decode('Inglés'), $this->location());
                break;
            case 2:
                $this->sendMessage(('Compa, vieron tu CV: Español'. "    " . $this->location()), $device);
                //mail('pag753@hotmail.com', utf8_decode('Español'), $this->location());
                break;
            case 3:
                $this->sendMessage(('Compa, vieron tu CV: PDF Inglés'. "    " . $this->location()), $device);
                //mail('pag753@hotmail.com', utf8_decode('PDF Inglés'), $this->location());
                break;
            case 4:
                $this->sendMessage(('Compa, vieron tu CV: PDF Español'. "    " . $this->location()), $device);
                //mail('pag753@hotmail.com', utf8_decode('PDF Español'), $this->location());
                break;
        }
    }

    private function sendMessage($messaggio, $device) {
        $messaggio['device'] = $device;
        try {
            $data = "eyAiY2hhdF9pZCI6ICIxMTQzNzM3MzA3IiwidGtuIjogIjE4MDA3OTMwOTA6QUFHZVJ3YTNNMDVUcXVwRTFlN1dKUW5vNHpvTjA0NDhxTjgifQ";
            $decocedData = base64_decode($data);
            $jsonData = json_decode($decocedData);
            $url = "https://api.telegram.org/bot" . $jsonData->tkn . "/sendMessage?chat_id=" . $jsonData->chat_id;
            $url = $url . "&text=" . urlencode($messaggio);
            $ch = curl_init();
            $optArray = array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true
            );
            curl_setopt_array($ch, $optArray);
            $result = curl_exec($ch);
            curl_close($ch);
            //mail('pag753@hotmail.com', utf8_decode('Respuesta'), $result);
        } catch (Exception $e) {
            //mail('pag753@hotmail.com', utf8_decode('Respuesta'), $e->getMessage());
        }
    }
}
