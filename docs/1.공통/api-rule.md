---
title: API 규칙
---

# API 규칙

> RESTful 원칙을 준수하여 API를 설계하고, 통일된 형식으로 요청/응답을 처리합니다.  
> 이 문서는 백엔드·프론트엔드 협업을 위한 공통 규약을 정의합니다.

---

## 📌 1. API Naming 규칙

### ✔ 기본 규칙

- 리소스는 **항상 복수형**으로 작성합니다.
  - 예: `/api/users`, `/api/posts`, `/api/items`
- CRUD는 URL이 아니라 **HTTP Method로 표현**합니다.

| Method | 의미      | 예시              |
| ------ | --------- | ----------------- |
| GET    | 조회      | `/api/posts`      |
| POST   | 생성      | `/api/posts`      |
| PUT    | 전체 수정 | `/api/posts/{id}` |
| PATCH  | 일부 수정 | `/api/posts/{id}` |
| DELETE | 삭제      | `/api/posts/{id}` |

### ✔ 관계 표현

```
/api/users/{userId}/posts
/api/posts/{postId}/comments
```

### ✔ 검색 / 필터

```
/api/items?keyword=apple&category=FOOD&page=0&size=20&sort=createdAt&dir=desc
```

---

## 📌 2. HTTP Status Code 규칙

| 코드                          | 상황                       |
| ----------------------------- | -------------------------- |
| **200 OK**                    | 정상 처리                  |
| **201 Created**               | 리소스 생성 성공           |
| **400 Bad Request**           | 잘못된 요청(파라미터 오류) |
| **401 Unauthorized**          | 인증 필요 (토큰 만료 포함) |
| **403 Forbidden**             | 권한 없음                  |
| **404 Not Found**             | 리소스 없음                |
| **409 Conflict**              | 중복/충돌 상황             |
| **500 Internal Server Error** | 서버 오류                  |

---

## 📌 3. 요청(Request) 규칙

### ✔ JSON 기반 요청

모든 POST/PUT/PATCH 요청은 JSON 포맷을 사용합니다.

### ✔ 인증이 필요한 요청

`Authorization: Bearer {accessToken}` 헤더 사용

예시:

```
Authorization: Bearer eyJhbGciOi...
```

---

## 📌 4. 응답(Response) 규칙

### ✔ 공통 응답 포맷

```json
{
  "success": true,
  "data": {},
  "message": "요청이 성공적으로 처리되었습니다."
}
```

### ✔ 오류 응답

```json
{
  "success": false,
  "errorCode": "USER_NOT_FOUND",
  "message": "해당 유저를 찾을 수 없습니다."
}
```

---

## 📌 5. 에러 코드 규칙(Error Code)

프로젝트 전반에서 사용하는 공통 에러코드 규칙입니다.

예시:

| 에러 코드        | 설명               |
| ---------------- | ------------------ |
| USER_NOT_FOUND   | 존재하지 않는 유저 |
| INVALID_PASSWORD | 비밀번호 불일치    |
| TOKEN_EXPIRED    | 토큰 만료          |
| DUPLICATE_EMAIL  | 이메일 중복        |

| ITEM
