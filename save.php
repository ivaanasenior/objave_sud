<?php
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $title = $data['title'];
    $option = $data['option'];
    $text = $data['text'];

    $content = "Naslov: " . $title . "\nOpcija: " . $option . "\nTekst: " . $text;

    file_put_contents('data.txt', $content . "\n\n", FILE_APPEND);
    http_response_code(200);
} else {
    http_response_code(400);
}
?>