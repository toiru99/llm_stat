---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 1.31
output_speed_tps: 167.0
context_window: 1000000
radar:
  knowledge: { s: 85.2, z: 1.53, r: 72.9, estimated: false }  # 전문 지식
  reasoning: { s: 69.4, z: 1.15, r: 67.2, estimated: false }  # 추론
  coding: { s: 79.5, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.12, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 45.0, z: 0.32, r: 54.8, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 0.86, r: 62.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.31/1M · 167.0 t/s · TTFT 18.06s · 1M ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.9 | +1.53 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 67.2 | +1.15 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 66.7 | +1.12 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 54.8 | +0.32 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
