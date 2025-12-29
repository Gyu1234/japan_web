# 📑 Japan Web Project (Full-Stack)

이 프로젝트는 **Spring Boot**와 **React**를 통합 관리하는 멀티 모듈 저장소입니다.

## 📂 프로젝트 구조

```text
japan_web (Root)
 ├── backend/          # Spring Boot (Java 17, Gradle)
 ├── frontend/         # React (JavaScript)
 └── .gitignore        # IDE 설정 및 라이브러리 제외 관리

```

## 🛠️ 초기 개발 환경 세팅 (공통)

### 1. IntelliJ 프로젝트 연결

* **Backend:** `backend/build.gradle` 파일을 우클릭하여 **'Add as Gradle Project'**를 선택합니다.
* **VCS 설정:** `Settings` > `Version Control` > `Directory Mappings`에서 하위 폴더의 개별 매핑을 모두 삭제하고, 루트(`japan_web`)만 등록합니다.

### 2. 브랜치 전략

* **브랜치 명칭:** 기본 개발 브랜치는 `dev`입니다.
* **작업 흐름:** 각자 기능별 브랜치(`feat/기능`)를 생성하여 작업 후, GitHub에서 `dev` 브랜치로 **Pull Request(PR)**를 생성합니다.
* **브랜치 보호:** `dev` 브랜치는 직접 `push`가 제한되며, 팀원의 승인이 있어야 `merge` 가능합니다.

---

## 🖥️ Backend (Spring Boot)

### 주요 설정

* **CORS 허용:** 프론트엔드(Port 3000)와의 통신을 위해 `WebConfig` 클래스에서 접근을 허용하고 있습니다.
* **API 확인:** `HelloController` 등을 통해 백엔드 정상 작동 여부를 확인할 수 있습니다.

### 실행 방법

```bash
cd backend
./gradlew bootRun

```

---

## 🌐 Frontend (React)

### 주요 설정

* **환경 변수:** `frontend/.env` 파일에 백엔드 API 주소가 설정되어 있습니다.
* **API 통신:** HTTP 통신을 위해 `axios` 라이브러리를 사용합니다.
* **Proxy:** `package.json`에 `http://localhost:8080` 프록시 설정이 되어 있어 CORS 에러를 방지합니다.

### 실행 방법

```bash
cd frontend
npm install   # 최초 1회 실행
npm start     #

```

---

## ⚠️ 주의사항 (필독)

1. **중첩 .git 삭제:** 리액트 설치 시 생성되는 `frontend/.git` 폴더는 이미 삭제되었습니다. 향후 재설치 시에도 내부 `.git` 폴더가 생성되지 않도록 주의해야 합니다.
2. **대소문자 구분:** Java 클래스명과 파일명은 대소문자가 일치해야 합니다. (예: `WebConfig.java`)
3. **.gitignore 관리:** `node_modules`, `.idea`, `build/` 등 빌드 결과물이나 설정 파일이 깃허브에 올라가지 않도록 주의합니다.

---

**도움이 더 필요하신가요?**
이제 이 파일을 커밋하고 푸시하시면 모든 세팅이 끝납니다. 팀원들에게 이 저장소 주소를 공유하고 개발을 시작하시면 됩니다! 더 궁금한 점이 있으면 언제든 물어봐 주세요.
