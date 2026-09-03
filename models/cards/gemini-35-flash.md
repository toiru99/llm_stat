---
type: Model
title: Gemini 3.5 Flash
creator: Google
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 1.305
output_speed_tps: 189.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.3, z: 1.95, r: 79.3, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.73, r: 76.0, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 75.4, z: 1.47, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.59, r: 58.8, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.32, r: 69.8, estimated: false }  # 멀티모달
  long_context: { s: 97.6, z: 1.44, r: 71.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.55, r: 73.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 189.0 t/s · TTFT 16.2s · 1M ctx` · 가성비 39.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.3 | +1.95 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 76.0 | +1.73 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 72.1 | +1.47 | 실측 | [[apex-agents]] 47.0%×1.0, [[gdpval]] 42.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 32.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 69.8 | +1.32 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 71.6 | +1.44 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 73.3 | +1.55 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
