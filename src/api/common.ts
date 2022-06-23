import request from "@/utils/axios";

export function test1(params: object) {
    return request({
        method: "POST",
        url: "/test",
        headers: {
            "Content-Type": "application/json",
        },
        data: params,
    });
}
export function test2(data: object) {
    return request.post("/test1", data, {
        headers: {
            "Content-Type": "application/form-data",
        },
    });
}
export function test3(params: object) {
    return request({
        method: "GET",
        url: "/test3",
        params,
    });
}