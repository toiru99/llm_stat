---
type: Model
title: Muse Spark
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.5, z: 1.43, r: 71.5, estimated: false }  # 추론
  coding: { s: 69.0, z: 1.05, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 61.5, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.2, z: 0.9, r: 63.4, estimated: false }  # 멀티모달
  long_context: { s: 87.9, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 89.6, z: 1.58, r: 73.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Muse Spark

Meta · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[gpqa-diamond]] 88.4%×0.4, [[humanitys-last-exam]] 40.7%×0.3 |
| 추론 | 71.5 | +1.43 | 실측 | [[gpqa-diamond]] 88.4%×1.0, [[humanitys-last-exam]] 40.7%×1.0 |
| 코딩 | 65.8 | +1.05 | 실측 | [[terminal-bench]] 45.5%×0.5 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[gdpval]] 1006.0%×1.0, [[terminal-bench]] 45.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.4 | +0.9 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 73.8 | +1.58 | 실측 | [[ifbench]] 75.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
