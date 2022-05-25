<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $oder = $_POST['order'];

    $content = $name . '  оформил заказ ' . $order.'.' . 'Номер телефона:' . $phone . 'Электронная почта:' . $email;

    $success = mail('levinnoble@wine.com', 'Заказ на сайте Le Vin Noble', $content);
    if($success){
        http_response_code(200);
        echo 'Заказ отправлен!';
    } else {
        http_response_code(500);
        echo 'Заказ не отправлен';
    }

} else {
    http_response_code(403);
    echo 'Такой запрос не поддерживается';
}