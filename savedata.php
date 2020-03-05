<?php

$amet = filter_input(INPUT_POST, 'amet');
$sum = filter_input(INPUT_POST, 'sum');

if (empty($amet) || empty($sum)) {
    exit(); 
}

$filename = 'data.json';

$data = json_decode(file_get_contents($filename), true);
$data[] = [
    'amet' => $amet,
    'sum' => $sum,
    'date' => date("d.m.Y H:i")
];

file_put_contents($filename, json_encode($data));