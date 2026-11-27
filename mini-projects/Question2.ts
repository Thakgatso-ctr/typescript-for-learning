type ApiTestResult<T> =
    | {
          ok: true;
          status: number;
          data: T;
      }
    | {
          ok: false;
          status: number;
          errorCode: string;
          message: string;
      };

      function assertApiSuccess<T>(
    result: ApiTestResult<T>
): T {
    if (!result.ok) {
        throw new Error(
            `Request failed with status ${result.status}: ${result.errorCode}`
        );
    }

    return result.data;
}