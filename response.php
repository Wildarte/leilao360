<?php
// Cabeçalhos para indicar que estamos enviando um JSON
header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

// Array de exemplo que será convertido em JSON
$data = array(
    'results' => [
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ],
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ],
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ],
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ],
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ],
        [
            'title' => 'Título',
            'address' => [
                'street' => 'Marechal Deodoro',
                'number' => 208,
                'city' => 'São Paulo',
                'neighborhood' => 'Jabaquara',
                'uf' => 'SP'
            ],
            'type' => 'Apartamento',
            'leiloes' => [
                [
                    'value' => '370.716,83',
                    'date' => '14/08/2023',
                    'hour' => '14:42'
                ],
                [
                    'value' => '312.434,01',
                    'date' => '16/08/2023',
                    'hour' => '14:42'
                ]

            ],
            'leiloeiro' => [
                'name' => 'José Antônio Carlos',
                'description' => 'Leiloeiro público do estado de São Paulo',
                'url_img' => 'http://localhost/sites/leilao360/assets/img/user.png'
            ],
            'link_imovel' => 'http://localhost/sites/leilao360/detalhes_imovel.html',
            'category' => 'judicial'
        ]
    ]
);

// Convertendo o array em JSON
$json = json_encode($data);

// Enviando o JSON como resposta
echo $json;
?>
