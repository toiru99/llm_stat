---
type: Model
title: MiMo-V2.5
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0462
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.0, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 44.3, z: 0.43, r: 56.5, estimated: false }  # 추론
  coding: { s: 61.6, z: 0.73, r: 61.0, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# MiMo-V2.5

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.112 · 출력 $0.224 · 혼합 $0.0462/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[gpqa-diamond]] 84.94949494949499%×0.4, [[humanitys-last-exam]] 27.201112140871196%×0.3 |
| 추론 | 56.5 | +0.43 | 실측 | [[critpt]] 3.7142857142857104%×1.0, [[gpqa-diamond]] 84.94949494949499%×1.0, [[humanitys-last-exam]] 27.201112140871196%×1.0 |
| 코딩 | 61.0 | +0.73 | 실측 | [[scicode]] 43.8657407407407%×1.0, [[terminal-bench]] 41.6666666666667%×0.5 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[gdpval]] 1004.3%×1.0, [[tau2-bench]] 90.6432748538012%×1.0, [[tau3-banking]] 8.65979381443299%×1.0, [[terminal-bench]] 41.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335260115607%×1.0 |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 67.14285714285711%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
