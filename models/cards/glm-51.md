---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.845
output_speed_tps: 59.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 50.7, z: 0.38, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.2, z: 0.67, r: 60.0, estimated: false }  # 추론
  coding: { s: 63.9, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 61.6, z: 0.87, r: 63.1, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.02, r: 80.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.49, r: 72.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GLM-5.1

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.28 · 출력 $4.07 · 혼합 $0.845/1M · 59.0 t/s · TTFT 1.76s · 200k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.38 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 60.0 | +0.67 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 63.1 | +0.87 | 실측 | [[gdpval]] 31.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 80.3 | +2.02 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 72.3 | +1.49 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
