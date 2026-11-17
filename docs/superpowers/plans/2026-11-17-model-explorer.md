# Model Explorer v2 Implementation Plan

> Implement inline with superpowers:executing-plans. User approved the recommended design; audience is all users.

**Goal:** v5 실측·업무별 탐색·비용 해석을 제공하는 모델 선택 화면.
**Architecture:** 현재 Playwright 수집과 Python 카드 생성에 구조화된 모델 속성을 전달하고, 단일 HTML에 선택 도구를 추가한다. 레거시 레이더는 유지한다.
**Tech Stack:** Node/Playwright, Python 3.11 stdlib, vanilla HTML/CSS/JS.
**Spec:** docs/superpowers/specs/2026-11-17-model-explorer-design.md

## Global Constraints
공식 지수 재계산 금지, 결측 null, id 보존, 평가 버전 보존, 추정은 추천 제외, API 비용과 구독료 구분.

## Review Focus
- id만 있는 새 모델과 중첩 release를 오인하지 않기.
- 지수 없는 모델에 0을 넣지 않기.
- 비용0·미측정·모두 동점·극단값에서 Pareto/정렬 정상.
- 좁은 화면과 악성 모델명 HTML 삽입 방지.
- 레거시 레이더의 추정값을 v5 근거로 읽지 않기.

## Task 1: 데이터 계약
- [x] capture_models와 extract_attrs 회귀 테스트: id/release·cost/time·scores·현 성능.
- [x] 수집기에 버전/구조화 속성 보존 및 필드 검증 추가.
- [x] build_cards에 v5 원시 점수/비용/시간/id 전달, 실제 수집·빌드.

## Task 2: 선택 화면
- [x] 업무별 정렬과 Pareto·비용 계산 테스트 실패 확인.
- [x] 새 기본 탐색 화면, 원시 근거, 날짜·버전·결측 안내.
- [x] 기존 레이더/비교 유지 및 모바일·UI 테스트.

## Task 3: 검증과 인계
- [x] 전체 Node/Python 테스트 및 실제 수집·빌드 검증.
- [x] 설계 대비 구현·보류 범위 문서화 및 로컬 미리보기.
- [x] 공유 지식 저장소 세션·프로젝트·인덱스 저장 및 check.py 검증.

## 결과와 보류

- Node61/Python11 통과. 390px 모바일 가로 넘침0, 정렬·비용·다운로드·기존 레이더 테스트 포함. 실제 최신 수집·빌드 완료.
- 추가 JSON 비교 저장 구현. URL 공유·같은 버전 변화 추적·자체 한국어 평가·사용성 조사·운영 배포는 후속.
- Ruling: DOM의527행 대신 구조화된742개 id를 모집단으로 사용. 추론 변형을 이름으로 합치지 않음.
- Ruling: 8축 신뢰성의 구형 Omniscience 키는 새 v1.1 점수로 조용히 대체하지 않음. 레거시 화면에서 해당 축 미측정. 새 근거 표는 v1.1 실측 사용.
