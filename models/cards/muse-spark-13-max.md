---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.78
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.75, r: 76.2, estimated: false }  # 전문 지식
  reasoning: { s: 74.8, z: 1.55, r: 73.2, estimated: false }  # 추론
  coding: { s: 85.4, z: 1.6, r: 74.0, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 83.3, z: 1.31, r: 69.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 47.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.2 | +1.75 | 실측 | [[gpqa-diamond]] 93.5%×0.4, [[humanitys-last-exam]] 48.7%×0.3 |
| 추론 | 73.2 | +1.55 | 실측 | [[critpt]] 48.0%×1.0, [[gpqa-diamond]] 93.5%×1.0, [[humanitys-last-exam]] 48.7%×1.0 |
| 코딩 | 74.0 | +1.6 | 실측 | [[scicode]] 58.8%×1.0 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[gdpval]] 1681.0%×1.0, [[itbench]] 33.2%×1.0, [[tau3-banking]] 50.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 69.7 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
