---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.175
output_speed_tps: 37.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.95, r: 64.3, estimated: false }  # 전문 지식
  reasoning: { s: 76.3, z: 1.8, r: 77.0, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 90.4, z: 1.96, r: 79.4, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.43, r: 71.5, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.02, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.84, r: 62.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 37.0 t/s · TTFT 2.66s · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.3 | +0.95 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 77.0 | +1.8 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 79.4 | +1.96 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 71.5 | +1.43 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 65.2 | +1.02 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
