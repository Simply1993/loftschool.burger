<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$housing = $_POST['housing'];
$flat = $_POST['flat'];
$stage = $_POST['stage'];
$comment = $_POST['comment'];

$money = $_POST['money'];
if (isset($money)) {
	$money = ($money == 'rest') ? 'Потребуется сдача' : 'Оплата по карте';
}

$call = $_POST['call']; // 1 или null
$call = isset($call) ? 'Нет' : 'Да';

$mail_message = '
<html>
<head>
    <title>Заказ на доставку</title>
</head>
<body>
    <h2>Заказ на доставку</h2>
    <ul>
        <li>Имя:' . $name . '</li>
        <li>Телефон: ' . $phone . '</li>';
(!empty($street)) ? $mail_message .= '<li>Улица: ' . $street . '</li>' : '';
(!empty($house)) ? $mail_message .= '<li>Дом: ' . $house . '</li>' : '';
(!empty($housing)) ? $mail_message .= '<li>Корпус: ' . $housing . '</li>' : '';
(!empty($flat)) ? $mail_message .= '<li>Квартира: ' . $flat . '</li>' : '';
(!empty($stage)) ? $mail_message .= '<li>Этаж: ' . $stage . '</li>' : '';
(!empty($money)) ? $mail_message .= '<li>Оплата: ' . $money . '</li>' : '';
(!empty($comment)) ? $mail_message .= '<li>Комментарий к заказу: ' . $comment . '</li>' : '';
$mail_message .= '<li>Нужно ли перезванивать клиенту: ' . $call . '</li>
	</ul>
</body>
</html>';

$headers = "From: Администратор сайта <admin@loftschoolburger.com>\r\n".
					 "MIME-Version: 1.0" . "\r\n" .
					 "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('scherbacov1993evgeniy@yandex.ru', 'Заказ на доставку', $mail_message, $headers);

$data = [];

if ($mail) {
	$data['status'] = "OK";
	$data['msg'] = "Сообщение отправлено";
} else {
	$data['status'] = "ERROR";
	$data['msg'] = "На сервере произошла ошибка";
}

echo json_encode($data);