    /*
        2017-12-28
        规则验证
        By Wginit
    */ 

var Verifi = {
    /**
		*验证手机号格式
		*@param value   要验证的手机号
	*/ 
	
	checkPhone: function(value){ 

		return /^1[34578]\d{9}$/.test(value);
		// true
	},

	/**
		*验证固定电话格式
		*@param tel   要验证的固定电话号码
	*/ 
	checkTel: function(tel){
		return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel)
		// true
	},

	/**
		*验证密码格式
		*@param pwd   要验证的密码
	*/ 
	checkPwd: function(pwd){
		return /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/i.test(pwd);
	},
	
	/**
		*验证邮箱格式
		*@param email   要验证的邮箱地址
	*/ 
	checkEmail: function(email){
		return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)
	},
	/**
		*验证身份证格式
		*@param idcard   要验证的身份证号码
	*/ 
	checkId: function(idcard){
		return /\\d{17}[[0-9],0-9xX]$/.test(idcard)
	}
}

export default Verifi;