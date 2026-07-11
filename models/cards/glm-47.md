---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.71
output_speed_tps: 133.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 47.6, z: 0.75, r: 61.3, estimated: false }  # 추론
  coding: { s: 66.2, z: 0.85, r: 62.8, estimated: false }  # 코딩
  agentic: { s: 57.0, z: 0.81, r: 62.2, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GLM-4.7

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.71/1M · 133.0 t/s · TTFT 0.84s · 200k ctx` · 가성비 47.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 61.3 | +0.75 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 62.8 | +0.85 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 62.2 | +0.81 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
