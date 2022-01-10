


function Validator(options) {
   var isEye = true
   var selectorRules = {};
   var iconEyes = document.querySelectorAll('.icon-eye')
   var formElements = document.querySelectorAll(options.form);
   elementParent = function(element) {
    return element.closest(options.formGroupSelector);
   }
   const inputPasswords = document.querySelectorAll("input[type='password']")
        iconEyes.forEach((iconeye, index) => {
            const inputPassword = inputPasswords[index]
            console.log(inputPassword)
            iconeye.onclick = function() {
                if(isEye) {
                    iconeye.setAttribute("name", "eye-outline"); 
                    inputPassword.setAttribute('type','text')
                    isEye = false
                }else{
                    iconeye.setAttribute("name", "eye-off-outline"); 
                    inputPassword.setAttribute('type','password')
                    isEye = true
                }
                // iconEye.setAttribute("name", "eye-off-outline");
            }
    }) 
        
   formElements.forEach((formElement) => {
       if(formElement) {
        
           // onsubmit click vào form( phải ở trong thẻ form)
          formElement.onsubmit = function(e) {
              e.preventDefault();
    
              var isFormValid = true;
             
              options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if(!isValid) {
                    isFormValid = false
                }
                
              });
              if (isFormValid) {
                if( typeof options.onsubmit === 'function'){
                  var enableInputs = formElement.querySelectorAll('[name]')
                  var formValues = Array.from(enableInputs).reduce(function(value, input) {
                      switch(input.type) {
                          case 'radio':
                          case 'checkbox':
                              if(input.matches(':checked')){
                                  value[input.name] = input.value;
                              }
                              break
                          default:
                              value[input.name] = input.value;
                      }
                      return value
                    }, {})
                    options.onsubmit(formValues)
                  }else{
                      formElement.onsubmit()
                  }      
              }
        
          }
        // xử lí validate , rule và lắng nghe sự kiện
           function validate(inputElement, rule) {
                       var errorElement = elementParent(inputElement).querySelector(options.errorSelector) 
                       var errorMessage
                       // lấy ra các rule của selector
                       var rules = selectorRules[rule.selector]
                       // lặp qua từng rule và kiểm tra
                       for(var i = 0; i < rules.length; i++){
                        // trường hợp là checkbox và radio
                        switch (inputElement.type) {
                             case 'radio':
                             case 'checkbox':
                                 errorMessage = rules[i](
                                         formElement.querySelector(rule.selector + ':checked')
                                 )
                                 break
                             default:
                                 errorMessage = rules[i](inputElement.value)
                        }
                        // nếu có lỗi thì dừng việc kiểm tra
                        // vd: nếu isrequied bị lỗi thì break còn không thì làm tiếp
                        if( errorMessage ) break;
                    }
                       if(errorMessage) {
                           errorElement.innerHTML = errorMessage
                           elementParent(inputElement).classList.add('invalid')
                       }else{
                        elementParent(inputElement).classList.remove('invalid')
                           errorElement.innerHTML = ""
                       }
                return !errorMessage 
           }
           // hàm kiểm tra khi đã gõ 
           function keyDownTest(inputElement) {
            var errorElement = elementParent(inputElement).querySelector(options.errorSelector) 
                if(inputElement.value !== '') {
                    errorElement.innerHTML = ''
                    elementParent(inputElement).classList.remove('invalid')
                }
                
           }
           options.rules.forEach((rule) => {
               //lưu lại các rule cho mỗi input
              if(Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test)
              }else {
                    selectorRules[rule.selector] = [rule.test]
              }
              
    
               var inputElement = formElement.querySelector(rule.selector)
    
               if(inputElement) {
                   // xử lí trường hợp blur
                   inputElement.onblur = function () {
                       validate(inputElement, rule)
                   }
                   // xử lí trường hợp bắt đầu gõ
                   inputElement.oninput = function() {
                       keyDownTest(inputElement)
                   }
                } 
                
           })
       }
   })
}
Validator.isRequired = function (selector, message) {
    return {
        selector,
        test(value) {
            if(typeof value === 'string') {
                return value.trim() ? undefined : message || 'vui lòng nhập trường này'
            }else{
                return value ? undefined : message || 'vui lòng nhập trường này'
            }
            // value.trim() ? undefined : 'vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector,
        test(value) {
            const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                 return re.test(value.trim()) ? undefined : message || `' ${value} ' chưa phải là email !`
             
        }
    }
}
Validator.minLength = function (selector, min, message) {
    const re = /[A-Z]/g;
    return {
        selector,
        test(value) {
            if(value.length >= min) {
                return undefined;
            }else{
                return message || `nhập tối thiểu ${min} ký tự`
            }
        }
    }
}
Validator.samePassword = function (selector, getComfirmValue, message) {
    return {
        selector,
        test(value) {
            return value === getComfirmValue() ? undefined : message || `giá trị nhập vào không chính xác`
        }
    }
}

