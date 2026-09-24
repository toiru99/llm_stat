---
type: Model
title: MiMo-V2-Pro
creator: Xiaomi
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 46.0, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.59, r: 73.8, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.08, r: 81.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.11, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# MiMo-V2-Pro

Xiaomi · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 73.8 | +1.59 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 81.2 | +2.08 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
