<?php
	$phone = $_POST["mobile"];
    $code = $_POST["code"];
    $time = time();
    if($phone == '13512345678' && $code == '123456'){
        $data['errno'] = 0;
        $data['msg'] = '账号未注册';
        $data['token'] = $time;
    }
    if($phone == '13612345678' && $code == '123456'){
        $data['errno'] = 1;
        $data['msg'] = '登录成功';
        $data['token'] = $time;
    } 
    if($code != '123456'){
        $data['errno'] = 2;
        $data['msg'] = '验证码错误';
        $data['token'] = $time;
    }
    
	echo json_encode($data);