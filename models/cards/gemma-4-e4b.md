---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
radar:
  knowledge: { s: 22.2, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 30.9, z: -1.27, r: 30.9, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -1.34, r: 29.9, estimated: false }  # 에이전트
  trust: { s: 81.2, z: 1.68, r: 75.2, estimated: false }  # 신뢰성
  multimodal: { s: 43.1, z: -1.63, r: 25.5, estimated: false }  # 멀티모달
  long_context: { s: 41.9, z: -1.04, r: 34.4, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.98, r: 35.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-08
timestamp: 2026-07-08T00:00:00Z
---

# Gemma 4 E4B

Google · Open · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 30.9 | -1.27 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 29.9 | -1.34 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 75.2 | +1.68 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | 25.5 | -1.63 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 34.4 | -1.04 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 35.3 | -0.98 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
