export const request = (
    dataAPI: string,
    obj: any
): Promise<any> => {
    // method = 'GET',
    // data?: object | string,
    // headers?: object,
    // otherProps?: any,
    let {method="GET", data={}, headers=[], otherProps} = obj
    return new Promise((resolve, reject): void => {
        if (otherProps && otherProps.timeout) {
            setTimeout((): void => {
                reject(new Error('timeout'));
            }, otherProps.timeout);
        }
        if (method === 'GET') {
            let queryString = Object.entries(data).map(v => {
                return `${v[0]}=${v[1]}`
            }).join('&')
            dataAPI += `?${queryString}`
        }
        headers = {
            ...headers,
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `${sessionStorage.getItem('token') || ''}`
        }
        fetch(dataAPI, {
            method,
            headers,
            ...(method === "GET" ? {} : { body: JSON.stringify(data) }),
            ...otherProps,
        })
            .then((response: Response): any => {
                return response
                switch (response.status) {
                    case 200:
                    case 201:
                    case 202:
                        return response.json();
                    case 204:
                        if (method === 'DELETE') {
                            return {
                                success: true,
                            };
                        } else {
                            return {
                                __success: false,
                                code: response.status,
                            };
                        }
                    case 400:
                    case 401:
                    case 403:
                    case 404:
                    case 406:
                    case 410:
                    case 422:
                    case 500:
                        return response
                            .json()
                            .then((res: object): any => {
                                return {
                                    __success: false,
                                    code: response.status,
                                    data: res,
                                };
                            })
                            .catch((): object => {
                                return {
                                    __success: false,
                                    code: response.status,
                                };
                            });
                    default:
                        return null;
                }
            })
            .then((json: any): void => {
                if (json && json.__success !== false) {
                    resolve(json);
                } else {
                    delete json.__success;
                    reject(json);
                }
            })
            .catch((err: Error): void => {
                reject(err);
            });
    });
}