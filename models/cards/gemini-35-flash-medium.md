---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 1.31
output_speed_tps: 189.0
context_window: 1000000
radar:
  knowledge: { s: 85.2, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 69.4, z: 1.17, r: 67.5, estimated: false }  # 추론
  coding: { s: 79.5, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.09, r: 66.3, estimated: false }  # 에이전트
  trust: { s: 45.0, z: 0.4, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.26, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 0.91, r: 63.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.31/1M · 189.0 t/s · TTFT 15.52s · 1M ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 67.5 | +1.17 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 66.3 | +1.09 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 55.9 | +0.4 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 68.8 | +1.26 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
