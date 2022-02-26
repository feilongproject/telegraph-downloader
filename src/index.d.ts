



interface messageRece {
    "update_id": number,
    "message": {
        "message_id": number,
        "from": {
            "id": number,
            "is_bot": boolean,
            "first_name": string,
            "username": string,
            "language_code": "zh-hans"
        },
        "chat": {
            "id": number,
            "first_name": string,
            "username": string,
            "type": string
        },
        "date": number,//时间戳，以秒计
        "forward_from"?: {//转发消息的详情
            "id": number,
            "is_bot": boolean,
            "first_name": string,
            "username": string,
            "language_code": "zh-hans"
        },
        "forward_date"?: number,//被转发的消息的发送时间
        "text": string,
        "entities"?: {//信息实体详情
            "offset": number,//偏移量
            "length": number,//长度
            "type": "bot_command" | "code" | "hashtag" | "text_link" | "url",
            "url"?: string//当前仅在text_link中出现，未发现其余情况
        }[]
    }
}