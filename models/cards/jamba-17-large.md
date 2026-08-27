---
type: Model
title: Jamba 1.7 Large
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 398
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.67, r: 40.0, estimated: false }  # 전문 지식
  reasoning: { s: 13.2, z: -1.1, r: 33.6, estimated: false }  # 추론
  coding: { s: 22.1, z: -1.09, r: 33.7, estimated: false }  # 코딩
  agentic: { s: 8.1, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.7, z: -0.88, r: 36.9, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.7 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Jamba 1.7 Large

AI21 Labs · Open · Large(398B) · 컨텍스트 256k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 39.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.6 | -1.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 39.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.7 | -1.09 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.9 | -0.88 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
