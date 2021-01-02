class response {
  static success(data) {
    return {
      status: "success",
      data: data,
    };
  }

  static failed(data) {
    return {
      status: "failed",
      data: data,
    };
  }

  static error(message) {
    return {
      status: "error",
      message: message || "Internal Server Error",
    };
  }
}

module.exports = response;
