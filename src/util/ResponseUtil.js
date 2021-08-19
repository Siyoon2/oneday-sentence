
export default {
    mockupResultSuccess(mockSuccess, hasJwtToken = false) {
        let result = {
            resultCode: "SUCCESS",
            data: mockSuccess,
            msg: ''
        }
        if(hasJwtToken) {
            result.jwtToken = "jwtHello";
        }

        return result;
    }
}