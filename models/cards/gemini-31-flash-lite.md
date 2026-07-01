---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.22
output_speed_tps: 309.0
context_window: 1000000
radar:
  knowledge: { s: 59.5, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.2, z: -0.3, r: 45.6, estimated: false }  # 추론
  coding: { s: 59.4, z: -0.05, r: 49.2, estimated: false }  # 코딩
  agentic: { s: 23.3, z: -1.1, r: 33.4, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.61, r: 40.9, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.6, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 0.98, r: 64.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.22/1M · 309.0 t/s · TTFT 5.16s · 1M ctx` · 가성비 113.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 45.6 | -0.3 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 49.2 | -0.05 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 33.4 | -1.1 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 7.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 59.1 | +0.6 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 64.8 | +0.98 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
