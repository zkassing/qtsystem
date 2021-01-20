class CodeMsg {
  code: number;
  message: string;
}

class ErrorCode {
  private readonly SUCCESS: CodeMsg = {code: 0, message: "请求成功"}
  private readonly FAIL: CodeMsg = {code: 1, message: '请求失败'}
}