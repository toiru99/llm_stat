---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.78
output_speed_tps: 168.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.1, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 80.5, z: 1.57, r: 73.6, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.67, r: 75.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 83.7, z: 1.3, r: 69.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 168.0 t/s · TTFT 31.98s · 1M ctx` · 가성비 46.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 73.6 | +1.57 | 실측 | [[critpt]] 46.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 75.0 | +1.67 | 실측 | [[gdpval]] 1681.0%×1.0, [[itbench]] 33.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
