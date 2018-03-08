$(function(){
    //1.定义验证规则
    var dl = {
        message: '输入框不能为空',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: '账户名不能为空',
                validators: {
                    notEmpty: {
                        message: '账户名不能为空'
                    }
                }
            },
            password:{
            	message: '密码不能为空',
                validators:{
                	notEmpty: {
                        message: '密码不能为空'
                    }
                }
            },
        }
    };
	//2.验证
    $('#form1').bootstrapValidator(dl).on('success.form.bv', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url : "#",
            data: "#",
            success:function(data){
                //ajax成功时执行的代码
                alert(123)
            },
            error: function (data) {
            	
            }
        });
    }).on('error.form.bv',function(e){
    	//表单验证不通过时执行的代码
    });
	//重置
	$("#reset").on("click",function(){
		$("#form1").bootstrapValidator('resetForm');
	})
});
