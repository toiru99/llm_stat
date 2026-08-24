---
type: Model
title: Muse Spark
creator: Meta
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.7, z: 1.82, r: 77.3, estimated: false }  # 전문 지식
  reasoning: { s: 66.7, z: 1.51, r: 72.7, estimated: false }  # 추론
  coding: { s: 80.5, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 69.6, z: 1.25, r: 68.8, estimated: false }  # 에이전트
  trust: { s: 16.3, z: -0.51, r: 42.4, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.05, r: 65.8, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.26, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.46, r: 71.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Muse Spark

Meta · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.3 | +1.82 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 72.7 | +1.51 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 68.8 | +1.25 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 42.4 | -0.51 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 65.8 | +1.05 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 69.0 | +1.26 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
