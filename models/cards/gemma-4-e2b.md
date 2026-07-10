---
type: Model
title: Gemma 4 E2B
creator: Google
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
radar:
  knowledge: { s: 16.3, z: -1.77, r: 23.4, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -1.51, r: 27.4, estimated: false }  # 추론
  coding: { s: 24.8, z: -1.73, r: 24.0, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -1.65, r: 25.2, estimated: false }  # 에이전트
  trust: { s: 78.8, z: 1.66, r: 74.8, estimated: false }  # 신뢰성
  multimodal: { s: 32.8, z: -2.57, r: 11.4, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -2.02, r: 19.7, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -1.53, r: 27.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Gemma 4 E2B

Google · Open · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.4 | -1.77 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 27.4 | -1.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 24.0 | -1.73 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 25.2 | -1.65 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 74.8 | +1.66 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 11.4 | -2.57 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 19.7 | -2.02 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 27.0 | -1.53 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
