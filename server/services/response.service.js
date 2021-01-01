class response {
    static success(data) {
        return {
            status: "success",
            data: data
          };
    }

    static failed(data){
        return {
            status: "fail",
            data: data
          };
    }

    static error(message){
        return {
            status: "error",
            message: message
          };
    }


}

module.exports = response;